import React, { useState } from "react";

function Intercom() {
  const [error, setError] = useState(null);
  //   const [isLoaded, setIsLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  //   useEffect(() => {
  //     fetch("http://74.71.87.249/")
  //       .then(
  //         (result) => {
  //           setIsLoaded(true);
  //         },
  //         // Note: it's important to handle errors here
  //         // instead of a catch() block so that we don't swallow
  //         // exceptions from actual bugs in components.
  //         (error) => {
  //           setIsLoaded(true);
  //           setError(error);
  //         }
  //       );
  //   }, []);

  function openDoor() {
    fetch("/.netlify/functions/dad_joke")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsOpen(true);
          console.log(result);
        },
        (error) => {
          setError(error);
        }
      );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        <button className="button" onClick={openDoor}>
          {isOpen ? "Door is Open!" : "Click to Open"}
        </button>
      </div>
    );
  }
}

export default Intercom;
