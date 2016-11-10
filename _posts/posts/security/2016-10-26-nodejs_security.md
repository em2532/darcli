---
layout: post
title: NodeJs Security
date: 2016-10-26 12:00:00
categories: security
comments: true
en: true
description: NodeJs Security
keywords: "nodejs security, secure nodejs, hack nodejs, hack express, javascript security, nodejs security tutorial"
authors:
    - Edgar Montano
---

## Table of contents

* toc
{:toc}

## Overview

This document covers common security exploits used to attack NodeJS.

## Global  Namespace(scope) Pollution

 Because of the nature of NodeJS, applications are often written in such a way where the global namespace becomes polluted with tons of variables. Normallyi, this functionality could be relatively harmless, but exposing variables to the global scope can have rather negative repercussion. I'll demonstrate how this works. Suppose we have an application that contains a view counter for the amount of people who have viewed the home page. Below is an example written in Express demonstrating a simple app.

 ```
var express = require('express');
var app = express();
var views = 0;

app.get('/', function(req,res){
  views++;
  res.send('View counter = ' + views);
});

app.listen(4000);
 ```

 Now every time we refresh the page, our counter increments by one. This seems to work as we intended. However, we can take advantage of the fact that the views counter is in the global space, it means, that any user who visits the page can effect this counter.  Well one problem with this is that a malicious user (hacker), can design a script in order to overflow this value. For example, a user can write a script to execute the following command line code
 ```
 curl 127.0.0.1:4000
 ```
 . Executing this code will send an HTTP get request to the designated server and port. (Note, this command only works on Linux and Mac).

 Now let's say the user designed this script to overflow the view counter. How many requests before it overflows? Well... quite a lot to be honest. You can find the largest number by running in a NodeJS shell the following:
 ```
 Number.MAX_VALUE
 ```
 It turns out that value is: 1.7976931348623157e+308. This is quite a large number, and would definitely take a while to overflow. However, why would overflowing the value matter so much? Who cares? Well imagine, that somewhere else in the code, the view counter is used to perform a logic operation. Let's say, to find the average view per page. Well, since this value is overflown, it'll yield Infinity, and so performing any logical operation on it, would also yield Infinity, or possibly NaN. So you can see, that overflowing could be quite cumbersome, and you should pay attention to your global namespace. The reverse is true for underflow errors. However, underflow errors give even less predictable methods.

 An easy way to circumvent this overflow is to manually check if the number exceeds a reasonably large number, and at that case, you handle it before it becomes uncessarily large enough to overflow.  

 ## HTTP Parameter Pollution

 HTTP Parameter Pollution is actually boasted as being a feature in NodeJS. It's left up to the programmers to design and filter http parameters in a way where it doesn't break your application. To get a better sense of what I'm talking about lets consider this example. Let's say we want to search a website. In a typical PHP application a search is done as follows:
 ```
 http://example.com/?id=1
 ```
 What happens if we add an additional id value to the query string?
 ```
 http://example.com/?id=1&id=2
 ```
  In a PHP application, the application will ignore the first instance of id, where id =1, and it would instead use the last instance of the parameter, so it will search for id=2.

  However, NodeJS handles this in a vastly different way. Let's view the following code and see what we get.

```
  var express = require('express');
  var app = express();

  app.get('/', function(req,res){
    res.send('id : ' + req.query.id);
    console.log('ID = ' +  req.query.id);
  });

  app.listen(4000);
```

Now let's say we pass in the same parameters as we did for our PHP application.
```
localhost:4000?id=1&id=2
```

The expected output would be id = 2. However this is not the case in NodeJS. If you run this example, you'll get both id values separated by a comma. So we'll get id : 1,2 . This behavior is unintended, and it's up to the programmer handle the case where the length of req.query.id is greater then one. This is actually a design feature of NodeJs and not a flaw, however it can be exploited in a way where it could infact be a potential flaw. Suppose the ID field is used to build various query strings. Your application uses the id to then query the database for a specific value, but it expects only one ID to be passed. The system will most likely throw an error since it cannot handle the additional parameter, and in some cases, this actually could cause the server to crash.
