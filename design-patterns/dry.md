# DRY - Don't Repeat Yourself

DRY is a commonly used pattern in most systems that prevents code duplication. Duplication can cause maintaining a code exhausting as we have have to look into multiple places and make changes in different files. When there is a block of code that is used over multiple places, it's better to write a function for it. That reduces the size of the code too and there will be a single representation to look after.

DRY is a great practice, however, there are situation where it's not the best idea. DRY can couple multiple services. Example, Service A and B are both using a logger service. Now we need to change the code in logger because of some requirement in Service A, consequently, Service B will be affected by the change as well. In this case, decoupling can be a good choice. We can create a package and use version control for the logger. Service A can use version 2 and Service B can use version 1. We have to declare it in the build script. But this violates the DRY principle.

A good practice will be not to allow duplications or minimize it within a class, module or file. But when a module interacts with another, then we need be a bit more cautious and make decision about the coupling.

Ultimately, it's up to the coder to design and understand where to use DRY and where not.

ref: https://www.youtube.com/watch?v=KUD7I995uV8
