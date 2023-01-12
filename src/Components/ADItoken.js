import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import {ADItokenContainer,ItemGrid,TGBox} from './Style..js'
export default function ADItoken() {
  return (
    <div id='about'>
      <Grid container sx={ADItokenContainer}>
        <Grid item xs={12} md={10} sx={{ margin: "10px auto" }}>
          <Box sx={ItemGrid}>
            <Box sx={TGBox}>
              <Typography
                variant="h4"
                sx={{ marginTop: "8%", marginBottom: "20px" }}
              >
                $ADI TOKEN
              </Typography>
              <Typography>
                a key difference between bitcoin and traditional fiat currencies
                is that while fiat currencies are legal tender that are backed
                by a government and controlled by a central bank, bitcoin is a
                'distributed' global currency that is not controlled by any
                centralised entity and its supply automatically increased
              </Typography>
              <Typography variant="h6" sx={{ margin: "5px auto" }}>
                Users Who Purchase $ADI Have Three Options
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "gray",
                    padding: "5px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                >
                  <DoneIcon />
                </Box>
                Hold It.
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "gray",
                    padding: "5px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                >
                  <DoneIcon />
                </Box>
                Stake It.
              </Typography>
              <Typography sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    backgroundColor: "gray",
                    padding: "5px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                >
                  <DoneIcon />
                </Box>
                Contribuity Liquidity.
              </Typography>
              <Typography sx={{ margin: "5px auto" }}>
                The public key is used to send cryptocurrency into a wallet. The
                private key is used to verify transactions and prove ownership
                of a blockchain address. If someone sends you, say one bitcoin
                (BTC), a private key will be required to “unlock” that
                transaction and prove that you are now the owner of that
                bitcoin.
              </Typography>
            </Box>
            <Box sx={{ width: { md: "40%", xs: "80%" }, margin: "10px auto" }}>
              <img src="h.png" alt="hand" />
            </Box>
          </Box>
        </Grid>
        <Divider
          sx={{
            width: "80%",
            height: "2px",
            backgroundColor: "rgba(0,0,0,0.2)",
            margin: "10px auto",
          }}
        />
        <Grid
          item
          xs={12}
          md={10}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              padding: "20px",
              borderRadius: "50%",
              boxShadow: "0px 0px 5px 1px rgba(0,0,0,0.3)",
              width: { md: "40%", xs: "80%" },
              margin: "10px auto",
            }}
          >
            <img src="notes.png" alt="note" />
          </Box>
          <Box sx={{ width: { md: "50%", xs: "80%" }, margin: "10px auto" }}>
            <Typography
              variant="h4"
              sx={{ width: { md: "80%", xs: "100%" }, margin: "10px auto" }}
            >
              $ADI GOVERNANCE MODEL
            </Typography>
            <Typography>
              Public and private keys are an integral part of Bitcoin and other
              cryptocurrencies. They allow you to send and receive
              cryptocurrency without requiring a third party to verify the
              transactions. These keys are a part of the public-key cryptography
              (PKC) framework. You can use these keys to send your
              cryptocurrency to anyone, anywhere, at any time. The public and
              private keys fit together as a key pair
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
