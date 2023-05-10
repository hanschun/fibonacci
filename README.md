# Fibonacci
## Why work on this?
After a recent read of Modern Software Engineering by David Farley, I wanted a good reminder to myself that no matter how trivial a problem is, it's worth engineering well.  
In working on this implementation, I attempted to follow the mantra of "one class, one thing, one method/function, one thing."  
I also caught myself trying to write code before I wrote tests. I enjoy Test Driven Development, but the IDE (VS Code) makes it easy to skip ahead when you see that a missing implementation will fail. I remind myself, even if the test doesn't run, seeing the missing piece is part of the process.  

## How to use this
I've been using the tests as proof of the work, so to run this on a local machine, do the following:  
1. Clone the repo.
2. Install dependencies by running `npm install` in your terminal.
3. Run the tests with `npm run test`.  
  
I'm also hoping that the code is clean and clear enough to be read without running the tests.  All the relevant code (non-platform) is in the `/src` directory.

## Changelog
In the first iteration, I cleaned up variable names and implementations to both:  
* Make it clear that a future iteration could use a different kind of store.
  * Currently this project functions with either a Cache or a Table, each implementing a generic Store. This could easily be replaced with a database or another storage system as long as the Store interface was preserved.  
* Stop expecting the Fibonnaci class to know the implementation of the store. 
  * This is intended to reduce the surface area of the Cache API while keeping it testable.
  * I was particularly happy when I removed the assertion that the `Cache.cache === {}` and added the `isEmpty` method to the Cache. This gives a much clearer API with better abstraction.  