const express = require("express");
const path = require("path");

const registrationRoutes = require("./routes/registrations");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/registrations", registrationRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (req, res) => {
  res.json({ success: true, status: "CITYMOMVIBESSA API is running." });
});

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`CITYMOMVIBESSA running at http://localhost:${PORT}`);
});
