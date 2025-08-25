"use client";

import { localFontSize, sectionPadding } from "@/app/_utils/themes";
import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import svgs from "@/_assets/svgs";

// ---------------------
// Props Type
// ---------------------
interface AccordionItem {
  title: string;
  content: string;
}

interface GenericAccordionProps {
  items: AccordionItem[];
  defaultExpanded?: number | false;
}

const FaqAreahub: React.FC<GenericAccordionProps> = ({
  items,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState<number | false>(defaultExpanded);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 111,
      }}
    >
      <Box
        data-aos="zoom-in"
        data-aos-duration="800"
        sx={{
          position: "relative",
          zIndex: 1111,
          maxWidth: "1536px",
          width: "100%",
          p: sectionPadding,
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: "40px", md: "60px" },
        }}
      >
        <Typography
          sx={{
            zIndex: 111,
            fontSize: localFontSize.h3,
            lineHeight: "100%",
            fontWeight: 600,
            textAlign: "center",
            color: "#3C65FF",
          }}
        >
          FAQ
        </Typography>
        {/* <GenericAccordion items={faqData} defaultExpanded={0} /> */}
        <Box sx={{ width: "100%" }}>
          {items.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === index}
              onChange={handleChange(index)}
              sx={{
                zIndex: 111,
                color: "#000",
                cursor: "pointer",
                marginBottom: "20px",
                borderRadius: "0px !important",
                boxShadow: "none",
                borderBottom: "1px solid #000000",
                "&::before": { display: "none" },
                backgroundColor: "transparent",
              }}
            >
              <AccordionSummary
                sx={{
                  minHeight: { xs: "44px !important", sm: "74px !important" },
                }}
                expandIcon={
                  <IconButton
                    sx={{
                      width: { xs: "24px", md: "34px" },
                      height: { xs: "24px", md: "34px" },
                      color: "#fff",
                      cursor: "pointer",
                      transition: "none",
                      "&:hover": { bgcolor: "transparent" },
                      "& > :first-of-type": {
                        width: { xs: "24px", md: "34px" },
                        height: { xs: "24px", md: "34px" },
                      },
                    }}
                  >
                    {expanded === index ? (
                      <Image src={svgs.closeIcon} alt="close-icon" />
                    ) : (
                      <Image src={svgs.addIcon} alt="add-icon" />
                    )}
                  </IconButton>
                }
              >
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 400,
                    fontSize: { xs: "16px", md: "20", lg: "24px" },
                    lineHeight: "100%",
                    color: "#000000",
                    letterSpacing: "0%",
                  }}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography sx={{ fontSize: localFontSize.p1 }} color="gray">
                  {item.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "25vw", lg: "30%", xxl: "20%" },
          width: "100%",
          position: "absolute",
          right: "-190px",
          top: { xs: "-2%", lg: "10%" },
          zIndex: 1,
          transform: {
            xs: "translate(-20%, -10%)",
            lg: "translate(-40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#3C65FF1A",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: { xs: "300px", md: "25vw", lg: "30%", xxl: "20%" },
          width: "100%",
          position: "absolute",
          left: "60px",
          bottom: { xs: "-10px" },
          zIndex: 1,
          transform: {
            xs: "translate(-20%, -10%)",
            lg: "translate(-40%, -20%)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "#2617B11A",
            filter: "blur(50px)",
            zIndex: -1,
            aspectRatio: "1/1",
          }}
        />
      </Box>
    </Box>
  );
};

export default FaqAreahub;
