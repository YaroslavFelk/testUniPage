import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {RootState} from "../../redux/store";

export  let Speed = ({children}) => {
    const correctText = useSelector((state: RootState) => state.index.correctText)
    const startTime = useSelector((state: RootState) => state.index.startTime)
    const [speed, setSpeed] = useState(0)

    function getSpeed() {
      return correctText.length
        ? Math.round(correctText.length / (Date.now() - startTime) * 60000)
        : 0
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setSpeed(getSpeed())
      }, 1000);

      setSpeed(getSpeed())

      return () => clearInterval(interval);
    }, [correctText])



    return (
        <>{React.Children.map(children, child => {
            return React.cloneElement(child, {
                data: speed
            })
        })
        }</>
    )
}



export default Speed