let imgURL = [
    "/home/user/Bureau/florentunix/assets/img/code-coding.gif",
    "/home/user/Bureau/florentunix/assets/img/coding.gif",
    "/home/user/Bureau/florentunix/assets/img/hello.gif",
    "/home/user/Bureau/florentunix/assets/img/programming.gif"
]
let i = 0;


let imgElement = document.querySelector(".picture")
imgElement.addEventListener("mouseover", ()=>{
    imgElement.src=imgURL[i]
    i+=1
    if(i == imgURL.length)
        i = 0
})
