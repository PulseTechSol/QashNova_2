import pngs from "@/_assets/pngs";
import {
  localFontSize,
  maxWidth,
  sectionPaddingX,
  sectionPaddingY,
} from "@/app/_utils/themes";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function CardBranding({
  brandingSection,
}: {
  brandingSection: {
    heading: string;
    description: { mobile: string[]; desktop: string[] };
    showcaseCards: { image: string; title: string }[];
  };
}) {
  console.log(brandingSection, "brandingSection");

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
          <Typography
            variant="h2"
            sx={{
              fontSize: localFontSize.h3,
              fontWeight: 600,
              color: "#fff",
              lineHeight: {
                xs: "50px",
                md: "80px",
                lg: "100px",
                xl: "120px",
                xxl: "150px",
              },
              paddingBottom: sectionPaddingY,
              textAlign: "center",
            }}
          >
            {brandingSection?.heading}
          </Typography>

          <Typography
            data-aos={"fade-left"}
            data-aos-duration="500"
            sx={{
              width: "100%",
              fontSize: localFontSize.p1,
              fontWeight: 400,
              color: "#FFFFFF80",
              display: { xs: "none", md: "block" },
              textAlign: "center",
              marginBottom: 10,
            }}
            component="div" // ✅ so we can render child <p> safely
          >
            {brandingSection.description.desktop.map((desc, i) => (
              <Box
                key={i}
                component="p"
                sx={{ mb: 3, lineHeight: "40px" }} // ✅ spacing between paras
              >
                {desc}
              </Box>
            ))}
          </Typography>

          <Typography
            sx={{
              fontSize: localFontSize.p1,
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "center", md: "start" },
              display: { xs: "block", md: "none" },
              marginBottom: 10,
            }}
            component="div"
          >
            {brandingSection.description.mobile.map((desc, i) => (
              <Box key={i} component="p" sx={{ mb: 3, lineHeight: "26px" }}>
                {desc}
              </Box>
            ))}
          </Typography>

          <Grid
            container
            spacing={{ xs: 4, sm: 6, md: 8, xl: 10, xxl: 12 }}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {brandingSection.showcaseCards.map((item, idx) => (
              <WorkShowcase key={idx} title={item.title} image={item.image} />
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

interface WorkShowcaseProps {
  title?: string;
  year?: string;
  image: string;
}

export function WorkShowcase({ title, image }: WorkShowcaseProps) {
  return (
    <Grid
      data-aos="zoom-in"
      data-aos-duration="500"
      size={{ xs: 12, sm: 6 }}
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "555px", xl: "800px", xxl: "1200px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
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
            bgcolor: "rgba(0, 0, 0, 0.3)",
            textWrap: "nowrap",
          }}
        >
          {title}
        </Typography>
        {/* </Box> */}
        <Box
          sx={{
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "400px",
              md: "555px",
              xl: "800px",
              xxl: "1200px",
            },
            height: "100%",
          }}
        >
          <Image
            src={image}
            alt="Branding"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            width={500} // ✅ required
            height={600} // ✅ required
          />
        </Box>
      </Box>
    </Grid>
  );
}
