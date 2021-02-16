import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../includes/Loader";

const ControlList = ({setDisplay, listType, links}) => {
  const [listItems, setListItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(0);

  let pluralType;
  let displayKey;
  ((type) => {
    switch (type) {
      case 'text':
        displayKey = 'title';
        break;
      case 'claim':
        displayKey = 'assertion';
        break;
      case 'argument':
        displayKey = 'statement';
        break;
      case 'key':
        displayKey = 'key';
        break;
      case 'rating':
        displayKey = 'rating';
        break;
      default:
        displayKey = null;
    }
    if (displayKey) pluralType = `${type}s`
  })(listType);


  useEffect(() => {
    async function fetchData() {
      if (isLoaded) return; //Only load if nothing is loaded and no error
      try {
        const response = await fetch(`/api/${pluralType}`);
        if (response.ok) {
          const responseData = await response.json();
          setListItems(responseData[pluralType]);
          setIsLoaded(1);
        } else {
          throw Error('Failed to load content.');
        }
      } catch (e) {
        setIsLoaded(-1);
      }
    }
    fetchData();
  }, [isLoaded, pluralType]);

  const list = listItems.map((item) => {
    const identifier = `${listType}-${item.id}`;
    return (
      <li key={identifier} className={`ev-list ${linked ? 'ev-links-list' : ''}`}>
        { (links &&
            <NavLink to={`/${listType}/${item.id}`}>
              {item[displayKey]}
            </NavLink>
          )
          ||
          item[displayKey]
        }
      </li>
    );
  });

  const handleRetry = (e) => {
    setIsLoaded(0)
  }

  return (
    <div className="ev-control-list">
      <h2>{pluralType}</h2>
      { (isLoaded === 1 &&
          ((
          !!list.length && displayKey &&
            <ul>{list}</ul>
          )
          ||
          (
            <p>No {pluralType} were found.</p>
          ))
        )
        ||
        <p>Loading "{pluralType}"
          {
           (!isLoaded && <Loader className="in-text" />)
           ||
           (isLoaded === -1 && <><span className="ev-error"> **ERROR!**</span> <button type="button" onClick={handleRetry} className="in-text">Retry?</button></>)
          }
        </p>
      }
    </div>
  );
}

export default ControlList
