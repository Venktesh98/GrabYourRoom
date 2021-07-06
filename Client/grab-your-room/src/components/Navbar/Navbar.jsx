import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import { useStyles } from "./Navbar.style";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
// import inage from "../../assets/images/Logo.JPG"

function Navbar() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleRemoveId = () => {
    localStorage.removeItem("userId");
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              {/* <img
              src={process.env.PUBLIC_URL + "/Logo1.png"}
              style={{ width: "200px", height:"80px" }}
              alt=""
            /> */}
              GrabYourRoom
            </Link>
          </Typography>

          <Hidden mdDown>
            <div className={classes.appBarContent} onClick={handleRemoveId}>
              <Link to="/" className={classes.navLinks}>
                Home
              </Link>
            </div>
            <div className={classes.appBarContent}>
              <Link to="/about" className={classes.navLinks}>
                About Us
              </Link>
            </div>
            <div className={classes.appBarContent}>Contact Us</div>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="temporary"
        anchor={"left"}
        open={openDrawer}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <IconButton
          onClick={handleDrawerToggle}
          className={classes.closeMenuButton}
        >
          <CloseIcon />
        </IconButton>
        <Box className={classes.links}>
          <div className={classes.navbarDrawerLinks}>
            <Link
              to="/"
              className={`${classes.navLinks} ${classes.drawerLinks}`}
            >
              Home
            </Link>
          </div>
          <div className={classes.navbarDrawerLinks}>
            <Link
              to="/about"
              className={`${classes.navLinks} ${classes.drawerLinks}`}
            >
              About Us
            </Link>
          </div>
          <div className={classes.navbarDrawerLinks}>
            <Link
              to=""
              className={`${classes.navLinks} ${classes.drawerLinks}`}
            >
              Contact Us
            </Link>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default Navbar;
