import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';




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
            Ervaringen van andere deelnemers
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="textSecondary"
              paragraph
              
            >
              
              De Verbeeten Challenge is al jaren actief om mensen sportief in te zetten tegen kanker en veel deelnemers en vrijwilligers zijn jou al voorgegaan. 
              Hier kun jij de ervaringen van verschillende mensen bekijken en zien hoe zij zich hebben ingezet voor de Challenge. 
              Daarnaast is ook te zien waar en wanneer de evenementen hebben plaatsgevonden, zodat jij weet waar jij je sportief in kan zetten tegen kanker.

              Zit er iemand tussen die je kent of misschien is er iemand die jou inspireert, dan heb je ook de mogelijkheid die deelnemer te sponsoren. 
              Ook is er de mogelijkheid om een team te sponsoren of een donatie te doen aan de Verbeeten Challenge. 
              Op deze manier kan je ons natuurlijk ook helpen voor de strijd tegen kanker.
              
            </Typography> 
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}