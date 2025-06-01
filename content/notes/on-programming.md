---
title: "On Programming"
tags: ["general"]
date: "2017-07-06"
draft: false
path: "/notes/on-programming"
---

Below are my notes on software development from my days of programming. 

## Application programming interface (API)

Every software product is built with the same three parts. 

- The core components of software products:
    - Client: Website or app used by end users
    - Server: Processes requests from the client
    - Database: Permanent storage of data
- API (Application Programming Interface):
    - Front door to the server
    - Allows applications to access data or trigger events
    - Can be public (used by external developers) or private (internal use only)
    - Example of API Request of Airbnb:
        - Client sends request to api.airbnb.com/listings for Toronto
        - Server retrieves listings from database
        - Database returns listings to server
        - Server sends listings back to client
- Types of APIs:
    - SOAP: Legacy design, used in healthcare and financial services
    - REST: Most popular design pattern
    - GraphQL: Newer design created by Meta, often used for private APIs
- Common REST API Request Types:
    - GET requests: Retrieve data (e.g., opening a web page)
    - POST requests: Submit new data to the server (e.g., creating an image with DALL-E)
- API Request Components:
    - Base URL: Home for all API endpoints
    - Endpoint: Specific resource to access
    - Query parameter: Additional data passed with requests
- APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, Morningstar's software system contains daily stock market data. The stock market app on your phone “talks” to this system via APIs and shows you daily stock prices on your phone. People interact with software through Graphical User Interfaces (GUIs) while software interacts with another software through APIs.
    - APIs are developer friendly. APIs can serve as [Placeholder]-As-A-Service. The placeholder can be wealth management, inventory management or ride-sharing. Simply by writing a few lines of code, platforms can let their customers set up any services. APIs abstract away code and business complexity. I can use ACH services through API without writing code or understanding how ACH works. APIs can be internal or external facing.
    - APIs consist of functions, contracts, business logic which helps scale for adoption. Businesses today can use APIs from other software providers without having to invest their own resources to build out capabilities. If I am in the business of stock data, I do not need to build a payment gateway. I can use Stripe's API to build my business.
    - Business model for API is pay-as-you-go. Every time an API is consumed, you get charged. API first companies have deep moats because they are highly specialized, but can also pose risk if a bigger company enters the market.
    - Components are derivatives of APIs. They are reusable objects based on API specification.
    - API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server.
    - There are different kinds of APIs: SOAP APIs, REST APIs and Websocket APIs.
    - REST APIs are the most popular and flexible APIs found on the web today. The client sends requests to the server as data. The server uses this client input to start internal functions and returns output data back to the client. REST stands for Representational State Transfer. REST defines a set of functions like GET, PUT, DELETE, etc. that clients can use to access server data. Clients and servers exchange data using HTTP. The main feature of REST API is statelessness. Statelessness means that servers do not save client data between requests. Client requests to the server are similar to URLs you type in your browser to visit a website. The response from the server is plain data, without the typical graphical rendering of a web page.
        - One software system sends a request to the API of another system and in return, the API sends the response. The request has a type and a payload. These APIs can be accessed via API keys or authentication tokens.
        - REST uses various representation to represent a resource like text, JSON, XML but JSON is the most popular schema. A schema is a structure, which is defined in JSON format. It provides data type information for the data record fields. The schema defines whether a field in the record is a string, integer, floating point, or other data types.
        - The request has a type and a payload.
            - Type signifies what should the API do: Add something (POST), Delete something (DELETE), Update something (PUT), or Fetch something (GET).
            - The payload contains any important information that the API needs.
            - Some APIs also have headers, which contain the authentication information, so that only the right systems can access the APIs.
            - This request is sent to the end-point of the API, a place on the internet where this API lives (generally URL).
            - When API receives the request, it takes some action, generates the response, and sends back a response.
            - A response along with the returned data also contains a status code, which signifies if the API request was fulfilled or not.
    - It is critical to know the ins and outs of a contract. You don't set your house on fire to test your smoke alarm. You test the contract. This ensures your applications will work together. The contract is between a consumer and a provider.
    - GraphQL is a query language that was developed specifically for APIs. It prioritizes giving clients exactly the data they request and no more. It is designed to make APIs fast, flexible, and developer-friendly. As an alternative to REST, GraphQL gives front-end developers the ability to query multiple databases, microservices, and APIs with a single GraphQL endpoint. Organizations choose to build APIs with GraphQL because it helps them develop applications faster.

## Monolithic vs microservice architecture

- A monolithic architecture is a traditional approach where an entire application is built as a single, self-contained unit. This architecture has several characteristics:
    - Single Codebase: All components of the application are part of one codebase.
    - Shared Database: The entire application typically uses a single, shared database.
    - Deployment: The whole application is deployed as one unit.
- Advantages of Monoliths:
    - Simpler development process, especially for smaller applications
    - Easier testing and deployment
    - Better performance for certain types of applications
- Disadvantages of Monoliths:
    - Scalability issues as the application grows
    - Difficulty in adopting new technologies
    - Challenges in understanding and maintaining large codebases
- Microservice architecture involves breaking down an application into smaller, independent services that communicate with each other. Key features include:
    - Distributed Services: Each service is developed and deployed independently.
  - API Communication: Services interact through well-defined APIs.
  - Database per Service: Each microservice typically has its own database.
- Advantages of Microservices:
  - Improved scalability and flexibility
  - Easier adoption of new technologies
  - Better fault isolation
- Disadvantages of Microservices:
  - Increased complexity in development and deployment
  - Challenges in data consistency and transactions across services
  - Potential performance overhead due to network communication
- Choosing the Right Architecture: The choice between monolithic and microservice architectures depends on various factors:
  - Project Size: Monoliths are often suitable for smaller projects, while microservices are beneficial for larger, complex applications.
  - Team Structure: Microservices can be advantageous for large, distributed teams.
  - Scalability Requirements: If high scalability is needed, microservices might be the better choice.
  - Development Speed: Monoliths can offer faster initial development, while microservices provide better long-term flexibility.

## Testing, debugging & performance

Testing is essential to successfully shipping new features the first time and ongoing maintenance of existing software. Testing is a high-leverage area for PMs to quickly improve your product quality. There are many types of testing, but we’ll focus on the following:

- Unit tests: Unit tests are code written in combination with new functions, to test a variety of functionality. This is the lowest level of testing. The percentage of the code base that has associated unit tests is called coverage. 
- Integration tests: Integration tests are tests between different components of the software. For example, we might test that the new feature we added to upsell customers at checkout properly works with our tax calculation service. This is targeted testing between components that are independent but closely related.
- End-to-end tests: End-to-end (E2E) tests are a full walkthrough of the desired workflow and interact with all relevant systems. E2E testing is more time-intensive but often reveals issues you otherwise might not find. This is especially true if the workflow is dependent on many services working together correctly.
- User acceptance tests: User acceptance tests are typically in the domain of product or design. These tests require users to use the current version of your feature from beginning to end with minimal intervention. From this, you’ll learn if the interaction design is intuitive or if more work is needed before making the feature available.

<details>
  <summary>Testing</summary>

A well functioning team cannot rely on creating features in a hurry, throwing them over the fence and then expecting our applications to work well and without bugs. To instil quality from the start of a feature, there should be tests for it.

Automated testing helps with this. Pre-commit hooks can be used when deploying builds so that errors are caught and addressed early. Unit tests can be run using pre-commit hooks. See a post [here](https://amberwilson.co.uk/blog/unit-tests/). However, there is a fine line between having too many automated tests, e.g. end-to-end tests that take too long to run with each build, and not having enough. Some companies run quicker unit tests on each build, and then run end-to-end tests as a nightly build.

Manual testing is important too. It is usually done by QA engineers, and helps reveal edge cases that automated tests do not catch.

JavaScript lacks the strict type checking of Java, which is a blessing and a curse. Code is easier to write but requires more testing to ensure correctness.
</details>

<details>
  <summary>Debugging & Console</summary>

Debugging is one of the key skills required to be a great developer. Below are the key things you need to know when working with the debugger.

1. Step over code, steps over a function that doesn't contain a bug and runs its code
2. Step into code, steps inside a function and allows you to run each part separately
3. Step out of code, steps out of a function you are inside, and runs its code
4. Resume execution of code

Check out the docs on the [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Debugger) debugger and the [Chrome](https://developers.google.com/web/tools/chrome-devtools/javascript/reference#breakpoints) debugger. Also check out [this article](https://peterlyons.com/js-debug) from Peter Lyons. He explains debugging of both front-end and back-end JavaScript code. Another great resource on [debugging javascript](https://blog.bitsrc.io/debugging-javascript-like-a-pro-a2e0f6c53c2e).

A lot of people use `console.log` to debug in the console. `console.log` is your best friend. The `log()` method of `console` logs things to the web console. What some people may not know is that you can log things in nice ways! Here are three:

**1. Computed property names -**

The following objects could be logged one at a time:

```js
const cat = { name: 'Fluffy', colour: 'orange', specialSkill: 'staring' }
const dog = { name: 'Thor', colour: 'brown', specialSkill: 'running' }
const fish = { name: 'Glub', colour: 'blue', specialSkill: 'blowing bubbles' }
```

And the results would be as follows:

```js
console.log(cat) // {name: "Fluffy", colour: "orange", specialSkill: "staring"}
console.log(dog) // {name: "Thor", colour: "brown", specialSkill: "running"}
console.log(fish) // {name: "Glub", colour: "blue", specialSkill: "blowing bubbles"}
```

**2. CSS in the console -**

Define styles like this in the console:

```js
var styles = [
  'background: linear-gradient(#21618C, #5DADE2)',
  'padding: 5px',
  'border-radius: 8px',
  'text-align: center',
  'color: white',
  'display: block',
].join(';')
```

Then prefix console log with the `%c` flag, adding the `styles` variable to the end:

```js
console.log(
  `%c My cat is ${cat.name}, ${cat.colour}, ${cat.specialSkill}`,
  styles
)
```

Try it in your console or look at [this](https://codesandbox.io/embed/determined-wozniak-4lt93) example on CodeSandbox!

**3. Tables in the console**

To display objects in a table in order to more easily compare them, try using `console.table`. You can do so with the animal objects above by running:

```js
console.table([cat, dog, fish])
```

Not only will there be a nicely-formatted table to see in the console, but the (unlabeled) objects will also be displayed as well.

Check out [Chrome Devtools](https://developers.google.com/web/tools/chrome-devtools/) to learn more.

```js
    // Formatted Strings
    console.log(
        "%c The quick %c brown %c fox jumps over the %c lazy dog",
        "font-size: 34px;",
        "font-size: 24px; color: brown;",
        "color: orange;",
        "color: black; font-weight: bold;"
    )

    // Formatted Strings with Css styling
    for (let i = 0; i < 10; i++) {
        console.log(
        "%s I've been called %d times, this is the document body %o",
        "Hello", i, document.body
        );
    }

    // Object Tables
    var animals = [
        { kind: 'Horse', name: 'Henry', age: 43 },
        { kind: 'Dog', name: 'Spot', age: 13 },
        { kind: 'Cat', name: ' Mittens', age: 18 },
    ];
    console.table(animals);

    // Tracing function calls
    // The console.trace method lets you dump a stack trace in the console — 
    // in other words, the path the runtime took to call that function — 
    // which is useful in tracking down the function responsible for passing bad data.
    function foo() {
        bar();
        function bar() {
        console.trace();
        }
    }
    foo();

    // Counting function calls
    window.addEventListener('click', function(event) {
        console.count(event.type);
        console.log(event);
    });

    // To reset a counter, you just need to call below with the label, and it will reset back to zero.
    console.countReset();

    // Grouping Information in collapsible list
    console.group('First group');
    console.log('First message');
    console.group('A group inside the first group');
    console.log('A message inside the group inside the first group'); console.log('Another message inside the group inside the first group');
    console.groupEnd();
    console.log('Second message'); console.groupEnd();

    // Inspecting State
    $_ variable holds the most recent expression that was evaluated in the console context.
    And $0 through $4 holds the most recent element that was inspected with inspect element
```
</details>

<details>
<summary>Performance</summary>
Why a little discipline can help if you’d like your site to load & be interactive quickly on mobile devices? tl;dr: less code = less parse/compile + less transfer + less to decompress.
</details>

## CSS

<details>
  <summary>BEM</summary>

BEM is a methodology used for modular CSS classes. A robust CSS architecture can help navigate large codebase. `Block`, `Element` and `Modifier`. A `Block` is a component or feature than can stand alone and is not dependent on any other code. It can be re-used anywhere. Next, an `Element`. This is always part of a `Block` and has no meaning on its own. Lastly, there is the `Modifier`. This changes the behavior and/or an appearance of a `Block` or `Element`.

Example:

__`.button`__ is a block.

**`.button__label`** is an element.

__`.button--confirm`__ is a modifier.

See resources [here](http://getbem.com/introduction/) and [here](https://zellwk.com/blog/css-architecture-1/).
</details>

<details>
  <summary>Psuedo Selectors</summary>

`::before` (`:before`) and `::after` (`:after`) are pseudo elements, which are different from pseudo classes. Both of these are grouped under pseudo selectors. I like this quote from MDN ~

> Even the most skilled web developers are still amazed by what's possible using selectors.

Pseudo selectors are only two types of selectors. The others are: simple selectors, attribute selectors, multiple selectors and combinators. All of these help us to target and style HTML elements. So, pseudo selectors include both pseudo elements and pseudo classes. They are added to the end of other selectors, and don't apply to whole elements, only parts of them.

The pseudo classes (e.g. `:hover`, `:focus`, and `:nth-of-type()` - plus 38 others) style elements in a _certain state_.

The pseudo elements (e.g. `::after`, `::before`, and `::first-letter` - plus 3 others, not including experimental ones) apparently need `::` rather than `:`. These don't depend on the state of an element.

  - [MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements) page has great examples and learning playground to learn the topic.
  - https://codepen.io/pehaa/pen/ROapJZ
</details>

<details>
  <summary>Using CSS methodologies for maintainability</summary>

   - **OOCSS**: a methodology organized around two main principles. The first principle is separate structure and skin. This means the CSS to define the structure (like layout) shouldn’t be mixed together with the CSS to define the skin (like colors, fonts, etc.). This makes it easier to “re-skin” an application. The second principle is separate container and content. This means think of elements as re-usable objects, with the key idea being that an object should look the same regardless of where it is on the page. [https://github.com/stubbornella/oocss/wiki](https://github.com/stubbornella/oocss/wiki)
    - **SMACSS**: base rules, layout rules, modules, state rules, and theme rules. The SMACSS methodology also recommends some naming conventions.
    - **BEM**: a methodology organized around the idea of dividing the user interface into independent blocks. A block is a re-usable component (an example would be a search form, defined as `<form class="search-form"></form>`). An element is a smaller part of a block that can’t be re-used on its own (an example would be a button within the search form, defined as `<button class="search-form__button">Search</button>`). A modifier is an entity that defines the appearance, state, or behavior of a block or element (an example would be a disabled search form button, defined as `<button class="search-form__button search-form__button--disabled">Search</button>`). The BEM methodology is simple to understand, with a specific naming convention that allows newcomers to apply it without having to make complex decisions. The downside for some is that the class names can be quite verbose, and don’t follow traditional rules for writing semantic class names. Later approaches like Atomic CSS would take this untraditional approach to a whole other level!
    - **Atomic CSS (aka Functional CSS)**: a methodology organized around the idea of creating small, single-purpose classes with names based on visual function. This approach is in complete opposition with OOCSS, SMACSS, and BEM — instead of treating elements on the page as re-usable objects, Atomic CSS ignores these objects altogether and uses re-usable single purpose utility classes to style each element. So instead of something like `<button class="search-form__button">Search</button>`, you would have something like `<button class="f6 br3 ph3 pv2 white bg-purple hover-bg-light-purple">Search</button>`. Many people saw this methodology as a complete violation of established CSS best practices. Further read: [https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).
    - **CSS in JS**: a methodology organized around defining CSS styles not in a separate style sheet, but directly in each component itself. It was introduced as an approach for the React JavaScript framework (which already took the controversial approach of defining the HTML for a component directly in JavaScript instead of a separate HTML file). Originally the methodology used inline styles, but later implementations used JavaScript to generate CSS (with unique class names based on the component) and insert it into the document with a style tag. The CSS in JS methodology once again goes completely against established CSS best practices of separation of concerns.
</details>

<details>
  <summary>Float</summary>
  
  The three columns are not equal in height, and the page doesn’t fill the height of the screen. These issues are inherent with a float-based approach. All a float can do is place content to the left or right of a section — the CSS has no way to infer the heights of the content in the other sections. This problem had no straightforward solution until many years later, with a flexbox-based layout.
</details>

<details>
  <summary>Flex</summary>
  
   - [Solved By Flexbox](https://github.com/philipwalton/solved-by-flexbox). 
   - Flexbox eliminates a lot of the float hacks, but the code isn’t as expressive as it could be for defining layout. It’s hard to read the flexbox CSS and get a visual understanding how all of the elements will be laid out on the page. This leads to a lot of guessing and checking when writing flexbox-based layouts.
</details>

<details>
  <summary>Css Grid</summary>

   - [Complete Guide Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
</details>

<details>
  <summary>Pseudoelements</summary>
  
   - [Pseudo Elements In Css](https://www.smashingmagazine.com/2011/07/learning-to-use-the-before-and-after-pseudo-elements-in-css/). `::before` and `::after`, many of the uses involve graphics but no actual word content. You must set both the `content:"";` property and if your content is empty the `display:inline-block` property or the psuedoelement will not show up. 
</details>

<details>
  <summary>CSS preprocessors</summary>
  
   - A tooling that was created to help improve the experience of working with CSS as a language itself, starting with CSS preprocessors. A CSS preprocessor allows you to write styles using a different language which gets converted into CSS that the browser can understand. For ex: SASS helps with variables, helper functions, and calculations. Another one is LESS, the key difference from SASS is the syntax, which was designed to be as close to CSS as possible. Less is also written in JS using Node.js. Another alternative CSS preprocessor is Stylus. To use Sass, you need to install Ruby, the programming language used to compile Sass code to regular CSS. Then you would need to install the Sass gem, then run a command in the command line to convert your .sass files into .css files. `sass --watch index.sass index.css`  or `lessc index.less index.css`
</details>

<details>
  <summary>CSS postprocessors</summary>
  
   - A CSS postprocessor uses JavaScript to analyze and transform your CSS into valid CSS. In this sense it’s pretty similar to a CSS preprocessor — you can think of it as a different approach to solving the same problem. The key difference is that while a CSS preprocessor uses special syntax to identify what needs to be transformed, a CSS postprocessor can parse regular CSS and transform it without any special syntax required.
</details>

## Javascript

<details>
  <summary>Arrow</summary>

Also known as a fat arrow, `=>`.

```jsx
var elements = [
'Hydrogen',
'Helium',
'Lithium',
'Beryllium'
];

(elements.map(function(element) {return element.length}))
(elements.map(element => {return element.length}))
(elements.map(element => element.length))
(elements.map(({length}) => length))
```

The first function in the list is written without fat arrows. The last three functions are variations of the first function, showing how fat arrows can be used to write shorter function expressions, and therefore less code. You will need a code compiler like [Babel](https://babeljs.io/) to compile fat arrows into ES5 syntax so older browsers can use ES6 JavaScript.

There are a _lot_ of resources that try explaining this syntax. Wes Bos's [introduction](https://wesbos.com/arrow-functions/) or [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are great resources to get started.
</details>

<details>
  <summary>Strings</summary>

This list is meant as a quick and basic introduction to JavaScript strings.

*   A sequence containing some letters, numbers or symbols.
*   Have available methods and properties.
*   Can be stored in variables.
*   Sit between either single quotes (`' '`), double quotes (`" "`), or backticks ( `` ``).
*   Can be concatenated (stuck together) with the `+` operator, or with backticks (template strings) in ES6.
*   Template strings, or template literals, can take any valid JavaScript expression, allowing dynamic strings.
*   Can contain special characters, such as quotation marks, as long as they are escaped - e.g. `"She'\ll be coming '\round the mountain when she comes"`.
*   There's no need to escape dissimilar quote marks. For example: "This 'is' fine". This is probably why we tend to favour double quotes in HTML attribute values, and singles in JS (since it allows you to create some innerHTML without the need for escaping).
*   When using template literals, you don't need to escape `'` or `"` ... and ``this` `"is"` `'also'` `fine``
*   Is either a _string primitive_ - immutable and more common, e.g. `const stringPrimitive = "Hello, I am a string.";` .
*   Or a _string object_ - `const stringObject = new String("Hello, I am a string.");`
*   The `typeof` operator is used to determine if a string's type is _string_ or _object_.
*   Each character is indexed and can be accessed by an index number using square bracket notation (e.g. "Hello World" - `myString[0]` outputs "H").
*   Similar methods to the one above include: `charAt()`, `indexOf()`, `lastIndexOf()`, `slice()`.
*   Other common methods and properties are: `length`, `toUpperCase()`, `toLowerCase()`, `split()`, `trim()`, `replace()`.
*   Use [Escape Tool](https://www.the-art-of-web.com/javascript/escape/) if you run into escape character issues.

Many thanks to my good friend <a href="https://twitter.com/qubyte">Mark</a> for suggesting additions :)
</details>

<details>
  <summary>Ternary Operators</summary>

It can replace more verbose syntax (like `if` statements). It looks something like this:

```js
const hoursOfSleep = 5;
const timeForSleep = (hoursOfSleep < 8) ? 
    "Yup, no more phone for you" : 
    "Ah nah, a few more minutes of phone time won't hurt"; 
```

Notice the **?** and the **:** These are the important parts. If the condition (in this case `hoursOfSleep`) in front of the question mark evaluates to true, the value of the first expression before the colon is returned. If the condition in front of the question mark evaluates to false, the value of the second expression after the colon is returned. As you can see, if you have had less than 8 hours of sleep, you shouldn't be using your phone. Ternary operators are really flexible and can be used in a number of ways. You can stack them together:

```js
const catsRule = true,
const dogsDrool = false,
const catDog = catsRule ? 
    (dogsDrool ? "Let's all live in harmony": "Both cats and dogs drool") :
    (dogsDrool ? "Dogs are cool, nearly as cool as cats" : "Dogs and cats can be friends");
// Output: `"Both cats and dogs drool"`
```

You don't even need to use the parentheses, and can also use multiple statements separated by commas. You can return statements in functions. You can use them in place of bulky `if/else` statements with much nicer-to-read code. The question mark means `if` and the colon means `else`. Check out the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) and [this post](https://scotch.io/tutorials/understand-the-javascript-ternary-operator-like-abc).
</details>

<details>
  <summary>Types</summary>

JavaScript has six primitive types. These all have default values and can be checked for using the `typeof` operator.

Default values:

```js
'boolean' - false
'null' - null
'number' - 0
'string' - ''
'undefined' - void 0
'symbol' - Symbol() // new in ES6
```

Checking the type of primitive:

```js
if (typeof myPrimitive !== 'number')
  throw new TypeError('Type must be a number!')
```
</details>

<details>
  <summary>Event Loops</summary>

- https://www.youtube.com/watch?v=8aGhZQkoFbQ
- http://latentflip.com/loupe/
- Transcript: https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html
- JS is a single threaded programing language runtime. One code piece at a time. It has a single call stack.
- I'm a single threaded on blocking asynchronous concurrently glitch
- V8 is a heap and stack
- JavaScript programmers like to use words like, “event-loop”, “non-blocking”, “callback”, “asynchronous”, “single-threaded” and “concurrency”.
- We can do things concurrently in browser because a browser is more than a run-time. It has APIs. You call Web APIs. In node, you have C++ multi-thread.
- API does not live in V8 engine. It is part of XHR().
- [How Does Javascript actually work?](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
- The Engine consists of two main components:* Memory Heap — this is where the memory allocation happens* Call Stack — this is where your stack frames are as your code executes
- JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
- The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. That’s all the stack can do.
</details>

<details>
  <summary>Syntax Parsers</summary>

A program that reads your code and determines what it does and if its grammar is valid. Compiler or interpreter needs to transfer the code to the computer.
</details>

<details>
  <summary>Lexical Environment</summary>

Where something sits physically in code you write. For example: a variable sits lexically inside a function.
</details>

<details>
  <summary>Name/Value Pairs</summary>

A name which maps to a unique value. For ex: Address = “100 Main St.”
</details>

<details>
  <summary>Object</summary>

It is a collection of name value pairs.
</details>

<details>
  <summary>The Execution Context</summary>

A wrapper to help manage the code that is running. There are lots of lexical environments. Which one is currently running? A base execution context is global. It creates two things for you: Global Object and “this.”
</details>

<details>
  <summary>Hoisting</summary>
  
  Function and variables are hoisted to the top, but JS engine is not moving the code physically. It is just run line by line.
</details>

<details>
  <summary>Creation Phase</summary>

   - Execution context is created - Global Object, “this”
   - Outer Env - Setup memory space for variables and Functions 
   - “Hoisting” - Hoisting: Variables setup (set equal to undefined)
   - Functions setup - All variables in JS are set to undefined initially. 
   - Not defined != undefined: `undefined` is a special keyword in JS. It takes up memory space. If not declared, you will get `Uncaught Reference error: x is not defined`.
   - Never set a variable to `undefined`. If you define it then it is hard to debug whether you undefined or the JS engine undefined.
</details>

<details>
  <summary>Code Execution Phase</summary>

Executes line by line

```js
function b() {
    console.log('Called b!');
}
b();

console.log(a);
var a = "Hello World";
console.log(a);

// Called b!
// undefined
// Hello World
```
</details>

<details>
  <summary>Single Threaded & Synchronous</summary>
 
   - Single Threaded: One command at a time. Javascript behaves in a single threaded manner.
   - Synchronous: One at a time and in order. JS is a single threaded synchronous language.
   - JavaScript is single-threaded or that it is using a callback queue, which means it has a single Call Stack. Therefore it can do one thing at a time.
</details>

<details>
  <summary>Invocation</summary>

Running a function by using parenthesis(). You tell JS engine to run the function. For ex:

```js
function b() {
}
function a() {
    b();
}
a();
```
1. Global Execution Context (create and code is executed): `window` object
2. A new execution context stack is created for `a()` 
3. Another execution context is created for `b()`(create and execute). At the top of the stack. Then `a()` gets executed then global.
4. Runs code line by line and each invocation goes in execution context stack. Once the code is executed, it is popped off from a stack. Everytime a function is called, a new execution context is created and popped off after the code is finished.
</details>

<details>
  <summary>Variable Environments</summary>

Where the variables live and how they relate to each other in memory.

```js
function b() {
    var myVar;
    console.log(myVar);
}

function a() {
    var myVar =2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar); //global execution context

// 1
// 2
// undefined
// 1
```

1. Global Execution Context (created and code is executed). myVar gets memory allocation for the value of 1.
2. Execution Context is created for `a()`. myVar gets the value of 2. Note, every execution context has its own variable environment.
3.  Execution Context is created for `b()`. myVar gets the value of `undefined`. It is not set to a value so the memory will allocate `undefined`.
4. Even if `myVar` is defined 3 times, they are all unique and have their own values.
</details>

<details>
  <summary>The Scope Chain</summary>

Inherits the value from an outer environment. Every execution context has access to its outer environment (global). Lexical Environment: where does the function sit. It does not matter where these functions sit but how it gets executed. If it cannot find reference within its execution context, it will find reference value from its outside environment down the global chain. Finding and accessing outer environment is called a scope chain.

```js
function a() {
    function b() {
    }

    var myVar = 2;
    b();
}

var myVar = 1;
a(); // 2 
b(); // Uncaught Reference: b is not defined
 ```

- `function b()` above sits inside `function a()` . Lexical environment of `b()` has now changed. `a()` is lexically visible but not `b()`.
- `a()` outputs 2. Since b is sitting physically inside `a()`, it went to its environment, otherwise it will go up to its scope chain. The best way to think about it is where is the variable environment sitting lexically.
</details>

<details>
  <summary>Scope</summary>

where a variable is available in your code. And it it's truly the same variable, or a new copy.

- **`let`**: allows for block scoping {}. Variables are only available inside that block. You can use both `var` and `let` in both ES6.
- **Asynchronous callback:** More than one at a time. Code is executing within the engine at the same time. But JS is synchronous. Keep in mind, browser has more than just JS engine. It has rendering engine, http request or hooks.
</details>

<details>
  <summary>Event and Queue</summary>

An event gets placed on queue. When the execution stack is empty and looks for event queue to see if there are events sitting in the queue. The event gets processed and the next event moves up. Event queue will only get processed once the execution context is empty.

- Code is running line by line (synchronously), by JS engine. However, the browser is processing other engines and makes asynchronous possible.

```js
// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');
```

- if you don't click, you will get 2 finished functions
- if you click, you will get 2 finished functions then click event! It is because the code gets executed and then event queue gets processed. Event queue won't be processed until execution context is empty. This is how asynchronous is possible (not handled by JS engine but browser).
</details>

<details>
  <summary>Dynamic Typing</summary>

you don't tell the engine what type of data a variable holds, it figures it out while your code is running. Variables can hold different types of values because it's all figured out during execution. Javascript is dynamically typed. This can be powerful but also very bad.
</details>

<details>
  <summary>Static Typing</summary>

  Other languages like C# or Java, types need to be explicitly defined.
</details>

<details>
  <summary>Primitive Types</summary>

A type of data that represents a single value. That is, not an object. There are 6 types in JS.
    - `undefined`: represents lack of existence (you shouldn't set a variable to this)
    - `null`: represents lack of existence (you can set a variable to this)
    - `boolean`: true or false
    - `number`: floating point number (there's always some decimal). Unlike other programming languages, there's only one `number` type and it can make math weird.
    - `string`: a sequence of characters. Both '' or "" are allowed.
    - `symbol`: used in ES6, the next version of javascript.
</details>

<details>
  <summary>Operators</summary>
  
A special function that is syntactically (written) differently. Generally operators take two parameters and return one result. Operators are functions. For ex: `+` is an addition function.
    - prefix notation: +3 4
    - postfix notation 34+ (old accounting calculators)
    - infix notation 3+4
 </details>
 
<details>
  <summary>Operator Precedence</summary>

which operator function gets called first. Functions are called in order of precedence. *Higher* precedence wins.
    - Table Precedence: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
 </details>

<details>
  <summary>Operator Associativity</summary>

what order operator functions get called in: left to right or right to left. When functions have the *same* precedence.

- Which one gets called first? JS is synchronous so it will execute one operator function at a time. Bigger the precedence number, higher one gets called first.

```js
// Operator Precedence
var a = 3 + 4 * 5; // * has higer precedence acc to the table
console.log(a);

// Operator Associativity
var a = 2, b = 3, c = 4;
a = b = c;

console.log(a); // 4
console.log(b); // 4
console.log(c); // 4
console.log(b=c); true
```
- Since one function execution at a time `a` is set to 4 in the memory, `b` is set to 4 in the memory. Right to left associativity.
</details>

<details>
  <summary>Coercion</summary>

converting a value from one type to another. Be careful!

```js
var a = 1 + 2; // 3
var b = "hello" + " world!"; // hello world
var c = 1 + "2"; // 12 coerced
```
</details>

<details>
  <summary>Comparison Operators</summary>

are functions. [MDN Doc Comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness). Gochyas examples below:

```js
console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true due to associtivity 
console.log(false < 1); // true bc false gets converted to 0 (aka coerced) 
console.log(true < 1); // true bc true gets converted to 1 (aka coerced)
Number(false) //0
Number(true) //1
Number(undefined) //NaN
Number(null) //0
Boolean(undefined) // false
Boolean(null) // false
Boolean("") // false
Boolean(0) // false
false || true // true bc true has higher precedence on the table
undefined || 'hello' // "hello" bc it will coerce 
Boolean("hello"); // true
"hi" || "hello" // "hi" first one
undefined || "hello" // hello
null || "hello" // hello
"" || "hello" // hello
```

- So to not make variables coerced for unexpected output, use strict equality (`===`) or (`!==`). Use Associativity precedence table for a reference. Strict equality does not coerce values.

```js
// Equality (==) leads to coercion, confusion and odd potential errors
3 == 3 // true
"3" == 3 // true
false == 0 // true
var a = false; // undefined
a == 0 // true
null == 0 // false
null < 1 // true
"" == 0 // true
"" == false // also true confusing

//Strict Equality (===)
3 === 3 // true
"3" === "3" // true
"3" === 3 // false

var a = 0;
var b = false;
if (a===b) {
    console.log("They are equal!");
} else {
    console.log("Nope, not equal.");
}
== // They are equal!
=== // Nope, not equal.
```

- Coercion and dynamic typing can be useful for frameworks and libraries.

```js
var a;

// goes to internet and looks for a value.
a = "";
if(a) { // coercion bc it is not strictly typed
    console.log('Something is there.');
}
```

- Default Values

```js
funciton greet (name) {
    console.log(name); // undefined
    name = name || '<Your name here>';
    console.log('Hello ' + name);
}
greet(); 

// undefined
// hello undefined // coercecd and concatanted

greet('Tony'); // Hello Tony
greet(); // Hello <Your name here.>

// Naming library names to stop colliding names
window.libraryName = window.libraryName || "Lib 2";
```
</details>

<details>
  <summary>Functional programming in JS</summary>
  
The core idea of functional programming in JS - that we can plug our pure functions into higher order abstractions - is at the very heart of functional programming. A higher order function is a function that takes another function as a parameter. In JavaScript, functions are "first-class citizens." That means we can assign them to variables, create them inside of other functions, and pass them as arguments like any other object. Iteration in functional programming relies on a holy trinity of functions: map, filter, and reduce. We can use functional programming to reduce boilerplate in everyday code, keeping it DRY.
</details>

## Tooling

<details>
  <summary>Package Manager</summary>
  
   - **Package Manager**: This is useful later when sharing a project with others — instead of sharing the node_modules folder (which can get very large), you only need to share the package.json file and other developers can install the required packages automatically with the command npm install. So now we no longer have to manually download moment.js from the website, we can automatically download and update it using npm.
</details>
<details>
  <summary>Module Bundling</summary>
  
   - **Module Bundling**: Most programming languages provide a way to import code from one file into another. JavaScript wasn’t originally designed with this feature, because JavaScript was designed to only run in the browser, with no access to the file system of the client’s computer (for security reasons). So for the longest time, organizing JavaScript code in multiple files required you to load each file with variables shared globally. This is actually what we’re doing with the above moment.js example — the entire **`moment.min.js`** file is loaded in the HTML, which defines a global variable `moment`, which is then available to any file loaded after **`moment.min.js`** (regardless of whether it needs access to it). node.js solved this problem. It is a JavaScript runtime designed to run on the server. Here’s what the earlier example would look like using node.js modules. Instead of loading all of moment.min.js with an HTML script tag, you can load it directly in the JavaScript file as follows:

        // index.jsvar moment = require('moment');
        console.log("Hello from JavaScript!");
        console.log(moment().startOf('day').fromNow());

  - Again, this is how module loading works in node.js, which works great since node.js is a server side language with access to the computer’s file system. Node.js also knows the location of each npm module path, so instead of having to write require('./node_modules/moment/min/moment.min.js), you can simply write require('moment') — pretty sweet. This is all great for node.js, but if you tried to use the above code in the browser, you’d get an error saying require is not defined. The browser doesn’t have access to the file system, which means loading modules in this way is very tricky — loading files has to be done dynamically, either synchronously (which slows down execution) or asynchronously (which can have timing issues). 

  - This is where a module bundler comes in. A JavaScript module bundler is a tool that gets around the problem with a build step (which has access to the file system) to create a final output that is browser compatible (which doesn’t need access to the file system). In this case, we need a module bundler to find all require statements (which is invalid browser JavaScript syntax) and replace them with the actual contents of each required file. The final result is a single bundled JavaScript file (with no require statements)! The most popular module bundler was Browserify, which was released in 2011 and pioneered the usage of node.js style require statements on the frontend (which is essentially what enabled npm to become the frontend package manager of choice). Around 2015, webpack eventually became the more widely used module bundler (fueled by the popularity of the React frontend framework, which took full advantage of webpack’s various features).
</details>
<details>
  <summary>Transpiling</summary>
  
  - **Transpiling**: Transpiling code means converting the code in one language to code in another similar language. This is an important part of frontend development — since browsers are slow to add new features, new languages were created with experimental features that transpile to browser compatible languages. For CSS, there’s Sass, Less, and Stylus, to name a few. For JavaScript, the most popular transpiler for a while was CoffeeScript (released around 2010), whereas nowadays most people use babel or TypeScript. 

  - Babel is not a new language but a transpiler that transpiles next generation JavaScript with features not yet available to all browsers (ES2015 and beyond) to older more compatible JavaScript (ES5). Note that we’re installing 3 separate packages as dev dependencies — @babel/core is the main part of babel, @babel/preset-env is a preset defining which new JavaScript features to transpile, and babel-loader is a package to enable babel to work with webpack. We can configure webpack to use babel-loader.

  - But there’s still some unpolished edges in our workflow. If we’re concerned about performance, we should be minifying the bundle file, which should be easy enough since we’re already incorporating a build step. We also need to re-run the webpack command each time we change the JavaScript, which gets old real fast. So the next thing we’ll look at are some convenience tools to solve these issues.
</details>
<details>
  <summary>Tooling Automation Build</summary>
  
  - **Tooling Automation Build**: Now that we’re invested in using a build step to work with JavaScript modules, it makes sense to use a task runner, which is a tool that automates different parts of the build process. For frontend development, tasks include minifying code, optimizing images, running tests, etc.

  - In 2013, Grunt was the most popular frontend task runner, with Gulp following shortly after. Both rely on plugins that wrap other command line tools. Nowadays the most popular choice seems to be using the scripting capabilities built into the npm package manager itself, which doesn’t use plugins but instead works with other command line tools directly.

  - Any time you change your JavaScript in index.js, webpack-dev-server will rebuild its own bundled JavaScript and refresh the browser automatically. This is a surprisingly useful time saver, as it allows you to keep your focus on the code instead of having to continually switch contexts between the code and the browser to see new changes.

  - This is only scratching the surface, there are plenty more options with both webpack and webpack-dev-server (which you can read about here). You can of course make npm scripts for running other tasks as well, such as converting Sass to CSS, compressing images, running tests — anything that has a command line tool is fair game. There are also some great advanced options and tricks with npm scripts themselves — this talk by Kate Hudson is a great place to start: 

  - [Kate Hudson talk on Webpack](https://www.youtube.com/watch?v=0RYETb9YVrk)
  - [Webpack](https://webpack.js.org/guides/development/)
</details>

## Internationalization i18n

Internationalization (i18n) is the process of developing products in such a way that they can be localized for languages and cultures easily. Localization (l10n), is the process of adapting applications and text to enable their usability in a particular cultural or linguistic market. For application developers, internationalizing an application means abstracting all of the strings and other locale-specific bits (such as date or currency formats) out of the application. Localizing an application means providing translations and localized formats for the abstracted bits.

## Visualization
A danger of spending so long designing a tool is that you may forget what the tool is for: the tool itself becomes the goal, rather than the value derived from its application.

The purpose of a visualization tool is to construct visualizations. But what is the purpose of visualization? Per Ben Shneiderman: The purpose of visualization is insight, not pictures. 

Visualization is a means to an end. A means to insight. A way to think, to understand, to discover, and to communicate something about the world. If we consider only the task of assigning visual encodings, of constructing visualizations, we ignore myriad other challenges: finding relevant data, cleaning it, transforming it into efficient structures, analyzing it with statistics, modeling, explaining our discoveries.

## House of commands

Useful shortcuts and commands I use or have used to optimize my productivity.

### Folder structure

- **executable files**:`bin` 
- **3rd party libraries**: `lib` 
- **env/configuration files**: `etc` 
- **log files**: `log` 
- **source code**: `src` 
- **shared files**: `shared` 
- **client source code**: `client` 
- **server source code**: `server`

### Shell command line
   
- **find path and package**: `which [package name] git`
- **cursor at the beginning of the line**: `control + A`
- **cursor at the end of the line**: `control + E`
- **clear line**: `control + U`
- **in the middle of a line**: `option + click mouse pointer`
- **echo**: `echo "string"`
- **manual instructions of commands**: `man grep` [command name]
- **exit to close the terminal**: `exit`
- **to kill files**: `kill -9 $(pgrep filename)`
- **to add permission**: `chmod +x filename`
- **to find files with an extension**: `find path -name “*.filetype”`
- **to copy**: `cp path1/filename path2/filename`
- **file permission**: `chmod g+x/w/or/r filename`
- **file ownership**: `chown username filename`
- **show disk space**: `df-h (human readable)`
- **CPU, RAM, etc**: `top`
- **search and print**: `grep (can add layers of logic)`
- **find and Replace**: `sed s/word/word/g`
- **file Content Print**: `cat`
- **multiple commands in the same line**: `-`
- **execute a file with its name, need to set up the environment**: `(# !/usr/bin/env python) ./filename`
- **delete content in the file**: `cat /dev/null > filename`
- **back to the previous path**: `cd -`
- **copy b/w different hosts allows files to be copied to, from, or between different hosts. It uses ssh for data transfer and provides the same authentication and same level of security as ssh.**: `scp`
- **help (stands for manual)**: `man`
- **symbolic Link**: `ln -sf source-path destination-path`
- **more content of a file**: `| more`
- **list information about all the files**:`ll`
- **create folder with sub folders**: `mkdir -p folder-name/{sub-folder1, sub-folder2}`
- **list differences b/w two files**: `diff file-name file-name`
- **unzip Github folder (master)**: `tar xvf master -C yourFolder --strip-components 1 or tar -xvzf “name”`
- **find size file in MB or KB**: `ls -l --block-size=M or ls-lh`
- **find file path based on filename**: `find ./path -name “filename.*”`
- **find string in directory with file name**: `grep -r --include=*.{cpp,h} “hello” .`
- **find package if it is installed**: `dpkg -s apache-perl`
- **find content of the link**: `curl -sS “link”`
- **conditional search and print**: `$ tail -n 3 calc_process.log | grep final | tr '{' '\n' | grep startdate` and `$ tail -n 3 calc_process.log | grep final | tr '{' '\n' | grep startdate | sed -e 's/}.*$//g'`

### Vim

- **to find text in VIM**: `/ or ? text`
- **go to bottom**: `Shift +G`
- **go to top**: `gg or Shift + gg`
- **line numbers**: `:set nu`
- **helper & setter**: `:help and :set`
- **delete**: `d`
- **delete word**: `dw`
- **delete a character**: `x`
- **arrows**: `h, j, k, l`
- **append at the end of the line**: `a`
- **shift to the end of the line**: `A`
- **find and replace all**: `:%s/foo/bar/g`
- **delete all**: `go on top of line gg and to delete all- dG`

### Grep

<details>
  <summary>Search the contents of files using grep:</summary>
    
   - **find version of a file**: `command name, version, filename: grep version package.json`
   - **find keyword search**: `command name, keyword, filename: grep react package.json`
   - **find keyword in more than 1 file**: `command name, keyword, filename: grep “#” README.md codestyle.md xyz.md`
   - **find by keyword in all files ending with file type**: `command name, keyword, *.fileextension: grep “#” *.md`
</details> 
<details>
  <summary>Search directory contents recursively using grep:</summary>

   - **search recursively in folder root**: `commandname, -r, keyword, path: grep -r react ./`
   - **search recursively in folder path (relative to your current path not the actual)**: `grep -r react public/components/App.js`
</details> 
<details>
  <summary>Use find to search for filename patterns (grep vs find):</summary>

   - **search filename patterns**: `command name, path, -name, “*fileextension”: find . -name, “*jsx”`
</details> 
<details>
  <summary>Search Matching files by combining find and grep with xargs:</summary>

   - **pipe find into grep**: `find examples -name “*Spec.js” | barges grep “module”`
   - **same as above but just grep**: `grep -r —include=“Spec.js” “should” examples/`
</details> 
<details>
  <summary>Search the contents of a git repository with git grep:</summary>

   - **find in git that is being tracked in version control**: `git grep bind (query string); results are highlighted in red`
   - **color keyword query**: `grep -r —color bind ./`
</details> 
<details>
  <summary>Show context around matches using grep:</summary>

   - **line number**: `grep -n “#” *.md`
   - **after**: `grep -A 2 —color “#” *.md`
   - **before**: `grep -A 2 —color “#” *.md`
   - **context (before + after)**: `grep -C 2 —color “#” *.md`
</details> 
<details>
  <summary>Search for basic patterns using grep:</summary>

   - **everything that matches after the string like http**: `grep —color “http.” readme.md`
   - **special Character like dot, use backslash**: `grep —color “\.com” readme.md`
   - **all characters b/w special characters like ()**: `grep —color ”(.*)” readme.md`
</details>
<details>
  <summary>Using grep’s extended regular expressions to find complex patterns:</summary>

   - **conditional Search for character 0 or 1 time (?)**: `grep —color “https\?” readme.md`
   - **at least 1 or more occurrences (+)**: `grep —color “https\+” readme.md`
   - **atlas 0 or more occurrences (*)**: `grep -color “https*” readme.md`
   - **escape for special characters**: `grep -E or backslash (\)`
</details> 
<details>
  <summary>Search for optional patterns with grep OR:</summary>

   - **color check**: `echo “is it grey or gray?” | grep —color “grey\|gray” or echo “is it grey or gray?” | grep —color -E “grey|gray”`
   - **spell check in your codebase (-rE recursive & escape)**: `grep —color -rE “grey|gray” examples/`
</details>  
<details>
  <summary>Specify line beginning and end in patterns using grep:</summary>

   - **anchor for beginning of the line**: `grep —color “^#” app-spec.md`
   - **anchor for ending of the line**: `grep —color “,$” app-spec.md`
   - **complex anchor with wildcard phrase**: `grep —color -r “^import .* from” examples/`
</details> 
<details>
  <summary>Match classes of characters using bracket expressions with grep:</summary>

   - **match a or b**: `echo abc123 | grep —color “[ab]”`
   - **range**: `echo abc123 | grep —color “[a-z]”`
   - **range**: `echo abc123 | grep —color “[1-9]”`
   - **match word with some pattern (matches designer and developer)**: `grep —color “de[a-z]*er” readme.md`
   - **same as above but don’t have to explicit define the character range (matches developer & designer)**: `grep —color “de[[:alpha:]]*er” readme.md`
   - **case insesitive match on only 1 character**: `find . -name “*js” | grep —color “[sS]pec”`
</details> 
<details>
  <summary>Search with groups using grep:</summary>
    
   - **single quote after the grey or gray**: `grep -rE —color “(grey|gray)\’” .`
   - **single or double quote**: `grep -rE —color “(grey|gray)(\’|\”)” .`
</details> 
<details>
  <summary>Find matches excluding a pattern with grep:</summary>
    
   - **inverse search (stuff that does’t match)**: `find examples/angularjs -name “*js” | grep -v “node modules”`
   - **inverse Search combo**: `find examples -name “*js” | grep -vE “node_modules|Spec”`
</details>  

### Git

- **resetting git**: `git reset --hard HEAD`
- **pull to original settings**: `git pull - - rebase`

### Npm scripts

- **omit npm config**: `npm init -y`
- **alias shortcut**: `npm install —save alias: npm i -S`
- **dev shortcut**: `npm —save-dev: npm i -D`

### Mac keyboard shortcuts
<details>
  <summary>Window Management </summary>
  
   - **close one window, or tab**: `command + w`
   - **close all windows**: `command + q`
   - **close all tabs**: `command + shift + w`
   - **new tab**: `command + t`
   - **switch between tabs**: `command + Shift + [ left/right ]`
</details>
<details>
  <summary>Text Management</summary>
  
   - **jump between words**: `alt + Left / right`
   - **jump to the ends of the line**: `command + left / right` 
   - **delete all the words till it hits the left edge.**: `command + delete`
</details>
<details>
  <summary>Operating System</summary>
  
   - **spotlight search, then up / down and enter to select**: `command + space`
   - **application selector**: `command + tab`
</details>
<details>
  <summary>Cursor Movement</summary>

   - **move cursor to end of the line**: `ctrl + E`
   - **move cursor to start of the line**: `ctrl + A`
   - **move cursor one character forward**: `ctrl + F`
   - **move cursor one character backward**: `ctrl + B`
   - **move cursor one word forward**: `alt + F / alt + right`
   - **move cursor one word backward**: `alt + B / alt + left`
   - **move cursor to clicked character**: `Alt + click`
   - **toggle between the start of line and cursor position**: `ctrl + XX`
</details>
<details>
  <summary>Process</summary>
    
   - **kills current task (SIGINT)**: `ctrl + C`
   - **inserts an EOF**: `ctrl + D`
   - **pauses current task**: `ctrl + Z`
   - **stop output to the screen (for long running verbose commands))**: `ctrl + S`
   - **allow output to the screen (if previously stopped using stop output command)**: `ctrl + Q`
</details>
<details>
  <summary>History</summary>
   
   - **previous command**: `ctrl + P`
   - **next command**: `ctrl + R`
</details> 

## Further reading
<details>
    <summary><strong>Resources</strong></summary>
    <br>

**Core frontend development**:
- [ECMA specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [Mozilla MDN Manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Compatibility Table](https://caniuse.com/)
- [Frontend Guide](https://github.com/grab/front-end-guide)
- [Modern JavaScript](https://medium.com/the-node-js-collection/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Modern CSS](https://medium.com/actualize-network/modern-css-explained-for-dinosaurs-5226febe3525)
- [Vanilla JS Toolkit](https://vanillajstoolkit.com/)
- [Glossary of Modern JS Concepts](https://auth0.com/blog/glossary-of-modern-javascript-concepts/)
- [Localization vs. Internationalization](https://www.w3.org/International/questions/qa-i18n)

**Core system design fundamentals for software development**:

- [API Architecture Best Practices for Designing REST APIs](https://blog.wahab2.com/api-architecture-best-practices-for-designing-rest-apis-bf907025f5f)
- [CAP Theorem](https://medium.com/@ibrahimlanre1890/cap-theorem-in-dbms-42027527092e)
- [The Difference Between RPC and REST](https://aws.amazon.com/compare/the-difference-between-rpc-and-rest/)
- [Eventual vs. Strong Consistency in Distributed Databases](https://hackernoon.com/eventual-vs-strong-consistency-in-distributed-databases-282fdad37cf7)
- [Latency vs Throughput](https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/)
- [Scalability](https://blog.algomaster.io/p/scalability)
- [Latency vs Throughput](https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/)
- [What is Fault Tolerance?](https://www.cockroachlabs.com/blog/what-is-fault-tolerance/)
- [Consensus in Distributed System](https://medium.com/@sourabhatta1819/consensus-in-distributed-system-ac79f8ba2b8c)
- [Rate Limiting](https://www.imperva.com/learn/application-security/rate-limiting/)
- [ACID Transactions](https://www.freecodecamp.org/news/acid-databases-explained/)
- [Relational Database Design & Entity Relationship](https://towardsdatascience.com/designing-a-relational-database-and-creating-an-entity-relationship-diagram-89c1c19320b2)

**Other**:
- [The unwritten laws of engineering at Stedi](https://www.stedi.com/blog/the-unwritten-laws-of-engineering-at-stedi)
- [A Better Way to Code by Mike Bostock](https://medium.com/@mbostock/a-better-way-to-code-2b1d2876a3a0)
- [The Cost Of JavaScript](https://medium.com/dev-channel/the-cost-of-javascript-84009f51e99e)
- [Stevey's Google Platforms Rant](https://gist.github.com/chitchcock/1281611)
- [The developer's guide to user management](https://workos.com/guide/the-developers-guide-to-user-management)
- [Primer on data events](https://github.com/cloudevents/spec/blob/v1.0.2/cloudevents/spec.md)
- [Tool for an API documentation](https://www.gitbook.com)

</details>
<br />