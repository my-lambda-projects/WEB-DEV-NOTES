import React from "react";
import MainDisplay from "./MainDisplay";
import Sidebar from "./Sidebar";


const SplitView = (props) => {
  //Expects three children, first is page h1, 2nd is main content, 3rd is sidebar content

  return (
    <div className="ev-content-wrapper">
      <MainDisplay {...props}>
        {props.children[0]}
        {props.children[1]}
      </MainDisplay>
      <Sidebar {...props} >
        {props.children[2]}
      </Sidebar>
    </div>
  )
}

export default SplitView
