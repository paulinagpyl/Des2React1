const Alert = ({color, error}) => {
  const style = {backgroundColor:color}
  return (
    <>
      <div className={`alert alert-${color}`}> {error}</div>
    </>
  );
};

export default Alert;