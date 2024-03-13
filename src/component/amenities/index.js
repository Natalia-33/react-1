import "./index.css";

import Box from "../box";

export default function Amenities({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airportshuttle,
  conciergeservice,
  roomservice,
  childfriendly,
  ...rest
}) {
  return (
    <Box className="amenities_details">
      <div className="amenities_header">
        <span
          className={`amenities_details ${pool ? "amenities_details" : ""}`}
        >
          {pool}
          {gym}
          {breakfast}
          {wifi}
          {parking}
          {pets}
          {airportshuttle}
          {conciergeservice}
          {roomservice}
          {childfriendly}
        </span>
      </div>
      <List {...rest} pool={pool} />
    </Box>
  );
}
function List({
  pool,
  gym,
  breakfast,
  wifi,
  parking,
  pets,
  airportshuttle,
  conciergeservice,
  roomservice,
  childfriendly,
  ...rest
}) {
  return (
    <ul className="amenities_details">
      <li className="amenities_title">
        <span>Зручності:</span>
      </li>
      <li className="amenities_details-item">
        <img src="../pool.svg" alt="/" />
        <span>Басейн</span>
        <span>{pool}</span>
      </li>

      <li className="amenities_details-item">
        <img src="../gym.svg" alt="/" />
        <span>Спортивний зал</span>
        <span>{gym}</span>
      </li>

      <li className="amenities_details-item">
        <img src="../breakfast.svg" alt="/" />
        <span>Безкоштовний сніданок</span>
        <span>{breakfast}</span>
      </li>

      <li className="amenities_details-item">
        <img src="../wifi.svg" alt="/" />
        <span>Безкоштовний wifi</span>
        <span>{wifi}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../parking.svg" alt="/" />
        <span>Безкоштовний вуличний паркінг</span>
        <span>{parking}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../pets.svg" alt="/" />
        <span>Дозволено розміщення з домашніми тваринами</span>
        <span>{pets}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../airport.svg" alt="/" />
        <span>Трансфер до/з аеропорту</span>
        <span>{airportshuttle}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../concierge.svg" alt="/" />
        <span>Консьєрж-сервіс</span>
        <span>{conciergeservice}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../roomservice.svg" alt="/" />
        <span>Обслуговування номерів</span>
        <span>{roomservice}</span>
      </li>
      <li className="amenities_details-item">
        <img src="../child.svg" alt="/" />
        <span>Підходить для дітей</span>
        <span>{childfriendly}</span>
      </li>
    </ul>
  );
}
