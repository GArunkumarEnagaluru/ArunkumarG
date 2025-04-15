import React, { useState, useEffect } from "react"; // Add useEffect import
import {
  Typography,
  Box,
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import api from '../api/axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let timer;
    if (success || error) {
      timer = setTimeout(() => {
        setSuccess(false);
        setError("");
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [success, error]);

  const validate = (fieldValues = formData) => {
    let temp = { ...errors };

    if ('name' in fieldValues)
      temp.name = fieldValues.name ? "" : "Name is required";

    if ('email' in fieldValues)
      temp.email = fieldValues.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fieldValues.email)
          ? ""
          : "Invalid email address"
        : "Email is required";

    if ('message' in fieldValues)
      temp.message = fieldValues.message ? "" : "Message is required";

    setErrors({ ...temp });

    return Object.values(temp).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
    if (touched[name]) validate({ [name]: value });
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validate({ [name]: formData[name] });
  };

  const handleSubmit = async () => {
    if (!validate()) {
      setError("All fields are required.");
      return;
    }

    try {
      await api.post("/api/send-email", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({});
    } catch (err) {
      console.log(err);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <Box my={4} sx={{ maxWidth: 650 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>

      <Stack spacing={2}>
        {success && (
          <Alert 
            severity="success"
            onClose={() => setSuccess(false)}
          >
            Message sent successfully!
          </Alert>
        )}
        {error && (
          <Alert 
            severity="error"
            onClose={() => setError("")}
          >
            {error}
          </Alert>
        )}

        {/* Rest of your form fields remain the same */}
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          required
          error={Boolean(errors.name)}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          fullWidth
          required
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          multiline
          rows={4}
          fullWidth
          required
          error={Boolean(errors.message)}
          helperText={errors.message}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
