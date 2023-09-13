/*if (html.classList.contains("light")) {
  html.classList.remove("light")
} else {
  html.classList.add("light")
}
}*/
function togglemode() {
  const html = document.documentElement
  html.classList.toggle('light')


//pegar a tag img
const img = document.querySelector ("#profile img")
  //substituir a imagem
if (html.classList.contains('light')) {
  //se tiver light mode add img light 
  img.setAttribute('src', './avatar-light.png')
  //set tiver sem add img normal
} else { 
  img.setAttribute('src', './avatar.png' )
  }
}