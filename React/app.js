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
            ],
            props: [
                {
                    key:'style',
                    value:`background:${'red'}`
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
            ],
            props: [
                {
                    key:'style',
                    value:`background:${'green'};color:${'black'}`
                }
            ]
        }
    ],
    props: [
        {
            key:'style',
            value:`background:${'yellow'}`
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
        })
    }
    if(pojoelement.props){
        pojoelement.props.forEach(prop => {
            newDOMnode.setAttribute(prop.key,prop.value)
        })
    } 
    parentDomNode.appendChild(newDOMnode)
}

addElements(markup,main) // like render