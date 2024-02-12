let filmData = [
  {
    title: "Spotting Aaron",
    workedOn: "Nov 2023",
    url: "https://www.youtube.com/embed/L8S1OmaDN5s?si=_7RX5mRWjUR8YevV",
    description: "Aaron tries to take a test.",
  },
  {
    title: "Trailer Mashup",
    workedOn: "Oct 2023",
    url: "https://www.youtube.com/embed/3_Kq0XcKOC8?si=K7PjH16No8qQtySb",
    description: "Everything was made using the power of love. Nobody really knows what it was caused by, but who cares?",

  },
  {
    title: "Painting the Portrait",
    workedOn: "Sum 2022",
    url: "https://www.youtube.com/embed/QArHnmJhCMs?si=H-T3y0u6SpDOE2Q4",
    description: "All in one take.",
  },
  {
    title: "The Entire History of the Endverse",
    workedOn: "Oct 2023",
    url: "https://www.youtube.com/embed/HnvrvJ22z7M?si=foL6afip5DVphw_p",
    description: "Everything that happens in the entire Ender's Game book series.",
  },
  {
    title: "Misaligned",
    workedOn: "Jul 2022",
    url: "https://www.youtube.com/embed/9ocGLIK8ib8?si=H5oQS_YoysI7MWxz",
    description: "Two children at an Artificial Intelligence Alignment Camp fall in love, and everything is amazing. Or is it?"
  }
]

document.addEventListener ('DOMContentLoaded', () => {
  const filmcardsContainer = document.querySelector ('.filmcardsContainer');

  filmData.forEach (film => {
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
  });
});
