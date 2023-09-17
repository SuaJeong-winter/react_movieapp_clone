import React from "react";
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  //로딩 상태를 구분해주는 변수 isLoading state
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  // 컴포넌트가 처음 화면에 그려지는 실행되는 함수 componentDidMount()
  componentDidMount() {
    this.getMovies();
  }


  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
        ) : (
          <div className="movies">
            {
              movies.map((movie) => {
                console.log(movie);
                return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />;
              })}
          </div>
        )};
      </section>
    );
  }

}

export default Home;
