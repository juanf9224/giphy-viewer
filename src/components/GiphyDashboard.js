import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import { searchGifs } from '../services/giphy.service';


const useStyles = makeStyles(() => createStyles({
  container: {

  },
  form: {

  },
  gifView: {

  }
}));

const GiphyDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const[gifs, setGifs] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (searchTerm) {
      const gifs = searchGifs(searchTerm);
      setGifs(gifs.data.map(g => (
        <div>
          <label>{g.slug}</label>
          <image src={g.url} alt="gif show" />
        </div>
      )));
    }
  }, [searchTerm]);

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.form}>
          <form>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </div>

        <div className={classes.gifView}>
          {gifs && gifs.length ? gifs : null}
        </div>
      </div>
    </Fragment>
  );
}

export { GiphyDashboard as default };