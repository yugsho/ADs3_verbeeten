import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Table1Component.css'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});




export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <svg width="100%" height="100">
        <g>
          <rect className="rectRed" width="100%" height="100"></rect>
          <text
            className="rectText"
            x="50%"
            y="50%"
            font-family="Helvetica neue"
            dominant-baseline="middle"
          >
            CLUB PELLIKAAN Kidsplein
          </text>
        </g>
      </svg>
      <CardContent>
        <Typography  fontSize="14px" color="black">
          &#x2713; 16:15 uur
        </Typography>
        <Typography fontSize="14px">
          &#x2713; kidsplein van 13:00 tot 16:00 uur
        </Typography>
      </CardContent>
     
    </Card>
  );
}