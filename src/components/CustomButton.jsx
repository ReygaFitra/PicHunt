const CustomButton = (props) => {
  const { text = '...', ButtonStyles, handleButtonSelection, selection } = props;
  const handleClick = () => {
    handleButtonSelection(selection);
  };

  return (
    <div>
      <button className={ButtonStyles} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
};

export default CustomButton;
