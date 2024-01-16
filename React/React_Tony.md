built by facebook
source code https://github.com/facebook/react
React is just other people's javascript code

-> The Dom and Declaraive programming
Document Object Model
    ![Dom](images/Dom.png)
    ![Alt text](images/Dom2.png) 
    html being converted to DOM by bowser and serves to user view

Dom Manipulation (browser Re-rendering)
    Change the DOM tree browser gets rerenders.

![API](images/API.png)

docment.getelementById('') is browser API not a jS standard,
setTimeout  is browser API not a jS standard

    Imperative Programming
        A style of programming in which you describe how a program should accomplish a task. 
        ex: counter increment ![Alt text](images/image-1.png)
    Declarative 
        A style of programming in which you describe what you want the program to accomplish without describing how.
        ex: ![Alt text](images/image.png)
        focus only the logic
    
React used Declarative 

Recursion
    A function calling itself

![Alt text](images/image-2.png)
![Alt text](images/image-3.png)

React DOM updates

Components -> in react everything is a component
![Alt text](images/image-4.png)

Pure Functions
![Alt text](images/image-5.png)
examples
![Alt text](images/image-6.png)
![Alt text](images/image-7.png)

Props -> object that contains any of the information we want to be passes to the  function.
 In ReactJS, the props are a type of object where the value of attributes of a tag is stored. The word “props” implies “properties”, and its working functionality is quite similar to HTML attributes. Basically, these props components are read-only components.

Props are imutability unable to change
becoz props are frozen by react
If the object being passes to the function is immutable then that funcion is pure.

className is browser api's thing

![Alt text](images/image-7.png)
Transpiler convert JSX xml to react createElement
Babel is used to to transpile
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

JSX is an XML-like syntax extension to ECMAScript. without any defined semantics. ex-> <Counter/>
is a javascript syntax extension
is a javascriipt xml

Authorig html -> use Fragment instead of using div bcoz deeped tree will slow down css

Fiber and Reconciliation
Fiber tree
    simple objects used by react's code to store info and determine what work needs to be done. its not recreated it will be updated
    ex: siblings , children

Reconciliation
    Comparing two items to find differences between them.
Tree Reconciliation
    comparing two trees/ portions of trees and finding the steps needed to make them match
Tree edit distance problem
    what is the algorithm to find the smallest number of steps to change one tree to match another?

Fiber tree works in progress node
![Alt text](images/image-8.png)
![Alt text](images/image-9.png)
![Alt text](images/image-10.png)
![Alt text](images/image-11.png)

Reconciliation Algorithm
![Alt text](images/image-12.png)
Removeing Ul and add new UL 
   fiberNode objects ->     deletions
                            flag

