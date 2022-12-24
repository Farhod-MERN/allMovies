import React, {useState ,useRef, useEffect} from "react";

export default function Search (props) {
  const {searchMovies} = props
  const [search , setSearch] = useState("panda")
  const [type , setType] = useState("all")
  const searchRef = useRef(null)

  useEffect(()=>{
    searchRef.current.focus();
  }, [])
 
  const change = (e) => {
    setSearch(e.target.value)
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };
  const handleFilter = (e) => {
    setType(e.target.dataset.type)
    searchMovies(search, e.target.dataset.type)
  };
  // data-type ni olish uchun dataset dan foydalanamiz . 

  const click = () => {
    searchMovies(search, type);
  };

    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              className="validate input-search"
              id="email_inline"
              type="search"
              name="search"
              value={search}
              placeholder="search any movies, series, episodes"
              onChange={change}
              onKeyDown={handleKey}
              ref={searchRef}
            />
            <button className="btn search-btn" onClick={click}>
              Search movies
            </button>
          </div>
        </div>
        <div className="filter-item">
          <label>
            <input
              className="with-gap"
              type="radio"
              name="type"
              data-type="all"
              onChange={handleFilter}
              checked={type === "all"}
            />
            <span className="span-item">All</span>
          </label>
          <label>
            <input
              className="with-gap"
              type="radio"
              name="type"
              data-type="series"
              onChange={handleFilter}
              checked={type === "series"}
            />
            <span className="span-item">Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              type="radio"
              name="type"
              data-type="movie"
              onChange={handleFilter}
              checked={type === "movie"}
            />
            <span className="span-item">Movies</span>
          </label>
        </div>
      </div>
    );
  
}



// ***************** Class components *******************************

// import React from "react";

// export default class Search extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       search: "panda",
//       type: "all",
//     };

//     this.searchRef = React.createRef();
//   }
//   componentDidMount() {
//     this.searchRef.current.focus();
//   }

//   change = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleKey = (e) => {
//     if (e.key === "Enter") {
//       this.props.searchMovies(this.state.search, this.state.type);
//     }
//   };
//   handleFilter = (e) => {
//     this.setState( { type: e.target.dataset.type },()=>{
//         this.props.searchMovies(this.state.search, this.state.type)
//     });
//   };
//   // data-type ni olish uchun dataset dan foydalanamiz .

//   click = () => {
//     this.props.searchMovies(this.state.search, this.state.type);
//   };
//   render() {
//     return (
//       <div className="row">
//         <div className="col s12">
//           <div className="input-field">
//             <input
//               className="validate"
//               id="email_inline"
//               type="search"
//               name="search"
//               value={this.state.search}
//               placeholder="search any movies, series, episodes"
//               onChange={this.change}
//               onKeyDown={this.handleKey}
//               ref={this.searchRef}
//             />
//             <button className="btn search-btn" onClick={this.click}>
//               Search movies
//             </button>
//           </div>
//         </div>
//         <div>
//           <label>
//             <input
//               className="with-gap"
//               type="radio"
//               name="type"
//               data-type="all"
//               onChange={this.handleFilter}
//               checked={this.state.type === "all"}
//             />
//             <span>All</span>
//           </label>
//           <label>
//             <input
//               className="with-gap"
//               type="radio"
//               name="type"
//               data-type="series"
//               onChange={this.handleFilter}
//               checked={this.state.type === "series"}
//             />
//             <span>Series</span>
//           </label>
//           <label>
//             <input
//               className="with-gap"
//               type="radio"
//               name="type"
//               data-type="movie"
//               onChange={this.handleFilter}
//               checked={this.state.type === "movie"}
//             />
//             <span>Movies</span>
//           </label>
//         </div>
//       </div>
//     );
//   }
// }
