import React from "react";
import { DeleteForever as ClearAllIcon } from "@material-ui/icons";
import { DeleteAllWrapper } from "./units";

const DeleteAll = ({ onClick }) => {
  return (
    <DeleteAllWrapper onClick={onClick}>
      <ClearAllIcon fontSize={"large"} />
      <span>Удалить все</span>
    </DeleteAllWrapper>
  );
};

export default DeleteAll;
