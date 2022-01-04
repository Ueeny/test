
let dropmenu = document.getElementById('dropmenu')

toggleClass(dropmenu)

function toggleClass(element) {
    element.addEventListener('click', () => {
        element.classList.toggle('active')
    })
}