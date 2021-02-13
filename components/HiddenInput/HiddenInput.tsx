import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {keyDown} from "../../redux/actions/indexActions";

export  let HiddenInput = () => {
    const dispatch = useDispatch()

    const inputElement = React.useRef(null);

    React.useEffect(() => {
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }, [inputElement.current]);

    return (
        <Input autoFocus type='text' ref={inputElement} onChange={(e) => {
            dispatch(keyDown(e.target.value))
            e.target.value = ''
        }}
               onBlur={() => inputElement.current.focus()}
        />
    )
}

const Input = styled.input`
    position: absolute;
    opacity: 0;
`

export default HiddenInput