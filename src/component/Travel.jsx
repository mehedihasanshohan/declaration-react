import { useState } from 'react';
import { initialTravelPlan } from '../component/data';

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;
  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map(place => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelPlan({id, placesById}) {
  const place = placesById[id];
  const [plan, setPlan] = useState(initialTravelPlan);

  const root = plan[0];

  const planetIds = root.childIds;
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map(placeId => (
          <PlaceTree key={placeId} id={placeId} placesById={plan} />
        ))}
      </ol>
    </>
  );
}
