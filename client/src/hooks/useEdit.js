import { useState } from "react";

const useEdit = () => {
  const [edit, setEdit] = useState(false);

  const openEdit = () => setEdit(true);
  const closeEdit = () => setEdit(false);

  return {
    edit,
    openEdit,
    closeEdit,
  };
};

export default useEdit;
