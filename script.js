let input = document.querySelector("#input");
let addbtn = document.querySelector("#add");
let listcontainer = document.querySelector(".listcontainer");
fetchTask()
addbtn.addEventListener("click", function(){
    let value = input.value;
    console.log(value);
    addTask(value)
    input.value = ""
    fetchTask()
})
let API = 'https://68921701447ff4f11fbf29de.mockapi.io/api/v1/todos'
async function fetchTask(){
    let fetchingdata =await fetch(API);
    let data = await fetchingdata.json();

    data.forEach(element => {
        let div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
        <p>${element.text}</p>
        <div class="butoncontainer">
            <button class="remove">Remove</button>
            <button class="edit">Edit</button>
        </div>
        `
        listcontainer.append(div);
    });
}

async function addTask(value){
    let data = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: value})
    })
}
