// Dark mode

export const mode = document.getElementById('mode_icon')

mode.addEventListener('click', () => {
  const geral = document.querySelector('#white')
  if (mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon')
    mode.classList.add('fa-sun')
    geral.classList.add('darkmode')
  } else if (mode.classList.contains('fa-sun')) {
    mode.classList.remove('fa-sun')
    mode.classList.add('fa-moon')
    geral.classList.remove('darkmode')
  }
});