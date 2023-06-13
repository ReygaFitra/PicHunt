const CustomButton = (props) => {
  const { text = '...', ButtonStyles } = props;
  return (
    <div>
      <button className={ButtonStyles}>{text}</button>
    </div>
  );
};

export default CustomButton;
