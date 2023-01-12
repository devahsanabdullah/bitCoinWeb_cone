import React from "react";
import { Grid, Box, Typography, Button, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerbox, paybutton, footericon, FooterGr } from "./Style.";

export default function Footer() {
  return (
    <div>
      <Grid
        container
        sx={{
          marginTop: "8%",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Grid item xs={10} md={3} sx={{ margin: "0px auto", zIndex: "100" }}>
          <Typography
            variant="h3"
            sx={{ color: "chocolate", textAlign: "center" }}
          >
            BITCOIN
          </Typography>
        </Grid>
        <Grid item xs={10} md={3} sx={{ margin: "0px auto", zIndex: "100" }}>
          <Typography variant="h5">QUICK LINKS</Typography>
          <Typography variant="p" component="div">
            Home
          </Typography>
          <Typography variant="p" component="div">
            Services
          </Typography>
          <Typography variant="p" component="div">
            Feature
          </Typography>
          <Typography variant="p" component="div">
            Roadmap
          </Typography>
          <Typography variant="p" component="div">
            Faqs
          </Typography>
        </Grid>
        <Grid item xs={10} md={3} sx={{ margin: "0px auto", zIndex: "100" }}>
          <Typography variant="h5">RESOURCES</Typography>
          <Typography variant="p" component="div">
            Download White Paper
          </Typography>
          <Typography variant="p" component="div">
            Smart Token
          </Typography>
          <Typography variant="p" component="div">
            Blockchain expolar
          </Typography>
          <Typography variant="p" component="div">
            Bitcoin
          </Typography>
          <Typography variant="p" component="div">
            Intract
          </Typography>
        </Grid>
        <Grid item xs={10} md={3} sx={{ margin: "0px auto", zIndex: "100" }}>
          <Typography variant="h5">
            We Accept The Following Payment Methods
          </Typography>
          <Box sx={footerbox}>
            <Box sx={paybutton}>PayPal</Box>
            <Box sx={paybutton}>Visa</Box>
          </Box>
        </Grid>
        <Grid xs={12} md={12} sx={footericon}>
          <Box sx={{ width: { md: "auto", xs: "100%" } }}>
            <Typography sx={{ color: "white" }}>
              &copy; 2022 Allrights Reserved
            </Typography>
          </Box>
          <Box sx={{ width: { md: "auto", xs: "100%" } }}>
            <IconButton>
              <FacebookIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <WhatsAppIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon sx={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Grid>
        <Box sx={FooterGr}></Box>
        <div id="div"></div>
      </Grid>
    </div>
  );
}
