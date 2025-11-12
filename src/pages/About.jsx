import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Skills from '../components/Skills';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
       style={{  minHeight: '100vh' }}
    >
      <Container maxWidth="md" sx={{ pt: 8, pb: 6 }}>
        {/* About Me Header */}
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{ color: '#ffffff', fontWeight: 700 }}
        >
          About Me
        </Typography>

        {/* Updated Paragraph */}
        <Typography
          variant="body1"
          paragraph
          sx={{  lineHeight: 1.8 }}
        >
          I’m Anusha , a frontend developer with over 4 years of experience crafting scalable,
          responsive web applications. I’ve worked with companies like Kemper Insurance and TCS (for
          Cardinal Health), building full-stack features using React, Angular, and Spring Boot. I specialize
          in turning complex ideas into smooth, user-friendly interfaces using modern frameworks and design systems.
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ color:'#ffffff', lineHeight: 1.8 }}
        >
          My personal projects — including a full-stack Finance Tracker and a Restaurant Management System — showcase
          my strengths in React, Node.js, MongoDB, and UI libraries like Material UI and Bootstrap.
          I’m always curious and currently exploring .NET and Blazor to broaden my backend expertise.
        </Typography>

        {/* Skills Header */}
        <Typography
          variant="h6"
          sx={{ color: '#ffffff', fontWeight: 600, mt: 6, mb: 2 }}
        >
          Core Skills
        </Typography>

        {/* Skills Grid with Logos */}
        <Skills />
      </Container>
    </motion.div>
  );
}
