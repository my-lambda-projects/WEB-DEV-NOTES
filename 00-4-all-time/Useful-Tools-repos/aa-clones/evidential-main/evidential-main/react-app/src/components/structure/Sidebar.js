import React from 'react'

const Sidebar = ({currentUser, display, setDisplay, children}) => {

  return (
    <section className="ev-sidebar ev-rtl">
      <div className="ev-ltr">
      {children}
      </div>
    </section>
  )
}

export default Sidebar
