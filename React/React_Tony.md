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
Removeing ul and add new ul
   fiberNode objects -> deletions
                        flag

![Alt text](images/image-13.png)

lanes and priority
lanes are how react prioriteses the work

Mounting , updating and unmounting
refer reactlife cycle

DOM events
![Alt text](images/image-14.png)
![Alt text](images/image-16.png)
![Alt text](images/image-15.png)

Propogation
    Transmitting something in a particular direction through a medium

Event delegation
Assignng an event handler to an ancestor node in the tree.

![Alt text](images/image-17.png)

event.stopPropagation()  ->  avoid parent event bubble

STATE
    In the context of software, the data at any given time that defines the current state or condition of the system.

Finite State Machines
    A model od a process that can be in a limited number of states. ex: traffic light red green yellow.

Deterministic
    A predictable process that, in the context of a state machine, always results in the same output given the same inputs and state.

![Alt text](images/image-18.png)

React user interface is a function of state.

Functional Programming
    A style of programming where you organize your code into pure functions.
    one of the concept is reducer
reducer trafic ex:
![Alt text](images/image-19.png)

Hooks and state
where state lives

state store in hook

hook are directly connected to fiber nodes
![Alt text](images/image-20.png)
hook is just a JS object attached to nodes 
![Alt text](image.png)

each hook has its own state properties
![Alt text](image-1.png)

Flush empty a data structure of its data and deal with the data.
Dispatch -> sending the action to the reducer

useState is a specialized version of useReducer
unidirectional: data only moves in one direction
in react data only move down
Hooks are linked list

Rules of hooks
    1. You can only call hooks from a component.
    2. Do not call inside a condition or loops.
    ex:
    ![Alt text](image-2.png)
    if condition true pointer ponts to 1 2 3 hook
    if condition false then pointer 3rd useState points to second hook instead of third.
    inconsistent behaviou
    should not skip the hook across renders


    