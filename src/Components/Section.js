import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import { AttentionSeeker, Slide } from "react-awesome-reveal";
export default function Section() {
  return (
    <div id='section'>
      <Grid
        container
        sx={{
          alignItems: "center",
          margin: "5% auto",
          justifyContent: "space-evenly",
        }}
      >
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Box
            sx={{
              width: { md: "100%", xs: "80%" },
              color: "rgb(240,240,240)",
              margin: "20px auto",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <Slide direction="left">
              <Typography
                variant="h4"
                component="div"
                sx={{
                  margin: "10px 0px",
                  fontSize: { md: "30px", xs: "20px", fontWeight: "bold" },
                }}
              >
                UNLOCK THE WORLD OF DECENTRALIZED RESERVE CURRENCY WITH ADIRI
                DAO
              </Typography>
            </Slide>
            <Slide direction="left">
              <Typography
                variant="p"
                component="div"
                sx={{
                  margin: "20px 0px",
                  fontSize: { md: "18px", xs: "16px" },
                  textAlign: { md: "justify", xs: "center" },
                  paddingRight: { md: "20px", xs: "0px" },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                blandit vitae sapien in rhoncus. Proin consectetur orci a
                vestibulum pharetra. Vivamus ac fringilla justo. Donec
                scelerisque vitae nisi vitae rhoncus. Nam metus magna, euismod
                et risus et, aliquet imperdiet urna. Aliquam ac elementum est.
                Donec dolor lorem, gravida sollicitudin dolor placerat,
                elementum consequat mi.
              </Typography>
            </Slide>
            <Slide direction="left">
              <Button
                sx={{
                  backgroundColor: "chocolate",
                  padding: "5px 10px",
                  margin: "20px 0px",
                  borderRadius: "20px",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Start Now
              </Button>
            </Slide>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            background:
              "radial-gradient(circle, rgba(161,92,8,0.9) 26%, rgba(255,254,252,0) 70%)",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <AttentionSeeker effect="bounce">
              <img
                src="bitcoin.png"
                alt="bitcoin"
                style={{
                  margin: "10px auto",
                  zIndex: "1",
                  width: "80%",
                  margin: "0px auto",
                }}
              />
            </AttentionSeeker>
            <Box className="rotate">
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "chocolate",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "30px",
                  left: "40px",
                  boxShadow: "0px 0px 10px 0px rgba(200,0,0,0.5)",
                }}
              ></Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "chocolate",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: "0",
                  left: "70px",
                  boxShadow: "0px 0px 5px 0px rgba(200,0,0,0.5)",
                }}
              ></Box>
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "chocolate",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "60px",
                  right: "80px",
                  boxShadow: "0px 0px 5px 0px rgba(200,0,0,0.5)",
                }}
              ></Box>
              <Box
                sx={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "chocolate",
                  borderRadius: "50%",
                  position: "absolute",
                  bottom: "0",
                  right: "20px",
                  boxShadow: "0px 0px 5px 0px rgba(200,0,0,0.5)",
                }}
              ></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
