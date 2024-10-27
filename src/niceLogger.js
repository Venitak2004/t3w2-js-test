function niceLogger(){
    console.log("Hello World!");
    return "Hello World.";
}

function sampleTest(){
    return "Heyy I'm a sample function.";
}

function messageRepeater(messageToRepeat){
// message repeater functionality
//   return messageToRepeat.toString() + messageToRepeat.toString() + messageToRepeat.toString();
    if (Array.isArray(messageToRepeat)){
        return [...messageToRepeat, ...messageToRepeat, ...messageToRepeat];
    }
    else {
        let stringMessageToRepeat = messageToRepeat.toString();
        return stringMessageToRepeat + stringMessageToRepeat  + stringMessageToRepeat;
}
}
// means you can use your modules in other files.
module.exports = {
    niceLogger,
    sampleTest,
    messageRepeater
}