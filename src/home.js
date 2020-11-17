import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import homeimg from './pictures/homeimg.png';
import Doneer from './doneer';

class Home extends Component {
  render() {
    return (
      <Box>

      <Grid item container sm={12} justify="center" spacing={2}>
        <Grid item sm={6}>
          <img style={{width:"100%"}} src={homeimg} alt="Logo" />
        </Grid>

        <Grid item sm={4}>
          <Card>
            <h1>hallo</h1>
            <p>test123</p>
          </Card>
        </Grid>
      </Grid>

      <Grid item container justify="center">
        <Doneer />
      </Grid>

      </Box>


    );
  }
}

export default Home;
