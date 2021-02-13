import {actionsTypes} from "../../constants/actionsTypes";

export function init(text) {
  return {
    type: actionsTypes.INIT,
    payload: {
      text: text
    }
  }
}

export function keyDown(val) {
  return {
    type: actionsTypes.CHANGE,
    payload: {letter: val}
  }
}

export function reset(text) {
  return {
    type: actionsTypes.RESET,
    payload: {
      text: text
    }
  }

}