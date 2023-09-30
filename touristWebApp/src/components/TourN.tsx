import { useState } from 'react';
import {Tour as TourType } from '../types'

type TourProps = {
    tour: TourType;
    // id: number;
    // image: string;
    // info: string;
    // name: string;
    // price: number;
    // removeTour: (id: number) => void;
};




    const Tour = ({ tour }: TourProps) => {
      const [readMore, setReadMore] = useState(false);
      const { image, name, price, info } = tour;
    return (
      <article className='single-tour'>
        <img src={image} alt={tour.name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
          <button className="delete-btn">
            not interested
          </button>
        </footer>
      </article>
    );
};


export default Tour;
