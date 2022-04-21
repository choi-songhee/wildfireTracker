const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2 className="location-info__title">Event Location Info</h2>
      <ul className="location-info__group">
        <li className="location-info__list">
          ID: <strong>{ info.id }</strong>
        </li>
        <li className="location-info__list">
          TITLE: <strong>{ info.title }</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
