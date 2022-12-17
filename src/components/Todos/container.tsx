import Todos from "."
import { RootState } from "../../modules"

import { addTodo, completeTodo, deleteTodo } from "../../modules/todos"
import { useSelector, useDispatch } from "react-redux"

export default function TodosContainer() {
  // useSelector : state를 조회하는 react-redux hook
  const todos = useSelector((state: RootState) => state.todos)

  // useDispatch : action을 dispatch(실행)하는 react-redux hook
  const dispatch = useDispatch()
  const onCreate = (title: string) => dispatch(addTodo(title))
  const onCompleted = (id: number) => dispatch(completeTodo(id))
  const onDelete = (id: number) => dispatch(deleteTodo(id))

  return (
    <>
      <Todos
        todos={todos}
        onCreate={onCreate}
        onCompleted={onCompleted}
        onDelete={onDelete}
      />
    </>
  )
}
