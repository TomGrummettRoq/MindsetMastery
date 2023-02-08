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

test('Throws on 7 as 7 isn\'t a Fibonacci Number', () => {
  expect(() => {fibonacci.init(7);
  }).toThrow();
});

test('Throws an error as Fibonacci sequence needs a previous number', () => {
  expect(() => {fibonacci.init(0);
  }).toThrow();
});

test('Throws an error as Fibonacci sequence must start with an integer', () => {
    expect(() => {fibonacci.init(1.5);
    }).toThrow();
  });
  
  test('Throws an error as Fibonacci sequence doesn\'t contain negative numbers', () => {
    expect(() => {fibonacci.init(-1);
    }).toThrow();
  });
  
  test('Sequence is Initialized to 8', () => {
    fibonacci.init(8);
    expect(fibonacci.previous).toBe(5);
    expect(fibonacci.current).toBe(8);
  });
  
  test('Use next function', () => {
    fibonacci.next();
    expect(fibonacci.next()).toBe(2);
  });
  
  test('Use next for calculating third number in the sequence', () => {
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    
      expect(fibonacci.next()).toBe(5);
    });
    
    test('Testing init seed reset', () => {
      fibonacci.init(2);
      fibonacci.init(13);
      fibonacci.init(5);
      
      expect(fibonacci.current).toBe(5);
    });
    
    test('Undeclared Seed Number', () => {
      expect(() => {fibonacci.init();
      }).toThrow();
    });
    
    
    