/** 액션 타입 */
const ADD_TODO = "todos/ADD_TODO" as const
const COMPLETE_TODO = "todos/COMPLETE_TODO" as const
const DELETE_TODO = "todos/DELETE_TODO" as const

/** 액션 생성함수 */
let key = 2
export const addTodo = (title: string) => ({
  type: ADD_TODO,
  todo: {
    id: key++,
    title,
    completed: false,
    userId: 1,
  },
})
export const completeTodo = (id: number) => ({ type: COMPLETE_TODO, id })
export const deleteTodo = (id: number) => ({ type: DELETE_TODO, id })

/** 초기값 */
const init = [
  {
    id: 1,
    title: "할일",
    completed: false,
    userId: 1,
  },
]

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof completeTodo>
  | ReturnType<typeof deleteTodo>

/** 리듀서 함수 */
export default function todos(state = init, action: TodoAction) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo]
    case COMPLETE_TODO:
      return state.map((item) => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : item
      })
    case DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.id
      })
    default:
      return state
  }
}
