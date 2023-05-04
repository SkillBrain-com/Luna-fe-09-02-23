const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const renderMovies = (filter = '') => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = ""; // low perfomance

  const filteredMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));

  filteredMovies.forEach((movie) => {
    const movieEl = document.createElement("li");
    // movieEl.textContent = movie.info.title + ' - ' + movie.info[extraName]; // don`t have acces to variable extraName which is in another function

    const {info, ...otherParam} = movie;

    let { getFormattedTitle } = movie;

    // let text = movie.getFormattedTitle() + " - ";

    // getFormattedTitle = getFormattedTitle.bind(movie)

        let text = getFormattedTitle.call(movie);

    for (const key in info) {
      if (key != "title") {
        text = text + ` ${key} : ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if(val.trim() === ''){
            this._title = 'DEFAULT'
        };
        this._title = val;
      },
      get title(){
        return this._title.toUpperCase;
      },
      [extraName]: extraValue,
    },
    id: Math.random().toString(),
    getFormattedTitle() {
        console.log(this);
        return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = '';
  console.log(newMovie.info.title)

  movies.push(newMovie);
  renderMovies();
};
 
const searchMovieHeandler = () => {
    console.log(this);
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHeandler);
