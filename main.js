
// variables for filters 
let saturate = document.getElementById("saturate")
let contrast = document.getElementById("contrast")
let brightness = document.getElementById("brightness")
let sepia = document.getElementById("sepia")
let grayscale = document.getElementById("grayscale")
let blur = document.getElementById("blur")
let hueRotate = document.getElementById("hue-rotate")
let reset=document.querySelector(".reset")
let download=document.querySelector(".download")
// variables for image box 
let img=document.querySelector(".img-box img")
let file =document.getElementById("file")
let canvas = document.getElementById("canvas")
let ctx=canvas.getContext("2d")

// upload photo 

file.onchange=function(){
 resetFilters()
 document.querySelector(".filters li:last-child").classList.remove("d-none")
 img.style.opacity=1
 let fileReader=new FileReader()
 fileReader.readAsDataURL(file.files[0])
 fileReader.onload=function(){
    img.src=fileReader.result
    img.classList.add('d-none')
    canvas.classList.remove("d-none")
 }
 img.onload=function(){
 canvas.width=img.width
 canvas.height=img.height
 ctx.drawImage(img,0,0,canvas.width,canvas.height)

 }

}

// effect filters on photo 

let filters=document.querySelectorAll(".filters li input")
filters.forEach(function(filter){
    filter.oninput=function(){
    ctx.filter=`
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `
    ctx.drawImage(img,0,0,canvas.width,canvas.height)
    }
   


    
})

// reset filters to default 

function resetFilters(){
    img.style.filter="none";
    saturate.value=100
    contrast.value=100
    brightness.value=100
    sepia.value=0
    grayscale.value=0
    blur.value=0
    hueRotate.value=0
   
}

// click on reset 

reset.onclick=function(){
    resetFilters()
}

// click on download 

download.onclick=function(){
    download.href=canvas.toDataURL()
}



