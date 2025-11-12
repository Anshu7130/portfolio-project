import { Container, Typography, Box, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Side - Developer Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <img
                src="/assets/developer.png"
                alt="Developer Illustration"
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: "50%", // ✅ Rounded corners
                  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)", // ✅ Soft shadow
                  backgroundColor: "rgba(255, 255, 255, 0.05)", // ✅ Light transparent bg (optional)
                  padding: "10px", // ✅ Soft inner gap (optional)
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0, 0, 0, 0.3)";
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Text */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                } /* Center on mobile, left on desktop */,
                height: "100%",
                textAlign: { xs: "center", md: "left" },
                maxWidth: "500px" /* Control width so text is neat */,
                mx: {
                  xs: "auto",
                  md: "0",
                } /* Center on mobile, align left on desktop */,
              }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ color: "#ffffff", fontWeight: 700 }}
              >
                Hi, I'm Anusha 
              </Typography>

              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#cccccc", fontWeight: 500 }}
              >
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React & Angular Specialist",
                    "UI Engineer",
                    "Web Performance Enthusiast",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </Typography>

              <Typography variant="body1" sx={{ color: "#cccccc", mt: 2 }}>
                Passionate Front-End Developer with 4+ years of experience
                building scalable, responsive web applications. Skilled in
                creating user-centric UI solutions with React.js, Angular, and
                modern web technologies.
              </Typography>

              {/* Buttons */}
              <Box sx={{ mt: 4 }}>
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: "rgb(51, 92, 103)",
                      color: "#fff",
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                      mx: 1,
                      "&:hover": {
                        bgcolor: "#b87333",
                      },
                    }}
                  >
                    View Projects
                  </Button>
                </Link>

                <Button
                  variant="outlined"
                  size="large"
                  href="/assets/Anusha.Resume.pdf"
                  target="_blank"
                  sx={{
                    borderColor: "#b87333",
                    color: "#b87333",
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    mx: 1,
                    "&:hover": {
                      bgcolor: "#fff0ea",
                      borderColor: "#b87333",
                    },
                  }}
                >
                  View Resume
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  );
}
