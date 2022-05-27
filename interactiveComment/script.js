const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-btn')
// const openModal = document.querySelector('open-btn')

openModal.addEventListener('click', ()=>{
  modal.showModal()
})

//reply functionality
const showInput = document.querySelectorAll('.reply')

showInput.forEach((btn) => 
  btn.addEventListener("click",(e)=>{
    let parentDiv = e.target.closest('.comment__container');

    let idDiv = parentDiv.id
    
    if(idDiv){
      let childDiv = parentDiv.querySelectorAll(`[dataset=${idDiv}]`)
      childDiv.forEach((child)=> child.classList.toggle("opened"))
    }
  })
)