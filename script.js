function toggleMode() {
  const html = document.documentElement

  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */

  html.classList.toggle("Light") /*Acontece a mesma coisa que a condição só que mais simples */
}
