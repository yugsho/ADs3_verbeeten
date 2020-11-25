import React from "react";
import firebase from './firebase'
import {DoneerInput} from './doneerinput'

function Dbdon(){
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
    <ul>
      {doneer.map(doneer => (
        <li key={doneer.deelnemer}>
          <DoneerInput doneer={doneer}/>
        </li>
      ))}
      </ul>
    );
  }

  export default Dbdon
