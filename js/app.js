 import {data} from "./data.js" 
const form = document.querySelector(".form");
const input  = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const btn = document.querySelector(".btn");
const list = document.querySelector(".data-list");
const select = document.querySelector(".select")

function dataRender(element){
    list.innerHTML = ""
    element.forEach((el)=>{
        let li = document.createElement("li");
        li.innerHTML = `
        <h2>${el.postId}</h2>
        <h2>${el.id}</h2>
        <h2>${el.name}</h2>
        <h2>${el.email}</h2>
        <h2>${el.body}</h2>
        `;
        li.className = "item"
        list.appendChild(li)
    })
};

form.addEventListener("input",(e)=>{
    e.preventDefault();
    const searchValue = input.value.trim()
    const regecxs = new RegExp(searchValue,"gi");
    const searchFilter = data.filter((valueElement) => valueElement.name.match(regecxs));
    if(searchFilter.length > 0 ){
        dataRender(searchFilter);
    }else{
        alert('BUNAQA QIYMAT MAVJUT EMAS!!!!!')
    }

})
dataRender(data)

select.addEventListener("change",()=>{
const filteredArr = data.filter(item=> item.postId == select.value)
dataRender(filteredArr)
})












