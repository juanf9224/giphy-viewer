import React from 'react';
import { makeStyles, createStyles, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() =>
  createStyles({
    gifImg: {
      width: '100%',
      maxHeight: '205px'
    },
    gifLabel: {

    },
    gifCard: {
      height: '100%'
    }
  })
);

export const GiphyGif = ({ title, url }) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.gifCard}>
        <CardActionArea>
          <CardMedia component="img" className={classes.gifImg} image={url} title={title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            view
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}