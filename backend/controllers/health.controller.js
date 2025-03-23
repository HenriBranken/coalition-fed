import dotenv from "dotenv";
import process from "node:process";
import {encodeBasicAuth, summarizePeople, transformPersonData} from "../utils.js";
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

    // Get the list of people for the left pane
    const people = summarizePeople(data);

    // Transform the data of Jessica Taylor
    const jessica = transformPersonData(data);

    // Construct the "final" result to be returned
    const result = {
      jessica,
      people
    };

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