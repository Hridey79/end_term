import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Card2.css'
import Data from './Data';
import './Card.css'

export default function RecipeReviewCard() {
  return (
    <div className='card__display2'>
      {Data && Data.map((item) => (
        <Card className='card2' sx={{ maxWidth: 145 }}>
          <CardActionArea>
            <CardContent className='card-written'>
              <Typography gutterBottom variant="h5" className='heading' component="div">
                {item.a}
              </Typography>
              <Typography variant="body2" className='content'>
                {item.d}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
      )}
    </div>)
}
