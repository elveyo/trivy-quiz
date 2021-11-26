import React from 'react'

function Button({ className, text, func }) {
  return (
    <button className={className} onClick={func}>
      <div
        dangerouslySetInnerHTML={{
          __html: `${text}`
        }}
      ></div>
    </button>
  )
}

export default Button
