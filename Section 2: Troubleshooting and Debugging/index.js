const axios = require("axios");

async function fetchData() {
  try {
    const response = await axios.get("https://api.example.com/data");

    // Validate if response data contains a valid structure
    if (!response.data || typeof response.data !== "object") {
      throw new Error("Invalid or empty response data");
    }

    return response.data;
  } catch (error) {
    // Catching and logging any errors from axios or validation
    console.error("Error fetching data:", error.message || error);
    throw error; // Rethrow to propagate the error
  }
}

fetchData()
  .then((data) => {
    // Validate if the key exists in the data before accessing it
    if (data && data.key) {
      console.log(data.key);
    } else {
      console.log("Key not found in the data");
    }
  })
  .catch((error) => {
    console.error(error);
  });
