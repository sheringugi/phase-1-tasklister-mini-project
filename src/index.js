document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener("submit", (e) =>{
    e.preventDefault()
    let txt = document.getElementById('new-task-description').value
    console.log(txt)
  })
  
});