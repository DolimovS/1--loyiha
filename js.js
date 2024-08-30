const modal_wrapper=document.querySelector(".modal_wrapper")
const modal_form=document.querySelector(".modal_form")
const tbody_1=document.querySelector(".tbody_1")
const new_student=document.querySelector("#new_student")
const body=document.querySelector("body")

function add_student(){
    modal_wrapper.style.top="0"
    body.style.overflow="hidden"
}

let todos=JSON.parse(localStorage.getItem("list"))
?JSON.parse(localStorage.getItem("list"))
:[]


if(todos.length) getdata()

let setdata=()=>{
    localStorage.setItem('list',JSON.stringify(todos))
}


function getdata(){
    const data2=JSON.parse(localStorage.getItem("list"))
    // console.log(data2);
    tbody_1.innerHTML=""

    data2.forEach((item,index) => {
        tbody_1.innerHTML+=`
        <tr>
        <td><img src="./img/avatar.jpg" alt=""></td>
        <td>${item.name}</td>
        <td>${item.email}</td>
        <td>${item.phone}</td>
        <td>${item.number}</td>
        <td>${item.data}</td>
        <td>
        <button>Updata</button>
        <button onclick="deletes(${index})">Delete</button>
        </td>
    </tr>
    `
    });
}

modal_form.addEventListener("submit", (e)=>{
    e.preventDefault()
    let input_name=modal_form.input_name.value.trim()
    let input_email=modal_form.input_email.value.trim()
    let input_phone=modal_form.input_phone.value.trim()
    let input_number=modal_form.input_number.value.trim()
    let input_data=modal_form.input_data.value.trim()
    modal_form.reset()
    // console.log(input_data,input_email,input_name,input_number,input_phone);
if(input_name.length>0){
    // console.log(input_name);
    todos.push({
        name:input_name,
        email:input_email,
        phone:input_phone,
        number:input_number,
        data:input_data
    })
    modal_wrapper.style.top="-100%"
    body.style.overflow="auto"
    setdata()
    getdata()
}
    
})


// ochirish

function deletes(id){
    const ochirish=todos.filter((element,i)=>{
        return id!==i;
    })
    todos=ochirish
    setdata();
    getdata();
}

