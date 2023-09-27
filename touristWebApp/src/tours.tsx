// import React from 'react';
// import Tour from './tour';

// interface ToursProps {
//     tours: Tour[];
//     removeTour: (id: number) => void;
//   }
//   const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
//     return (
//       <section>
//         <div className="title">
//           <h2>our tours</h2>
//           <div className="underline"></div>
//         </div>
//         <div>
//           {tours.map((tour) => {
//             return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
//           })}
//         </div>
//       </section>
//     );
//   };
  

//   export default Tours;

import React from 'react';
import TourProps from './tour';

interface ToursProps {
  tours: TourProps[];
  removeTour: (id: number) => void;
}

const Tours: React.FC<ToursProps> = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
