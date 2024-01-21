import PropTypes from "prop-types";

const Alert = ({ color, error }) => {
  return <div className={`alert alert-${color}`}> {error}</div>;
};
Alert.propTypes = {
  color: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};
export default Alert;
