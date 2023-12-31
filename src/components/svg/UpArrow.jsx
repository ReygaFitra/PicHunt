function UpArrow(props) {
  const { width, height } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 15 15">
      <path fill="currentColor" fillRule="evenodd" d="M7.146 2.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L8 3.707V12.5a.5.5 0 01-1 0V3.707L3.854 6.854a.5.5 0 11-.708-.708l4-4z" clipRule="evenodd"></path>
    </svg>
  );
}

export default UpArrow;
