import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import './TableTextComponent.css'




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
            Kids challenge/Kidsplein
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="textSecondary"
              paragraph
              
            >
              
              Naast de sportieve uitdaging voor volwassenen, is er ook aan de kinderen gedacht. 
              Op het kidsplein worden door professionele begeleiders verschillende leuke activiteiten georganiseerd. 
              Die zorgen gegarandeerd voor plezier! Tilburg Voor € 5,- per kind (t/m 12 jaar) koop je een passe-partout 
              met toegang tot het Pellikaan kidsplein, iets te drinken en traktatie, deelname aan de Kids Challenge die 
              start om 16.00 uur met kans op een prijs na afloop. Het Pellikaan kidsplein is vanaf 13.00 uur open. 
              Kijk hier voor het complete programma en meld je aan! Breda Voor € 5,- per kind (t/m 12 jaar) koop je een 
              kaartje voor het Kidsplein. Hiervoor kunnen de kinderen meedoen aan allerlei spellen en krijgen ze wat lekkers te eten en drinken. 
              Het Kidsplein is geopend van 12.00 tot 17.00 uur zodat de volwassenen tijd hebben voor hun challenge. 
              Neem je kinderen en die van je familie/vrienden gezellig mee. Je bezorgt hen een onvergetelijke dag. 
              Bij je aanmelding kun je ook de kaartjes kopen voor de kinderen je meeneemt.
              
            </Typography> 
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}