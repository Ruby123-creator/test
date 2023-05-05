
const initialvalue=null;
export default function reducer(state=initialvalue,action){
  switch(action.type){
    case "LOGIN":
        // console.log(action.payload)
        return action.payload;
    default:
        return state
  }
}

