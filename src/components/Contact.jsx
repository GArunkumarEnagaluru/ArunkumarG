import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    try {
      await axios.post("/api/send-email", { name, email, message });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again.", err);
    }
  };

  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      <Stack spacing={2}>
        {success && <Alert severity="success">Message sent successfully!</Alert>}
        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
        />
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
