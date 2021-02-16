import React, {useState, useEffect } from "react";
import {useParams, useHistory} from 'react-router-dom';
import SplitView from "../structure/SplitView";
import Loader from "../includes/Loader";
import Text from "./Text";

const TextDetail = (props) => {
  //props has: authenticated, currentUser
  const [display, setDisplay] = useState("VIEW");
  const [textObj, setTextObj] = useState(null);
  const [isLoaded, setIsLoaded] = useState(0);
  const {textId} = useParams();
  const history = useHistory();
  if (!props.authenticated && history.pathname.contains('analyze')) history.replace(`/text/view/${textId}`)

  useEffect(() => {
    async function fetchData() {
      if (isLoaded) return; //Only load if nothing is loaded and no error
      try {
        const response = await fetch(`/api/texts/${textId}`);
        if (response.ok) {
          const responseData = await response.json();
          setTextObj(responseData);
          setIsLoaded(1);
        } else {
          throw Error('Failed to load content.');
        }
      } catch (e) {
        console.log("in error", e)
        setIsLoaded(-1);
      }
    }
    fetchData();
  }, [isLoaded, textId]);

  const handleRetry = (e) => {
    setIsLoaded(0)
  }

  const addProps = {display, setDisplay, textObj, setTextObj, isLoaded, handleRetry}
  const textProps = {textObj, handleRetry}
  return (
    <SplitView {...props} {...addProps}>
        <h1>Text:
        {
          (!isLoaded && <> Loading <Loader className="in-text" /></>)
          ||
          (isLoaded === -1 && <><span className="ev-error"> **ERROR!**</span> <button type="button" onClick={handleRetry} className="in-text">Retry?</button></>)
          ||
          ` ${textObj.title}`
        }
      </h1>
      { (isLoaded === 1 && ("content" in textObj) && <Text  {...textProps} />)}
      <div>Sidebar</div>
    </SplitView>
  )
}

export default TextDetail
