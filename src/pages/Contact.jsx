import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from "@mui/material";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Container maxWidth="sm" sx={{ pt: 8, pb: 6 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            bgcolor: "#FAF0E6",
            borderRadius: "16px",
            boxShadow: "0 0 15px rgba(184, 115, 51, 0.15)",
          }}
        >
          <EmailIcon
            sx={{
              fontSize: 40,
              color: "#b87333",
              display: "block",
              mx: "auto",
              mb: 1,
            }}
          />

          <Typography
            variant="h4"
            align="center"
            sx={{
              color: "rgb(51, 92, 103)",
              fontWeight: 700,
              mb: 1,
              fontSize: { xs: "1.8rem", sm: "2rem" },
            }}
          >
            Let's Connect
          </Typography>

          <Typography
            variant="subtitle1"
            align="center"
            sx={{ color: "#666", mb: 4 }}
          >
            Have a project, question, or just want to say hi? Drop me a message
            below.
          </Typography>

          {/* ✅ Must be real <form> tag with correct Netlify setup */}
          <form
            name="contact"
            method="POST"
            action="/thank-you.html"
            data-netlify="true"
          >
            {/* Hidden input for Netlify to recognize the form name */}
            <input type="hidden" name="form-name" value="contact" />

            <TextField
              name="name"
              fullWidth
              label="Name"
              margin="normal"
              required
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />

            <TextField
              name="email"
              fullWidth
              label="Email"
              margin="normal"
              required
              type="email"
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />

            <TextField
              name="message"
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              required
              variant="outlined"
              sx={{ bgcolor: "white", borderRadius: 1 }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#b87333",
                color: "#fff",
                fontWeight: 600,
                paddingY: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#a55f2d",
                  boxShadow: "0 0 12px #b87333",
                },
              }}
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Container>
    </motion.div>
  );
}
