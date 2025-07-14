"use client";
import pngs from "@/_assets/pngs";
// import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Theme } from "@emotion/react";
import { Box, SxProps, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

export default function OurWork() {
  return (
    <Box
      sx={{
        position: "relative",
        // bgcolor: "#000",
        background: "radial-gradient(circle, #08289be3 0%, #070707ff 30%)",
      }}
    >
      <Box
        sx={{
          width: "633px",
          height: "633px",
          display: { xs: "none", lg: "block" },
          position: "absolute",
          // top: -9,
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
          // m: "auto",
          width: "790px",
          height: "790px",
          display: { xs: "none", lg: "block" },
          position: "absolute",
          // top: 89,
          right: 0,
        }}
      >
        <Image
          src={pngs.howHeplLGcolor}
          alt="star"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>

      {/* <Box
        sx={{
          position: "absolute",
          background:
            "linear-gradient(150deg, #5841D480, #0a0a0a0a , #1213121c)",
          width: "390px",
          height: "390px",
          left: 0,
          zIndex: -10,
        }}
      />*/}
      <Box
        sx={{
          maxWidth: "1440px",
          // zIndex: "10",
          // height: "1440px",
          // position: "absolute",
          width: "100%",
          padding: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", lg: "nowrap" },
          gap: { xs: "40px", md: "80px" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
            gap: "40px",
          }}
        >
          <Box
            sx={{
              maxWidth: "477px",
              width: "100%",

              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              our
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              work
            </Typography>
          </Box>
          <Box
            sx={{
              width: "2px",
              height: 200,
              bgcolor: "#FFFFFF80",
              display: { xs: "none", lg: "block" },
            }}
          />
          <Typography
            sx={{
              maxWidth: "490px",
              width: "100%",
              fontSize: localFontSize.p1,
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "center", sm: "start" },
            }}
          >
            See the passion and precision in every project. Our featured work
            highlights the collaborative journey with our clients, demonstrating
            how we transform visions into impactful digital experiences and
            stunning creative solutions.
          </Typography>
        </Box>

        {/*  */}
        <Box
          sx={{
            width: "100%",
            display: "flex",

            flexDirection: "column",
            gap: "20px",
            // flexWrap:{xs""}

            // ...sx,
          }}
        >
          <WorkShowcase
            title="Sabir’s Grill"
            year="2025"
            isboolean={true}
            image={pngs.workimage1}
            sx={{
              maxWidth: "1440px",
              height: { xs: "350px", sm: "450px", md: "700px" },
            }}
          />

          <Box
            width="100%"
            sx={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",

              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <WorkShowcase
              title="sofa & rattan"
              year="2025"
              image={pngs.workimage2}
              sx={{ maxWidth: { xs: "100%", md: "555px" }, height: "auto" }}
            />
            <WorkShowcase
              title="a class travel"
              year="2025"
              image={pngs.workimage3}
              sx={{ maxWidth: { xs: "100%", md: "555px" }, height: "auto" }}
            />
          </Box>
          <WorkShowcase
            title="Isfahan & Kashan"
            year="2025"
            isboolean={true}
            image={pngs.workimag4}
            sx={{
              maxWidth: "1440px",
              height: {
                xs: "350px",
                sm: "450px",
                md: "700px",
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

interface WorkShowcaseProps {
  title?: string;
  year?: string;
  image?: StaticImageData;
  sx?: SxProps<Theme>;
  isboolean?: boolean;
}

export function WorkShowcase({
  title,
  year,
  image,
  sx,
  isboolean,
}: WorkShowcaseProps) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        // gap: "20px",
        // flexWrap:{xs""}

        // ...sx,
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          borderRadius: image === pngs.workimage1 ? "80px 80px 0 0" : "0",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // maxWidth: "1440px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "20px", lg: " 20px 50px" },
            gap: "20px",
            textTransform: "capitalize",
            // ...sx,
          }}
        >
          <Typography
            sx={{
              maxWidth: "316px",
              width: "100%",
              fontSize: localFontSize.h5,
              fontWeight: 400,
              color: "#fff",
              // textAlign: { xs: "center", sm: "start" },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              maxWidth: "87px",
              width: "100%",
              fontSize: localFontSize.h5,
              fontWeight: 400,
              color: "#fff",
              // textAlign: { xs: "center", sm: "start" },
            }}
          >
            {year}
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "auto", ...sx }}>
          <Image
            src={image as StaticImageData}
            alt="workimage1"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: image === pngs.workimag4 ? "0 0 80px 80px" : "0",
              objectFit: isboolean ? "cover" : "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
