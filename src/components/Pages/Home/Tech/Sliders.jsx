import React from "react";
import {InfiniteMovingCards} from "../../../ui/infinityscrool.jsx";
import cssImage from '../../../../assets/Images/Technologies/css.png'; // Import the image
import htmlImage from '../../../../assets/Images/Technologies/html.png'; // Import the image
import jsImage from '../../../../assets/Images/Technologies/js.png'; // Import the image
import sqlImage from '../../../../assets/Images/Technologies/sql.png'; // Import the image
import reactImage from '../../../../assets/Images/Technologies/react.png'; // Import the image
import tsxImage from '../../../../assets/Images/Technologies/tsx.png'; // Import the image
import phpImage from '../../../../assets/Images/Technologies/php.png'; // Import the image
import tailImage from '../../../../assets/Images/Technologies/tail.png'; // Import the image

const items = [
    { img: htmlImage, name: 'Name 1', title: 'Title 1' },
    { img: cssImage, name: 'Name 2', title: 'Title 2' },
    { img: jsImage, name: 'Name 3', title: 'Title 3' },
    { img: sqlImage, name: 'Name 4', title: 'Title 4' },
    { img: tsxImage, name: 'Name 5', title: 'Title 5' },
    { img: reactImage, name: 'Name 6', title: 'Title 6' },
    { img: phpImage, name: 'Name 7', title: 'Title 7' },
    { img: tailImage, name: 'Name 8', title: 'Title 8' }
  ];

function Slideer(){
    return(
        <div>
           <InfiniteMovingCards items={items} />
        </div>
    )
}

export default Slideer;