const CustomCard = (props) => {
  const { src, alt, CardBodyStyles, CardBodyImageStyles } = props;
  return (
    <div>
      <div className={CardBodyStyles}>
        <img className={CardBodyImageStyles} src={src} alt={alt} />
      </div>
    </div>
  );
};

export default CustomCard;
