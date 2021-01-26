function callBackFunction(Age,Address,work){
    console.log('hello', Age);
    console.log('your Address',Address);
    work();
}
function goHome(){
    console.log('just go home')
}
function workHard(){
    console.log('proper work');
}
callBackFunction(12,'ab',goHome);
callBackFunction(13,'cd',workHard);