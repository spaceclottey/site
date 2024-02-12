let filmData = {
  "Spotting Aaron": {
    title: "Spotting Aaron",
    workedOn: "",
    url: "SpottingAaron.mp4",
    description: "Aaron tries to take a test.",
  },
  "Trailer Mashup": {
    title: "Trailer Mashup",
    workedOn: "Oct 2023",
    url: "Trailer_Mashup.mp4",
    description: "",

  },
  "Painting the Portrait": {
    title: "Painting the Portrait",
    workedOn: "Long time ago",
    url: "https://www.youtube.com/watch?v=QArHnmJhCMs",
    description: "All in one take.",
  },
  "Temp": {
    title: "",
    workedOn: "",
    url: "",
    description: "",
  }
}

let filmDivs = [];
for (const [key, film] of Object.entries (filmData)) {
  filmDivs.push(
    `<div class='filmcard'>
    <h2> ${film.title} </h2>
    <iframe width="420" height="230" src="${film.url}"/>
    <p> ${film.workedOn} </p>
    <p> ${film.description} </p>
  </div>
  `
  )
}

let filmContainer = document.getElementById("filmcardsContainer")
filmDivs.forEach(filmDiv => {
  filmContainer.innerHTML += filmDiv;
})