import "./index.css";

import Box from "../box";

export default function NearbyAttractions({ id, name, link, ...rest }) {
  return (
    <Box className="nearbyAttractions">
      <div className="nearbyAttractions_header">
        <span
          className={`nearbyAttractions ${
            id ? "nearbyAttractions_details" : ""
          }`}
        >
          {id}
          {name}
          {link}
        </span>
      </div>
      <List {...rest} id={id} />
    </Box>
  );
}
function List({ id, name, link, ...rest }) {
  return (
    <ul className="nearbyAttractions_details">
      <li className="nearbyAttractions_title">
        <span>Пам'ятки поблизу</span>
      </li>
      <li className="nearbyAttractions-item">
        <span>Кришталевий пляж</span>

        <span>{name}</span>
      </li>

      <li className="nearbyAttractions-item">
        <span>Пішохідні стежки тропічних лісів</span>

        <span>{name}</span>
      </li>

      <li className="nearbyAttractions-item">
        <span>Острів водоспадів</span>

        <span>{name}</span>
      </li>

      <li className="nearbyAttractions-item">
        <span>Культурні екскурсії</span>

        <span>{name}</span>
      </li>
    </ul>
  );
}
