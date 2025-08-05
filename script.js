let input = document.querySelector("#input");
let addbtn = document.querySelector("#add");

addbtn.addEventListener("click", function(){
    let value = input.value;
    console.log(value);
})
let API = 'https://68921701447ff4f11fbf29de.mockapi.io/api/v1/todos'
async function addTask(){
    let data =await fetch(API);
    console.log(await data.json())
}
addTask()