import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material';

const projects = [
  {
    title: 'Personal Finance Tracker',
    description: 'Track income, expenses, and trends with charts and filters. Full-stack app with authentication and MongoDB.',
    image: '/assets/personalFinanceImage.png',
    live: '#',
    github: '#',
  },
  {
    title: 'Lumina Dine',
    description: 'Restaurant management app with elegant table, menu, and order features in a golden-lit theme.',
    image: '/assets/luminaDine.png',
    live: '#',
    github: '#',
  },
  {
    title: 'Ammarce eCommerce Platform',
    description: 'Modern online store using Next.js and Bootstrap with dynamic product listings, cart functionality and responsive layout.',
    image: '/assets/ammarceImage.png',
    live: '#',
    github: '#',
  },
  {
    title: 'Treasured Tales',
    description: 'Responsive memory-sharing app with contributor submissions, image uploads, and a creator dashboard for managing tributes.',
    image: '/assets/treasuredTales.png',
    live: '#',
    github: '#',
  },
];

function Projects() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }} id="projects">
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                alt={`${project.title} screenshot`}
                sx={{
                  height: 200,
                  objectFit: 'cover',
                  backgroundColor: '#f5f5f5',
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-around', mt: 'auto' }}>
                <Button size="small" href={project.live} target="_blank">
                  Live Demo
                </Button>
                <Button size="small" href={project.github} target="_blank">
                  Frontend
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
