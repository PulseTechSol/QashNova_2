import pngs from "@/_assets/pngs";
import ButtonComponent from "@/_components/ButtonComponent";
import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HowHelp() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, #1f1580ff, #090425ff,  #090425ff, #1b2755ff)",
      }}
    >
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
          gap: "80px",
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
              background: "linear-gradient(90deg, #3C65FF, #5841D4, #2617B1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
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
              How
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
              we Help
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
            Discover our full range of digital marketing services. From strategy
            to execution, we&apos;re here to deliver effective solutions that
            help your brand succeed in today&apos;s competitive landscape.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            padding: "40px",
            display: "flex",
            flexWrap: { xs: "wrap", md: "nowrap" },
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: { xs: "40px", md: "60px" },
            bgcolor: "#fff",
            borderRadius: "80px",
          }}
        >
          {/* text */}
          <Box
            sx={{
              maxWidth: "555px",
              width: "100%",
              padding: { xs: "0px", md: "40px 0" },
            }}
          >
            <Typography
              sx={{
                // maxWidth: "490px",
                width: "100%",
                fontSize: localFontSize.h4,
                fontWeight: 600,
                color: "#3C65FF",
                lineHeight: "70px",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              Website Development
            </Typography>

            <Box
              sx={{
                mt: { xs: "10px", md: "30px" },
                height: "auto",
                width: "100%",
                fontSize: localFontSize.p3,
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: "5px", md: "10px" },
              }}
            >
              <ButtonComponent
                label="Custom Websites"
                sx={{
                  padding: { xs: "5px 15px", md: "10px 20px" },
                  height: { xs: "30px", md: "44px" },
                }}
              />
              <ButtonComponent
                label="Responsive Design "
                sx={{
                  padding: { xs: "5px 15px", md: "10px 20px" },
                  height: { xs: "30px", md: "44px" },
                }}
              />
              <ButtonComponent
                label="E-commerce"
                sx={{
                  padding: { xs: "5px 15px", md: "10px 20px" },
                  height: { xs: "30px", md: "44px" },
                }}
              />
              <ButtonComponent
                label="E-commerce"
                sx={{
                  padding: { xs: "5px 15px", md: "10px 20px" },
                  height: { xs: "30px", md: "44px" },
                }}
              />
            </Box>
            <Typography
              sx={{
                // maxWidth: "490px",
                mt: { xs: "40px", md: "60px" },
                width: "100%",
                fontSize: localFontSize.p2,
                fontWeight: 400,
                color: "#00000080",
                textAlign: { xs: "center", sm: "start" },
              }}
            >
              We craft high-performing, bespoke websites engineered to convert
              visitors into customers.
            </Typography>
          </Box>
          {/* image */}
          <Box
            sx={{
              maxWidth: { width: "100%", md: "445px" },
              width: "100%",
              height: "auto",
            }}
          >
            <Image
              src={pngs.image1}
              alt="image1"
              style={{ width: "100%", height: "100%", borderRadius: "80px" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
