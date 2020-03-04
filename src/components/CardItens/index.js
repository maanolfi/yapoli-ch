import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

import CardItem from '../CardItem';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CardItens() {
  const classes = useStyles();

  const { loading } = useSelector(state => state.listImages);
  const { data } = useSelector(state => state.listImages);

  return (
    <React.Fragment>
      {loading ? (
        <div className={classes.root}>
          <LinearProgress color="secondary" />
        </div>
      ) : (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {data.map(card => (
              <CardItem key={card.nome} dados={card} />
            ))}
          </Grid>
        </Container>
      )}
    </React.Fragment>
  );
}
