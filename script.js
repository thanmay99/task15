function mulof3(v) {
    var v = document.getElementById("number").value;
    if (v % 3 === 0) {
        console.log(v, "is divisible by 3");
    }
    else {
        console.log(v, "is not divisible by 3");
    }
    return v;
}

function sub() {
    var m = document.getElementById("alpha").value;
    if (m === "j" || m === "s" || m === "J" || m === "S") {
        console.log("js is present in the string");
    }
    else {
        console.log("js is not present in the string");
    }
}

function intrest(){
    var p=document.getElementById("p").value;
    var r=document.getElementById("r").value;
    var t=document.getElementById("t").value;
    console.log(((p/r)*t)/100);
}