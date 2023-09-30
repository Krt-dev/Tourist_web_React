
import { Tour as TourType } from "../types";
import Tour from './TourN';

type ToursProps = {
    tours: TourType[];
}

export default function Tours({ tours }: ToursProps){
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} tour = {tour}/>;
          })}
        </div>
      </section>
    );
}