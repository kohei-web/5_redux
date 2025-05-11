/**
 * TodoTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 *
 */

import { useTodo } from "../../hooks/useTodo";
import { TodoList } from "../../components/organisms/TodoList";
import { AddTodo } from "../../components/organisms/AddTodo";
import { SearchTodo } from "../../components/organisms/SearchTodo";

export const TodoTemplate = () => {
    const [
        {
            showTodoList,
            addInputValue,
            searchText
        },
        {
            handleSetAddInputValue,
            createTodo,
            handleSetSearchText,
            handleTodoDelete
        }
    ] = useTodo();

    return (
        <div>
            {/* todoListの追加 */}
            <AddTodo
                inputValue={addInputValue}
                onChangeText={handleSetAddInputValue}
                handleKeyUp={createTodo}
            />
            {/* todoListの検索 */}
            <SearchTodo
                searchText={searchText}
                handleChangeSearchText={handleSetSearchText}
            />
            {/* todoListの表示 */}
            <TodoList
                showTodoList={showTodoList}
                handleTodoDelete={handleTodoDelete}
            />
        </div>
    )
};
