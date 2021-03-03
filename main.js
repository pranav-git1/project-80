function getPara1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1-input" + i).value);
    }

    document.getElementById("showPara1").innerHTML = inputs.join(". ");
}

function getPara2() {
    var inputs = [];
    for (var x = 1; x <= 6; x++) {
        inputs.push(document.getElementById("para2-input" + x).value);
    }

    document.getElementById("showPara2").innerHTML = inputs.join(". ");
}