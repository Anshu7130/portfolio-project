import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "#ffffff" }}>
        Anusha Bandarapu
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item.path} component={NavLink} to={item.path}>
            <ListItemText
              primary={item.label}
              sx={{ color: "#ffffff", textAlign: "center" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ color: "#ffffff", fontWeight: 700 }}
          >
            Anusha Bandarapu
          </Typography>

          {/* Desktop View */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={NavLink}
                to={item.path}
                sx={{
                  mx: 1,
                  fontWeight: 500,
                  color: "#ffffff",
                  "&.active": {
                    color: "#b87333",
                    borderBottom: "2px solid #b87333",
                    borderRadius: 0,
                  },
                  "&:hover": {
                    color: "#b87333",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile View */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(8px)",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
