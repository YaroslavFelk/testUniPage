import React from "react";
import styled from "styled-components";

export  let InfoBlockItem = (props) => {
    const {head, data, units} : {head: string, data : string | number, units : string} = props

    return (
        <InfoBlockItemBLock>
          <Head>{head}</Head>
          <Info>{data} <span>{units}</span></Info>
        </InfoBlockItemBLock>
    )
}

export const InfoBlockItemBLock = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`

const Head = styled.div`
  color: #b5bbc2;
  font-size: 14px;
`

const Info = styled.div`
  color: #67defd;
  font-size: 32px;
  
  & span {
    font-size: 12px;
  }
`


export default InfoBlockItem