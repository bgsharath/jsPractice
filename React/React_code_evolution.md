What is react
    Open source library for building user inerfaces
    not a framework
    Focus on UI
    Rich ecosystem
        Routing are all not React it is  rich user interfaces
    
    created and maintained by Facebook
    huge community

    react is a component based Architecture

    Reusable code
    react is declarative 
        tell the react what you want & It will buil the actual code.

    npx -> npm packeg ruunner directly run without nstalleing 

    npm -> install packge globally 

    React 16 =>>>>============================>++++++++++++++++
    manifest.json is for progressive web app
    building single page application

    Components -> are the building blocks of user interfaces.
                 describes a part of the user intreface
                the are  reusable and can be nested inside other components
        2 types
        state less functional components
        stateful class components

    default export can be imported as any names
    FC recievs properties and returns JSX as o/p

    JXS
         Javascript XML - extension to the Javascript language syntax
         Write XML-like code for elements and components.
         JSX tags have a tag name , attributes and children
         JSX is not a necessity to write React applications.
         JSX makes your react code simpler and elegant
         JSX ultimately tansiles to pure JavaScript which is understood by the browsers

    without JSX
![alt text](image-5.png)
    jsx differeneces
![alt text](image-6.png)

    Props
     Is just an object that contains the attributes and their values which have been passed from the parent component
     It is immutable, cannaot change the values
![alt text](image-7.png)

    State 
        An object that is privately maintained inside a component.
        Can influences what is rendered in the browser
        State can be changed within the component.

    Destructuring
        unpack vaalues from arrays or properties from objects into distinct variables.

    Event handling
        onClick    in venilla js is onclick
![alt text](image-8.png)
    if we pass onClick={clickHandler()} output is clickHandler excecuted on render before user click the button, always pass the reference onClick={clickHandler}  

    in cmponent => this keyword within the event handller is undefined 
 
    child parent communication
    pass the method itself as a prop to child comp

Conditional rendering
    if/else
    element variables
    Tenary 
    short circuit

    Jsx -> syntactic sugar for function calls & object construction

    list component key is not a prop
    key -> idenetify which item removed/added/ 
![alt text](image-9.png)

when we use index as a key there wil be problem missed order

![alt text](image-10.png)
in this diagram added new item empty to beginning but empty added to the last this is bcoz using index as key
![alt text](image-11.png)

Styling
    CSS stylesheets
    Inline styling
    CSS Modules // react-scripts should be > 2.0.0
                file name should be suffix appStyles.module.css
                classes are locally scoped by default
    CSS in JS Libraries

Basic Form

class component life cycle 
![alt text](image-12.png)
![alt text](image-13.png)

console. log of mounting phase parent LifecycleA child LifecycleB  componenet

![alt text](image-14.png)

log of updating phase

![alt text](image-15.png)    

unmounting phase

![alt text](image-16.png)

Fragment
    group list of children elements without adding extra nodes to the DOM 
    <React.Fragment key={}>  can pass only key attribute
    <> short end but key attribute not allowed here

Pure Component
A function is said to be pure if it meets the following two conditions:
Its return value is only determined by its input values
Its return value is always the same for the same input values

![alt text](image-17.png)
![alt text](image-18.png)
![alt text](image-19.png)
output
    parent render
    regular comp render
    pure comp render

    parent render
    regular comp render
 functioanl component uses memo to make pure function

 but in FC useState component isn't re-rendered if it's the same value, i.e. a value that passes === comparison