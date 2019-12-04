function check(arrInput,number){
    for (var i=0;i<arrInput.length;i++){
        if (arrInput[i]>number){
            console.log(arrInput);
        }
    }
}
function toUp(arrInputStr){
    var output = []
    for (var z=0;z<arrInputStr.length;z++){
        var update = arrInputStr[z].toUpperCase()
        output.push(update)
    }
}
function star(numberOfStar){
    var star = '*'
    for(var i=0;i<numberOfStar;i++){
        star = star + '*'
        console.log(star)
    }

}