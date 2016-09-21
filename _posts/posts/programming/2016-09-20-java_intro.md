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

## Collection framework
* _ArrayList_ a dynamic array which grows as you insert more elements.
* _Vector_ similar to ArrayList, except it is synchronized and contains legacy methods not part of the collections framework.
* _LinkedList_ doubly-linked list implementation of the List and Deque interface.
* _HashMap_  hash table implementation of a Map interface (sometimes referred to as dictionary)

## Sources
Below are a list of sources that have been used.
[StackOverflow:purpose of final, finally, finalize](http://stackoverflow.com/questions/7814688/in-java-what-purpose-do-the-keywords-final-finally-and-finalize-fulfil) ,
[CTCI (Java Chapter)](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X),
[Mindview:Java Generics](http://web.archive.org/web/20090323084529/http://www.mindview.net/WebLog/log-0061),
[StackOverflow:What is reflections](http://stackoverflow.com/questions/37628/what-is-reflection-and-why-is-it-useful)
