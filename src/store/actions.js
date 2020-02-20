export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const COMPLETED_ITEM = 'COMPLETED_ITEM';

export const addItem = (id, title, description, time) => {
  return {
    type: ADD_ITEM,
    id: id,
    title: title,
    description: description,
    time: time,
  };
};

export const deleteItem = id => {
  return {
    type: DELETE_ITEM,
    id: id,
  };
};
export const doneItem = id => {
  return {
    type: COMPLETED_ITEM,
    id: id,
  };
};
