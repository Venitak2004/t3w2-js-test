function niceLogger(){
    console.log("Hello World!");
    return "Hello World.";
}

function sampleTest(){
    return "Heyy I'm a sample function.";
}

function messageRepeater(messageToRepeat){
// message repeater functionality

}
// means you can use your modules in other files.
module.exports = {
    niceLogger,
    sampleTest,
    messageRepeater
}