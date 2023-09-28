
import TourType from './TourN';

type ToursProps = {
    tours: TourType[];
}

export default function Tours(){
    return (
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          {tour.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </div>
      </section>
    );
}