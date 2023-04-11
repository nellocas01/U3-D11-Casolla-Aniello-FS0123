
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";

export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const SEARCH_WORK = "SEARCH_WORK";

export const getJobsAction = (params) =>{
    return async (dispatch, getState) => {
        try{
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + params.company); 
      if (response.ok) {
        const data  = await response.json();
        dispatch({ type: ADD_TO_FAVOURITE, payload: data });
    }else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const handleSubmitAction = (query) =>{

    return async(dispatch, getState) =>{
        try {
            const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
            if (response.ok) {
              const data = await response.json();
              dispatch({type: SEARCH_WORK, payload: data });
            } else {
              alert("Error fetching results");
            }
          } catch (error) {
            console.log(error);
          }
        };
    };
