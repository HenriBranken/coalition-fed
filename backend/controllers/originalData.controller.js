const dotenv = require("dotenv");
const process = require("process");
const axios = require("axios");

const {
  encodeBasicAuth
} = require("../utils.js");

dotenv.config();

// Sensitive Credential Information.
const AUTH_USERNAME = process.env.AUTH_USERNAME;
const AUTH_PASSWORD = process.env.AUTH_PASSWORD;
const API_ENDPOINT = process.env.API_ENDPOINT;

// Call the API Endpoint, and wrangle the data.
const getOriginalData = async (_, res) => { 
  try {

    const token = encodeBasicAuth(AUTH_USERNAME, AUTH_PASSWORD);
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'Authorization': `Basic ${token}`,
        'Content-Type': 'application/json'
      }
    })
    // Extract the `data` from the API response.
    const data = response.data;

    // Send the response to the Client from the Server
    res.status(200).json(data);

  } catch (error) {
    console.error("Error fetching the data:", error);
    res.status(500).json({ message: "Error fetching the data", error: error.message });
  }
}

module.exports = getOriginalData;