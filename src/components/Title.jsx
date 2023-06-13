const Title = (props) => {
  const { TitleBodyStyles, TitleStyles, TitleDescriptionStyles, title, description } = props;
  return (
    <div className={TitleBodyStyles}>
      <h1 className={TitleStyles}>{title}</h1>
      <p className={TitleDescriptionStyles}>{description}</p>
    </div>
  );
};

export default Title;
