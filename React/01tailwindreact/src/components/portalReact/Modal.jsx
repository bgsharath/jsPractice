import React from 'react'
import ReactDOM from 'react-dom'

export const Modal = () => {
    return ReactDOM.createPortal(
        <div>modal popup</div>,
        document.getElementById('portal')
    )
}
