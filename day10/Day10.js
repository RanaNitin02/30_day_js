// ++++++++++ Activity 1 +++++++++++

const para = document.getElementById('p1');
const btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    para.textContent = 'njgjew mihnw iugkjvmn ghlerh giurw nhhrwkhge tkjguewkjghe';
})


let source = 'https://images.pexels.com/photos/981062/pexels-photo-981062.jpeg?auto=compress&cs=tinysrgb&w=600'


const image = document.getElementById('img');
if (image) {
    image.src = source;
    image.height = 200;
    image.width = 200;
    console.log('Image attributes set');
} else {
    console.log('No element found with ID "img"');
}

image.addEventListener('dblclick',() => {
    image.style.visibility = 'hidden';
})


// ++++++++++ Activity 2 +++++++++++

const p1 = document.createElement('p');
p1.textContent = 'hfnui hfenw brunof  dyebf  fr frh bbvfjbve'
// document.body.append(p1);

p1.addEventListener('mouseover',()=>{
    p1.style.backgroundColor = 'red';
})

p1.addEventListener('mouseout',()=>{
    p1.style.backgroundColor = '';
})
document.body.append(p1);


// ++++++++++ Activity 3 +++++++++++

const input = document.getElementById('input');
input.addEventListener('keydown',(e)=>{
    console.log(e.key);
})
input.addEventListener('keyup',()=>{
    console.log(input.value);
})


// ++++++++++ Activity 4 +++++++++++

const form = document.querySelector('#form').addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const formData = new FormData(e.target);
    formData.forEach((val,key) =>{
        console.log(`${key} : ${val}`); 
    });
});


const select = document.querySelector("#select").addEventListener('change',(e)=>{
    const optionValue = e.target.value;
    const p = document.createElement('p');
    p.textContent = optionValue;
    console.log(p);
    
})


// ++++++++++ Activity 5 +++++++++++

let ul = document.querySelector("#ul-list");
ul.addEventListener("click", function(e){
    console.log(e.target.innerText);
})


let li = document.createElement('li');
li.textContent = 'five'
ul.append(li);