// Import necessary modules from MSW
const { setupServer } = require("msw/node");
const fs = require("fs");
const axios = require("axios");
const { handlers } = require("./mocks/handlers");

const server = setupServer(...handlers);

// Start the mock server
server.listen();

async function fetchData() {
  try {
    // Make a request to the mocked API
    const response = await axios.get("https://api.example.com/data");
    // Filter only high-priority deals before logging to file
    const highPriorityDeals = response.data.filter((deal) => deal.priority === "high");
    // Logs each high-priority deal to a JSON file.
    const filePath = "high-priority-deals.json";
    logDealsToFile(highPriorityDeals, filePath);
  } catch (error) {
    console.error("Error:", error);
  }
}

function logDealsToFile(deals, filePath) {
  // Read existing data or create an empty array if the file does not exist
  let existingData = [];
  if (fs.existsSync(filePath)) {
    existingData = JSON.parse(fs.readFileSync(filePath));
  }

  // Add new deals to the existing data
  existingData.push(...deals);

  // Write updated data to the file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
  console.log("Deals logged to file:", filePath);
}

// Call the function to fetch data
fetchData();
