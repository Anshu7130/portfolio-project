import React from 'react';
import { Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const tileVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// Skill list with icon URLs
const skills = [
  { name: 'React', icon: 'react' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Angular', icon: 'angular' },
  { name: 'HTML5', icon: 'html5' },
  { name: 'CSS3', icon: 'css3' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Material UI', icon: 'materialui' },
  { name: 'Git', icon: 'git' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'MongoDB', icon: 'mongodb' },
];

export default function Skills() {
  return (
    <Grid container spacing={2} justifyContent="center" sx={{ mt: 6, px: 4 }}>
      {skills.map((skill, index) => (
        <Grid item xs={6} sm={4} md={3} key={skill.name}>
          <motion.div
            custom={index}
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Paper
              elevation={1}
              sx={{
                textAlign: 'center',
                py: 2,
                bgcolor: '#fff8f3',
                border: '1px solid #b87333',
                color: 'rgb(51, 92, 103)',
              }}
            >
              <img
                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                alt={skill.name}
                style={{ width: 36, height: 36, marginBottom: 8 }}
              />
              <div style={{ fontWeight: 500 }}>{skill.name}</div>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
}
