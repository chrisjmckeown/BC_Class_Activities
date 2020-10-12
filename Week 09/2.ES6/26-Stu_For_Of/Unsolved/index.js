
// let songs = document.querySelectorAll("li");
// console.log(songs);
// for(const song of songs){
//     song.classList.add("green");
// }

for (const song of $("#songs")[0].children) {
    song.classList.add("green");
}