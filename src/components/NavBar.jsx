import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        marginBottom: "2rem",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              flexGrow: 4,
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 800,
              letterSpacing: "1.2",
              color: "#323c46",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              APP LOGO
            </Link>
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuItem>
                <Typography textAlign="center" sx={{ color: "text.primary" }}>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Dashboard
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" sx={{ color: "text.primary" }}>
                  <Link
                    to="/create"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Create Ad
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: "1.2",
              color: "#323c46",
              textDecoration: "none",
            }}
          >
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              APP LOGO
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#323c46",
                display: "block",
                fontWeight: "bold",
              }}
              component={Link}
              to="/dashboard"
            >
              Dashboard
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "#323c46",
                display: "block",
                fontWeight: "bold",
              }}
              component={Link}
              to="/create"
            >
              Create Ad
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
