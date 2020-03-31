window.onload = function(){
  const left1 = document.querySelector("#izq1")
  const right1 = document.querySelector("#der1")
  const left2 = document.querySelector("#izq2")
  const right2 = document.querySelector("#der2")
  const left3 = document.querySelector("#izq3")
  const right3 = document.querySelector("#der3")
  const slider1 = document.querySelector("#slider-1")
  const slider2 = document.querySelector("#slider-2")
  const slider3 = document.querySelector("#slider-3")
  const slider = document.querySelector("#slider")
  
  let ancho = window.getComputedStyle(slider1).getPropertyValue("width")
  // left.style.left = ancho
  // console.log(window.getComputedStyle(slider).getPropertyValue("left"))
  // right.style.right = "-"+ancho
  right1.addEventListener("click",()=>{
    slider.style.marginLeft = "-100%"
  })
  right2.addEventListener("click",()=>{
    slider.style.marginLeft = "-200%"
  })
  right3.addEventListener("click",()=>{
    slider.style.marginLeft = "0%"
  })
  left1.addEventListener("click",()=>{
    slider.style.marginLeft = "-200%"
  })
  left2.addEventListener("click",()=>{
    slider.style.marginLeft = "0%"
  })
  left3.addEventListener("click",()=>{
    slider.style.marginLeft = "-100%"
  })
  // left.addEventListener("click",()=>{
  //   let margin = window.getComputedStyle(slider).getPropertyValue("margin-left");
  //   let ancho = window.getComputedStyle(slider1).getPropertyValue("width")
  //   ancho = "-"+ancho.slice(0,ancho.length-2);
  //   margin = margin.slice(0,margin.length-2);
  //   if(ancho == margin){
  //     slider.style.marginLeft = "0%"
  //   }else if(margin == 0){
  //     slider.style.marginLeft = "-200%"
  //   }else{
  //     slider.style.marginLeft = "-100%"
  //   }
  // })
}