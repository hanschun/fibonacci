# Fibonacci
## Why work on this?
After a recent read of Modern Software Engineering by David Farley, I wanted a good reminder to myself that no matter how trivial a problem is, it's worth engineering well.  
In working on this implementation, I attempted to follow the mantra of "one class, one thing, one method/function, one thing."  
I also caught myself trying to write code before I wrote tests. I enjoy Test Driven Development, but the IDE (VS Code) makes it easy to skip ahead when you see that a missing implementation will fail. I remind myself, even if the test doesn't run, seeing the missing piece is part of the process.  
In a further iteration, I cleaned up variable names to both:  
* Make it clear that a future iteration could use a different kind of store
* Stop expecting the Fibonnaci class to know the implementation of the store. 
  * This is intended to reduce the surface area of the Cache API while keeping it testable.
  * I was particularly happy when I removed the assertion that the `Cache.cache === {}` and added the `isEmpty` method to the Cache. This gives a much clearer API with better abstraction.  