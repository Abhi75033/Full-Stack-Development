function Check(){
    let str = document.getElementById('revrse').value;
    // 

    let reversed=""
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

if(str==reversed){
    alert("matched")
}else{
    alert("not matched")
}
// document.getElementById('revrse').value=' '

}

