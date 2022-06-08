import PropTypes from "prop-types";
export const Buttons = ({ buttons }) => {
  return (
    <>
      {buttons.map((button) => {
        return (
          <button key={button[0]} onClick={button[1]} name={button[0]}>
            {button[0]}
          </button>
        );
      })}
    </>
  );
};
Buttons.propTypes = {
  buttons: PropTypes.array,
};
