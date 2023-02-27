export const addTask = data => {
  return {
    type: 'addTask',
    payload: {
      id: new Date().getTime(),
      data: data,
    },
  };
};
export const deleteTask = data => {
  return {
    type: 'deleteTask',
    payload: {
      id: data,
    },
  };
};
export const markTask = () => {
  return {
    type: 'markTodo',
  };
};
