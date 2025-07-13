import svgs from "@/_assets/svgs";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

export default function Partness() {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Box
        sx={{
          maxWidth: "1440px",
          width: "100%",
          padding: {
            xs: "60px 0px",
            sm: "60px 0px",
            md: "80px 0px",
            lg: "100px 0px",
          },
          margin: "auto",
          // bgcolor: "red",
        }}
      >
        <Box>
          <Grid
            container
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              spacing: { xs: "40px", md: "80px" },
            }}
          >
            {[
              svgs.logo1,
              svgs.logos2,
              svgs.logo3,
              svgs.logo4,
              svgs.logo5,
              svgs.logos6,
              svgs.logos7,
            ].map((item, index) => (
              <Grid
                key={index}
                size={{ xs: 6, sm: 3, md: 1, lg: 1.7 }}
                // textAlign="center"
                sx={{
                  justifyContent: "space-between",
                  maxWidth: { md: "120px", lg: "150px" },
                  // width: "100%",
                  height: 150,
                }}
              >
                <Image
                  src={item}
                  alt={`logo-${index}`}
                  width={150}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
