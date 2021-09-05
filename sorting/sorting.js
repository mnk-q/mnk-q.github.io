var arr = [34, 23, 11, 9, 8,4,5,3,2,5,67,8,6,34,32,43,6,8,2,1];
var block = '<div class="block"></div>';
var piles = '<div class="pile"></div>';
var q = document.querySelector(".numbers");

var drawUnique = (i, j) => {
    q1 = document.getElementsByClassName("block")[i]
    q2 = document.getElementsByClassName("block")[j]

    for (let i = 0; i < q1.childNodes.length; i++) {
        q1.childNodes[i].className = "un1";
    }
    for (let i = 0; i < q2.childNodes.length; i++) {
        q2.childNodes[i].className = "un2";
    }
}

var drawSame = (i, j) => {
    q1 = document.getElementsByClassName("block")[i]
    q2 = document.getElementsByClassName("block")[j]

    for (let i = 0; i < q1.childNodes.length; i++) {
        q1.childNodes[i].className = "pile";
    }
    for (let i = 0; i < q2.childNodes.length; i++) {
        q2.childNodes[i].className = "pile";
    }
}

var swapp = (i1, i2) => {
    q1 = document.getElementsByClassName("block")[i1]
    q2 = document.getElementsByClassName("block")[i2]

    var tp = q1.innerHTML
    q1.innerHTML = q2.innerHTML
    q2.innerHTML = tp
}



const validate = () => {
    let q = document.querySelector("#array")
    var alertMsg = ""
    var num = q.value.split(" ").map(x => parseInt(x)); 
    for (let i = 0; i < num.length; i++) {
        if(isNaN(num[i])){
            alertMsg = "Invalid Input"
            break
        }
    }
    if(alertMsg!=""){
        alert(alertMsg)
    }
    else{
        simulate(num)
    }
}

let simulate = (arr) => {
    draw(arr)

    
    var q = document.querySelector("#sortingAlgo")
    let algo = q.value
    if(algo=="insertion")
        insertionSort(arr)
    else if(algo == "selection")
        selectionSort(arr)
    else if(algo == "bubble")
        bubbleSort(arr)
    else if(algo == "quick")
        quickSort(arr)
    
}


async function quickSort(arr) {
    let l = 0
    let h = arr.length-1;
    let n = arr.lenght
    let stack = new Array(h - l + 1);
    stack.fill(0);
    let top = -1;
    stack[++top] = l;
    stack[++top] = h;
    while (top >= 0) {
        h = stack[top--];
        l = stack[top--];
        let temp;
        let pivot = arr[h];
        let i = (l - 1);
        for (let j = l; j <= h - 1; j++) {
            if (arr[j] <= pivot) {
                i++;

                drawUnique(i, j)


                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                await sleep(200)
                swapp(i, j)
                await sleep(100)
                drawSame(i, j)    
            }
        }

        drawUnique(i+1, h)

        temp = arr[i + 1];
        arr[i + 1] = arr[h];
        arr[h] = temp;

        await sleep(200)
        swapp(i+1, h)
        await sleep(100)
        drawSame(i+1, h)

        let p = i + 1;;
        if (p - 1 > l) {
            stack[++top] = l;
            stack[++top] = p - 1;
        }
        if (p + 1 < h) {
            stack[++top] = p + 1;
            stack[++top] = h;
        }
    }
}







