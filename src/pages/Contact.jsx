import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
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
          bgcolor: '#FAF0E6',
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ color: 'rgb(51, 92, 103)', fontWeight: 700 }}
        >
          Contact Me
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Name"
            margin="normal"
            required
            variant="outlined"
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            required
            type="email"
            variant="outlined"
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
            required
            variant="outlined"
            sx={{ bgcolor: 'white' }}
          />
          <Button
					 variant="contained"
					 size="large"
					 fullWidth
					 sx={{
						 mt: 3,
						 bgcolor: '#b87333',
						 color: 'white',
						 fontWeight: 600,
						 boxShadow: '0 0 0 rgba(0, 0, 0, 0)', // no shadow initially
						 transition: 'all 0.3s ease',
						 '&:hover': {
							 bgcolor: '#b87333',
							 boxShadow: '0 0 15px #b87333',
						 },
					 }}
				 >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
		</motion.div>
  );
}
