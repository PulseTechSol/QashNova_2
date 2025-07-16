import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import { Box, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import pngs from "@/_assets/pngs";

export default function ClientsStories() {
  return (
    <>
      <Box sx={{ backgroundColor: "#000000" }}>
        <Box
          sx={{
            maxWidth: "1440px",
            width: "100%",
            margin: "auto",
            padding: sectionPadding,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
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
                width: "100%",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                color: "#3C65FF",
                textAlign: { xs: "start" },
              }}
            >
              Case
            </Typography>
            <Typography
              sx={{
                width: "100%",
                color: "#3C65FF",
                fontSize: localFontSize.h3,
                fontWeight: 600,
                // ml:{xs:"10px",}
                textAlign: { xs: "center" },
              }}
            >
              studies
            </Typography>
          </Box>
          <Box>
            {/* card here plese develop the slder there */}
            {/* card box */}
            <ClientCard
              image={pngs.clients1}
              description="Explore the pinnacle of creativity with our standout projects that blend strategy, design, and innovation. Each campaign is a testament to our passion for delivering results that captivate and convert."
              name="Sarah Johnson"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

type ClientCardProps = {
  image: StaticImageData;
  description: string;
  name: string;
};

export function ClientCard({ image, description, name }: ClientCardProps) {
  return (
    <Box
      sx={{
        height: "500px",
        width: "100%",
        maxWidth: "560px",
        backgroundColor: "#3C65FF",
        borderRadius: { xs: "20px", md: "40px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Image
        src={image}
        alt="client"
        style={{ width: "80px", height: "80px", objectFit: "contain" }}
      />
      <Typography
        sx={{
          fontSize: localFontSize.p2,
          color: "#FFFFFF80",
          width: "85%",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
      <Typography
        sx={{
          fontSize: localFontSize.p1,
          color: "#ffffff",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
}
