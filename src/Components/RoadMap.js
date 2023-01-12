import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import {
  Roadmapcontainer,
  RoadmapItem,
  RMIcons,
  RMCard,
  RMTypo,
  RMarc,
  RMdoneicon,
} from "./Style..js";
import MenuIcon from "@mui/icons-material/Menu";
import DoneIcon from "@mui/icons-material/Done";

export default function RoadMap() {
  return (
    <div>
      <Grid container sx={Roadmapcontainer}>
        <Box sx={RMarc}></Box>
        <Grid item xs={12} md={12} sx={{zIndex:'100'}}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", fontWeight: "bold" }}
          >
            BITCOIN ROADMAP
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} sx={RoadmapItem}>
          <Box sx={RMCard}>
            <Box sx={RMIcons}>
              <MenuIcon />
            </Box>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              PHASE-1
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              $adi launch sale
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Releasing whitepaper
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              community building
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              official product sale
            </Typography>
          </Box>

          <Box sx={RMCard}>
            <Box sx={RMIcons}>
              <MenuIcon />
            </Box>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              PHASE-2
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Bond
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Bitcoin Pro
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Bond Composability
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Press Releasing
            </Typography>
          </Box>

          <Box sx={RMCard}>
            <Box sx={RMIcons}>
              <MenuIcon />
            </Box>
            <Typography variant="h5" sx={{ margin: "10px 0px" }}>
              PHASE-3
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Marketing Operations
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Stable Coin
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Exchange
            </Typography>
            <Typography sx={RMTypo}>
              <Box sx={RMdoneicon}>
                <DoneIcon />
              </Box>
              Bitcoin
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
