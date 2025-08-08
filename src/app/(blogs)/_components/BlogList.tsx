import { Box, Typography } from "@mui/material";

interface BlogListProps {
  items: string[];
}

export default function BlogList({ items }: BlogListProps) {
  return (
    <Box sx={{ pl: { xs: "10px", md: "16px" } }}>
      {items.map((item, index) => (
        <Box
          component="li"
          key={index}
          sx={{
            listStyle: "disc",
            color: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Typography
            component="span"
            sx={{
              display: "inline",
              fontSize: { xs: "18px", xl: "20px", xxl: "24px" },

              fontWeight: 400,
            }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
