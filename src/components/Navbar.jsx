import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import womenIcon from "../assets/womann.jpg";
import { useSelector } from "react-redux";
import { deepOrange } from "@mui/material/colors";
import { navbarStyle } from "../styles/globalStyle";
import useAuthCall from "../hooks/useAuthCall";

function Navbar() {
  const navigate = useNavigate();
  const { currentUser, image } = useSelector((state) => state.auth);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { logout } = useAuthCall();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={navbarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar alt="chef-icon" src={womenIcon} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              m: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "'Alkatra', cursive",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.7rem",
            }}
            onClick={() => navigate("/")}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/");
                }}
              >
                <Typography textAlign="center" variant="button">
                  DashBoard
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/new-blog");
                }}
              >
                <Typography textAlign="center" variant="button">
                  New Blog
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseNavMenu();
                  navigate("/about");
                }}
              >
                <Typography textAlign="center" variant="button">
                  About
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Dashboard
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/new-blog");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              New Blog
            </Button>
            <Button
              onClick={() => {
                handleCloseNavMenu();
                navigate("/about");
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <Typography>{currentUser}</Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    src={image}
                    sx={{ bgcolor: deepOrange[500] }}
                  ></Avatar>
                  {/* <AccountCircleIcon
                    sx={{ color: "white", fontSize: "2rem" }}
                  /> */}
                </IconButton>
              </Tooltip>
            </Box>

            <Menu
              sx={{ mt: "45px", fontSize: "1rem" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {currentUser && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/profile");
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
              )}

              {!currentUser && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/register");
                  }}
                >
                  <Typography textAlign="center">Register</Typography>
                </MenuItem>
              )}
              {!currentUser && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate("/login");
                  }}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}

              {currentUser && (
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    logout();
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
