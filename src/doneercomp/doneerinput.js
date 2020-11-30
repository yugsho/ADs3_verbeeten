import React from 'react';
import firebase from './../firebase';
import {TextField, Button, Grid, FormControl, Select, InputLabel} from '@material-ui/core';

export const DoneerInput = ({ doneer }) => {
  const [deelnemer, setDeelnemer] = React.useState(doneer.deelnemer);
  const [bedrag, setBedrag] = React.useState(doneer.bedrag);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('doneer').add({deelnemer, bedrag})
    window.alert("Bedankt voor uw donatie!")
  }

    return (
      <>
      <Grid container item xs={12} justify="center">
            <FormControl style={{width:"100%", marginBottom:"2vh"}}
            onChange={e => {
              setDeelnemer(e.target.value);
            }}>
                <InputLabel htmlFor="age-native-simple">Kies deelnemer of sponsor direct</InputLabel>
                <Select native>
                  <option aria-label="None" value="" />
                  <option>Sponsor direct</option>
                  <option>Emma Pulles</option>
                  <option>Patrik van Herp</option>
                </Select>
              </FormControl>
      </Grid>

      <Grid container item xs={12} justify="space-between" alignItems="center" style={{marginBottom:"1vh"}}>
      <Grid container item xs={4} justify="flex-start" style={{width:"50%"}}>
      <Button style={{backgroundColor: "white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€5</a></Button>
      </Grid>
      <Grid container item xs={4} justify="center">
      <Button style={{backgroundColor: "white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€10</a></Button>
      </Grid>
      <Grid container item xs={4} justify="flex-end">
      <Button style={{backgroundColor: "#C93A3C", color:"white"}}><a style={{padding:"0.5vw", paddingLeft:"3vw", paddingRight:"3vw"}}>€15</a></Button>
      </Grid>
      </Grid>



      <Grid container item xs={12} justify="center">
        <TextField style={{backgroundColor: "white", width:"100%", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined"
        value={bedrag}
        onChange={e => {
          setBedrag(e.target.value);
        }}
        />
      </Grid>

      <Grid container item xs={12} justify="flex-end">
        <Button onClick={onUpdate} style={{backgroundColor: "#C93A3C"}} variant="contained"><a style={{color:"white", fontSize:"1vw"}}>Ga verder</a></Button>
        </Grid>
    </>)
}
