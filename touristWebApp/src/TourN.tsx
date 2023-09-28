import { useState } from 'react';
import {Tour as TourType } from './types'

type Tourprops = {
    tour: TourType;
    id: number;
    image: string;
    info: string;
    name: string;
    price: number;
    removeTour: (id: number) => void;
};


const Tour = ({ tour }: Tourprops) => {

    const Tour: React.FC<Tourprops> = ({ id, image, info, name, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
      <article className="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? 'show less' : '  read more'}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </article>
    )
}
}
