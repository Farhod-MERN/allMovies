import Movie from "./Movie";
import { NotFound } from "./NotFound";
export default function Movies(props) {
  const { movies = [] } = props;
  //biz moviesni aslidan api dan olamiz, lekin epidan biz noto'g'ri malumot qidirsak, u bizga hech narsa qaytarmaydi, shu sababli bizni propsdagi movies imiz array bo'lmay qoladi, shu sabab uni default qiymatini bo'sh arrayga tenglab qo'ydim, Nabodo biz API da yo'q narsa qidirganimizda , bizga API hech narsa qaytarmasa, bizdagi movies bizda bo'sh massivga teng bo'lib turadi
  return (
    <div className="movies">
      {/* {movies.map((movie) => (
        // <Movie key={movie.imdbID} {...movie}/>
         <Movie key={movie.imdbID} Type ={movie.Type} Year = {movie.Year} Title = {movie.Title} Poster ={movie.Poster}/>
      ))} */}
      { movies.length ? movies.map(movie => (<Movie key={movie.imdbID} {...movie}/>)) : <NotFound />}
    </div>
  );
}

// biz bu yerda statedagi datani olamiz , sikl yordamida uni movieda chiqaramiz
// map(movie) . bizga movies array qaytaradi va array ichida bizni har bir serialimiz objectga olingan bo'ladi. 
//biz uni map yordamida har bir ichidagi objectlarbi ushlab olamiz
