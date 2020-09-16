// let party = []

// const kos2 = async () => {
// try {
//     const response = await fetch(
//     "http://198.58.117.70:8080/TestUFCAPI/ufc/winmethod/ko",
//     {
//         headers: {
//         CORS: "Access-Control-Allow-Origin",
//         },
//         mode: "cors",
//     }
//     );
//     const data = await response.json();
//     return data;
// } catch (error) {
//     console.error(error);
// }
// };

// kos2().then((response) => {
// party = response;
// return response;
// })


//     const newDivs = party.map(fight => {
//         console.log(fight.fighter1) // ''
//         let fightDiv =  document.createElement('div')
//         fightDiv.textContent = fight.fighter1
//         return fightDiv
//     })

//     document.getElementById('App').append(...newDivs)



import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [party, setParty] = useState([]);

  useEffect(() => {
    // do api call
    kos2().then((response) => {
      setParty(response);
      return response;
    });
  }, []);

  const kos2 = async () => {
    try {
      const response = await fetch(
        "http://198.58.117.70:8080/TestUFCAPI/ufc/winmethod/ko",
        {
          headers: {
            CORS: "Access-Control-Allow-Origin",
          },
          mode: "cors",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const newDivs = party.map(({ fighter1 }, index) => {
    return <div key={index}>{fighter1}</div>;
  });

  return <div id="App">{newDivs}</div>;
}

export default App;
