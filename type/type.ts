export interface TagItem {
  readonly id: number;
  name: string;
}

export interface TodoItem {
  readonly id: number;
  content: string;
  isDone: boolean;
  category: string;
  tagList?: TagItem[];
}

export interface CreateProp {
  content: string;
  category: string;
  tag?: TagItem[];
}
export interface CreateTodo {
  (props: CreateProp): TodoItem;
}

export interface ReadTodoById {
  (id: number): TodoItem;
}
export interface ReadAllTodo {
  (): TodoItem[];
}

export interface UpdateTodo {
  (id: number, content?: string, category?: string): TodoItem;
}
export interface UpdateTag {
  (id: number, tagId: number, tagName: string): TodoItem;
}

export interface DeleteTodoById {
  (id?: number): void;
}
export interface DeleteAllTodo {
  (): void;
}
export interface DeleteTagById {
  (id: number, tagId: number): void;
}
export interface DeleteAllTag {
  (id: number): void;
}
