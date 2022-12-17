import { combineReducers } from "redux"
import todos from "./todos"

/** 루트리듀서함수 정의 */
const rootReducer = combineReducers({
  todos,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
