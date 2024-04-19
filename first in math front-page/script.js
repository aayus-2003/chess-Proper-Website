// let img1 = 'https://www.firstinmath.com/Content/Theme/img/2023/boy3-min.png'
// let img2 = 'https://www.firstinmath.com/Content/Theme/img/2023/girl4-min.png'
// let img3 = 'https://www.firstinmath.com/Content/Theme/img/2023/boy2-min.png'

function change () {
    let ran = Math.floor(Math.random() * 4)
    console.log(ran)
    let arrayOfImg  = ['https://www.firstinmath.com/Content/Theme/img/2023/boy3-min.png', 'https://www.firstinmath.com/Content/Theme/img/2023/girl4-min.png', 'https://www.firstinmath.com/Content/Theme/img/2023/boy2-min.png','https://www.firstinmath.com/Content/Theme/img/2023/girl2-min.png'][ran]

    return arrayOfImg
}

document.getElementById('img').src = change()

console.log(change())

console.log('script.js was working') 
