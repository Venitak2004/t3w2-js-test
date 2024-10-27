const { niceLogger, messageRepeater } = require("../src/niceLogger.js");

describe("niceLogger Functions Tests", ()  => {

    test("niceLogger returns Hello World.", () => {
    // test happens here
    // expect(sth).toBe(sth);

    //Lets make a test
     //      who                    what
    expect (niceLogger()).toBe("Hello World.");
});


    //different test cases
    test("niceLogger returns Hello World.", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        //Lets make a test
         //      who                    what
        expect (niceLogger()).toBe("Hello World.");

    });test("niceLogger returns Hello World.", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        //Lets make a test
         //      who                    what
        expect (niceLogger()).toBe("Hello World.");
    });
});

describe("messageRepeater Function Tests", () => {

    test("messageRepeater repeats words correctly", () => {
    
    });
    
    test.skip("messageRepeater repeats numbers correctly", () => {
    
    });
   
    test.skip("messageRepeater repeats arrays correctly", () => {
    
    });
});