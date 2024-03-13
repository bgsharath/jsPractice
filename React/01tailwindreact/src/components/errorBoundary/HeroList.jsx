import React from 'react'
import ErrorBoundaryClass from './ErrorBoundaryClass'
import {ErrorBoundary} from 'react-error-boundary'

const Hero = ({name}) => {
    if(name === 'joker')
        throw new Error
    return (
        <div>{name}</div>
    )
}

const ErrorHandler = () => {   
    return (
        <div>Something went wrong</div>
    )
}

export const HeroList = () => {
  return (
    <>  
        {/* <ErrorBoundaryClass>
            <Hero name={'A'}/>            
        </ErrorBoundaryClass>
        <ErrorBoundaryClass>
            <Hero name={'B'}/>
        </ErrorBoundaryClass>
        <ErrorBoundaryClass>
            <Hero name={'joker'}/>            
        </ErrorBoundaryClass> */}


        {/* functional comp */}

        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Hero name={'A'}/>   
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
            <Hero name={'joker'}/>   
        </ErrorBoundary>
        
    </>
  )
}
