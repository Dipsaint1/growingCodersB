import React from 'react'

function FooterContent({header, children}) {
  return (
    <div className="footer-content">
      <h5 className="footer-content-header">{header}</h5>
      <ul>
        {children}
      </ul>
    </div>
  )
}

export default FooterContent