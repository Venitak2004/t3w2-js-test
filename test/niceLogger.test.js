var { niceLogger, messageRepeater } = require("../src/niceLogger.js");

describe("niceLogger Functions Tests", ()  => {

    test("niceLogger returns Hello World.", () => {
    // test happens here
    // expect(sth).toBe(sth);

    //Lets make a test
     //      who                    what
    expect(niceLogger()).toBe("Hello World.");
});

    //different test cases
    test("niceLogger returns Hello World.", () => {
        // test happens here
        // expect(sth).toBe(sth);

        // creating a mock function
        niceLogger = jest.fn();
    
        niceLogger.mockReturnValue("Hello World.");
        //Lets make a test
        expect(niceLogger()).toBe("Hello World.");

    });test("niceLogger returns Hello World.", () => {
        // test happens here
        // expect(sth).toBe(sth);
    
        //Lets make a test
         //      who                    what
        expect(niceLogger()).toBe("Hello World.");
    });
});

describe("messageRepeater Function Tests", () => {

    test("messageRepeater repeats words correctly", () => {
        let repeatedMessage = messageRepeater("hello");

        expect(repeatedMessage).toEqual("hellohellohello");
        expect(repeatedMessage).toHaveLength(15);
    
    });
    
    test("messageRepeater repeats numbers correctly", () => {
        let repeatedMessage = messageRepeater(1);

        expect(repeatedMessage).toEqual("111");
        expect(repeatedMessage).toHaveLength(3);
    });
   
    test("messageRepeater repeats arrays correctly", () => {
        let repeatedMessage = messageRepeater(["Hello", "World"]);

        expect(repeatedMessage).toEqual(["Hello", "World", "Hello", "World", "Hello", "World"]);
        expect(repeatedMessage).toHaveLength(6);

    });
    test("messageRepeater repeats null or whitespace correctly", () => {
        let repeatedMessage = messageRepeater("");

        expect(repeatedMessage).toEqual("");
        expect(repeatedMessage).toHaveLength(0)
        ;

    });
});