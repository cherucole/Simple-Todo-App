export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (id, title, description, time) => {
  return {
    type: ADD_ITEM,
    id: id,
    title: title,
    description: description,
    time: time,
  };
};
