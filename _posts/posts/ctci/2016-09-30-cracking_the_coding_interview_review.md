---
layout: post
title: Cracking The Coding Interview Review
date: 2016-09-20 12:00:00
categories: interview
comments: true
en: true
description: An review of cracking the coding interview
keywords: "cracking the coding interview, coding interview, programming interview, job search, job interview, interview skills, hash table, arrays, strings, data structures, algorithms, interview algorithms questions, interview questions, programming interview questions"
authors:
    - Edgar Montano
---

## Table of contents

* toc
{:toc}

## HashTable

A naive implementation is to use an array of linked list and use a hashCode function.

1. First Compute key's hash code (should be long for more complex hashes),
2. Map the hashCode to an index in the array. ``` hash(key) % array_length```
3. store the key and value in this index, if there is a collision, then you have to iterate the linked list to find a point of insertion.

An alternative approach to using linked list is using a balanced binary search tree which would yield _O (log  n)_ lookup time.

Run time complexity:

| Function    | Average     |  Worse      |
| ----------- | :---------: | :---------: |             
| search      | O(1)        |  O(n)       |
| Insertion   |  O(1)       |   O(n)      |
| delete      | O(1)        |  O(n)       |

## Linked List
