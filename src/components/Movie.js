export default function Movie(props) {
    const { Title, Year, imdbID, Type, Poster } = props;
    return (
      <div key={imdbID} className="card movie">
        <div className="card-image waves-effect waves-block waves-light">
          <img alt="salom" className="activator" src={Poster} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {Title}<i className="material-icons right"></i>
          </span>
          <p>
            {Year} <span className="right">{Type}</span>
          </p>
        </div>
      </div>
    );
  }
  //bizda har bir natija (card) unique ID ga ega bo'lishi kerak, unga biz imdbID ni berib qo'yamiz