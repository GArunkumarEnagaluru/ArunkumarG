import React from "react";
import { Typography, Box, TextField, Button, Stack } from "@mui/material";

const Contact = () => {
  return (
    <Box my={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Contact Me
      </Typography>
      <Stack spacing={2}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" multiline rows={4} fullWidth />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default Contact;
