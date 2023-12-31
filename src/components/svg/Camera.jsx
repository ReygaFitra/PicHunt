function Camera(props) {
  const { width, height } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 15 15">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 3a1 1 0 00-1 1v7a1 1 0 001 1h11a1 1 0 001-1V4a1 1 0 00-1-1H2zM0 4a2 2 0 012-2h11a2 2 0 012 2v7a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2 .25A.25.25 0 012.25 4h2.5a.25.25 0 01.25.25v1.505a.25.25 0 01-.25.25h-2.5a.25.25 0 01-.25-.25V4.25zm10.101 3.334a2.601 2.601 0 11-5.202 0 2.601 2.601 0 015.202 0zm1 0a3.601 3.601 0 11-7.202 0 3.601 3.601 0 017.202 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Camera;
