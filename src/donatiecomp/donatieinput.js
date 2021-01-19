import React from 'react';
import firebase from './../firebase';
import {TextField, Button, Grid, FormControlLabel, Checkbox, Typography, FormControl, Select, InputLabel} from '@material-ui/core';

//creates const
export const DonatieInput = ({ donatie }) => {
  const [bedrag, setBedrag] = React.useState(donatie.bedrag);
  const [deelnemer, setDeelnemer] = React.useState(donatie.deelnemer);
  const [bank, setBank] = React.useState(donatie.bank);
  const [naam, setNaam] = React.useState(donatie.naam);
  const [email, setEmail] = React.useState(donatie.email);
  const [persbericht, setPersbericht] = React.useState(donatie.persbericht);
  const [anoniem, setAnoniem] = React.useState(donatie.anoniem);

  //creates function to add things into the database
  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('donatie').add({bedrag, deelnemer, bank, naam, email, persbericht, anoniem})
    window.alert("Bedankt voor uw donatie!")
  }

  //form for the input fields that goes into the database
  return (
    <>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined"
    onChange={e => {
      setBedrag(e.target.value);
    }}
    />

    <FormControl style={{width:"100%"}}
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

    <FormControl style={{width:"100%"}}
    onChange={e => {
      setBank(e.target.value);
    }}
    >
        <InputLabel htmlFor="age-native-simple">Selecteer uw bank</InputLabel>
        <Select native>
          <option aria-label="None" value="" />
          <option>ING</option>
          <option>Rabobank</option>
          <option>ABN Amro</option>
        </Select>
      </FormControl>

    <h1 style={{fontSize:"1.8vw"}} className="donatiebloktekst">Gegevens</h1>
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Naam" variant="outlined"
    onChange={e => {
      setNaam(e.target.value);
    }}
    />
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="E-mailadres" variant="outlined"
    onChange={e => {
      setEmail(e.target.value);
    }}
    />
    <TextField className="donatietextfield" style={{backgroundColor: "white", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Persoonlijk bericht" variant="outlined"
    onChange={e => {
      setPersbericht(e.target.value);
    }}
    />

    <Grid item xs={12}>
    <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        style={{color: '#C93A3C'}}
        label={<Typography style={{ color: '#C93A3C' }}>Anoniem doneren</Typography>}
        labelPlacement="end"
        onChange={e => {
          setAnoniem(e.target.value);
        }}
        />
    </Grid>

    <Button onClick={onUpdate} size="small" style={{backgroundColor: "#C93A3C"}}><a className="donatiebuttoncolor">Doneer</a></Button>
  </>)
}
