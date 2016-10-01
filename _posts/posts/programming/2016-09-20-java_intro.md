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

## Effect of keeping a constructor private (inheritance)
 By keeping a constructor private, the class cannot be inherited from. It forces the sub-class to explicitly make a call to non-private super class constructor. Places you might consider using a private constructor:

 * Constructor only available in Static factory method.
 * A singleton (not more than one instance of your class exisit in the program)
 * A utility class only containing static methods.

## Difference between Comparable and Comparator interfaces

The _Arrays_ and _Collections_ have several _overloaded_ sort methods. These sort methods can be split into two categories:

* one that takes an array as a parameter
* one that takes a Comparator object.

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

### Trees

_NOTE: This section has not been implemented._

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

## Sources
Below are a list of sources that have been used.
[StackOverflow:purpose of final, finally, finalize](http://stackoverflow.com/questions/7814688/in-java-what-purpose-do-the-keywords-final-finally-and-finalize-fulfil) ,
[CTCI (Java Chapter)](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X),
[Mindview:Java Generics](http://web.archive.org/web/20090323084529/http://www.mindview.net/WebLog/log-0061),
[StackOverflow:What is reflections](http://stackoverflow.com/questions/37628/what-is-reflection-and-why-is-it-useful)
