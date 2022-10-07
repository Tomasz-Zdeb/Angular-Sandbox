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

## Setting up Angular application

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

## Creating new Angular application

```powershell
ng new <app_name> --prefix <prefix>
```

`--prefix` command allows to specify custom prefix. When not specified, the default value  is `app`.

During execution of this command, **Angular CLI** will ask for some choices to be made about the new application.  

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

As you se in above example **class** name consists of two parts:

* feature name
* `Component` appended to the end of the name

> camell casing is the casing convention for class names

For the root component of an application `app` name is used. Names are later used when referenced in code.

`export` keyword makes the class avaliable to use for other components of the application.

Body of the class consists of:  

* properties
* methods

On the above example only one property of type **string** with default value specified is being present.

### Component's Metadata

Classes with corresponding metadata create **Angular** components.

---

## References

* [Angular Docs](https://angular.io/docs)

* [TypeScript Website](https://www.typescriptlang.org/)

* [Angular: Getting Started Pluralsight Course](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents)

* [DeborahK's Angular-GettingStarted GitHub Repository](https://github.com/DeborahK/Angular-GettingStarted)
