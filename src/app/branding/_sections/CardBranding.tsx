import pngs from "@/_assets/pngs";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
// import { max } from "three/tsl";

export default function CardBranding() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          background: "radial-gradient(circle, #08289be3 0%, #070707ff 30%)",
          overflow: "hidden",
          px: sectionPaddingX,
        }}
      >
        <Box
          sx={{
            width: { xs: "355px", md: "633px" },
            height: { xs: "355px", md: "633px" },
            display: { xs: "block", lg: "block" },
            position: "absolute",
            left: -13,
          }}
        >
          <Image
            src={pngs.howHeplLG}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <Box
          sx={{
            width: { xs: "355px", md: "633px" },
            height: { xs: "355px", md: "633px" },
            display: { xs: "block", lg: "block" },
            transform: "rotate(270deg)",
            transformOrigin: "center",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        >
          <Image
            src={pngs.howHeplLG}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: { xs: "355px", md: "790px" },
            height: { xs: "355px", md: "790px" },
            display: { xs: "block", lg: "block" },
            position: "absolute",
            right: 0,
          }}
        >
          <Image
            src={pngs.howHeplLGcolor}
            alt="star"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>

        <Box
          sx={{
            maxWidth: { xs: maxWidth, xl: "1536px", xxl: "80vw" },
            width: "100%",
            py: sectionPaddingY,
            margin: "auto",
          }}
        >
          <Grid
            container
            columnSpacing={{ xs: 1, sm: 2, md: 3, xl: 8, xxl: 10 }}
            spacing={4}
            sx={{
              // maxWidth: { xxl: "2200px" },
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",

              rowGap: {
                xs: "40px",
                md: "60px",
                lg: "80px",
                xl: "80px",
                xxl: "100px",
              },
              height: "100%",
            }}
          >
            <WorkShowcase title="sofa & rattan" image={pngs.branding1} />
            <WorkShowcase title="Isfahan & Kashan" image={pngs.branding2} />
            <WorkShowcase title="Izec Prestige" image={pngs.branding3} />
            <WorkShowcase title="savile row furniture" image={pngs.branding4} />
          </Grid>
        </Box>
      </Box>
    </>
  );
}

interface WorkShowcaseProps {
  title?: string;
  year?: string;
  image?: StaticImageData;
}

export function WorkShowcase({ title, image }: WorkShowcaseProps) {
  return (
    <Grid
      size={{ xs: 12, sm: 6 }}
      sx={{
        width: "100%",
        maxWidth: {
          xs: "100%",
          sm: "400px",
          md: "555px",
          xl: "800px",
          xxl: "1200px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "555px", xl: "800px", xxl: "1200px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",

          bgcolor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Typography
          sx={{
            p: { xs: "20px 5px", lg: " 20px 50px" },
            textAlign: "center",
            textTransform: "capitalize",
            width: "100%",
            fontSize: localFontSize.h5,
            fontWeight: 400,
            color: "#fff",
          }}
        >
          {title}
        </Typography>
        {/* </Box> */}
        <Box
          sx={{
            padding: { xs: "50px", xl: "100px" },
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "400px",
              md: "555px",
              xl: "800px",
              xxl: "1200px",
            },
            height: {
              xs: "280px",
              sm: "330px",
              md: "360px",
              lg: "455px",
              xl: "600px",
              xxl: "800px",
              // xxl: "100%",
            },
            backgroundColor: "#000",
          }}
        >
          <Image
            src={image as StaticImageData}
            alt="Branding"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
}
