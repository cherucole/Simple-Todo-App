export const ADD_ITEM = 'ADD_ITEM';

export const addItem = (title, description, time) => {
  return {
    type: ADD_ITEM,
    title: title,
    description: description,
    time: time,
  };
};
