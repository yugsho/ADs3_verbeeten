import React from "react";
import {Box, Card, Grid} from '@material-ui/core';
import firebase from './../firebase';
import {DoneerInput} from './doneerinput'

function Doneer(){
  const [doneer, setDoneer] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("doneer").get()
      setDoneer(data.docs.map(doc => doc.data()))
    }
    fetchData()
  }, [])

    return (
  <Box>

  <Grid container item xs={12} justify="center">
  <Grid container item xs={5} direct="column" justify="center">
    <Card style={{backgroundColor: "#FFC2D3", padding:"20px"}}>
      <Grid container item xs={12} justify="center">
        <h1 style={{fontSize:"1.8vw"}}>DEELNEMER SPONSOREN</h1>
      </Grid>

      <Grid container item xs={12} justify="center">
      <p style={{fontSize:"1vw"}}>Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio.
      Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaal wordt besteed.
      Wij stellen elke donatie enorm op prijs.</p>
      </Grid>

          <DoneerInput doneer={doneer}/>
    </Card>
    </Grid>
  </Grid>

  </Box>
    );
}

export default Doneer;
