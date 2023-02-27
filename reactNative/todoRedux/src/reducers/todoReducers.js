const intialData = {
  list: [],
};

const todoReducers = (state = intialData, action) => {
  console.log(action, 'hello');
  switch (action.type) {
    case 'ADD_TODO':
      const {id, data} = action.payload;
      return {
        ...state,
        list: [...state.list, {id: id, data: data}],
      };
    case 'DELETE_TODO':
      const newList = state.list.filter(ele => ele.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default todoReducers;
