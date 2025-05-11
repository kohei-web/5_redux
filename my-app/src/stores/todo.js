import { createSlice } from "@reduxjs/toolkit";
import { initialTodoList, todoLength } from "../constants/data";


const initialState = {
    todos: initialTodoList,
    uniqueId: todoLength
};

export const todoListSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // stateでinitialStateの現在の値が渡ってくる
            const nextUniqueId = state.uniqueId + 1;
            const newTodo = {
                id: nextUniqueId,
                title: action.payload, /* 入力値が渡ってきた想定 */
            };

            // スプレッド演算子を利用して新しいtodoを追加
            state.todos = [...state.todos, newTodo];
            // 新しいIDを更新しておく
            state.uniqueId = nextUniqueId
        },
        deleteTodo: (state, action) => {
            // 渡ってきたtodo.idと同じtodoをfilterしたtodoを作成する
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    },
});

export const { addTodo, deleteTodo } = todoListSlice.actions;
export default todoListSlice.reducer;
