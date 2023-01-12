import React from "react";
import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import { useState } from "react";
export default function Header() {
  let [state, setstate] = useState(false);
  return (
    <div>
      <Grid
        container
        className="items-center text-slate-50  justify-between "
        sx={{ padding: { md: "20px 30px", xs: "10px" } }}
      >
        <Grid item xs={2} md={4} className="items-center">
          <Typography
            variant="h4"
            sx={{ color: "chocolate", fontWeight: "bold" }}
          >
            BITCOIN
          </Typography>
        </Grid>
        <Grid item xs={10} md={6} sx={{ display: { md: "block", xs: "none" } }}>
          <Box className="flex justify-between items-center flex-wrap">
            <Typography variant="p" className="cursor-pointer">
              <Link
                to="section"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                HOME
              </Link>
            </Typography>
            <Typography variant="p" className="cursor-pointer">
              <Link
                to="feature"
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                FEATURES
              </Link>
            </Typography>
            <Typography variant="p" className="cursor-pointer">
              <Link
                to="policy"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
              >
                POLICIES
              </Link>
            </Typography>
            <Typography variant="p" className="cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                ABOUT
              </Link>
            </Typography>
            <Typography variant="p" className="cursor-pointer">
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                FAQs
              </Link>
            </Typography>
            <Typography variant="p" className="cursor-pointer">
              LOG-IN
            </Typography>
            <Divider
              sx={{ backgroundColor: "white" }}
              orientation="vertical"
              flexItem
            />
            <Button
              disableRipple
              variant="contained"
              sx={{
                padding: "8px 12px",
                backgroundColor: "chocolate",
                color: "white",
                borderRadius: "10px",
              }}
            >
              REGISTER
            </Button>
          </Box>
        </Grid>
        <Grid
          xs={6}
          md={6}
          sx={{ display: { md: "none", xs: "block", textAlign: "right" } }}
        >
          <IconButton
            onClick={() => {
              setstate(!state);
            }}
          >
            <MenuIcon sx={{ fontSize: "30px", color: "white" }} />
          </IconButton>
        </Grid>
      </Grid>
      {state ? (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
            background: "rgba(0,0,0,0.4)",
          }}
          className="duration-600"
        >
          <Box
            sx={{
              width: "300px",
              backgroundColor: "black",
              position: "relative",
              textAlign: "center",
              color: "white",
              zIndex: "10000000",
              padding: "30px 5px",
            }}
            className="h-screen"
          >
            <IconButton
              onClick={() => {
                setstate(!state);
              }}
              sx={{
                position: "absolute",
                top: "20px",
                right: "-25px",
                backgroundColor: "chocolate",
              }}
            >
              <CloseIcon sx={{ color: "white", fontSize: "40px" }} />
            </IconButton>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              <Link
                to="section"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              <Link
                to="feature"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                FEATURE
              </Link>
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              <Link
                to="policy"
                spy={true}
                smooth={true}
                offset={-1000}
                duration={500}
              >
                POLICIES
              </Link>
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                ABOUT
              </Link>
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              <Link
                to="faqs"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                FAQs
              </Link>
            </Typography>
            <Typography
              variant="p"
              component="div"
              className="hover:bg-gray-500 p-5"
              sx={{ margin: "25px auto", cursor: "pointer" }}
            >
              LOG-IN
            </Typography>
          </Box>
        </Box>
      ) : null}
    </div>
  );
}
