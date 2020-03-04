import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { deleteImage } from '../../store/modules/list_images/actions';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
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
}));

function CardItem({ dados: { data, url, nome } }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleDelete = name => {
    dispatch(deleteImage(name));
  };

  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={url} title={nome} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {nome}
            </Typography>
            <Typography>{data}</Typography>
          </CardContent>
          <CardActions>
            <Button
              onClick={() => handleDelete(nome)}
              size="small"
              color="primary"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default memo(CardItem);
