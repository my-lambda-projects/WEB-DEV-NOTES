import React from 'react'

const MainView = ({currentUser, display, setDisplay, children}) => {
  //props has: authenticated, currentUser, display, setDisplay, textId, setTextId

  return (
    <>
      <main className="ev-main">
        <header>{children[0]}</header>
        {children[1]}
      </main>
    </>
  )
}

export default MainView
