---
layout: post
title: Advance Java Overview
date: 2016-09-20 12:00:00
categories: programming
comments: true
en: true
description: An Overview of Java, useful for programming interviews
keywords: "java, pro, pro java, programming,interviews, programming interviews, java programming interview, java programming, git gud, java source, java source code, code, java tutorial, tutorial, java intro, java introduction, java basics"
authors:
    - Edgar Montano
---

## Table of contents

* toc
{:toc}

## Advance Java Overview
 This overview is designed with the intention of briefly reviewing some core aspects of Java that might be relevant to a java programming interview.

## Primitive

The JVM treats primitives differently from reference types (objects). Primitives always have a value, they can never be null.


### Primitive table
* boolean - 1 bit
* short - 16 bits
* int - 32 bits
* long - 64 bits
* float - 32 bits
* double - 64 bits
* char  - 16 bits

Note char is unsigned so the range of possible values is from 0 - 65,535 because chars represent unicode values.

## objects

 objects have states and behaviors. Example, a car has a states - color, name, brand. and it has behaviors: reverse, drive, park.


### final keyword on object references

the value is set on variable definition, and after that, the value stored in that memory location cannot change. Although the objects reference cannot change, the values held within that object CAN change.


### visibility modifiers

Visibility modifiers control access to the encapsulated stte of the class and the methods controlling the instance behavior. A variable encapsulated within an object or a method can have its visilibity restricted by one of four definitions.

Note: Private member variables are avaiable only to that class, not even to any subclassess: Private variables are deemed to be necessary for only that type and no other.

* private - least visibile - visible to any instance of that same class, not to subtypes
* <none> - visible to any class in the same package
* protected - visibile to any subclassess
* public - visisible anywhere.


### what does static do

static methods and variables are defined as belonging to the class and not specifically to an instance.

They are common to all instances, and are usually accessed through the class name rather than a specific instance.

### What is Polymorphism

Polymorphism allows you to make a definition for a certain type of behavior, and have many different classes implement that behavior.

Inheritence allows you to derive the behavior and definition of a class from a superclass.


## Java Arrays

They can be treated as objects, because array sare objets, this means arrays are passed by reference, so anything holding a reference to that array can mutate in some way.  This is often the point of confusion for some.

```
final int[] myArr = new int[] {0,1,2,3};
int[] arrRef = myArr;

arrRef[2]=1337;

assert(myArr[2]==1337);
```

## Interning

Any repetition of a String literal can be referenced from the same constant in the pool, this is known as String interning.


## Reifed

Reifed means being available at run time. Java's generic types are not reified. This means all the type information the compiler uses to check any implementing code is using generic parameters correctly is not part of the .class file definition.


## Autoboxing

The process of converting Float, Integer, or Boolean to their primitive counterpart is called unboxing. It may throw a nullreferencepointer error if the value is null.

## Handling Exceptions

Any class that can be thrown extends Throwable. Throwable has two direct subclasses:  Error and Exception

 It's the responsibility of the programmer to handle exceptions, while errors may not be recovered from for example: outofmemoryerror


## Try with resources

Before try-with-resources was introduced, the programmer would have to explicitly close the FileStreams.  However with try-with-resources, it automatically closes the filestreams for you.

## Immutable

If you have a final class with no accessible setters, and all fields were private, you could be inclined to think its immutable, but this is not the case because they can be manipulated with Reflection API.

So it's necessary to use private and final to make them immutable.

##  Which classes do other collections api inherit from

They can be split into : SETS, Lists, and Maps.

## Why was HashMap introduced when we already had Hashtable

When the collections framework was written, Hashtable was redesigned for the Collections framework.

The hashtable is synchronized, which work effective for parallel work. Provides a significant performance hit due to this overhead for any single-threaded work.

HashMap is not synchrnoizd.    

## class

a class can be defined as a template that describes the behavior or state that the object of its type supports.

### local variables

 variables defined inside methods, constructors or blocks are called local varaibles.

### instance variables

Instance variables are variables within a class but outside any method. These variables are initialized when the class is instantiated.


### class variables

class varaibles are variables declaredd within a class, outside any method with the static keyword.

## Effect of keeping a constructor private (inheritance)
 By keeping a constructor private, the class cannot be inherited from. It forces the sub-class to explicitly make a call to non-private super class constructor. Places you might consider using a private constructor:

 * Constructor only available in Static factory method.
 * A singleton (not more than one instance of your class exisit in the program)
 * A utility class only containing static methods.

## Difference between Comparable and Comparator interfaces

The _Arrays_ and _Collections_ have several _overloaded_ sort methods. These sort methods can be split into two categories:

* one that takes an array as a parameter
* one that takes a Comparator object.

By convention Comparable interface is used for natural ordering, and comparator is used to give exact control over the ordering.

### Comparable
Comparable interface is used for natural ordering. String class implements the Comparable interface, so the sorting works as you would expect however if a the type being sorted does not implement Comparable then it will throw a ClassCastException. You can think of a comparable object as being capable of comparing itself with another object. This class must implement _java.lang.Comparable_ interface in order to be able to compare its instances.

```
/*
@return: positive, negative, or zero
positive - this object is greater than o1
zero - this object equals o1
negative - this object is less than o1
*/
int compareTo(Object o1) {...}
```


### Comparator
Is used to give exact control over the ordering. A comparator object is capable of comparing two different objects, it does not compare its own instance, but some other class's instances. The comparator class must implement _java.util.Comparator_ interface.

```
/*
@return: positive, negative, or zero
positive - o1 is greater then o2
zero - o1 equals o2
negative - o1 is less than o2
*/
int compare(Object o1, Object o2) {...}
```


## Final, Finally, and Finalize
* _final_ is used to define a variable as a constant. (cannot be changed)
* _finally_ is used in exception handling, specifically try-catch statements, it is used to ensure that a piece of code gets executed within the branch.
* _finalize_ is called by the JVM before an object is about to be collected.

```
//example of final
private final String name = "foo"; //initialize String as foo
name = "bar"; //does not work, since name is a constant

//example of finally
try{
  // to do stuff
} catch(Exception err){
  //handle exception
} finally{
  //always execute this regardless of condition
}

//finalize example
protected void finalize(){
  super.finalize(); //free resources
}
```

## Overloading vs Overriding
* _Overloading_ is when two methods have the same name but different type or number of arguments.
* _Overriding_ occurs when a method shares the same name and the same function signature as another method in its super class.

```
//example of Overloading
public double eat(Food f) { ... }
public double eat(Integer number_of_people, Food f){ ... }
```

```
//example of Overriding
public abstract class Shape{
  public void print(){
    System.out.println("Shape");
  }
}

public class Circle extends Shape{
  public void print(){
    System.out.println("I am a circle");
  }
}

//expected output: "I am a circle", when called from Circle
main(){
  Circle c = new Circle();
  c.print();
}
```

## Describe Object Reflection is in Java
_Reflection_ is a langauge's ability to inspect and dynamically call classes, methods, and attributes at runtime.
A primary example of this is getClass() in Java. This allows you to determine a object's class during runtime. Reflections are important since we can determine aspects of a program (such as getClass()) during runtime opposed to compile time.

## Java Generics vs C++ template
You can think of Java Generics as syntaxic sugar for casting objects (this is due to a desire for backwards compatiability), while C++ templates can be viewed as a preprocessor/macro set.


## Data structures

### Arrays

Arrays are sequential ordered collections with a fixed size. In order to expand an array, you would have to use the _arrayCopy_ method to copy over the contents of the current array, to a larger allocated array.

```
int[] oldArr = {0,1,2,3,4};
int newArr = new int[oldArr.length+1];
System.arrayCopy(oldArr,0, newArr,0,oldArr.length);
```

### Lists

Lists are sequential ordered collections of a specific data type. Lists differ from arrays in that they are unbounded and do not require you to specify the size. In general, it is good practice to use the List interface whenever possible, since it will make it easier to swap implementing types depending on each scenario.

#### ArrayList

ArrayList is an implementation of the List interface that uses an array internally to store the data as a list representation. The difference between an array and an ArrayList is that an ArrayList is not bounded by size. An ArrayList automatically reallocates memory for you, when you try to extend beyond the size of the array, unlike a regular array, we do not need to use the _arrayCopy_ method. Also note that an ArrayList does not deallocate space when you remove an operation, so an ArrayList does not shrink upon the removal of an element.

When you add an element to the head of an ArrayList, on relatively large arrays, this operation can be expensive since you have to shift all the contents of the array.  

Several points about ArrayList :

* ArrayList class is non-synchronized.
* allows for random access
* manipulation is slow, especially in insertion towards the front of an ArrayList or in the middle.
* duplicates are allowed.


#### LinkedList

A LinkedList is another implementation of the List interface. LinkedList uses a recursive data type definition. LinkedList are useful when you are primarily inserting in the beginning of a list or at the middle of a list. LinkedList also do not suffer from the reallocation cost on large Lists unlike ArrayLists do.

```
public class SimpleLinkedList<E> {

  private static class Node<E>{
    E value;
    Node<E> next;  
  }

  private Node<E> head;

}
```

Notes about Java's LinkedList:

* uses doubly linked list to store the elements.
* can contain duplicates
* maintains insertion order
* is non-synchronized
* manipulation is usually relatively fast, especially when operating on head however not so much on insertion towards the end unlike Arraylists
* can be used as stack or queue

### Queue and Deque

A queue is a "first in, first out" data structure

A deque (pronounced 'deck' ) is an extension of Queue, and allows addition and removal from either end of the data structure.

### Trees

A tree is a data strucutre in which alement can be succeeded by a number of different elements, known as children.

A binary search tree - elements les than the value of a given node are children on the left, and elements greater ten the value of a given node are children of the right.


Tree definition

```
public class TreeExample<E extends Comparable>{
  private E value;
  private TreeExample<E> left;
  private TreeExample<E> right;
}
//searching  binary search tree
public boolean search(final E toFind){
  if(toFind.equals(value)){
    return true;
  }

  if(toFind.compareTo(value) < 0 && left != null){
    return left.search(toFind);
  }

  return right != && right.search(toFind);
}

public void insert(final E toInsert){
  if(toInsert.compareTo(value) < 0){
    if(left == null){
      left = new TreeExample<>(toInsert, null, null);
    }
    else{
      left.insert(toInsert);
    }
  else{
    if(right == null){
      right = new TreeExample<>(toInsert, null, null);
    }
    else{
      right.insert(toInsert);
    }
  }
  }
}

```

#### AVL Trees

A specific implementation of a binary search tree, which enforces that for every node, the difference in depth for each child is at most one. After each insertion or deletion of a node, the tree checks if it is still balanced, and subsequently rotates the nodes of values where the property of the AVL tree does not hold.

When a tree is balanced, searching, inserting, and deleting has the  size O (logn)


#### Binary Heap

A balanced tree with the property that children are greater than their parent. The heap property defines that the smallest element is the root.  Heaps are especially useful for priority queues or any time you require quick access to the sallest element of a collection.

### Maps

A map is frequently referred to as a hash, associative array or a dictionary (python).  A map is a key-value system, where elements can be queried by their key, and will return the associated value. _Maps are part of the Java Collections API but unlike List, they do not implement the Collections interface._

#### HashMap

HashMap is one of the most common Map implementation used. It is Java's implementation of a HashTable. The class implementation uses an inner class called Entry,  to represent key-value pairs and the elements are stored in an array of Entry objects.

When you insert a value into the table of HashMap, the _hashCode_ method is executed, which returns an int value. This value is used as the index of the array.To handle collisions a secondary hash method is used, to calculate the offset.

When you construct a new HashMap object, you have the option of specifying a load factory between 0 and 1. Once the load factors threshold has been exceeded, the table is doubled in size. This doubling of size can be an expensive operation on large tables, since  it now has to recalculate and insert all the previous elements back into the table.

##### HashMap vs HashTable

Hashmap:

* non-synchronized (not thread safe)
* allows one null key and multiple null values
* fast
* traversed by iterator
* inherits AbstractMap

HashTable
* synchronized
* doesn't allow any null key or value
* slow
* traversed by enumerator and iterator
* hashtable  inherits dictionary class

#### TreeMap

An alternative to the Map implementation. Uses a binary tree data structure, because of this there is no need for a hashCode method. Each insertion into the tree forces the tree to rebalance, this means that searching, deletion, and insertion will normally be performed in _O(log n)_ time. Order is preserved in TreeMaps, however this is not possible in a HashMap, since everything is stored independent from itself.


### Sets

A set is an unordered collection of objects that does not contain any duplicates. A set can be implemtented using a HashSet in which the key is our designated value, and the value field is actually a field which specifies if the  the value has been set.


## Collection framework

Collections in Java is a framework that provides a way to store and manipulate group of objects, it has interfaces and its implementations and algorithms. The hierarchy of the collection framework is:

* List
  * ArrayList
  * LinkedList
  * Vector
    * Stack
* Queue
  * PriorityQueue
  * Deque
    * ArrayDeque
* Set
  * HashSet
    * LinkedHashSet
  * SortedSet
    * TreeSet

Collections share many methods together, some of the following are available:

```
public boolean add(Object Element){...}
public boolean addAll(Collection c){...}
public boolean remove(Object Element){...}
public int size() {...}
public Object[] toArray() {...}
public int hashCode() {...}
public boolean isEmpty(){...}
public boolean equals(Object element) {...}
```

Most useful collection framework to know according to Cracking the Coding Interview.

* _ArrayList_ a dynamic array which grows as you insert more elements.
* _Vector_ similar to ArrayList, except it is synchronized and contains legacy methods not part of the collections framework.
* _LinkedList_ doubly-linked list implementation of the List and Dequeue interface.
* _HashMap_  hash table implementation of a Map interface (sometimes referred to as dictionary)


### ArrayList vs Vector

ArrayList

* not synchronized
* increments 50% of current array size every time it needs to reallocate
* non-legacy class
* fast because non-synchronized
* uses iterator interface to traverse elements

Vector

* synchronized
* increments 100% meaning it doubles array size when it needs to reallocate
* vectory is legacy class
* slow b/c of synchronized
* uses enumeration interface to traverse elements. (it could also use iterator however)

## Iterators

Iterators is an interface that provides the functionality of iterating the elements in the forward direction. Methods included in the iterator interface are:

```
public boolean hasNext()
public object next()
public void remove()
```

## Patterns

Java has a variety of design patterns. Good references on design patterns is _Design Patterns: Elements of Reusable Object-Oriented Software_ and _Enterprise Integration Patterns_


### Singleton

A singleton is a class that allows only one instance to be created. This is useful for designing a point of entry to a third party, such as a database or a web service, that could be easily configurable in one location. A singleton pattern can lead to a bunch of issues. It can be quite difficult to test in isolation. Singletons can work best in specialized applications such as a GUI when you know you will not have many concurrent users. Singletons are often the source of bottlenecks, since only one instance can be created, each thread must wait on this singleton to perform its operations.


## Java Reflection API

Is a process of examining or modifying the run time behavior of a class. Reflections are useful in JUnit, which looks through your classes for methods tagged with the @Test annotation, and will then call them when running a unit test.  API primairly uses:

* IDE  (eclipse, netbeans)
* Debugger
* Test tools  

### java.lang.Class

 performs two tasks:

 * provides methods to get the metadata of a class at run time  (getName())
 * provides methods to examine and change the run time behavior of a class.


## Object Oriented Programming

### Object

An element that has a state and behavior is an object.

### class

Classes are simply collections of objects.

### Inheritance

When one object acquires all the properties and behaviors of a parent object. This is a Fundemental aspect of code reusability.

### Polymorphism

When one task is performed different ways.

### Abstraction

Hiding internal details and showing functionlity.


### Encapsulation

Binding code and data together into a single unit.


## Sorting

### Bubble sort

```
for i between 0 and (array length - 2)
  if(array (i +1) < array(i))
     switch(array(i) and array(i+1))
```

### Insertion Sorting

```
final List<Integer> sortedList = new LinkedList<>();

originalList: for (Integer number : numbers){
  for(int i = 0; i < sortedList )
}
```

### quick sorting

```
method quicksort(list 1):
  if l.size < 2:
    return 1;

let pivot = l(0)
let lower = new list
let higher = new list
for each element e in between l(0) and the end of the list:
   if e < pivot:
    add e to lower
  else add e to higher

let sortedLower = quicksort(lower)
let sortedHigher = quicksort(higher)
return sortedlower + pivot + sortedHigher
```

### merge sort

```
method mergesort(list l):
   if list.size < 2:
    return l;

  let middleIndex = l.size() /2;
  let leftlist = elements between l(0) and l(middleIndex -1);
  let rightlist = elements between l(middleIndex) and l(size - 1)

  let sortedleft = mergesort(leftlist)
  let sortedright = mergesort(rightlist)
  return merge(sortedleft, sortedright)

method merge(list l, list r):
  let leftptr = 0
  let right ptr =0
  let toreturn = new list

  while(leftptr < l.size and rightptr < r.size)
    if(l(leftptr) < r(rightptr))
      toreturn.add(l(leftptr))
      leftptr++
    else:
      toreturn.add(r(rightptr));
      rightptr++;
    while(leftptr < 1.size)
      toreturn.add(l(leftptr))
      leftptr++
    while(rightptr < r.size)
      toreturn.add(r(rightptr))
      rightptr++;

    return toreturn
```

### binary search

```
method binarySearch(list l, element e):
  if l is empty
    return false

  let value = l(l.size /2)

  if(value == e)
    return true
  if (e < value):
    return binarySearch(elements between l(0) and l(l.size / 2  -1))
  else
    return binarySearch(elements between l(l.size / 2 +1) and l(l.size))
```

## Design Patterns

Software design patterns use one or more objets together to solve a common problem.

### Builder Pattern

Necessary when you create an object that has many fields. Example: Pet object: Animal type, pet name, owner name, address, dob, color, size, etc.

One approach would be to not use a constructor at all, simply use setter methods on the Pet object instead. The downside to this approach is you can create an object that are not valid.

With a builder pattern you can mitigate this problem. You can create a compannion object, called a builder,  which will construct legal objects.


### Strategy Pattern

Enables you to easily swap specific implementation details of an algorithm without requiring a complete rewrite, such as swapping during runtime.

This is often used with dependency injection to allow implementations to be swapped out for test-specific.

An example of this interface is a logger implementation that is not concerned about if you log to a console or to a file, you can easily swap between the two during runtime or during production. This is done by implementing the Logging interface, rather then writing a specific interface.

Using this Strategy allows you to defer decisions about which implementation to use until run time.

### Template Pattern

Is used to defer or delegate some or all steps of an algorithm to a subclass.


#### Decorator Pattern

Enables you to change or configure the functionality of a specific object, such as adding buttons or functionality to a scrollbar, or defining exactly how to model sandwich orders from two different customers from the same ingredients.


### Flyweight pattern

Useful in situtations where you have several objects, and many may represent the same value. It can be possible to share the values as long as the objects are immutable.


### Singleton Pattern

A singleton is a class that allows only one instance to be created. It is often used to create a single point of entry to a third party, such as a database or a web service, so that a number of connections are managed in one place.

This is an example of lazy-initilization

```
public class Singleton {
  private static Singleton INSTANCE;
  public static Singleton getInstance(){
    if(INSTANCE == NULL){
      INSTANCE  = new Singelton();
    }
    return INSTANCE;
  }
}
```

This is  not necessary thread safe. A better approach is using the Singleton as a single-element Enum, the JVM gurantees taht only one instance will ever be created. Note that singleton's are generally difficult to test in isolation especially when it performs heavy operations, such as writing to a data base.  Singletons work best in specialized applications such as GUI on a mobile application. If you are building a large scale app, singleton's are best avoided since it will create a bottleneck.

```
public enum SingletonEnum {
  INSTANCE;
  public void singletonFunction(){
   //stuff   
  }
}
```

## Understanding the JVM

### How is memory allocated

The new keyword allocates memory on the Java heap. The heap is the main pool of memory accessible to the whole of the application.
If there is not enough memory available to allocate for that object, the JVM tries to reclaim memory from the heap using the garbage collector.

#### Generations

As objects survive more garbage collections, they are promoted to different generations. Older generations are not garbage collected as often.


### Difference  between stack and heap


Memory is split into two major parts, the stack and the heap.

The stack is the place where any primitive values, references to objects, and methods are stored.  The lifetime of variables on the stack is determined by the scope of the code.

When you call a method, those declared variables are placed on top of the stack.

### How can you define the size of the heap for the JVM

When starting the jvm you can specify the maximum heap with the command-line flag -Xmx and a size.

### Java Memory Leaks

A common misconception in Java is that because of the garbage collection, memory leaks are not possible, however excessive memory usage can occur if you are not careful.

### WeakReference

Is a generic container class, and when the contained instance has no strong references it is elgiible for garbage collection.

### What is a native method?

Regular Java class definitions are compiled to bytecode, held in class files.

Native methods are when you need to run some platform-specific code, such as making an operating system call.

### Shutdown hooks

When JVM terminates, it is possible to have some code run before it exits, similar to finalize method running before an object is collected.

Shutdown hooks are references to Thread objects, you can add a new reference by calling the addShutDownHook method on the current Runtime instance. 



## Sources
Below are a list of sources that have been used.
[StackOverflow:purpose of final, finally, finalize](http://stackoverflow.com/questions/7814688/in-java-what-purpose-do-the-keywords-final-finally-and-finalize-fulfil) ,
[CTCI (Java Chapter)](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X),
[Mindview:Java Generics](http://web.archive.org/web/20090323084529/http://www.mindview.net/WebLog/log-0061),
[StackOverflow:What is reflections](http://stackoverflow.com/questions/37628/what-is-reflection-and-why-is-it-useful)
[Javatpoint reflections](http://www.javatpoint.com/java-reflection)
