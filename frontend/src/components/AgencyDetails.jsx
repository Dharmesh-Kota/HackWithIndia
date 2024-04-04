import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const store = (props) => {

  return (
    <div>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.Name}HACK WITH INDIA 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.Address}DAIICT , NEAR INDRODA PARK, GANDHINAGAR, GUJARAT
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  )
}

export default store