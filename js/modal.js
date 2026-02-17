const modal = document.querySelector('[data-modal]')
const openModalBtn = document.querySelector('[data-modal-open]')
const closeModalBtn = document.querySelector('[data-modal-close]')

const toggleModal = () => {
	modal.classList.toggle('is-open')
}

openModalBtn.addEventListener('click', toggleModal)
closeModalBtn.addEventListener('click', toggleModal)
