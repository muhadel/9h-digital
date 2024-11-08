const { http, HttpResponse } = require("msw");

const handlers = [
  http.get("https://api.example.com/data", (res) => {
    const mockedDeals = new Map([
      [1, { id: 1, name: "Deal 1", priority: "high", value: 10000 }],
      [2, { id: 1, name: "Deal 2", priority: "high", value: 10000 }],
      [3, { id: 3, name: "Deal 3", priority: "medium", value: 50000 }],
      [4, { id: 3, name: "Deal 3", priority: "high", value: 20000 }]
    ]);

    return HttpResponse.json(Array.from(mockedDeals.values()));
  })
];

module.exports = { handlers };
