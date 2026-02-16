import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

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
    <Card sx={{ maxWidth: 350, minHeight: 250, height: "100%" }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt={title} />

        <CardContent>
          <Typography gutterBottom variant="button" component="div">
            {title}{" "}
            <a href={website} target="_blank" rel="noopener noreferrer">
              🔗
            </a>
          </Typography>

          {description && (
            <Typography
              variant="subtitle1"
              sx={{
                color: "text.secondary",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 4,
                overflow: "hidden",
              }}
            >
              {description}
            </Typography>
          )}

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
                <span key={tag} style={{ marginRight: 4 }}>
                  #{tag}
                </span>
              ))}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
