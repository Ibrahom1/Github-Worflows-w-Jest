const printName = require('./name'); // Import the from name.js

test('should print the correct name', () => {
    console.log = jest.fn(); // Mocking console.log
    printName();
    expect(console.log).toHaveBeenCalledWith("Hi, this is Ibrahim"); // Verify the output
});