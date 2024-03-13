import "./index.css";

export default function Contact_info({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="contact_info">
      <div className="contact__sub-block">
        <span className="contact__sub-image">
          <img src="./image.png" alt="/" />
        </span>
        <div className="contact__sub-card">
          <h1 className="contact__text">{name}</h1>
        </div>

        <span className="contact__sub-block">{phone}"+123-456-7890"</span>

        <span className="contact__sub-block">
          {response_time} Протягом години
        </span>

        <span className="contact__sub-block">
          {response_rate} 100% відсотків швидкості відгуку
        </span>
      </div>

      <span className="contact__sub-info">
        {info}Я кінорежисерка і телевізійний продюсер Остіна-Брукліна, якого
        можна знайти на велосипеді до Фермерського ринку
      </span>
    </div>
  );
}
