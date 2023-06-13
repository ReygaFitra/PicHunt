const CustomCard = (props) => {
  const { src, alt } = props;
  return (
    <div>
      <div className="bg-base w-[250px] h-[250px] rounded-xl overflow-hidden hover:scale-105 transition-all duration-200">
        <img className="w-full h-full rounded-xl object-cover transition-transform duration-300 transform hover:scale-110 cursor-pointer" src={src} alt={alt} />
      </div>
    </div>
  );
};

export default CustomCard;
