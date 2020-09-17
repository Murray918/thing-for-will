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

import React from "react";
import { useApiCall } from "../hooks";
import { getFightKnockOutsData } from "../services";
import { StyledCard, StyledCardContainer } from "../Styles";

// material ui components
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function FightsByWinMethod() {
  const [data, isFetching] = useApiCall(getFightKnockOutsData);

  const newDivs = data.map(
    ({ fighter1, id, date, fighter2, winRound, winMethod }, index) => {
      return (
        <StyledCard raised key={`${id}${date}`}>
          <CardContent>
            <Typography  gutterBottom>
              FIGHT
            </Typography>
            <Typography  variant="h5" component="h2">
              {fighter1}
            </Typography>
            <Typography >{fighter2}</Typography>
            <Typography color="textSecondary" variant="body2" component="p">
              {winMethod}
            </Typography>
            <Typography color='textSecondary' variant="body2" component="p">
             Win in round {winRound}
            </Typography>
          </CardContent>
          <CardActions className="mma-card-actions-container">
            <Button raised color="primary" size="small">Learn More</Button>
          </CardActions>
        </StyledCard>
      );
    }
  );

  return <StyledCardContainer className="App">{isFetching && newDivs}</StyledCardContainer>;
}

export default FightsByWinMethod;
