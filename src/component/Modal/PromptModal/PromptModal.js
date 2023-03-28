/** @jsxImportSource @emotion/react */
import * as S from './style'
import React, { useRef,useState,useEffect } from 'react';

const PromptModal = (props) =>{

    const modalRef = useRef();
    const [modalContent, setModalContent,] = useState('');

    useEffect(  // 기존의 값을 저장, 가져옴
        () => {
            setModalContent(props.todo.content);

            const handler = (e) =>{
               if(!modalRef.current.contains(e.target)){
                    props.setIsOpen(false);
               }
            }

            //창이 열릴때 document가 열림
            document.addEventListener('mousedown', handler);
            return () =>{
                // 창이 닫힐 때 사라짐.
                document.removeEventListener('mousedown',handler);
            }
        },[] // 전부 마운트 언마운트를 준다는 의미
        // useEffect가 동작할 때, useState만 동작
    );


    const closeModal = () => {
        props.setIsOpen(false);
    }

    const contentChange = (e) =>{
        setModalContent(e.target.value);
    }

    const onSubmitKeyUp = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    const onSubmit = () =>{
        props.updateTodo({
            id: props.todo.id,
            content: modalContent
        });
        closeModal();
    }
    
    return (
        <div css={S.modalContainer} >
            <div css={S.modalBox} ref={modalRef}>
                <header css={S.modalHeader}>
                    <h1 css={S.modalTitle}>{props.title}</h1>
                </header>
                <main css={S.modalMain}>
                    <input css={S.modalInput} type="text"onChange={contentChange} onKeyUp={onSubmitKeyUp} defaultValue={props.todo.content}/>
                </main>
                <footer css={S.modalFooter}>
                    <button css={S.modalButton} type='button' onClick={onSubmit}>확인</button>
                    <button css={S.modalButton} type='button' onClick={closeModal}>취소</button>
                </footer>
            </div>
        </div>
    );
}

export default PromptModal;