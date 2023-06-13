const CustomButton = (props) => {
  const { text = '...' } = props;
  return (
    <div>
      <button className="bg-secondary text-white py-1 px-2 my-3 rounded hover:bg-primary transition-all duration-200">{text}</button>
    </div>
  );
};

export default CustomButton;
