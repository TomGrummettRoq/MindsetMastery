class Fibonacci {
    constructor() {
        // We need 2 initial fib seed numbers
        this.previous = 0;
        this.current = 1;
    }
    
    // Returns the next Fibonacci number in the current sequence
    next() {        
        // Calculate the next fib number
        const next = this.previous + this.current;
        
        // Move along the sequence
        this.previous = this.current;
        this.current = next;
        
        // Return the calculated fib number
        return next;
    }
   
    
    init(seed) {        
        // Reset seeds
        this.previous = 0;
        this.current = 1;
        
        // Loop to find the seed
        while (this.current < seed) {
            this.next();
        }
        
        // Check if real fib number
        if (this.current != seed) {
            throw new Error('Not a real Fibonacci Number!');
        }
    }
    
    skip(forward) {
        for (let i = 0; i < forward; i++) {
            this.next();        
        }
        
        return this.current;
    }
}



module.exports = Fibonacci;