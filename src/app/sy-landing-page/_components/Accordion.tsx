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
import svgs from "@/_assets/svgs"; // ✅ Props ka type define karo
import { localFontSize } from "@/app/_utils/themes";
interface FaqItemProps {
  question: string;
  answer: string;
  isExpanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isExpanded,
  onChange,
}) => {
  return (
    <Accordion
      expanded={isExpanded}
      onChange={onChange}
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
        expandIcon={
          <IconButton
            sx={{
              width: { xs: "30px", md: "34px" },
              height: { xs: "30px", md: "34px" },
              color: "#fff",
              cursor: "pointer",
              transition: "none",
              "&:hover": {
                bgcolor: "transparent",
              },
              "& > :first-of-type": {
                width: { xs: "30px", md: "34px" },
                height: { xs: "30px", md: "34px" },
              },
            }}
          >
            {isExpanded ? (
              <Image
                src={svgs.closeIcon}
                alt="Close South Yorkshire landing page FAQ section"
                loading="lazy"
              />
            ) : (
              <Image
                src={svgs.addIcon}
                alt="Expand South Yorkshire landing page FAQ section"
                loading="lazy"
              />
            )}
          </IconButton>
        }
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: localFontSize.p2,
            lineHeight: "100%",
            color: "#000000",
            letterSpacing: "0%",
          }}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            fontSize: localFontSize.p3,
          }}
          color="gray"
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqData = [
    {
      question: "Do I need technical skills?",
      answer: "No, we handle everything.",
    },
    {
      question: "How long to go live?",
      answer: "Usually 10 to 14 days.",
    },
    {
      question: "Can I add features later?",
      answer: "Yes. Scale as you grow.",
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      {faqData.map((item, index) => (
        <FaqItem
          key={index}
          question={item.question}
          answer={item.answer}
          isExpanded={expanded === index}
          onChange={handleChange(index)}
        />
      ))}
    </Box>
  );
};

export default FaqSection;
