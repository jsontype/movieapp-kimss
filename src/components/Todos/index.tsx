import { SetStateAction, useState } from "react"
import styles from "./style.module.scss"

type Todo = {
  id: number
  title: string
  completed: boolean
  userId: number
}

type TodoListProps = {
  // 이 컴포넌트에서는 할 일 정보를 지니고 있는 todo들을 모아둔 배열인 todos라는 props를 받아온다.
  todos: Todo[]
  onCreate: (title: string) => void
  // 이 컴포넌트는 onToggle이라는 props를 받아와서, 다시 각 TodoItem 컴포넌트들에게 전달해준다. (이 함수가 호출되면 해당 todo의 done 값이 바뀐다.)
  onCompleted: (id: number) => void
  // 이 컴포넌트는 onRemove이라는 props를 받아와서, 다시 각 TodoItem 컴포넌트들에게 전달해준다. (이 함수가 호출되면 해당 todo가 삭제된다.)
  onDelete: (id: number) => void
}

export default function Todos({
  todos,
  onCreate,
  onCompleted,
  onDelete,
}: TodoListProps) {
  const [input, setInput] = useState("")

  const onChange = (e: {
    preventDefault: () => void
    target: { value: SetStateAction<string> }
  }) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    onCreate(input)
    setInput("")
  }

  const render = todos.map((item) => {
    const isDone = item.completed ? "done" : ""
    return (
      <div
        key={item.id}
        className={styles[isDone]}
        onClick={() => onCompleted(item.id)}
      >
        <span># {item.id} / </span>
        <span>
          {item.title}
          &nbsp;
        </span>
        <button onClick={() => onDelete(item.id)}>삭제</button>
      </div>
    )
  })

  return (
    <div>
      <h1>투두앱</h1>
      <form onSubmit={onSubmit}>
        <input
          name="todo"
          type="text"
          value={input}
          onChange={onChange}
        ></input>
        <button type="submit">전송</button>
      </form>

      <div>{render}</div>
    </div>
  )
}
