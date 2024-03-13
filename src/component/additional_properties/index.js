import "./index.css";

import Box from "../box";

export default function AdditionalProperties({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
  ...rest
}) {
  return (
    <Box className="additional_properties">
      <div className="additional_header">
        <span
          className={`additional_details ${
            house_rules ? "additional_details" : ""
          }`}
        >
          {house_rules}
          {cancellation_policy}
          {local_transportation}
          {host_languages}
          {special_offers}
          {checkin_instructions}
        </span>
      </div>
      <List {...rest} house_rules={house_rules} />
    </Box>
  );
}
function List({
  house_rules,
  cancellation_policy,
  local_transportation,
  host_languages,
  special_offers,
  checkin_instructions,
  ...rest
}) {
  return (
    <ul className="additional_details">
      <li className="additional_title">
        <span>Додаткові властивості</span>
      </li>
      <li className="additional_details-item">
        <span className="additional_name">Правила дому</span>
        <span>
          Паління та домашні тварини заборонені. Тиша з 22.00 до 07.00
        </span>
        <span>{house_rules}</span>
      </li>

      <li className="additional_details-item">
        <span className="additional_name">Політика скасування</span>
        <span>
          Гнучка політика скасування з повним поверненням коштів у разі
          скасування з 7 днів до заїзду
        </span>
        <span>{cancellation_policy}</span>
      </li>

      <li className="additional_details-item">
        <span className="additional_name">Місцевий транспорт</span>
        <span>Громадські автобуси та таксі в межах пішої досяжності.</span>
        <span>{local_transportation}</span>
      </li>

      <li className="additional_details-item">
        <span className="additional_name">Мови хоста</span>
        <span>Англійська, іспанська</span>
        <span>{host_languages}</span>
      </li>

      <li className="additional_details-item">
        <span className="additional_name">Соціальні пропозиції:</span>
        <span>Знижка 10% при бронюванні від 7 ночей</span>
        <span>{special_offers}</span>
      </li>

      <li className="additional_details-item">
        <span className="additional_name">Інструкції щодо реєстрації:</span>
        <span>
          Час реєстрації - 15.00. Будь-ласка, зв'яжіться з нами заздалегідь,
          повідомте орієнтовний час свого прибуття.
        </span>
        <span>{checkin_instructions}</span>
      </li>
    </ul>
  );
}
