const { niceLogger } = require("../src/niceLogger.js");


test("niceLogger returns Hello World", () => {
    // test happens here
    // expect(sth).toBe(sth);

    //Lets make a test
     //      who                    what
    expect (niceLogger()).toBe("Hello World.");
});
