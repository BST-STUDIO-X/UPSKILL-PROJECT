// image slider 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

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
  },
    {
    title: "The Curse of The Forgotten Tribe",
    year: 2009,
    genre: "Horror",
    runtime: "01:32:05",
    description: "A group of university students travel to a remote land deep in the Florida swamps to complete their thesis project on Native American Folklore. These grounds have the power to bring sins back to life, to bring the dead back to life, punishing or killing whoever is guilty of serious crimes. As the students quickly find out… past actions can lead to present nightmares.",
    poster: "images/movies/movie6.jpg",
    id: "vBAsCMuQDOo"
  },
    {
    title: "Daddy Daughter Trip",
    year: 2025,
    genre: "Comedy",
    runtime: "01:36:34",
    description: "Larry Bublé, an ambitious yet broke inventor, is struggling to keep his family eating and sleeping indoors. When he promises his eight-year-old-daughter the spring break vacation of a lifetime, he is forced to get more inventive than ever before.",
    poster: "images/movies/movie7.jpg",
    id: "fIhM9MiEN50"
  },
   {
    title: "Sky Force",
    year: 2025,
    genre: "Action",
    runtime: "02:48",
    description: "This Republic Day, witness the untold story of a heroic sacrifice - the tale of India’s first and deadliest airstrike.",
    poster: "images/movies/movie8.jpg",
    id: "PKsVB1wPZ78"
  },
   {
    title: "Veeda",
    year: 2024,
    genre: "Thriller",
    runtime: "03:10",
    description: " Vedaa is a story of bravery, of the power of one. It is the story of an uprising, of challenging a draconian system. It is the story of a young woman who fought back, steered and championed by the one man she believed was her saviour, who became her weapon. It is the story of a man who found himself in helping Vedaa find justice.",
    poster: "images/movies/movie9.jpg",
    id: "R8kWGU7fiAo"
  },
   {
    title: "MAA",
    year: 2025,
    genre: "Drama",
    runtime: "02:24",
    description: "A mother travels with her daughter to her late husband’s ancestral village, unaware it’s haunted by a dark legacy of female infanticide. As girls begin vanishing, she learns a vengeful spirit has marked her child as its next victim, forcing her into a supernatural fight for survival",
    poster: "images/movies/movie10.jpg",
    id: "lVvMbXiJjko"
  },
  {
    title: "Maktoob",
    year: 2025,
    genre: "Comedy",
    runtime: "03:00",
    description: "the film spotlights performers with Down syndrome in key roles, weaving their stories into an uplifting narrative about inclusion, resilience, and the idea that destiny — as the title’s Arabic meaning suggests — is already written.",
    poster: "images/movies/movie11.jpg",
    id : "B6e7jvDKA7w"
  },
   {
    title: "Ground Zero",
    year: 2025,
    genre: "Thriller",
    runtime: "02:42",
    description: "The film follows a Border Security Force officer assigned to a tense mission in Jammu and Kashmir. As the conflict escalates, his professional duty collides with a deeply personal journey, exploring the human cost of violence and the fragile hope for peace.",
    poster: "images/movies/movie12.jpg",
    id: "oAdc62oGzW8"
  },
   {
    title: "Maalik",
    year: 2025,
    genre: "Action",
    runtime: "02:45",
    description: "Set in late‑1980s Allahabad, it follows Deepak, a young man from a farming family whose life is upended when his father is brutally injured defending his employer’s land. Seeking revenge, Deepak kills the attacker “Langda” — a choice that pulls him into the criminal underworld.",
    poster: "images/movies/movie13.jpg",
    id: "4tUkrRrXl2Q"
  },
   {
    title: "Game Changer",
    year: 2025,
    genre: "Action",
    runtime: "02:37",
    description: "The film follows an IAS officer determined to reform India’s political system from within, taking on entrenched corruption and power abuse. His mission pits him against dangerous adversaries in both politics and business, blending high‑stakes drama with large‑scale action sequences.",
    poster: "images/movies/movie14.jpg",
   id : "QSu9-DBjMPI"
  },
   {
    title: "Bhool Chuk Maaf",
    year: 2025,
    genre: "Romance",
    runtime: "02:50",
    description: "In Varanasi, lovers Titli Mishra (Wamiqa Gabbi) and Ranjan Tiwari (Rajkummar Rao) plan to marry, but her father insists Ranjan must have a government job. Ranjan secures one through a bribe, breaking a vow he made to do a good deed if he got the job. On the eve of his wedding, he becomes trapped in a time loop, reliving his haldi day over and over.",
    poster: "images/movies/movie15.jpg",
    id: "8E_IeWynvnc"
  },
   {
    title: "The Population is Deadly",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "01:29:09",
    description: "When solar debris unexpectedly crashes into Earth, the planet is thrown into chaos. Massive destruction spreads across cities and landscapes, while intense solar radiation triggers horrifying genetic mutations in humans.",
    poster: "images/movies/movie16.jpg",
    id: "R3nvzPg_-zw"
  },
   {
    title: "Alpha Code",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "01:35:40",
    description: "Johana, a woman with no past, is hiding from a UN Agent Bowie, a head of secret space program. On her run she meets Martin and with help of Bowie's ex-colleague Lance they both help Martin to find his half alien daughter",
    poster: "images/movies/movie17.jpg",
    id : "xCh_AWzw7Xk"
  },
   {
    title: "Ice Twisters",
    year: 2023,
    genre: "Sci-Fi",
    runtime: "01:30:40",
    description: "As global warming accelerates, drought ravages the usually rainy Pacific Northwest.  Using liquid nitrogen, Project Rain Dance is meant to solve the problem and induce rain. ",
    poster: "images/movies/movie18.jpg",
   id: "54lLf-4eLZc"
  },
   {
    title: "Black Easter",
    year: 2021,
    genre: "Action",
    runtime: "01:53:49",
    description: "The film Black Easter (2021) tells the story of extremists who use time travel technology to change the course of history by stopping the crucifixion of Christ",
    poster: "images/movies/movie19.jpg",
    id: "tFkDosOCzCw"
  },
   {
    title: "Passengers on a Plane Fall Into Time Hole",
    year: 2025,
    genre: "Thriller",
    runtime: "02:57:39",
    description: "The story follows a group of passengers on a red-eye flight who wake up to find most of the people on board have mysteriously vanished. Upon landing at an abandoned airport, they realize they are trapped in a strange, lifeless version of reality where time itself is unraveling.",
    poster: "images/movies/movie20.jpg",
    id: "nyfGJk20gkg"
  },
   {
    title: "The Uglies",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "01:32:43",
    description: "In a post‑apocalyptic future, society enforces a rigid beauty standard: at sixteen, every “Ugly” must undergo extreme cosmetic surgery to become a “Pretty” and live in luxury. Those who resist are exiled to The Smoke, a hidden community living freely in nature.",
    poster: "images/movies/movie21.jpg",
    id: "L1-fR2s1sYI"
  },
   {
    title: "Revelations",
    year: 2025,
    genre: "Thriller",
    runtime: "01:45",
    description: "A pastor is convinced that a divine revelation has called him to punish the person guilty of a missing person case, while a detective assigned to the case is haunted by her dead sister's shadow.",
    poster: "images/movies/movie22.jpg",
    id: "bf94tyEpvCU"
  },
   {
    title: "Moving",
    year: 2023,
    genre: "Drama",
    runtime: "02:13",
    description: "Three seemingly ordinary high‑school students — Kim Bong‑seok, Jang Hee‑soo, and Lee Kang‑hoon — secretly inherited genetic superhuman abilities from their parents. Their quiet lives unravel when a shadowy organisation begins hunting them down one by one.",
    poster: "images/movies/movie23.jpg",
    id: "d_SFsZEZAy4"
  },
   {
    title: "Boy in the Pool",
    year: 2025,
    genre: "Drama",
    runtime: "01:57",
    description: "Seok‑young, a confident young woman who loves swimming, moves to a seaside town where she meets Woo‑ju — a shy boy born with webbed feet and a hidden gift for the water. Their bond deepens after he rescues her from drowning, blossoming into first love.",
    poster: "images/movies/movie24.jpg",
   id: "-St7lNMHcDU"
  },
   {
    title: "Past Lives",
    year: 2023,
    genre: "Romance",
    runtime: "02:24",
    description: "The story spans 24 years, following childhood friends Na Young and Hae Sung from their early connection in Seoul, through years of separation after her family emigrates, to an emotional reunion in adulthood.",
    poster: "images/movies/movie25.jpg",
    id: "kA244xewjcI"
  },
   {
    title: "Project Silence",
    year: 2024,
    genre: "Thriller",
    runtime: "01:25",
    description: " Due to sudden deteriorating weather conditions, visibility on the Airport Bridge is severely impaired, leaving people stranded and at risk of the bridge collapsing due to a series of chain collisions and explosions. ",
    poster: "images/movies/movie26.jpg",
    id: "b57d2kj1gUA"
  },
   {
    title: "Abeni",
    year: 2025,
    genre: "Drama",
    runtime: "01:26",
    description: "Drama centred on a woman whose life becomes entangled in love, betrayal, and difficult choices that test her strength and loyalty.",
    poster: "images/movies/movie27.jpg",
    id: "DKzu5eADh_Q"
  },
   {
    runtime: "01:26",
    title: "Secret of a Billionaire",
    year: 2025,
    genre: "Drama",
    runtime: "01:53",
    description: "Drama about the glamorous but dangerous world of extreme wealth. It teases the story of a powerful billionaire whose outward success hides deep personal secrets.",
    poster: "images/movies/movie28.jpg",
    id: "KCufHzNr8fo"
  },
   {
    title: "Love and Royalty",
    year: 2024,
    genre: "Romance",
    runtime: "02:10",
    description: "Drama where romance collides with the weight of tradition and status. The story teases a love affair challenged by royal expectations, social hierarchies, and the clash between personal desire and duty.",
    poster: "images/movies/movie29.jpg",
    id: "pjR0a5LGMjY"
  },
   {
    title: "Twist of Fate",
    year: 2025,
    genre: "Drama",
    runtime: "02:12",
    description: "Drama that follows the emotional journey of characters whose lives are upended by unexpected events. The story centers around love, betrayal, and the unpredictable turns that fate can take, forcing individuals to confront painful truths and make life-altering decisions.",
    poster: "images/movies/movie30.jpg",
    id: "PJ5IKzwbMVE"
  },
   {
    title: "Loving Aduke",
    year: 2025,
    genre: "Romance",
    runtime: "02:01",
    description: "LOVING ADUKE tells the story of Aduke, a woman caught between love and loyalty as she navigates emotional trials that test her heart and identity.",
    poster: "images/movies/movie31.jpg",
    id: "3w_kEpOeahs"
  },
   {
    title: "Blind Orphan",
    year: 2025,
    genre: "Drama",
    runtime: "02:00",
    description: "BLIND ORPHAN tells the poignant story of a young orphan who must navigate life without sight and without family",
    poster: "images/movies/movie32.jpg",
    id: "1bu-RMEkwfc"
  },
   {
    title: "Dubem",
    year: 2025,
    genre: "Drama",
    runtime: "01:41",
    description: "DUBEM follows the emotional journey of a young man whose life is shaped by hardship, resilience, and the search for identity.",
    poster: "images/movies/movie33.jpg",
    id: "bqb4WkqoRTY"
  },
   {
    title: "Pains of Royalty",
    year: 2024,
    genre: "Drama",
    runtime: "02:07",
    description: "PAINS OF ROYALTY explores the hidden struggles behind the grandeur of royal life. Beneath the crown lies a world of emotional turmoil, betrayal, and sacrifice.",
    poster: "images/movies/movie34.jpg",
    id: "bqb4WkqoRTY"
  },
   {
    title: "Indecent Proposal",
    year: 2025,
    genre: "Thriller",
    runtime: "01:11",
    description: "INDECENT PROPOSAL explores the emotional fallout of a morally complex offer that tests the boundaries of love, loyalty, and desperation.",
    poster: "images/movies/movie35.jpg",
    id: "7GoKJjcT1bQ"
  },
   {
    title: "The Love I Ordered",
    year: 2025,
    genre: "Romance",
    runtime: "01:51",
    description: "THE LOVE I ORDERED tells the story of a man who seeks love on his own terms only to discover that matters of the heart can’t be controlled or predicted",
    poster: "images/movies/movie36.jpg",
    id: "hLgNXyQ0wqvY"
  },
   {
    title: "Treasure in the Dust",
    year: 2025,
    genre: "Drama",
    runtime: "01:40:42",
    description: "TREASURE IN THE DUST explores the emotional complexities of love and relationships in a deeply human and culturally resonant way",
    poster: "images/movies/movie37.jpg",
    id: "6ScP7rib8l4"
  },
   {
    title: "The Test",
    year: 2025,
    genre: "Comedy",
    runtime: "01:03:56",
    description: "A lighthearted Nigerian comedy that dives into the chaos of a family trying to navigate a simple situation that quickly spirals out of control.",
    poster: "images/movies/movie38.jpg",
    id: "YHodYHeqM7I"
  },
   {
    title: "Buried Secrets",
    year: 2025,
    genre: "Rhriller",
    runtime: "01:52:20",
    description: "In BURIED SECRETS, a seemingly ordinary household becomes the epicenter of chaos when long-hidden truths begin to surface.",
    poster: "images/movies/movie39.jpg",
    id : "uHZkwvJmeB4"
  },
   {
    title: "Blood and Hustle",
    year: 2025,
    genre: "Action",
    runtime: "01:44:21",
    description: "A young hustling man runs into serious trouble at work, landing himself in massive debt. Desperate, he escapes to his brother’s home in the city, where he begins to showcase his hidden culinary talent",
    poster: "images/movies/movie40.jpg",
    id: "4aKTeICUPQs"
  },
   {
    title: "The Silent Intruder",
    year: 2025,
    genre: "Thriller",
    runtime: "01:55:47",
    description: "The Silent Intruder is a gripping psychological thriller that explores the delicate threads of trust, betrayal, and emotional warfare in marriage.  ",
    poster: "images/movies/movie41.jpg",
    id: "h9KzfSJOSoA"
  },
   {
    title: "When She Came",
    year: 2025,
    genre: "Comedy",
    runtime: "02:34:50",
    description: "Follows the story of a mysterious woman whose arrival disrupts the balance of a household",
    poster: "images/movies/movie42.jpg",
    id: "zU8bYO7EpNQ"
  },
   {
    title: "One Wild Night",
    year: 2025,
    genre: "Romance",
    runtime: "01:50:45",
    description: "When a single mother's warning goes unheeded, her sons throw a wild party, leading to a frantic search for missing jewelry box and a race against time before their mother's return.",
    poster: "images/movies/movie43.jpg",
    id: "FkUFlpFIhwE"
  },
   {
    title: "The Nutty Neighbors",
    year: 2025,
    genre: "Drama",
    runtime: "01:59:58",
    description: "Newlyweds Uchenna and Voke Uba move into a luxurious estate, determined to make a name for themselves among their elite neighbors even if it means faking it till they make it.",
    poster: "images/movies/movie44.jpg",
    id: "zFlPj718jmg"
  },
   {
    title: "She Can Astral Travel Back In Time",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "01:04:12",
    description: "A luminous force within Mount Shasta may hold clues behind the disappearance of Emma Rose's brother and grandfather.",
    poster: "images/movies/movie45.jpg",
    id: "l-QWxBe6Qrw"
  },
   {
    title: "The Spark",
    year: 2024,
    genre: "Sci-Fi",
    runtime: "11:24",
    description: "Humanity is long gone. After an apocalyptic war, a member of the team of robots tasked with finding a new hope for life discovers a mysterious map.",
 poster: "images/movies/movie46.jpg",
    id: "b6uFspnZWCc"
  },
   {
    title: "Reborn",
    year: 2024,
    genre: "Sci-Fi",
    runtime: "09:34",
    description: "An old man reflects on his past, having spent his entire life within the confines of a spacecraft. He wonders when the time will come for him to find the true purpose of his life.",
    poster: "images/movies/movie47.jpg",
    id: "ZfaoMmoqRWc"
  },
   {
    title: "Show Pub Queen",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "12:42",
    description: "Show Pub Queen follows the story of an underground Japanese performer who works at a Gentleman's Club and aspires to be recognized for her talent, but only receives unpleasant attention from the public.",
    poster: "images/movies/movie48.jpg",
    id: "8ruaeeYFD0A"
  },
   {
    title: "Soulmate",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "14:15",
    description: "A lonely computer coder battles to save her illegal romance with a seemingly conscious AI.",
    poster: "images/movies/movie49.jpg",
    id : "beXtqlusOAQ"
  },
   {
    title: "InTransit",
    year: 2024,
    genre: "Romance",
    runtime: "29.00",
    description: "Two young strangers must believe the impossible, for one to escape a life of sadness and for the other to return home.",
    poster: "images/movies/movie50.jpg",
    id: "CDlUbmgMLeU"
  },
   {
    title: "Coalescence",
    year: 2025,
    genre: "Family, Sci-Fi",
    runtime: "09:06",
    description: "Laverna and Janus use brain-to-brain interfacing technology to merge their minds. Two brains. One consciousness. But as their memories combine, they must face an unsettling question: who will they become?",
    poster: "images/movies/movie51.jpg",
    id: "JAXoxexce48"
  },
   {
    title: "Multiverse Dating for Beginners",
    year: 2024,
    genre: "Sci-Fi",
    runtime: "12:31",
    description: "A surrealist look at the romantic comedy and how each choice creates a new world",
    poster: "images/movies/movie52.jpg",
    id: "A1mQXEqhqU0"
  }
  ,
   {
    title: "A Matter of Choice",
    year: 2025,
    genre: "Sci-Fi",
    runtime: "14:33",
    description: "After unexpectedly finding a connection in the waiting room of an assisted-suicide clinic, Mallory and Drystan are left with a choice: do they stay or do they go?",
    poster: "images/movies/movie53.jpg",
    id: "GvLhhozIdFo"
  },
   {
    title: "Signal Dark",
    year: 2024,
    genre: "Action",
    runtime: "14:36",
    description: "Lucas Anderson is an insular IT technician whose life is turned upside down when he stumbles across a mysterious email and its reality bending contents.",
    poster: "images/movies/movie54.jpg",
    id: "pxMQQUyMWdw"
  }
];

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
          <button class="watch-btn" onclick="watchMovie('${movies[i].id}')">Join Virtual Cinema</button>
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

function watchMovie(videoId) {
  window.location.href = `cinema.html?v=${videoId}`;
}

function filterMovies() {
  let genre = document.getElementById("genreSelect").value;
  let year = document.getElementById("yearSelect").value;
  let filteredMovies = movies;

  if (genre) {
    filteredMovies = movies.filter(movie => movie.genre.includes(genre));
  }
  if (year) {
    filteredMovies = filteredMovies.filter(movie => movie.year == year);
  }
  showFilteredMovies(filteredMovies);
}

function showFilteredMovies(movieList) {
  let movieListDiv = document.getElementById("movieList");
  movieListDiv.innerHTML = "";
  for (let i = 0; i < movieList.length; i++) {
    let card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <a href="${movieList[i].watchLink}" target="_blank" class="poster">
        <img src="${movieList[i].poster}" alt="${movieList[i].title}" class="poster_img">
      </a>
      <div class="details_div">
        <h2>${movieList[i].title}</h2>
        <p>${movieList[i].year} | ${movieList[i].genre} | ${movieList[i].runtime}</p>
        <p class="movie_descr" id="descr-${movieList[i].id}">
          ${movieList[i].description.slice(0, 150)}...
        </p>
        <div class="full-descr" id="full-descr-${movieList[i].id}" style="display: none;">
          <p>${movieList[i].description}</p>
          <button class="watch-btn" onclick="watchMovie('${movieList[i].id}')">Join Virtual Cinema</button>
        </div>
        <a href="#" class="read-more" onclick="toggleDescription('${movieList[i].id}'); return false;">Read more...</a>
      </div>
    `;
    movieListDiv.appendChild(card);
  }
}

// Start the page
document.getElementById("genreSelect").addEventListener("change", filterMovies);
document.getElementById("yearSelect").addEventListener("change", filterMovies);
showAllMovies();

// Add genre choices
let genreSelect = document.getElementById("genreSelect");
let genres = ["Comedy", "Action", "Thriller", "Drama", "Romance", "Sci-Fi"];
for (let i = 0; i < genres.length; i++) {
  let option = document.createElement("option");
  option.value = genres[i];
  option.textContent = genres[i];
  genreSelect.appendChild(option);
}

// Add year choices
let yearSelect = document.getElementById("yearSelect");
for (let y = 2025; y >= 2020; y--) {
  let option = document.createElement("option");
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}