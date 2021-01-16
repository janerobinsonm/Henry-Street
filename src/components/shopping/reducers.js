const initialState = {
  items: []
}
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_LIST":
      return {
        ...state,
        items: [
          ...state.items,
          {            
            value: action.payload,
            inBasket: false
          }
        ]
      };
    default:
      return state;
  }
};
