import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

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
}: ExperienceCardProps) {
  return (
    <Card style={{ maxWidth: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>

          {description && (
            <Typography
            variant="body2"
            sx={{
                color: 'text.secondary',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3, // number of lines
                overflow: 'hidden',
            }}
            >
            {description}
            </Typography>

          )}

          {tags && (
            <Typography
              variant="body2"
              sx={{ color: 'text.secondary', marginTop: '8px' }}
            >
              {tags.map(tag => (
                <span key={tag} style={{ marginRight: '4px' }}>
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
