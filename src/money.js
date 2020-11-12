import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'



export default class MoneyRaisen extends React.Component{
    render(){
        return(
            <div>
                <Grid container className="donateContainer">
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid className="tussenstand" item xs={4}><h3>Tussenstand</h3></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid className="money" item xs={4}><h3>€45.487</h3></Grid>
                    <Grid className="" item xs={4}>        
                        <Button className="donateButton" variant="contained">Doneer</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}