const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Enable CORS (allow all origins)
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse JSON
app.use(express.json());

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// GET /overview
app.get("/overview", async (req, res) => {
  await delay(5000)
  res.json({
    status: "average",
    currentIndex: 40,
    benchmark: {
      diff: 34,
      metric: "Below Benchmark",
    },
    score: 50,
  });
});

// GET /insights
app.get("/insights", (req, res) => {
  res.json({
    insightBlocks: [
      {
        title: "Implementation Velocity",
        description: "Key initiatives are 4-6 weeks behind planned milestones",
        value: 42,
        trend: "down",
      },
      {
        title: "Resource Allocation",
        description:
          "70% of strategic budget deployed to tactical firefighting",
        value: 70,
        trend: "down",
      },
      {
        title: "Cross-functional Alignment",
        description: "Leadership consensus on priorities remains fragmented",
        value: 38,
        trend: "stable",
      },
    ],
    chart: [65, 62, 58, 54, 52, 54, 51, 48],
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
