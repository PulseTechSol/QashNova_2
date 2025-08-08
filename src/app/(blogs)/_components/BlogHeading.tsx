import { SxProps, Theme, Typography } from "@mui/material";

interface BlogHeadingProps {
  heading: string;
  sx?: SxProps<Theme>;
}
export default function BlogHeading({ heading, sx }: BlogHeadingProps) {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 500,
          color: "#000",
          fontSize: {
            xs: "24px",
            md: "28px",
            lg: "36px",
            xl: "46px",
          },
          textTransform: "capitalize",
          ...sx,
        }}
      >
        {heading}
      </Typography>
    </>
  );
}
