import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './ChallengeTextComponent.css'




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
            
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
              
              
            >
            Challenges
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="textSecondary"
              paragraph
              
            >
              
              Vanuit Tilburg en Breda kun je deelnemen aan verschillende
            challenges. Let op: er kunnen altijd aanpassingen gedaan worden in
            de verschillende routes, houd dus deze website in de gaten. Blijf
            op de hoogte en volg ons op Facebook, Instagram en Twitter. Samen
            Sportief tegen Kanker!
              
            </Typography> 
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}