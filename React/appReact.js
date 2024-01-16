ReactDOM.createRoot(document.getElementById('appReact'))
    // .render((
    //     React.createElement('section',null,
    //     React.createElement(Counter,{name:'sharath'}),
    //     React.createElement(Counter,{name:'bg'}))
    // ))
    .render(
        (
            <section>
                <Counter name='sharath'/>
                <Counter name='bg'/>
            </section>
        )
    )

function Counter(props){ // reusable component
    // props.name='update' // wont be able to update
    let {name} = props // 
    name = 'update' // it will work but should availd this
    // return (
    //     React.createElement('article',null,
    //         React.createElement('p',{style:{color:'red'}},props.name),
    //         React.createElement('button',null,'Click'))
    // )
    return(
        <article>
            <p style={{color:'red'}}>{props.name}</p>
            <button>Click</button>
        </article>
    )
}
