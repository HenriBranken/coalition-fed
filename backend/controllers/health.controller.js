import dotenv from "dotenv";
import process from "node:process";
import {encodeBasicAuth, summarizePeople, transformPersonData, generatePersonSummary} from "../utils.js";
import axios from "axios";

dotenv.config();

// Sensitive Credential Information.
const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
const API_ENDPOINT = process.env.API_ENDPOINT;
const CACHE_DURATION = process.env.CACHE_DURATION;  // 1 hour

// Cache-Related
let cachedResult = null;
let cacheTimestamp = null;

// Call the API Endpoint, and wrangle the data.
const getHealth = async (_, res) => { 
  try {
    const now = Date.now();

    // if "cached" and "not expired", return the cached result:
    if (cachedResult && cacheTimestamp && (now - cacheTimestamp < CACHE_DURATION)) { 
      return res.status(200).json(cachedResult);
    }

    const token = encodeBasicAuth(AUTH_USERNAME, AUTH_PASSWORD);
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
      }
    })
    // Extract the `data` from the API response.
    const data = response.data;

    // Get the list of `people` for PatientList.jsx
    const people = summarizePeople(data);

    // Transform the data of Jessica Taylor
    const jessica = transformPersonData(data);

    // `latest_stats` for StatRow.jsx
    const latest_stats = jessica.latest_stats;

    // `systolic` and `diastolic` for BPChartLatestStats.jsx
    const systolic = jessica.latest_stats.systolic;
    const diastolic = jessica.latest_stats.diastolic;

    // `diagnosis_history` for BPChart.jsx
    const diagnosis_history = jessica.diagnosis_history;

    // `diagnostic_list` for DiagTableRows.jsx
    const diagnostic_list = jessica.diagnostic_list;

    // `lab_results` for LabList.jsx
    const lab_results = jessica.lab_results;

    // `person_summary` for InfoList.jsx
    const person_summary = generatePersonSummary(jessica);

    // `selected_patient` for PatientList.jsx
    const selected_patient = "Jessica Taylor";

    // Construct the "final" result to be returned
    const result = {
      people,
      latest_stats,
      systolic,
      diastolic,
      diagnosis_history,
      diagnostic_list,
      person_summary,
      lab_results,
      selected_patient
    };

    console.log(result);

    // Store in Cache, and set the Cache Timestamp:
    cachedResult = result;
    cacheTimestamp = now;

    // Send the response to the Client from the Server
    res.status(200).json(result);

  } catch (error) {
    console.error("Error fetching the data:", error);
    res.status(500).json({ message: "Error fetching the data", error: error.message });
  }
}

export default getHealth;