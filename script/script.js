let hexInput = document.getElementsByClassName('hexInput')[0]
let convertBtn = document.querySelector('button')
let r = document.querySelector('.redInput')
let g = document.querySelector('.greenInput')
let b = document.querySelector('.blueInput')



let [red,green,blue] = [0,0,0]

function rgb(num) {
    if (num == 'A'){
        return 10
    }else if (num == 'B'){
        return 11
    }else if (num == 'C'){
        return 12
    }else if (num == 'D'){
        return 13
    }else if (num == 'E'){
        return 14
    }else if (num == 'F'){
        return 15
    }else{
        return num
    }
}


function convert(){
    let hex = hexInput.value.replace('#','')

    if (hex.length !== 6){
        alert('invalid input')
    }


    let redhex = hex.substring(0,2)
    let greenhex = hex.substring(2,4) 
    let bluehex = hex.substring(4,6)

    let redDecimal = parseInt(redhex, 16)
    let greenDecimal = parseInt(greenhex, 16)
    let blueDecimal = parseInt(bluehex, 16)

    r.innerText = redDecimal
    g.innerText = greenDecimal
    b.innerText = blueDecimal

    console.log(r, g, b);
}

convertBtn.addEventListener('click', convert)