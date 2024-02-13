let filmData = [
  {
    title: "Spotting Aaron",
    workedOn: "Nov 2023",
    url: "https://www.youtube.com/embed/L8S1OmaDN5s?si=_7RX5mRWjUR8YevV",
    description: "Aaron tries to take a test.",
  },
  {
    title: "Tell Tail",
    workedOn: "Feb 2024",
    url: "https://www.youtube.com/embed/az8SANXh6IM?si=lIv3gEggWNJHPzJ_",
    description: "Single shot short film.",

  },
  {
    title: "Painting the Portrait",
    workedOn: "July 2022",
    url: "https://www.youtube.com/embed/QArHnmJhCMs?si=H-T3y0u6SpDOE2Q4",
    description: "Behind the scenes documentary of The Portrait.",
  },
  {
    title: "The Entire History of the Endverse",
    workedOn: "Dec 2023",
    url: "https://www.youtube.com/embed/HnvrvJ22z7M?si=foL6afip5DVphw_p",
    description: "Everything that happens in the entire Ender's Game book series.",
  },
  {
    title: "Other Friends but Spinel is Bill",
    workedOn: "April 2020",
    url: "https://www.youtube.com/embed/Uy9bZb83kN4?si=f0FM5OuNI79PqGM6",
    description: "An animation."
  },
  {
    title: "Trailer Mashup",
    workedOn: "Oct 2023",
    url: "https://www.youtube.com/embed/3_Kq0XcKOC8?si=K7PjH16No8qQtySb",
    description: "Keep. Your. Currency.",

  },
]
  

let jokeFilms = [
  {
    title: "The Detective",
    workedOn: "Oct 2022",
    url: "https://www.youtube.com/embed/q2fSrbLJdpk?si=fILKVfyXH8uPuK8m",
    description: "It's rude to die.",
  },
  {
    title: "Misaligned",
    workedOn: "Jul 2022",
    url: "https://www.youtube.com/embed/9ocGLIK8ib8?si=H5oQS_YoysI7MWxz",
    description: "Two children at an AI summer camp fall in love, and everything is amazing. Or is it?"
  },
]

let filmsIHelpedOn = [
  {
    title: "The Portrait",
    workedOn: "Mar 2022",
    url: "https://www.youtube.com/embed/AHwUDHgyFIY?si=0LC42lb8AKmTu3ks",
    description: "Acted + tech."
  },
  {
    title: "My Silent Friend",
    workedOn: "June 2023",
    url: "https://www.youtube.com/embed/HKnpFOSiCZk?si=W16i_gfoBH5AsxWy",
    description: "Helped with camera tech."

  },
  {title: "Master's Enterance Video 2023",
  workedOn: "May 2023",
  url: "https://www.youtube.com/embed/eM-X13BgBAk?si=Eo-A2tUpAhTZYl2S",
  description: "Writing + filming"
  },
  {
    title: "By the Lake",
    workedOn: "Dec 2022",
    url: "https://www.youtube.com/embed/hE_X0az-mYo?si=10TVcwQUc4NxF9fu",
    description: "I helped with the script on By the Lake. Later, spoofed it and made ByTheSoundtrack."
  },
]

let filmExtras = [
  {
    title: "Spotting Aaron Bloopers",
    workedOn: "Jan 2024",
    url: "https://www.youtube.com/embed/nuvhZCGybzc?si=r4moh7dHhgQ8B-Qb",
    description: "Bloopers from the filming of Spotting Aaron."
  },
  {
    title: "Painting the Portrait Commentary",
    workedOn: "Oct 2022",
    url: "https://www.youtube.com/embed/cEbEDBTPvj4?si=VCBlC8WfNEjzqXaE",
    description: "Commentary track for Painting the Portrait."
  }
]



document.addEventListener ('DOMContentLoaded', () => {
  const filmcardsContainer = document.querySelector ('.filmcardsContainer');

  function addFilmToContainer(film, filmcardsContainer){
    const filmCard = document.createElement ('div');
    filmCard.classList.add ('filmcard');

    const iframe = document.createElement ('iframe');
    iframe.src = film.url;
    iframe.frameBorder = '0';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    filmCard.appendChild (iframe);

    const title = document.createElement ('h2');
    title.textContent = film.title;
    filmCard.appendChild (title);

    const workedOn = document.createElement ('p');
    workedOn.textContent = film.workedOn;
    filmCard.appendChild (workedOn);

    const description = document.createElement ('p');
    description.textContent = film.description;
    filmCard.appendChild (description);

    filmcardsContainer.appendChild (filmCard);

  }

  filmData.forEach (film => {
    addFilmToContainer(film, document.querySelector ('#seriousFilms'))
  });

  jokeFilms.forEach (film => {
  addFilmToContainer (film, document.querySelector ('#jokeFilms'));
});

filmsIHelpedOn.forEach (film => {
  addFilmToContainer (film, document.querySelector ('#filmsIHelpedOn'));
});

filmExtras.forEach (film => {
  addFilmToContainer (film, document.querySelector ('#filmExtras'));
});



});


// document.addEventListener ('DOMContentLoaded', () => {
//   const filmcardsContainer = document.querySelector ('.filmcardsContainer');

//   function addFilmToContainer(filmList, container){
    
//   }

//   filmData.forEach (film => {
//     const filmCard = document.createElement ('div');
//     filmCard.classList.add ('filmcard');

//     const iframe = document.createElement ('iframe');
//     iframe.src = film.url;
//     iframe.frameBorder = '0';
//     iframe.allow =
//       'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
//     iframe.allowFullscreen = true;
//     filmCard.appendChild (iframe);

//     const title = document.createElement ('h2');
//     title.textContent = film.title;
//     filmCard.appendChild (title);

//     const workedOn = document.createElement ('p');
//     workedOn.textContent = film.workedOn;
//     filmCard.appendChild (workedOn);

//     const description = document.createElement ('p');
//     description.textContent = film.description;
//     filmCard.appendChild (description);

//     filmcardsContainer.appendChild (filmCard);
//   });
// });
