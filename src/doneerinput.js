import React from 'react';
import firebase from './firebase';
import {TextField} from '@material-ui/core';

export const DoneerInput = ({ doneer }) => {
  const [deelnemer, setDeelnemer] = React.useState(doneer.deelnemer);

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('doneer').add({deelnemer})
  }

    return (
      <>
      <TextField style={{backgroundColor: "white", width:"100%", marginBottom:"1vh"}} id="outlined-basic" size="small" label="Ander bedrag invullen" variant="outlined"
      value={deelnemer}
      onChange={e => {
        setDeelnemer(e.target.value);
      }}
      />

        <button onClick={onUpdate}>Update</button>
    </>)
}
