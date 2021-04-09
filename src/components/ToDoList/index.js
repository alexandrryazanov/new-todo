import React, { useState } from "react";
import { ListWrapper, MainWrapper } from "./units";
import Item from "./Item";
import AddItem from "./AddItem";
import { useDispatch, useSelector } from "react-redux";
import AddEditDialog from "../AddEditDialog";
import { addItem, deleteAll, editItem } from "../../store/actions";
import DeleteAll from "./DeleteAll";

const ToDoList = () => {
  const list = useSelector((state) => state.list.items);
  const [openAdd, setOpenAdd] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();

  return (
    <>
      <h1>• TODO LIST •</h1>
      <MainWrapper>
        <ListWrapper>
          <AddItem onClick={() => setOpenAdd(true)} />
          {list.map((item) => (
            <Item
              {...item}
              key={item.id}
              onEditClick={(id, title, description) =>
                alert("Не успел =( Но в ТЗ и не было")
              }
            />
          ))}
          {list.length > 0 && (
            <DeleteAll
              onClick={() => {
                alert(
                  "Тут должно всплыть диалоговое окно, как на удалении одной задачи. Но пока без подтверждения!" +
                    "\n\nСейчас все удалится ;)" +
                    "\n\n P.S. Чтоб вернуть начальные - перезагрузи страницу"
                );
                dispatch(deleteAll());
              }}
            />
          )}
        </ListWrapper>
      </MainWrapper>

      <AddEditDialog
        open={openAdd}
        editData={editData}
        setOpen={setOpenAdd}
        onCancel={() => setOpenAdd(false)}
        onOk={({ title, description }) =>
          editData.id
            ? dispatch(
                editItem(editData.id, editData.title, editData.description)
              )
            : dispatch(addItem(title, description))
        }
      />
    </>
  );
};

export default ToDoList;
