import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import homeimg from './pictures/homeimg.png';
import homeimg2 from './pictures/homeimg2.png';
import Doneer from './doneer';

class Home extends Component {
  render() {
    return (
      <Box>

      <Grid item container sm={12} justify="center" alignItems="stretch" spacing={2} style={{marginBottom:"3vh"}}>
        <Grid item sm={5}>
          <img style={{width:"100%", height:"100%"}} src={homeimg} alt="Logo" />
        </Grid>

        <Grid item sm={5}>
          <Card style={{height:"100%", backgroundColor:"#FFF8FA"}}>
            <Box style={{padding:"20px"}}>
            <h1 style={{fontSize:"2.2vw"}}>Ons doel</h1>
            <p style={{fontSize:"1.2vw"}}>Geld voor onderzoek</p>
            <p style={{fontSize:"1.2vw"}}> Alle opbrengsten van de Verbeeten Challenge gaan naar het Verbeeten Fonds.
            Zij stimuleren onderzoek naar patiëntvriendelijke behandelmethodes door het Instituut Verbeeten, het regionaal kankerbehandelcentrum in Tilburg, Breda en Den Bosch.
            Instituut Verbeeten levert al meer dan 60 jaar zorg op het gebied van radiotherapie en nucleaire geneeskunde.
            Het is echter geen academisch instituut, zij moeten hun specifieke onderzoeken zelf bekostigen.
            Onderzoeken en diverse behandelmethodes kosten veel geld.</p>
            </Box>
          </Card>
        </Grid>
      </Grid>

      <Grid item container justify="center" style={{marginBottom:"5vh"}}>
        <Doneer />
      </Grid>


      <Grid item container xs={12} justify="center" spacing={2} alignItems="center" style={{backgroundColor:"#FFF9FB"}}>

      <Grid item xs={2}>
      <img style={{width:"65%", height:"65%"}} src={homeimg2} alt="Logo" />
      </Grid>
      <Grid item xs={6}>
      <h1 style={{fontSize:"2.2vw"}}>John Doe</h1>
      <p style={{fontSize:"1.2vw"}}>“Ik was er in 2019 voor de eerste keer.
      Ik heb echt genoten van het evenement.
      Alles was goed georganiseerd en ik ben er volgend jaar zeker weer bij.”</p>
      </Grid>
      <Grid item container justify="flex-end" xs={2}>
      <Button style={{backgroundColor: "#C93A3C"}} size="small"><a className="donatiebuttoncolor">Lees meer</a></Button>
      </Grid>

      </Grid>
      </Box>


    );
  }
}

export default Home;
