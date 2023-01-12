import React, { useState } from "react";
import data from "./Data.json";
import "../App.css";
import { Grid, Typography, Box, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  FaqItem,
  questionBox,
  questionTab,
  IconBox,
  FaqAnswer,
} from "./Style..js";
import { Fade } from "react-awesome-reveal";
export default function FAQs() {
  let data1 = data[0];
  let [state, setstate] = useState(data1);
  return (
    <div id='faqs'>
      <Grid container sx={{ color: "white" }}>
        <Grid item xs={12} md={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            FREQUENTLY ASKED QUESTIONS
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} sx={FaqItem}>
          <Box sx={questionBox}>
            {data.map((m) => {
              return (
                <>
                  <Box sx={questionTab}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={IconBox}></Box>
                      <Typography sx={{ margin: "20px" }}>{m.title}</Typography>
                    </Box>
                    <IconButton
                      sx={{ padding: "10px", borderRadius: "50%" }}
                      className="iconbutton"
                      onMouseOver={() => {
                        setstate(m);
                      }}
                    >
                      <KeyboardArrowRightIcon
                        sx={{ fontSize: "35px", color: "white" }}
                      />
                    </IconButton>
                  </Box>
                </>
              );
            })}
          </Box>
          <Box sx={FaqAnswer}>
            <Box className="duration-1500">
              <Fade>
                <Typography variant="h5" sx={{ margin: "10px auto" }}>
                  {state.title}
                </Typography>
              </Fade>
              <Fade>
                <Typography sx={{ margin: "20px 0px" }}>
                  {state.disc}
                </Typography>
              </Fade>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
