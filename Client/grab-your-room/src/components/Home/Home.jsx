import {
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./Home.style";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Home() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const handleDrawerToggle = () => {
    setDrawer(!drawer);
  };

  return (
    <React.Fragment>
      <div className={classes.homeImage}>
        <nav>
          <div className={classes.mainContent}>
            <Hidden mdUp>
              <MenuIcon
                onClick={handleDrawerToggle}
                className={classes.menuIcon}
              />
            </Hidden>
            <Hidden mdDown>
              <div className={classes.leftPane}>
                <Link to="/">Home</Link>
                <Link to="/search-room">Rooms</Link>
                <a>Amenities</a>
              </div>
            </Hidden>
            <div className={classes.logoDiv}>
              <a href="">Grab Your Room</a>
            </div>
            <Hidden mdDown>
              <div className={classes.rightPane}>
                <a href="">Gallery</a>
                <a href="">Blog</a>
                <a href="">Contact</a>
              </div>
            </Hidden>
          </div>
        </nav>
      </div>
      <div className="boxContentDiv">
        <Box className={classes.BoxContent}>
          <Typography variant="h1" className={classes.boxContentText}>
            Luxury
          </Typography>
          <Typography variant="h4" className={classes.boxContentText}>
            Hotels & Resort
          </Typography>

          <Link to="/search-room" className={classes.bookNowContent}>
            <Button
              variant="contained"
              color="primary"
              className={classes.bookNow}
              endIcon={<ArrowRightAltIcon></ArrowRightAltIcon>}
            >
              Book Now
            </Button>
          </Link>
        </Box>
      </div>

      {/* Drawer */}
      <div>
        <Drawer
          open={drawer}
          onClose={handleDrawerToggle}
          anchor="left"
          // transitionDuration={{ enter: 1000, exit: 30000 }}
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
          <div className={classes.mainDrawerContent}>
            <div>
              <Link to="/" className={classes.navLinks}>
                Home
              </Link>
            </div>
            <div>
              <Link to="/rooms-listing" className={classes.navLinks}>
                Rooms
              </Link>
            </div>
            <div>
              <Link to="#" className={classes.navLinks}>
                Amenities
              </Link>
            </div>
            <div>
              <Link to="#" className={classes.navLinks}>
                Gallery
              </Link>
            </div>
            <div>
              <Link to="#" className={classes.navLinks}>
                Blog
              </Link>
            </div>
            <div>
              <Link to="#" className={classes.navLinks}>
                Contact
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
}

export default Home;
