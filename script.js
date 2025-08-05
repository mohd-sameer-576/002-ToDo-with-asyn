let input = document.querySelector("#input");
let addbtn = document.querySelector("#add");
let listcontainer = document.querySelector(".listcontainer");


addbtn.addEventListener("click", addTask);
let API = 'https://68921701447ff4f11fbf29de.mockapi.io/api/v1/todos'
async function fetchTask(){
    let fetchingdata =await fetch(API);
    let data = await fetchingdata.json();
    if(data){
        listcontainer.innerHTML = ""
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
            let removebtn = div.querySelector(".remove");
            removebtn.addEventListener("click", function(){
                removeTask(element.id);
            })
            let editbtn = div.querySelector(".edit");
            editbtn.addEventListener("click", function(){
                console.log(element.id);
            })
            listcontainer.append(div);
        });
    }
}

async function addTask(){
    let value = input.value;
    console.log(value);

    let data = await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: value})
    })
    if(data.status === 201){
        input.value = ""
        fetchTask()
    }else{
        console.log("Error")
    }
}
fetchTask()

async function removeTask(id){
    let data = await fetch(`${API}/${id}`, {
        method: "DELETE"
    })
    if(data.status === 200){
        fetchTask()
    }else{
        console.log("Error")
    }
}
async function editTask(id, newText){
    let data = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({text: newText})
    })
    if(data.status === 200){
        fetchTask()
    }else{
        console.log("Error")
    }
}







