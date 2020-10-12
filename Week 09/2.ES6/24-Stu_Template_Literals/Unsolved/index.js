// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "November Rain",
  artist: "GNR",
  ablum: "Use 2",
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
    <h1>${music.title}</h1>
    <p>${music.artist}</p>
    <p>${music.ablum}</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

