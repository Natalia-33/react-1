import "./index.css";

export default function PropertyDetails({
  className,
  children,
  shadow,
  title,
}) {
  return (
    <div
      className={`property_details ${
        shadow ? "property_details--shadow" : ""
      } ${className} `}
    >
      {children}
      {title}
    </div>
  );
}
