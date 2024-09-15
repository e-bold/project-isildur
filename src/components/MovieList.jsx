import React from 'react';
import classes from './MovieList.module.css';

class MovieList extends React.Component {
   render() {
      const movies = ["Pride and Prejudice", "Road House", "Interstellar", "The Wolf of Wall Street"];
      return (
      <div >
         <h3 className = {classes.movieHeading}>Movies I Watched This Month</h3>
         <ol className={classes.movieBox}>
            <li className={classes.movieText}>{movies[0]} <img src="https://s3.amazonaws.com/nightjarprod/content/uploads/sites/249/2024/04/25131246/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg" alt="pride and prejudice" height={200} /></li>
            <li className={classes.movieText}>{movies[1]} <img src="https://deadline.com/wp-content/uploads/2024/02/RDHS_2024_SPStatic_JakeNeon_1080x1920_PRE_NoDimple_PV_FINAL_en-US_CPS.jpg?w=864" alt="road house" height={200} /></li>
            <li className={classes.movieText}>{movies[2]} <img src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="interstellar" height={200} /></li>
            <li className={classes.movieText}>{movies[3]} <img src="https://m.media-amazon.com/images/I/51SOEf96OEL._SX300_SY300_QL70_FMwebp_.jpg" alt="wolf of wall street" height={200} /></li>
         </ol>
      </div>
      );
   }
}

export default MovieList;