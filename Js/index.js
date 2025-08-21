//navbar toggler
const toggleNav = document.getElementById('navLinks');
const toggleIcon = document.querySelector('.toggler');

toggleIcon.onclick = () => {
  toggleNav.classList.toggle('active');
};

// for movie catalogue 
const movies = [
  {
    title: "Earth's Last Warriors",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "01:22:38",
    description: "In five days, Earth faces disaster. A former agent turned UFO investigator and an alien observer race against time—one to save humanity, the other to find the woman he loves..",
    poster: "images/movies/movie1.jpg",
    id: "hmu936_lMv8" 
  },
  {
    title: "The Revenger",
    year: 2025,
    genre: "Action",
    runtime: "01:32:58",
    description: "Recently paroled after serving a long stretch for his wife's murder, Joey One-Way aligns himself with a producer who has optioned the play he wrote in prison. As he sets about adapting his work for the big screen, Joey falls for his new pal's ex-con wife, and enters into a doomed affair.",
    poster: "images/movies/movie2.jpg",
    id: "NAnPWjg2uM4"
  },
  {
    title: "Next Stop Murder",
    year: 2010,
    genre: "Thriller",
    runtime: "01:29:14",
    description: "A woman discusses her family problems with a stranger she meets on a bus, but is horrified when her       confidant suggests each of them kill the person making the other's life difficult. ",
    poster: "images/movies/movie3.jpg",
    id: "Gsg27X-ubjY"
  },
    {
    title: "She Fought For Her Daughters' Freedom",
    year: 2019,
    genre: "Drama",
    runtime: "01:27:07",
    description: "A story about a woman, Shahida, who fights against the system. Shahida can't send her daughter to school because her husband will not allow her to go to a male teacher. Shahida's husband marries a ten-year-old girl who Shahida wants to save but fails. It is a struggle about how a woman guides her daughters to escape their town.",
    poster: "images/movies/movie4.jpg",
    id: "W3YuIPxg"
  },
    {
    title: "Love Finds a Way, Even in Busy Hearts",
    year: 2025,
    genre: "Romance",
    runtime: "01:27:37",
    description: "Kelly Lofton is a young, successful dentist who has all the material things a woman could ask for. However, Kelly has struggled to find time for love in her busy schedule, so when her younger sister Susan gets engaged to a seemingly perfect man and organizes an extravagant engagement party, Kelly panics.",
    poster: "images/movies/movie5.jpg",
    id: "iAod-ewuB8k"
  }
]

function showAllMovies() {
  let movieList = document.getElementById("movieList");
  movieList.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
        <img src="${movies[i].poster}" alt="${movies[i].title}" class="poster_img">
      <div class="details_div">
        <h2>${movies[i].title}</h2>
        <p class="movie_time">${movies[i].year} | ${movies[i].genre} | ${movies[i].runtime}</p>
        <p class="movie_descr" id="descr-${movies[i].id}">
          ${movies[i].description.slice(0, 200)}...
        </p>
        <div class="full-descr" id="full-descr-${movies[i].id}" style="display: none;">
          <p>${movies[i].description}</p>
        </div>
        <a href="#" class="read-more" onclick="toggleDescription('${movies[i].id}'); return false;">Read more...</a>
      </div>
    `;
    movieList.appendChild(card);
  }
}

function toggleDescription(movieId) {
  let shortDescr = document.getElementById(`descr-${movieId}`);
  let fullDescr = document.getElementById(`full-descr-${movieId}`);
  let readMoreLink = shortDescr.parentNode.querySelector('.read-more');

  if (fullDescr.style.display === 'none') {
    shortDescr.style.display = 'none';
    fullDescr.style.display = 'block';
    readMoreLink.textContent = 'Show less...';
  } else {
    shortDescr.style.display = 'block';
    fullDescr.style.display = 'none';
    readMoreLink.textContent = 'Read more...';
  }
}

showAllMovies();