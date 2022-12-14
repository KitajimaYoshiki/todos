import { TodoItem } from '@pages/api/TodoItem'
import Axios from 'axios'

const BACKEND_URL = (
  process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001/'
).replace(/\/$/, '')
const API_TASKS = `${BACKEND_URL}/api/tasks`

// Todoリストをbackendから取得するメソッドを返す
export const loadTodoList = (): Promise<TodoItem[]> => {
  // GET /api/tasks
  return Axios.get(API_TASKS).then((resp) => resp.data)
}

// Todoリストを更新するメソッドを返す
export const updateTodoItem = (items: TodoItem[], id: number): TodoItem[] => {
  const updated = [...items].map((item) => {
    if (item.id === id) {
      return { ...item }
    } else return item
  })
  return updated
  // ToDo: backendを要素を更新する.
  // PATCH /api/tasks/:id
}
