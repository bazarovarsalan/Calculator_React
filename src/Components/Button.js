import "./Button.css";

const Button = ({ sign, handleClick, color }) => {
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

export default Button;
