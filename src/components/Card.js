import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Card.css'

export default function ActionAreaCard(props) {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent className='card-written'>
          <Typography gutterBottom variant="h5" className='heading' component="div">
            {props.heading}
          </Typography>
          <Typography variant="body2" className='content'>
            {props.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
