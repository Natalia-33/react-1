import "./index.css";

import Box from "../box";

export default function PropertyDetails({
  guests,
  bedrooms,
  beds,
  baths,
  ...rest
}) {
  return (
    <Box className="property_details">
      <div className="property_header">
        <span
          className={`property_details ${guests ? "property_details" : ""}`}
        >
          {bedrooms}
          {beds}
          {baths}
        </span>
      </div>
      <List {...rest} guests={guests} />
    </Box>
  );
}
function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="property_details">
      <li className="property_title">
        <span>Деталі властивості:</span>
      </li>
      <li className="property_details-item">
        <img src="../guests.svg" alt="/" />
        <span>2 гості</span>
        <span>{guests}</span>
      </li>

      <li className="property_details-item">
        <img src="../bedrooms.svg" alt="/" />
        <span>1 спальня</span>
        <span>{bedrooms}</span>
      </li>

      <li className="property_details-item">
        <img src="../beds.svg" alt="/" />
        <span>1 ліжко</span>
        <span>{beds}</span>
      </li>

      <li className="property_details-item">
        <img src="../baths.svg" alt="/" />
        <span>1 ванна кімната</span>
        <span>{baths}</span>
      </li>
    </ul>
  );
}
