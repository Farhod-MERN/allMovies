import React, {useEffect, useState} from "react";
import Movies from "../components/Movies";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Main () {
  const [movies, setMovies] = useState([])
  const [loading , setLoading] = useState(true)
 
  // bizni loadingni qachoki API ga so'rov yuborilasg=hidan oldin ishlashi kerak, API dan javob kelganidan keyin esa uni yana false tenglab qo'yamiz
  // API dan foydalanish uchun unga biz so'rov yuborishimiz kerak. keyin uni jsonga o'girib, va response ni o'zimizni statedagi arrayga tenglaymiz
  
  useEffect(()=>{
    fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      } );
  }, [])

  const searchMovies = (str, type = "all")=>{
    setLoading(true) // bu serverga so'rov yuborilganda ishlaydi, javob kelganidan keyin esa yana false bo'ladi
    
    fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
    .then((response) => response.json())
    .then((data) => {
      setLoading(false);
      setMovies(data.Search)
    } );
  }
  // pastda loader qildik. u agar bizni movies bo'sh bo'lsa ishlaydi, agar uni ichida malumot bo'lsa yo'q

    return (
      <div className="content container">
        <Search searchMovies={searchMovies} />
        { loading ? <Loader /> : (<Movies movies={movies} />) }
      </div>
    );
  
}
// import React from "react";
// import Movies from "../components/Movies";
// import Loader from "../components/Loader";
// import Search from "../components/Search";
// export default class Main extends React.Component {
//   state = {
//     movies: [],
//     loading: true,
//   };
//   // bizni loadingni qachoki API ga so'rov yuborilasg=hidan oldin ishlashi kerak, API dan javob kelganidan keyin esa uni yana false tenglab qo'yamiz
// // API dan foydalanish uchun unga biz so'rov yuborishimiz kerak. keyin uni jsonga o'girib, va response ni o'zimizni statedagi arrayga tenglaymiz
//   componentDidMount() {
//     fetch("https://www.omdbapi.com/?apikey=329ffa13&s=panda")
//       .then((response) => response.json())
//       .then((data) => this.setState({ movies: data.Search, loading: false }));
//   }

//   searchMovies = (str, type = "all")=>{
//     this.setState({loading: true}) // bu serverga so'rov yuborilganda ishlaydi, javob kelganidan keyin esa yana false bo'ladi
    
//     fetch(`https://www.omdbapi.com/?apikey=329ffa13&s=${str}${type !== "all" ? `&type=${type}` : ""}`)
//     .then((response) => response.json())
//     .then((data) => this.setState({ movies: data.Search, loading: false }));
//   }
//   // pastda loader qildik. u agar bizni movies bo'sh bo'lsa ishlaydi, agar uni ichida malumot bo'lsa yo'q
//   render() {
//     return (
//       <div className="content container">
//         <Search searchMovies={this.searchMovies } />
//         { this.state.loading ? <Loader /> : (<Movies movies={this.state.movies} />) }
//       </div>
//     );
//   } 
// }
