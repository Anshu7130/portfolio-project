import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";

const projects = [
  {
    title: "Personal Finance Tracker",
    description:
      "Track income, expenses, and trends with charts and filters. Full-stack app with authentication and MongoDB.",
    image: "/assets/personalFinanceImage.png",
    TechStack:
      "React, Material-UI, Farmer Motion, Node.js, Express.js, MongoDB, JWT",
    live: "https://personal-finance-frontend-git-main-anshus-projects-9d9cd8f8.vercel.app/",
    github: "https://github.com/Anshu7130/personal-finance-frontend.git",
    imageHeight: { xs: 150, sm: 200, md: 250, lg: 250, xl: 250 },
  },
  {
    title: "Lumina Dine",
    description:
      "Restaurant management app with elegant table, menu, and order features in a golden-lit theme.",
    image: "/assets/luminaDine.png",
    TechStack: "React, PHP, Bootstrap, REST API, MySQL, JavaScript,",
    live: "#",
    github: "#",
    imageHeight: { xs: 150, sm: 200, md: 250, lg: 250, xl: 250 },
  },
  {
    title: "News Magazine",
    description:
      "A responsive news magazine platform showcasing trending articles across tech, politics, and entertainment with a user-friendly layout.",
    image: "/assets/Newsmaz.png",
    TechStack: "React, Bootstrap, REST API, JavaScript, HTML5, CSS3",
    live: "#",
    github: "https://github.com/Anshu7130/NewsMaz.git",
    imageHeight: { xs: 150, sm: 200, md: 250, lg: 250, xl: 250 },
  },
  {
    title: "Treasured Tales",
    description:
      "Responsive memory-sharing app with contributor submissions, image uploads, and a creator dashboard for managing tributes.",
    TechStack: "Angular, Angular Material, Node.js, Express.js",
    image: "/assets/treasuredTales.png",
    live: "#",
    github: "https://github.com/Anshu7130/Treasured-Tales.git",
    imageHeight: { xs: 150, sm: 200, md: 250, lg: 250, xl: 250 },
  },
];

function Projects() {
  return (
    <Container maxWidth="xl" sx={{ py: 6 }} id="projects">
      <Typography variant="h2" align="center" gutterBottom sx={{ mb: 4 }}>
        Projects
      </Typography>
      <Grid
        container
        spacing={20}
        justifyContent="center"
        alignContent="center"
      >
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                maxWidth: 400, // Prevent cards from stretching too wide on large screens
                margin: "0 auto", // Center the card within the grid item
                boxShadow: 3,
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={`${project.title} screenshot`}
                sx={{
                  height: project.imageHeight,
                  objectFit: "cover",
                  backgroundColor: "#f5f5f5",
                  aspectRatio:
                    project.title === "Ammarce eCommerce Platform"
                      ? "2/3"
                      : "4/3",
                  borderTopLeftRadius: 2,
                  borderTopRightRadius: 2,
                }}
              />
              <CardContent
                sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, bgcolor: "#f9f9f9" }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  {project.title}
                </Typography>
                <div>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ wordWrap: "break-word" }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ wordWrap: "break-word" }}
                  >
                    <Typography color="text.danger">Tech Stack:</Typography>{" "}
                    {project.TechStack}
                  </Typography>
                </div>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "space-between",
                  p: 2,
                  bgcolor: "#f0f0f0",
                }}
              >
                <Button
                  size="small"
                  href={project.live}
                  target="_blank"
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  Live Demo
                </Button>
                <Button
                  size="small"
                  href={project.github}
                  target="_blank"
                  variant="outlined"
                  color="secondary"
                  sx={{ textTransform: "none" }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
