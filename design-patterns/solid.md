# SOLID Principle

1. S - Single Responsibility Principle

   Single Responsibility Principle states that a class should have a single responsibility.

2. O - Open-closed Principle

   Open for extension, Closed for modification.

3. L - Liskov Substitution Principle

   Child class or sub class should be substitutable for it's parent class.

4. I - Interface Segregation Principle

   A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use. Create two separate interfaces for two different objects that may have similar properties or methods. Example, a 2D shape class and a 3D shape class both have a method for area calculation but 3D shape class has an additional method for volume calculation. It's better to create two separate interfaces instead of the 3D shape class implementing a general shape class as the 2D shapes do not need the volume calculation method.

5. D - Dependency Inversion Principle
   Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions. Example, If I have a database class that another high-level class needs to use, the database class should follow an interface that is known to both the database class and the high-level class. Even if the implementation inside database class changes, the high-level class doesn't need to worry about it as it follows the interface. So both the high-level class and the database is dependent on the interface instead of the high-level class depending on the implementation of database class directly.
