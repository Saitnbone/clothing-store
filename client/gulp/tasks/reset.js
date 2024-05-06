import { deleteAsync } from "del";

// @todo: Таска для удаления файлов 
export const reset = () => {
  return deleteAsync(app.path.clean);
};
