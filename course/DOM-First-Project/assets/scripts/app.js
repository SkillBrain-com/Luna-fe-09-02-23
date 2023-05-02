const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
// console.log(startAddMovieButton);
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;
// console.log(backdrop);
// console.log(addMovieModal);
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.getElementById("entry-text");
// console.log(cancelAddMovieButton);
// console.log(confirmAddMovieButton);

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  const movieIndx = movies.findIndex((movie) => {
    return movie.id === movieId;
  });
  movies.splice(movieIndx, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndx].remove();
  // listRoot.removeChild(listRoot.children[movieIndx]);
};

const deleteMovieHandler = (movieId) => {
  deleteMovie(movieId);
};

const renderNewMovieElemtn = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const clearMoveInput = () => {
  userInputs.forEach((usrInput) => (usrInput.value = ""));
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5)");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);

  toggleMovieModal();
  clearMoveInput();
  renderNewMovieElemtn(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const toggleBackDrop = () => {
  backdrop.classList.toggle("visible");
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackDrop();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
