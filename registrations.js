const express = require("express");
const db = require("../database");

const router = express.Router();

router.post("/", (req, res) => {
  const {
    fullName,
    email,
    phone = "",
    ageRange = "",
    interests = "",
    dietaryRequirements = "",
    referralSource = ""
  } = req.body;

  if (!fullName || !email) {
    return res.status(400).json({
      success: false,
      message: "Full name and email are required."
    });
  }

  const sql = `
    INSERT INTO registrations
    (full_name, email, phone, age_range, interests, dietary_requirements, referral_source)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(
    sql,
    [
      fullName.trim(),
      email.trim(),
      phone.trim(),
      ageRange.trim(),
      interests.trim(),
      dietaryRequirements.trim(),
      referralSource.trim()
    ],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Could not save registration."
        });
      }

      res.status(201).json({
        success: true,
        message: "Registration received.",
        id: this.lastID
      });
    }
  );
});

router.get("/", (req, res) => {
  db.all(
    "SELECT * FROM registrations ORDER BY created_at DESC",
    [],
    (err, rows) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Could not retrieve registrations."
        });
      }

      res.json({ success: true, registrations: rows });
    }
  );
});

module.exports = router;
