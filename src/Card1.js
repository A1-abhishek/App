import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Card1({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345, marginTop: 10, height:320, marginLeft:5, backgroundColor:"#f5f5f5"}}>
      <CardMedia
        sx={{ height: 10, p: 10 }}
        
        image={image}
        // title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{justifyContent:"center"}}>
        <Button size="small">Price</Button>
        <Button size="small">Product details</Button>
        <Button size="small">Rating</Button>
      </CardActions>
    </Card>
  );
}
