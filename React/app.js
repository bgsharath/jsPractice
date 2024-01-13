// <article><h2>Counter</h2></article>
// declarative program 
let markup = {
    type: 'article',
    children: [
        {
            type: 'h2',
            children: [
                {
                    type: 'text',
                    value: 'sharath'
                }
            ]
        },
        {
            type:'button',
            children:[
                {
                    type:'text',
                    value:'Click'
                }
            ]
        }
    ]
}

//impreative program
let main = document.getElementById('app');  // like createRoot ReactDOM

// here we are using recursive function
function addElements(pojoelement,parentDomNode){
    let newDOMnode = pojoelement.type === 'text' ? document.createTextNode(pojoelement.value)
                                                : document.createElement(pojoelement.type)
    if(pojoelement.children){
        pojoelement.children.forEach(child => {
            addElements(child,newDOMnode)
        });        
    }                                            
    parentDomNode.appendChild(newDOMnode)
}

addElements(markup,main) // like render