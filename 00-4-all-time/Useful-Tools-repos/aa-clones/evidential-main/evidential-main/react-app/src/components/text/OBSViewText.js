import React, { useState, useEffect } from "react";
import Loader from "../includes/Loader";
import Text from "./Text";



const ViewText = ({textId}) => {
  const [text, setText] = useState({});
  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(() => {
    async function fetchData() {
      if (isLoaded) return; //Only load if nothing is loaded and no error
      try {
        const response = await fetch(`/api/texts/${textId}`);
        if (response.ok) {
          const responseData = await response.json();
          setText(responseData);
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

  return (
    <div className="ev-content-wrapper">
      <h1>Text:
        {
          (!isLoaded && <> Loading <Loader className="in-text" /></>)
          ||
          (isLoaded === -1 && <><span className="ev-error"> **ERROR!**</span> <button type="button" onClick={handleRetry} className="in-text">Retry?</button></>)
          ||
          ` ${text.title}`
        }
      </h1>
       { (isLoaded === 1 && ("content" in text) && <Text text={text}/>)}
    </div>
  )
}

export default ViewText
