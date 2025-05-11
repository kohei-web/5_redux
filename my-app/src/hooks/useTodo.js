/**
 * useTodo
 *
 * @packages hooks
 *
 */


import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../stores/todo.js";

/**
 * useTodo
 *
 * @returns {[Object, Object]} 配列で2つのオブジェクト{states と actions}を返す
 *
 */


export const useTodo = () => {
    // dispatchの定義
    const disPatch = useDispatch();
    // useSelectorでinitialStateをstateとして使用する
    const todoList = useSelector((state) => state.todo.todos);

    // todo追加テキストの状態管理 最初は空文字
    const [ addInputValue, setAddInputValue ] = useState("");
    // 検索テキストの状態管理
    const [ searchText, setSearchText ] = useState("");


    // 新しいtodoListの作成
    const createTodo = (e) => {
        // Enterがクリックかつ入力欄がからではない時にtodoを追加するようにする
        if (e.key === 'Enter' && addInputValue !== "") {

            // todoの追加
            disPatch(addTodo(addInputValue));

            // todo追加後に入力欄を空にする
            setAddInputValue("");
        }
    };

    // 入力されたtodo追加テキストの状態管理ハンドラ
    const handleSetAddInputValue = (e) => setAddInputValue(e.target.value);
    // 入力された検索テキストの状態管理ハンドラ
    const handleSetSearchText = (e) => setSearchText(e.target.value);

    // todoList検索処理
    // フィルタリング後のtodoを返す
    // useMemoで同じ処理はスキップするようにする
    const showTodoList = useMemo(() => {
        return todoList.filter((todo) => {
            // フィルタリング用の設定を作成
            const regexp = new RegExp("^" + searchText, "i");
            // todoのtitleがフィルタリングと合致したtodoのみ返す
            return todo.title.match(regexp);
        });
    }, [todoList, searchText]);

    // todoList削除処理
    const handleTodoDelete = (targetId) => {
        disPatch(deleteTodo(targetId));
    };

    const states = {
        showTodoList,
        addInputValue,
        searchText,
    }

    const actions = {
        handleSetAddInputValue,
        createTodo,
        handleSetSearchText,
        handleTodoDelete,
    }

    return [states, actions];
};
