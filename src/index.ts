import * as type from "../type/type";

let todoList: type.TodoItem[] = [];

const createTodo: type.CreateTodo = ({
  content,
  category,
  tag,
}: type.CreateProp): type.TodoItem => {
  const todoItem = {
    id: todoList.length + 1,
    content,
    isDone: false,
    category,
    tag,
  };
  todoList.push(todoItem);
  return todoItem;
};

const readAllTodo: type.ReadAllTodo = (): type.TodoItem[] => {
  return todoList;
};

const readTodoById: type.ReadTodoById = (id): type.TodoItem => {
  const filteredTodo = todoList.find((todo) => todo.id === id)!;
  return filteredTodo;
};

const updateTodo: type.UpdateTodo = (id, content, category): type.TodoItem => {
  let newArr = todoList.filter((todo) => todo.id !== id);
  let curTodo: type.TodoItem = readTodoById(id);
  content ? (curTodo.content = content) : null;
  category ? (curTodo.category = category) : null;
  todoList = [...newArr, curTodo];
  return curTodo;
};

const updateTag: type.UpdateTag = (id, tagId, tagName): type.TodoItem => {
  let newArr = todoList.filter((todo) => todo.id !== id);
  let curTodo = readTodoById(id)!;

  if (tagId === undefined) {
    const newTag = {
      id: curTodo.tagList ? curTodo.tagList.length + 1 : 1,
      name: tagName,
    };
    curTodo.tagList?.push(newTag);
  } else if (tagId) {
    let newTagList = curTodo.tagList!.filter((tag) => tag.id !== tagId);
    let curTag = curTodo.tagList!.find((tag) => tag.id === tagId)!;
    curTag.name = tagName;
    curTodo.tagList = [...newTagList, curTag];
  }
  todoList = [...newArr, curTodo];
  return curTodo;
};

const deleteTodoById: type.DeleteTodoById = (id): void => {
  const newArr = todoList.filter((todo) => todo.id !== id);
  todoList = [...newArr];
};

const deleteAllTodo: type.DeleteAllTodo = (): void => {
  todoList = [];
};

const deleteTagById: type.DeleteTagById = (id, tagId): type.TodoItem => {
  let newArr = todoList.filter((todo) => todo.id !== id);
  let curTodo = readTodoById(id)!;
  let newTags = curTodo.tagList!.filter((tag) => tag.id !== tagId);
  curTodo.tagList = [...newTags];
  todoList = [...newArr, curTodo];
  return curTodo;
};

const deleteAllTag: type.DeleteAllTag = (id): type.TodoItem => {
  let newArr = todoList.filter((todo) => todo.id !== id);
  let curTodo = readTodoById(id)!;
  curTodo.tagList = [];
  todoList = [...newArr, curTodo];
  return curTodo;
};
