const panelBox = document.querySelectorAll('.panel')

panelBox.forEach((pan) => {
  pan.addEventListener('click', () => {
    removeActiveClass()
    pan.classList.add('active')
  })
})

function removeActiveClass() {
  panelBox.forEach((pan) => {
    pan.classList.remove('active')
  })
}
