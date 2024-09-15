import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      let choresList = ['Clean bathroom', 'Do laundry', 'Grocery shopping']
   return (
   <div>
      <h3 className= {classes.choresHeading}>Chores List</h3>
      <ol className={classes.choresBox}>
         <li className={classes.choresText}>{choresList[0]} <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rf8Ohys3H3TMKxNEkHsp7XjAGpL6lBI7bw&s" alt="cleaning the tiles in the bathroom" height={200} /></li>
         <li className={classes.choresText}>{choresList[1]} <img src="https://www.marthastewart.com/thmb/u9jD9XnOo84YeqlUyrBi5FQewwQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/our-best-laundry-tips-sort-colors-whites-getty-0923-19487a0ec97d4b67bf4810505285dba9.jpg" alt="washing machine and clothes in fornt of it" height={200} /></li>
         <li className={classes.choresText}>{choresList[2]} <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_30/2053951/170627-better-grocery-store-man-carrying-produce-se-539p.jpg" alt="man carrying a produce in the grocery store" height={200} /></li>
      </ol>
   </div>
   );

   }
}


export default ChoresList