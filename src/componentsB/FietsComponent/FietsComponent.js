import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import fiets from './fiets.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: 480,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea><a href="https://www.w3schools.com">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          
        height={600}
          image={fiets}
          title="Contemplative Reptile"
        /></a>
      </CardActionArea>

      <svg width="100%" height="60">
        <g>
          <rect className="rectRed" width="100%" height="100"></rect>
          <text
            className="rectText"
            x="50%"
            y="50%"
            font-family="Helvetica neue"
            dominant-baseline="middle"
          >
            Fietsen/Wielrennen/Mountainbiken
          </text>
        </g>
      </svg>
    </Card>
  );
}
