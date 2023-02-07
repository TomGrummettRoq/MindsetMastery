const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

test('When initialized, the 5th number along the sequence can be returned', () => {
    fibonacci.init(2);
    expect(fibonacci.skip(5)).toBe(21);
});

test('Throws on 7', () => {
    fibonacci.init(7);
    expect(() => {fibonacci.init(7);
    }).toThrow();
  });
  
test('When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});

// test('When initialized the next number can be returned', () => {
//     fibonacci.init(8);
//     expect(fibonacci.next()).toBe(13);
// });

// test('When initialized the next number can be returned', () => {
//     fibonacci.init(8);
//     expect(fibonacci.next()).toBe(13);
// });

// test('When initialized the next number can be returned', () => {
//     fibonacci.init(8);
//     expect(fibonacci.next()).toBe(13);
// });




