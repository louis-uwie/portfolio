"use client";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import { s } from "framer-motion/client";

export interface ExperienceCardProps {
  id: number;
  title: string;
  company: string;
  website: string;
  year: number;
  type: string;
  image: string;
  description?: string;
  tags?: string[];
}

export default function ExperienceCard({
  title,
  image,
  description,
  tags,
  website,
}: ExperienceCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minHeight: 350,
        height: "100%",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardActionArea onClick={() => window.open(website, "_blank")}>
        <CardMedia component="img" max-height="140" image={image} alt={title} />

        <CardContent>
          <Typography
            gutterBottom
            variant="button"
            component="div"
            sx={{
              fontSize: "1em",
              fontWeight: 800,
              letterSpacing: 0.5,
              lineHeight: 1,
            }}
          >
            {title}{" "}
          </Typography>

          <Typography sx={{ fontSize: "0.9em", mt: 1, fontWeight: 300 }}>
            {description}
          </Typography>

          {tags && (
            <Typography
              variant="subtitle2"
              sx={{
                color: "text.secondary",
                mt: 1,
                border: "1px solid #e0e0e0",
                p: 0.5,
                borderRadius: 1,
              }}
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontStyle: "italic",
                    fontSize: "0.8em",
                    fontWeight: 600,
                  }}
                >
                  • {tag}
                </span>
              ))}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
