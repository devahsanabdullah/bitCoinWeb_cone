import React from "react";
import { Grid, Box, Typography, IconButton, Divider } from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HandshakeIcon from "@mui/icons-material/Handshake";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import {detailSection} from './Style..js'
export default function DetailSection() {
  return (
    <div id='feature'>
      <Grid
        container
        sx={{ textAlign: { md: "none", xs: "center" }, margin: "5% auto" }}
      >
        <Grid item xs={12} md={12} >
          <Box
            sx={{
              position: "relative",
              color: "white",
              display: "flex",
              justifyContent: "space-evenly",
              width:{md:'80%',xs:'100%'},
              margin:'0px auto',
            }}
          >
            <Box sx={detailSection}>
              <IconButton
                sx={{
                  padding: "20px",
                  margin: "0px 10px",
                  backgroundColor: "gray",
                }}
              >
                <ApartmentIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Box>
                <Typography variant="h6" component="div">
                  $30B
                </Typography>
                <Typography variant="p" component="div">
                  Digital Currency Exchange
                </Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" />

            <Box sx={detailSection}>
              <IconButton
                sx={{
                  padding: "20px",
                  margin: "0px 10px",
                  backgroundColor: "gray",
                }}
              >
                <HandshakeIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Box>
                <Typography variant="h6" component="div">
                  $10M
                </Typography>
                <Typography variant="p" component="div">
                  Trusted Wallet Investor
                </Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" />

            <Box sx={detailSection}>
              <IconButton
                sx={{
                  padding: "20px",
                  margin: "0px 10px",
                  backgroundColor: "gray",
                }}
              >
                <SettingsSuggestIcon sx={{ fontSize: "30px" }} />
              </IconButton>
              <Box>
                <Typography variant="h6" component="div">
                  200+
                </Typography>
                <Typography variant="p" component="div">
                  Countries Supported
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
