// Constants
// const orange = "#fabe00";
// const pink = "#fe878d";
const purple = "#6b1f6a";
const cyan = "#017b64";

// const grey = "#ababab";
// const darkGrey = "#282828";

const blue = "#326DE5";
const darkBlue = "#4042A9";
const dark = "#222222";
const light = "#F9FAFE";


const padding = 8;
const margin = 8;

// Styling body (background, font, warna font)
// document.body.style.backgroundImage = "url('dark-background.png')";
document.body.style.fontFamily = "'Consolas','Open Sans', 'Helvetica Neue', sans-serif";
document.body.style.color = dark;
document.body.style.backgroundColor = light;


// document.querySelectorAll(".card").forEach(e => e.style.border = `1px solid ${dark}`);

// Atur styling #main
// const main = document.getElementsByTagName("main")[0];
// main.style.width = "75%";
// main.style.margin = `${margin * 4}px auto`;

// #gradient
const gradien = document.querySelector("#gradient");
gradien.style.height = "10px";
gradien.style.backgroundImage = `linear-gradient(to right, ${blue}, ${purple}, ${cyan})`;
gradien.style.position = "fixed";
gradien.style.top = "0";
gradien.style.width = "100%";
gradien.style.z_index = "5";
