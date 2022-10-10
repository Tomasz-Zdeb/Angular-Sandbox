# Angular Sandbox

Step by step guide on [Angular](https://angular.io/) framework with code examples.

> Please take into account that some examples imported to this guide may be provided under different licensing terms than this guide.

## What is Angular

**Angular** is a **JavaScript** framework, that uses **HTML**, **CSS** and **TypeScript** to build client-side applications.

## Angular's benefits

* Allows to embed features (E.g. loops, local variables, if stetements) into **HTML**, which makes it more expressive.

* Provides data binding functionalities that allow to bind data to the **UI**

* Enforces modular design
* Provides built in functionalities that ease up Back-End integration

## Development tools

* **Code Editor** - Suggested: [VS Code](https://code.visualstudio.com/)
* **npm** - It comes bundled with [Node.js](https://nodejs.org/en/), therefore **Node** installation is necessary to get **npm**.

* **(globally) installed Angular CLI (ng)** - installation is performed via **npm**

  ```powershell
  npm install -g @angular/cli
  ```

## Angular application architecture

Angular applications consist of multiple **components** and **services** (E.g. service for accessing data from Back-End app), that can be shared between these.

### Components

An **Angular component** consists of:

* **Template** - **HTML** that defines the view
* **Class** associated with the view, which consists of:  
  * **Properties** - Data elements available for binding to the view
  * **Methods** - Actions for the view that perform actions like response for uses input

   It can be also called **Code Behind**
* **Metadata** that provides additional information about the component to **Angular**

## TypeScript

Open-Source programming language developed by **Microsoft**. It is a superset of JavaScript and it's used for building **Angular** applications.

### Transpilation

Before being interpreted by a web browser, **TypeScript** must be compiled to plain **JavaScript**.  

### Strong typing

It's the main feature of **TypeScript**. That means that every object in the code has to be a well known type.

### Class-based object-orientation

**Type Scripts** implements such **OOP** concepts as:

* Classes
* Interfaces
* Inheritance

## Required dependencies

In order to develop **Angular** application, thing such as:

* **Angular** framework and libraries
* **Angular  CLI**
* **TypeScript** programming language
* Testing tools
* Other dependencies

are needed.

### package.json

Luckily there is no need to download all of that manually. `package.json` file, that specifies **npm**  project package requirements can be created. **npm** installs all the specified dependencies and distinguishes between:

* development only dependencies
* release dependencies

It contains also metadata about the build like **version** or **project name**, and **scripts** which are executed when a certain **npm** command is being run. This mapping allows to use the same **npm** commands for **build**, **run**, **tests** and so on, in different projects based on different technologies.

## Running Angular application

Typically **Angular** utility **scripts** look something like this:  

```json
 "scripts": {
    "ng": "ng",
    "start": "ng serve -o",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  }
```

* **ng** runs **Angular CLI**
* **serve** command for, tells **ng** to build the project and run local development web server
* **-o** flag is used to open the development web server's exposed **URL** in hosts default web browser

> To stop the running development server terminate the server console session the way You like E.g. by using **^C**

## Single Page Application

**Angular** based applications are the **Single Page Applications**, which means, that in reality only the `index.html` is the real web-page sent to the client. The rest is the **JavaScript** (as an output from the **TypeScript** compilation).

So the whole application is sent to the **client's web browser** and all the interactions happen in **client's browser** even when user is accessing different **URL** since **Angular routing** functionality is providing support for that.  

## Creating new Angular app

```powershell
ng new <app_name> --prefix <prefix>
```

`--prefix` command allows to specify custom prefix. When not specified, the default value  is `app`.

During execution of this command, **Angular CLI** will ask for some choices to be made about the new application.  

---

## Component's architecture

An **Angular** component can look like this:

```js
import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}<h1>
    <div>My First Component</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
```

* most bottom part starting with `export` keyword is the **class** that provides all the data and methods for the view - it can be thought of as **code behind**
* Section inside the `@Component({...})` element is the **decorator** that contains:
  * metadata
  * template
* `import` section imports outside code.

### Component's Class

As you see in above example **class** name consists of two parts:

* feature name
* `Component` appended to the end of the name

> camell casing is the casing convention for class names

For the root component of an application `app` name is used. Names are later used when referenced in code.

`export` keyword makes the class avaliable to use for other components of the application.

Body of the class consists of:  

* properties
* methods

On the above example only one property of type **string** with default value specified is being present.

### Component's Metadata (provided by decorator)

Classes with corresponding metadata attached create **Angular** components. Metada is being attached as a **decorator**.

**Decorator** is a function that adds metadata to a **class**, its members or its method arguments.

* it's a **TypeScript** feature (however it's a requested feature to implement in next **JavaScript** versions)
* scope of the decorator is limited to the feature it decorates.
* it's prefixed with `@` sign
* Angular provides built-in decorators to provide additional information to Angular
* it's placed exactly above the feature it's decorating. In above example it is placed exactly above the class it decorates
* it's simmilar to **attributes** used in other programming languages, thus there is no semicolon at the end of decorator
* it's a function so at the end it conains opening and closing set of parenthesis: `()` to pass any arguments like an object enclosed in `{}` curly braces

For example `@Component({})` decorator is used to identify a **class** as a **component**.

Object passed to the `@Component({})` decorator can have multiple properties. In above example there are two: `selector` and `template`. Actually a **component** should always have a **template**

**Selector** is a named used to reference the component in **HTML** as a **directive**.

**Directive** is a custom **HTML** tag. Whenever there is a directive placed in **HTML**, corresponding component will be rendered in that place.

```html
<div><h1> {{property_name}} <h1>
```

Double curly braces syntax `{{...}}` is used for **data binding**. As seen in the previous example, the **class** property is being bound to the **template's HTML** using that syntax.

## Importing

In order to use an external **class** or **method** in a file, there need to be some reference provided for compiler to instruct him where to look for that **class** or **method**. To do so `import` statement is used. It's a **TypeScript** feature simillar to **import** or **using** statements used in different languages.

The keyword `import` allows to use **exported** members (proceededd with `export` keyword) from:

* other files within the application
* Angular framework
* external **JavaScript** libraries

That's why in the previous example

```js
import { Component } from '@angular/core';
```

statement was being used. `Component()` decorator function was not defined in the file, but exists somewhere. Therefore compiles must be instructed where to find it.

## Bootstrapping the application - Root component

---

## References

* [Angular Docs](https://angular.io/docs)

* [TypeScript Website](https://www.typescriptlang.org/)

* [Angular: Getting Started Pluralsight Course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents)

* [DeborahK's Angular-GettingStarted GitHub Repository](https://github.com/DeborahK/Angular-GettingStarted)
