import Link from 'next/link'
import { getAllTodos, toggleTodo } from '@/prisma/prisma.actions'
import TodoItem from './components/TodoItem'

export default async function Home() {
  const todos = await getAllTodos()

  return (
    <>
      <header className="flex items-center justify-between mb-5">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border rounded-md py-2 px-4 hover:bg-slate-700"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  )
}
