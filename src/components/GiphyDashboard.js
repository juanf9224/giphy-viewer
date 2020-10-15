import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";

import useDebounce from '../hooks/use-debounce';
import { searchGifs } from '../services/giphy.service';
import { GiphyGif } from './GiphyGif';


const useStyles = makeStyles(() =>
  createStyles({
    container: {},
    form: {
      padding: "5px",
    },
    searchBox: {
      width: "250px",
    },
    gifView: {},
  })
);

const GiphyDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const[gifs, setGifs] = useState([]);
  const classes = useStyles();
  const debouncedSearch = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearch) {
      searchGifs(debouncedSearch).then((gifs) => {
        if (gifs.data) {
          setGifs(
            gifs.data.map((g) => (
              <GiphyGif
                key={g.id}
                title={g.title}
                url={g.images.original.url}
              />
            ))
          );
        }
      });
    }
  }, [debouncedSearch]);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.form}>
          <form>
            <TextField
              id="outlined-basic"
              inputProps={{ className: classes.searchBox }}
              label="type the gif title"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        <div className={classes.gifView}>
          <Grid container spacing={2}>
            {gifs && gifs.length ? gifs : null}
          </Grid>
        </div>
      </div>
    </Fragment>
  );
}

export { GiphyDashboard as default };