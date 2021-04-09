import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";

const AddEditDialog = ({
  open,
  setOpen,
  onOk,
  onCancel,
  editData,
  ...rest
}) => {
  const [title, setTitle] = useState(editData?.title || "");
  const [description, setDescription] = useState(editData?.description || "");

  return (
    <Dialog disablePortal open={open} onClose={() => setOpen(false)} {...rest}>
      <DialogTitle>
        {!editData.id ? "Добавить" : "Редактировать"} задачу
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="title"
          label="Заголовок"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          id="description"
          label="Описание"
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (title) {
              onOk(
                editData.id
                  ? { id: editData.id, title, description }
                  : { title, description }
              );
              setTitle("");
              setDescription("");
              setOpen(false);
            }
          }}
        >
          OK
        </Button>
        <Button onClick={onCancel}>Отмена</Button>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(AddEditDialog);
