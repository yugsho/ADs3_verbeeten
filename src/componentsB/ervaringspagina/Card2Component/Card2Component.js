import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './Card2Component.css';
import sporter2 from './sporter2.png'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
    
  },
  media: {
    height: 200
    
    
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        
      <CardActionArea style={{backgroundColor: "#F7E3E5"}}>
       <div className="foto"><CardMedia 
          className={classes.media}
          image={sporter2} 
          
        /></div> 
        <CardContent>
          <div className="text"><Typography gutterBottom variant="h8" component="h2">
            Naam
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
            Locatie/Evenement
          </Typography>
          <Typography gutterBottom variant="h8" component="h2">
            Deelnemer/team
          </Typography>
          <Typography variant="body2" color="textPrimary" component="p">
          Twee challenges heb ik al meegedaan samen met een aantal vriendinnen, 
          het is zeker een aanrader. Een leuke organisatie voor een goed doel.                                        
          </Typography></div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
