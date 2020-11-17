import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import './Card1Component.css';
import sporter1 from './sporter1.png'

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
          image={sporter1} 
          
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
          Ik doe al meerdere jaren mee met de Verbeeten Challenge in Tilburg 
          en vind dit supertof! Hiermee kan ik mij niet alleen inzetten voor 
          mijn conditie maar ook om iets goeds te doen. Het is altijd leuk om 
          ook met anderen te rennen, supergezellig!
          </Typography></div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
