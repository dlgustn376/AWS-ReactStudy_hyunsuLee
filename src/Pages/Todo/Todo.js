/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FcPlus } from 'react-icons/fc';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';
import React, {useRef, useState} from 'react';
import PromptModal from "../../Modal/PromptModal/PromptModal";
import * as S from './style'


const Todo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modifyTodo, setModifyTodo] = useState({
        id:0,
        content: ''
    });

    const [input, setInput] = useState({
        id: 0,
        content: ''
    });

    const [todoList, setTodoList] = useState([]);
    const todoId = useRef(1);

    const onChange = (e) => {
        setInput({
            ...input,
            content: e.target.value
        });
    }

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        const todo = {
            ...input,
            id: todoId.current++
        }
        setTodoList([...todoList, todo]);
        setInput({
            ...input, 
            content: ''
        });
    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(
            todo => {
                return todo.id !== id;
            }
        ))
    }

    const updateTodo = (modifyTodo) =>{
        setTodoList(
            todoList.map(
                todo => {
                    if(todo.id === modifyTodo.id){
                        todo.content = modifyTodo.content;
                    }
                    return todo;
                }

            )
        )
    }

    const openModal = (id) =>{

        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0]);

        setIsOpen(true);
    } 

    return (
        <>
            <div css={S.TodoContainer}>
                <div css={S.TodoAddition}>
                    <input css={S.AdditionInput} type="text" placeholder="Add your new Todo" onChange={onChange} onKeyUp={onKeyUp} value={input.content} />
                    <button css={S.TodoAddButton} onClick={onAdd}><FcPlus /></button>
                </div>
                {todoList.map(
                    todo => {
                        return (
                            <div css={S.TodoList} key={todo.id}>
                                <div css={S.TodoContent}>{todo.content}</div>
                                <div css={S.ItemGroup}>
                                    <button css={S.ItemButton} onClick={() => openModal(todo.id)}><BiPen /></button>
                                    <button css={S.ItemButton} onClick={() => onRemove(todo.id)}><TiTrash /></button>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
            {isOpen ? <PromptModal title={'Edit Todo'} todo={modifyTodo} setIsOpen={setIsOpen} updateTodo={updateTodo} />: ''}
            
        </>
    );
};

export default Todo;