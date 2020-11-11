import React, { Component } from "react";
import {Box, Card, TextField, Button, ButtonGroup} from '@material-ui/core';

class Doneer extends Component {
  render() {
    return (
  <Box className="doneercardwrap">
  <Card style={{backgroundColor: "#FFC2D3"}} className="doneercard">
  <Box className="doneercardcontent">
    <h1>DEELNEMER SPONSOREN</h1>
    <p>Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio.
    Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaal wordt besteed.
    Wij stellen elke donatie enorm op prijs.</p>

  <Box className="doneerform">
    <TextField style={{backgroundColor: "white"}} className="doneertextfield" id="outlined-basic" size="small" label="Kies deelnemer, team of sponsor direct" variant="outlined" />

    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button style={{backgroundColor: "white"}} className="geldbutton"><a className="geldbuttoncolor">€5</a></Button>
      <Button style={{backgroundColor: "white"}} className="geldbutton"><a className="geldbuttoncolor">€10</a></Button>
      <Button style={{backgroundColor: "white"}} className="geldbutton"><a className="geldbuttoncolor">€15</a></Button>
    </ButtonGroup>

    <TextField style={{backgroundColor: "white"}} className="doneertextfield" id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined" />

    <Button style={{backgroundColor: "#C93A3C"}} variant="contained" className="verderbutton"><a className="verderbuttoncolor">Ga verder</a></Button>
  </Box>

  </Box>
  </Card>
  </Box>
    );
  }
}

export default Doneer;
