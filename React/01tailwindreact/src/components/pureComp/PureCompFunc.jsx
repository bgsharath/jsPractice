import React from 'react'

const PureCompFunc = ({name}) => {
    console.log('render pure comp functional')
  return (
    <div>PureCompFunc {name}</div>
  )
}

export default React.memo(PureCompFunc)
// export default PureCompFunc
