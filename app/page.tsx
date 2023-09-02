import Link from 'next/link'
import { getAllTodos } from '@/prisma/todo'

export default async function Home() {
  const todos = await getAllTodos()

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl">Todos</h1>
        <Link
          className="border rounded-md py-2 px-4 hover:bg-slate-600"
          href="/new"
        >
          New
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}
