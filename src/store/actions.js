import { ADD_ITEM, CHANGE_COMPLETED, DELETE_ALL, DELETE_ITEM } from "./types";

export const changeCompleted = (id) => ({
  type: CHANGE_COMPLETED,
  id,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  id,
});

export const addItem = (title, description) => ({
  type: ADD_ITEM,
  title,
  description,
});

export const editItem = (id, title, description) => ({
  type: ADD_ITEM,
  id,
  title,
  description,
});

export const deleteAll = () => ({
  type: DELETE_ALL,
});
