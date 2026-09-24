const express = require("express");
const db = require("../database");

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email and message are required."
    });
  }

  db.run(
    `INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)`,
    [name.trim(), email.trim(), message.trim()],
    function (err) {
      if (err) {
        console.error(err);
        return res.status(500).json({
          success: false,
          message: "Could not save your message."
        });
      }

      res.status(201).json({
        success: true,
        message: "Message received.",
        id: this.lastID
      });
    }
  );
});

module.exports = router;
