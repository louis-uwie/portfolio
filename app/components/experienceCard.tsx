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
    <Card style={{ maxWidth: 350, minHeight: 250, height: '100%' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="button">
            {title}
          </Typography>

          {description && (
            <Typography
            variant="subtitle1"
            sx={{
                color: 'text.secondary',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 4, 
                overflow: 'hidden',
            }}
            >
            {description}
            </Typography>

          )}

          {tags && (
            <Typography
              variant="subtitle2"
              sx={{ color: 'text.secondary', marginTop: '8px' , border: '1px solid #e0e0e0', padding: '4px', borderRadius: '4px'}}
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
