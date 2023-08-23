const openModalButton = document.querySelectorAll("#btn-projects");
const closeModalButton = document.querySelectorAll("#close-modal");
const modal = document.querySelectorAll("#modal");

openModalButton.forEach((element,index) => {
  
  element.addEventListener("click", () => toggleModal(index));
});

closeModalButton.forEach((element,index) => {
  
  element.addEventListener("click", () => toggleModal(index));
});


const toggleModal = (index) => {
  modal[index].classList.toggle("hide");
};



