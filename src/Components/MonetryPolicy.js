import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../App.css";
import CampaignIcon from "@mui/icons-material/Campaign";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function MonetryPolicy() {
  return (
    <div id='policy'>
      <Grid container sx={{position:'relative',margin:'10% auto'}}>
        <Box sx={{display:{md:'block',xs:'none'}}} className="backBox"></Box>
        <Grid item xs={12} md={12} className='gridItem'>
          <Box className="m-10">
            <Box className="text-center text-white mt-8 mb-5">
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", margin: "10px 0px" }}
              >
                Monetry Policy Tools
              </Typography>
              <Typography variant="p" component="div">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                blandit vitae sapien in rhoncus. Proin consectetur orci a
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
              }}
            >
              <Box
                className="cardbox"
                sx={{ width: { md: "40%", xs: "100%" } }}
              >
                <Box
                  className="p-4 rounded-full w-max"
                  sx={{
                    background:
                      "linear-gradient(234deg, rgba(221,114,8,0.958420868347339) 9%, rgba(55,52,48,1) 78%)",
                  }}
                >
                  <MenuIcon />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ margin: "10px 0px" }}>
                    Stacking
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{
                      margin: "5px 0px",
                      textAlign: { md: "center", xs: "justify" },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    blandit vitae sapien in rhoncus. Proin consectetur orci a
                  </Typography>
                  <Typography variant="h6" sx={{ color: "chocolate" }}>
                    Explaine More <ArrowRightAltIcon />
                  </Typography>
                </Box>
              </Box>

              <Box
                className="cardbox"
                sx={{
                  width: { md: "40%", xs: "100%" },
                  marginTop: { md: "0px", xs: "20px" },
                }}
              >
                <Box
                  className="p-4 rounded-full w-max"
                  sx={{
                    background:
                      "linear-gradient(234deg, rgba(221,114,8,0.958420868347339) 9%, rgba(55,52,48,1) 78%)",
                  }}
                >
                  <CampaignIcon />
                </Box>
                <Box>
                  <Typography variant="h5" sx={{ margin: "10px 0px" }}>
                    Bonding
                  </Typography>
                  <Typography
                    variant="p"
                    component="div"
                    sx={{ margin: "5px 0px" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    blandit vitae sapien in rhoncus. Proin consectetur orci a
                  </Typography>
                  <Typography variant="h6" sx={{ color: "chocolate" }}>
                    Explaine More <ArrowRightAltIcon />
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  fontSize: { md: "20px", xs: "16px" },
                  textAlign: "center",
                  margin: { md: "2% auto", xs: "5% auto" },
                }}
              >
                BONDING ACCOMPLISHERS THE PROCESS OF ACCUMLATING VALUE INTO THE
                ADIRI TREASURE
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
