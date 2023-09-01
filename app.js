let pImage=document.getElementById('pimage');
let Name=document.querySelector('.name');
let title=document.querySelector('.title')
let blur=document.querySelectorAll('.blur')

function typeText() {
    const textElement = document.querySelector('.about');
    const textToType = textElement.textContent.trim();
    textElement.textContent = '';
    
    let currentIndex = 0;
    function typeTextContent() {
      if (currentIndex < textToType.length) {
        textElement.textContent += textToType[currentIndex];
        currentIndex++;
        setTimeout(typeTextContent, 50); // Adjust the delay as needed
      }
    }
  
    typeTextContent();
  }
  typeText();

  //Projects

  let projectArray=[
    {
        id:1,
        type:'product',
        img:'projects/apple.png',
        desc:''
    },
    {
        id:2,
        type:'apps',
        img:'projects/batgpt2.png',
        desc:''
    },
    {
        id:3,
        type:'apps',
        img:'projects/bmi.png',
        desc:''
    },
    {
        id:4,
        type:'apps',
        img:'projects/country.png',
        desc:''
    },
    {
        id:5,
        type:'apps',
        img:'projects/currency.png',
        desc:''
    },
    {
        id:6,
        type:'apps',
        img:'projects/dictionery.png',
        desc:''
    },
    {
        id:7,
        type:'landing',
        img:'projects/netflix.png',
        desc:''
    },
    {
        id:8,
        type:'apps',
        img:'projects/handsmash.png',
        desc:''
    },
    {
        id:9,
        type:'landing',
        img:'projects/linktree.png',
        desc:''
    },
    {
        id:10,
        type:'landing',
        img:'projects/menu.png',
        desc:''
    },
    {
        id:9,
        type:'landing',
        img:'projects/gym.png',
        desc:''
    },
    {
        id:10,
        type:'product',
        img:'projects/nike.png',
        desc:''
    },
    {
        id:11,
        type:'apps',
        img:'projects/pt1.png',
        desc:''
    },
    {
        id:12,
        type:'games',
        img:'projects/target.png',
        desc:''
    },
    {
        id:13,
        type:'apps',
        img:'projects/tip.png',
        desc:''
    },
    {
        id:14,
        type:'apps',
        img:'projects/todo.png',
        desc:''
    },
    {
        id:15,
        type:'apps',
        img:'projects/weather.png',
        desc:''
    },
]
let projectContainer=document.querySelector('.projects-container');
//display

function projectDisplay(project){
    let displayproject=project.map((project)=>{
      return`<div class="project" id="project${project.id}">
      <img src=${project.img} alt="" width="350px" height="200px" class="projectImage" >
      <p>${project.desc}</p>
  </div>`
    })
   displayproject=displayproject.join("");
   projectContainer.innerHTML=displayproject
}

window.addEventListener('DOMContentLoaded',()=>{
    projectDisplay(projectArray);
})

let filterBtn=document.querySelectorAll('.filter-btn');

filterBtn.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        let filterProject=projectArray.filter((project)=>{
            if(project.type==e.target.id){
                return project
            }
        })
        if(e.target.id=="all"){
            projectDisplay(projectArray)
        }
        else{
            projectDisplay(filterProject)
        }
    })
})

let projectImage=document.querySelectorAll(".projects-container");

projectImage.forEach((image)=>{
    image.addEventListener('click',(e)=>{
       console.log(e.target.classList) 
    })
})

//arrow-down
let arrowDown=document.querySelector('.arrow-down');
let arrowUp=document.querySelector('.arrow-up');
let hidden=document.querySelector('.hidden');
arrowDown.addEventListener('click',()=>{
   hidden.style.display="block";
   arrowDown.style.display="none";
   arrowUp.style.display="block"
})
arrowUp.addEventListener('click',()=>{
    hidden.style.display="none";
    arrowDown.style.display="block";
    arrowUp.style.display="none"
 })


//responsive inputs
let responsiveImage=document.querySelector('.responsive-image');
function Desktop(){
    responsiveImage.src="Images/pc.png";
    responsiveImage.style.width="28rem";
    responsiveImage.style.height="23rem";
}

function Laptop(){
    responsiveImage.src="Images/laptop.png";
    responsiveImage.style.width="28rem";
    responsiveImage.style.height="16rem";
}

function Tablet(){
    responsiveImage.src="Images/tablet.png";
    responsiveImage.style.width="20rem";
    responsiveImage.style.height="20rem";
}

function Mobile(){
    responsiveImage.src="Images/mobile.png";
    responsiveImage.style.width="15rem";
    responsiveImage.style.height="21rem";
}


