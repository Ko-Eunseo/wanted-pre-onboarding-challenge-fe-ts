/**
 * @author Eunseo Go
 * @see <a href="#">배포링크</a>
 */

/**
 * Type of tag.
 * @typedef {Object} TagItem
 * @property {number} tagId - The id of the tag.
 * @property {string} tagName = the name of the tag.
 */

/**
 * Type of tagList.
 * @typedef {TagItem[]} TagList
 */

/**
 * Type of todo.
 * @typedef {Object} TodoItem
 * @property {number} id - The id of the todo.
 * @property {string} content - The content of the todo.
 * @property {boolean} isDone - Whether user did or not todo.
 * @property {string} category - The category of the todo.
 * @property {TagList} [tagList] - The tags of the todo.
 */

/**
 * Type of todoList.
 * @typedef {TodoItem[]} TodoList
 */

/**
 * @function Create todo.
 * @param {string} content 
 * @param {string?} category 
 * @param {string[]?} tags 
 * @return {TodoItem}
 * @see {@link TodoItem}
 */
const CreateTodo = (content, category, tag) => { };

/**
 * @function Read all of todos.
 * @return {TodoList}
 * @see {@link TodoList}
 */
const ReadAllTodo = () => { };

/**
 * @function Read specific todo by id.
 * @param {number} id
 * @return {TodoItem}
 * @see {@link TodoItem}
 */
const ReadTodoById = (id) => { };

/**
 * Update todo.
 * @param {number} id - The id of the todo.
 * @param {string} [content] - The content of the todo.
 * @param {string} [category] - The category of the todo.
 * @return {TodoItem} - return updated todoItem.
 */
const UpdateTodo = (id, content, category) => { };

/**
 * Update specific todo's specific tag.
 * @param {number} id - The id of the todo.
 * @param {number} [tagId] - The tagId of the todo.
 * @param {string} [tagName] - The tag's name of the todo.
 * @return {TodoItem} - return updated todoItem.
 */
const UpdateTag = (id, tagId, tagName) => { };

/**
 * @function Delete todo by id.
 * @param {number} id - The id of the todo.
 * @return {void}
 */
const DeleteTodoById = (id) => { };

/**
 * @function Delete all todo.
 * @return {void}
 */
const DeleteAllTodo = () => { };

/**
 * @function Delete tag by id.
 * @param {string} id - The id of the todo.
 * @param {string} tagId - The id of the tag.
 * @return {TodoItem} - return updated todoItem.
 */
const DeleteTagById = (id, tagId) => { };

/**
 * @function Delete all tag.
 * @param {number} id - The id of the todo.
 * @return {TodoItem} - return updated todoItem.
 */
const DeleteAllTag = () => { };
