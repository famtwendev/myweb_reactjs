import PropTypes from "prop-types";
import { useState } from "react";

const ColorBox = ({ initialColor, onColorChange }) => {
  const [color, setColor] = useState(initialColor || "white"); // Set default or prop value

  const handleClick = (newColor) => {
    setColor(newColor);
    onColorChange && onColorChange(newColor); // Call callback if provided
  };

  return (
    <div style={{ backgroundColor: color, padding: "10px" }}>
      <button onClick={() => handleClick("black")}>Change to black</button>
      <button onClick={() => handleClick("white")}>Change to white</button>
    </div>
  );
};

ColorBox.propTypes = {
  initialColor: PropTypes.string,
  onColorChange: PropTypes.func,
};

export default ColorBox;
