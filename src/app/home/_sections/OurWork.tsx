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
        overflow: "hidden",
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

      <Box
        sx={{
          maxWidth: "1440px",

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
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: "40px",
          }}
        >
          <Box
            sx={{
              maxWidth: { xs: "300px", sm: "477px" },
              width: "100%",

              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start" },
              }}
            >
              our
            </Typography>
            <Typography
              sx={{
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                textAlign: { xs: "center", sm: "center" },
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
              fontSize: "18px",
              fontWeight: 400,
              color: "#FFFFFF80",
              textAlign: { xs: "end", sm: "start" },
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
              height: { xs: "300px", sm: "450px", md: "620px", lg: "700px" },
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
              sx={{
                maxWidth: { xs: "100%", md: "555px" },
              }}
            />
            <WorkShowcase
              title="a class travel"
              year="2025"
              image={pngs.workimage3}
              sx={{
                maxWidth: { xs: "100%", md: "555px" },
              }}
            />
          </Box>
          <WorkShowcase
            title="Isfahan & Kashan"
            year="2025"
            image={pngs.workimag4}
            sx={{
              height: {
                xs: "300px",
                sm: "450px",
                md: "600px",
                lg: "700px",
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
      }}
    >
      <Box
        sx={{
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.3)",
          borderRadius:
            image === pngs.workimage1 ? { xs: "0", md: "80px 80px 0 0" } : "0",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            width: "100%",

            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: { xs: "20px", lg: " 20px 50px" },
            gap: "20px",
            textTransform: "capitalize",
          }}
        >
          <Typography
            sx={{
              maxWidth: { xs: "316px", md: "400px" },
              width: "100%",
              fontSize: localFontSize.h5,
              fontWeight: 400,
              color: "#fff",
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
            }}
          >
            {year}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", sm: "450px", md: "350px", lg: "458px" },
            ...(image === pngs.workimag4
              ? {
                  borderBottomLeftRadius: { xs: "0", md: "80px" },
                  borderBottomRightRadius: { xs: "0", md: "80px" },
                  overflow: "hidden",
                }
              : {
                  borderRadius: "0",
                  overflow: "hidden",
                }),
            ...sx,
            backgroundColor: "#fff",
          }}
        >
          <Image
            src={image as StaticImageData}
            alt="workimage1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: isboolean ? "cover" : "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
