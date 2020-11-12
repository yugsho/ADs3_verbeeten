import React, { Component } from "react";
import {Box, Card, TextField, Button, ButtonGroup} from '@material-ui/core';

class Donatie extends Component {
  render() {
    return (
<Box className="donatiewrap">
  <Box className="donatieleft">
    <TextField style={{backgroundColor: "white"}} id="outlined-basic" size="small" label="Zoek deelnemers/teams/kids/vrijwilligers" variant="outlined" />

    <ButtonGroup color="primary" aria-label="outlined primary button group">
      <Button style={{backgroundColor: "white"}}><a>Deelnemers</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Teams</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Kids</a></Button>
      <Button style={{backgroundColor: "white"}}><a>Vrijwilliger</a></Button>
    </ButtonGroup>

    <Card>
     <h5>Susanne Stadhouder</h5>
     <p>€1558</p>
     </Card>
     <Card>
      <h5>Patrik van Herp</h5>
      <p>€977</p>
      </Card>
      <Card>
       <h5>Nick van der Wal</h5>
       <p>€843</p>
       </Card>
       <Card>
        <h5>Emma Pulles</h5>
        <p>€740</p>
        </Card>
        <Card>
         <h5>Marieke van de Rijt</h5>
         <p>€610</p>
         <h5>Susanne Stadhouder</h5>
         <p>€1558</p>
         </Card>
         <Card>
          <h5>Patrik van Herp</h5>
          <p>€977</p>
          </Card>
          <Card>
           <h5>Nick van der Wal</h5>
           <p>€843</p>
           </Card>
           <Card>
            <h5>Emma Pulles</h5>
            <p>€740</p>
         </Card>
  </Box>

  <Box className="donatieright">
    <h1> Doneren </h1>
  </Box>
</Box>
    );
  }
}

export default Donatie;
