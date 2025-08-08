import { SxProps, Theme, Typography } from "@mui/material";

interface BlogParagraphProps {
  text: string;
  sx?: SxProps<Theme>;
}
export default function BlogParagraph({ text, sx }: BlogParagraphProps) {
  return (
    <>
      <Typography
        sx={{
          width: "100%",
          fontSize: { xs: "18px", xl: "20px", xxl: "24px" },
          fontWeight: 400,
          color: "rgba(0, 0, 0, 0.5)",
          ...sx,
        }}
      >
        {text}
      </Typography>
    </>
  );
}
