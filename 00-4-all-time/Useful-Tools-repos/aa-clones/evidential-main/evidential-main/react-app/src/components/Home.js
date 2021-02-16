import React, {useState} from "react";
import SplitView from "./structure/SplitView";
import List from "./includes/List";

const Home = (props) => {
  //props has: authenticated, currentUser
  const [display, setDisplay] = useState(
    props.authenticated ? {main: "HOME", sidebar: "USER"}
                        : {main: "WELCOME", sidebar: "ABOUT"}
  );

  const addProps = {display, setDisplay};

  return (
    <SplitView {...props} {...addProps}>
      <header><h1>{props.currentUser.firstName}</h1></header>
      <>
        <List setDisplay={setDisplay} listType={"text"} links={true}/>
        <List setDisplay={setDisplay} listType={"claim"} links={true}/>
      </>
      <div>Sidebar</div>
    </SplitView>
  )
}

export default Home
