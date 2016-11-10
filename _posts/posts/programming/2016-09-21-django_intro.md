---
layout: post
title: Django Overview
date: 2016-09-20 12:00:00
categories: programming
comments: true
en: true
description: An Overview of Django
keywords: "django, django basics, django tutorial, overview django, django documentation, python framework, web framework, python web"
authors:
    - Edgar Montano
---

## Table of contents

* toc
{:toc}

## Basic Django
Django is a web framework built on top of python, meant for rapid web development. Django is a MVC framework (model-view-controller). Django provides the following:
* Object-relational mapping (ORM). Note django is NOT a web server!
* URL routing
* HTML templating
* form handling
* unit testing tools

## Installation
Check if you have pip installed, by running the following command on the terminal:
```
pip --version
```
if you do not have pip follow [this guide](https://packaging.python.org/installing/). Otherwise run the following command to install Django:
```
sudo pip install django
```
You can similarly check the version of Django you are running by using the command:
```
django-admin --version
```

## Creating a Django project
You can create your first Django project by running:
```
django-admin startproject first_project
```
This will create a directory structure named first_project with the Django files stored within. Within this directory is a manage.py file. We can see a list of commands we can run by typing:
```
python manage.py
```
afterwards we can select to see specific details (for example runserver) about that command by typing:
```
python manage.py runserver
```

## Django directory content explaination
* \_\_init\_\_.py  - tells django where a project folder is [note: do not edit]
* _manage.py_ - runs commands for our project such as runserver [note: do not edit]
* _wsgi.py_ - provides a hook for web servers [note: do not edit]
* _settings.py_ - configures Django
* _urls.py_  - routes requests based on URL

## Creating a Django app
* an app is a folder with python files
* within Django, an app is a components
* Django project an contain multiple Django components
* each app fits a specific purpose (for example, blog app, forum, wiki)

You can create an app by running the following:
```
python manage.py startapp myapp
```
where myapp is the name of the application you want to create.  This will create a separate directory with the name of the specified app, so in this case, you will now have a folder called "myapp" in your project directory. When adding an app, you must configure the _settings.py_ file, and specify the app you just have added.

An example of this would be:

```
INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',
)
```

note the trailing comma added!

### Pieces of an app
* _models.py_ - data layer
* _admin.py_  - administrative interface
* _views.py_  - control layer
* _tests.py_ - tests the app
* _migrations/_ - holds migration files


## Django Settings
You usually edit the following settings:

* INSTALLED_APPS - when adding a new Django app
* TEMPLATES - when adding templates for the first time
* STATICFILES_DIR - when adding static assets to your project.
* DEBUG - when deploying to production, set to false
* DATABSE - default using sqlite, however for production you might want to switch to to another database management system


## Django documentation
For all settins, consult the Django documentation, which is well documented through the following [link](https://docs.djangoproject.com/en/1.10/intro/overview/)

## Defining Django models (models.py)
* contains the set of models for the Django app.
* _model_ is a class inheriting from django.db.models and is used to define fields as class attributes
* create the data layer of an app
* define database structure
* allows us to use Django's ORM to query the database.

An example of a model would be the following:

```
from django.db import models

# Create your models here.
class Item(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    amount = models.IntegerField()
```

### Django model fields

Fields can take attribute, such as max_length, null, or blank.  An example of this is the CharField
```
models.CharField(max_length=10, null=True, blank=True)
```
A list of common field attribute options are as follows:

* max_length - used to define charfield length
* null=True - means null can be stored in the field, representing no data
* blank=True - allows empty string
* default - allows to set default field
* choices - limits the amount of choices available

#### Numeric data fileds
* IntegerField - stores integer values such as -1,0,1,2,...
* DecimalField - stores float values such as 0.5, 3.14,...

#### Textual data (string) fields
* CharField - e.g. "First Name"
* TextField - e.g. "This is usually a long description"
* EmailField - e.g. "joe@doe.com"
* URLField - e.g. "www.edgar-montano.com"

#### File data fields
* FileFiled - e.g. "edgar_montano_resume.pdf"
* ImageField - e.g. "edgar-montano.jpg"

#### Boolean data field
* BooleanField - "True, False"


#### Date data field
* DateTimeField - "datetime(2016,1,18,0,0)"

### Running migrations
When a new model is defined, the initial migration will create the corresponding tables. Migration are required for the following operations:

* each time a new model is added
* each time a new field is added to an existing model
* each time a field is removed from an existing model
* each time an attribute is modified in an existing field

The commands for making migrations is:
```
python manage.py makemigrations && python manage.py migrate
```

The makemigrations command generate migration files for later use, this is stored in the migrations folder, the migrate command then runs all migrations that haven't been run yet. You can show the migrations and history by using the following command:
```
python manage.py migrate --list
```

### Django admin
You must create a superuser, in order to do so you must run the following:
```
python manage.py createsuperuser
```

Afterward you must register the models in the admin.py file. An example of doing so is shown below:

```
#inventory/admin.py
from django.contrib import admin

# Register your models here.
from .models import Item #import item from models

admin.site.register(Item) #register model
```

After you create a super user, you can login to the admin panel by first running the server:
```
python manage.py runserver
```

Then visit the url [127.0.0.1:8000/admin](localhost:8000/admin) this link may not work depending on the port specified, however just navigate to localhost:port/admin and login using the creditentials specified when creating a superuser. 
