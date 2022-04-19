import spinner from './spinner.gif'

const Loader = () => {
  return (
    <div className="loader">
      <img className="loader__image" src={spinner} alt="Loading"/>
      <h1 className="loader__text">Fetching Data</h1>
    </div>
  );
};

export default Loader;
