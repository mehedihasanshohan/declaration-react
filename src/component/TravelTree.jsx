
const TravelTree = ({place}) => {
  const childPlaces = place.childPlaces;

  return (
    <>
      <li>
        {place.title}
        {childPlaces.length > 0 && (
          <ol>
            {childPlaces.map((place) => (
              <TravelTree key={place.id}
            place={place}>
            </TravelTree>))}
          </ol>
        )}
      </li>
    </>
  )
}

export default TravelTree