import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './Card4Component.css';
import sporter4 from './sporter4.png'

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
          image={sporter4} 
          
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
          Een vriendin van mij doet al wat langer mee en heeft mij een keertje mee laten doen. 
          Het was een aardig stukje lopen, maar het is gelukt. Met de andere deelnemers en vrijwilligers 
          was leuk mee te praten. Misschien dat ik volgende keer ook weer meedoe.                                     
          </Typography></div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
