import { useState, useEffect, useReducer } from "react";
import { useToggle } from "./index";

export default function useApiCall(
  fn, 
  initialDataState = [],
  dependencies = [],
  initialPartyingState = false,
  initialSuccessState = false
) {
  const [data, setData] = useState((initialDataState = []));
  const [isFetching, setIsFetching] = useToggle(initialPartyingState);
  const [isSuccess, setIsSuccess] = useToggle(initialSuccessState);
  const [errorState, dispatchError ] = useReducer(null)

  // error handling => USE_REDUCER

  useEffect(() => {
    // do api call
    try {
      setIsFetching(true);
      fn().then((res) => setData(res));
      setIsFetching(false);
      setIsSuccess(true);
    } catch (error) {
      setIsFetching(false);
      setIsSuccess(false);
      return Error(error);
    }
  }, dependencies);

  return [data, isFetching, isSuccess];
}

function errorReducer(state, action) {
  switch (action.type) {
    case "404":
      return {
        // what ever state is mutate and then ... state
      };
    case "400":
      return;
    case "401":
      return;
    case "409":
      return;
    case "418":
      return;
    default:
      return;
  }
}
