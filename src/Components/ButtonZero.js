import "./ButtonZero.css";

const ButtonZero = ({ sign, handleClick, color }) => {
  return (
    <div
      onClick={() => handleClick(sign)}
      className="buttonSign"
      style={{ backgroundColor: color }}
    >
      {sign}
    </div>
  );
};

export default ButtonZero;
