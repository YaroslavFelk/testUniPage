import React from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";

export  let TextBlock = ({text}) => {
    return (
        <TextBlockStyle>
            <CorrectText>{text.correctText}</CorrectText>
            <CurrentLetter
              wrongLetter={text.wrongLetter}>
              {text.currentLetter}
            </CurrentLetter>
            <span>{text.futureText}</span>
        </TextBlockStyle>
    )
}

const TextBlockStyle = styled.div`
  font-size: 24px;
  line-height: 1.5em;
  color: #5c5c5c;
  letter-spacing: 0.05em;
`

const CorrectText = styled.span`
  color: #5bc538;
`

const CurrentLetter = styled.span<{wrongLetter}>`
  background-color: ${p => p.wrongLetter ? '#F36747' : '#5bc538'} ;
  color: #fff;
  border-radius: 3px;
`

export default TextBlock