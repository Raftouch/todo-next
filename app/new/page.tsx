import { createTodo } from '@/prisma/prisma.actions'
import Link from 'next/link'

export default function NewTodo() {
  return (
    <>
      <header className="flex items-center justify-between mb-5">
        <h1 className="text-2xl">New Todo</h1>
      </header>
      <form action={createTodo} className="flex flex-col gap-5">
        <input
          type="text"
          name="title"
          className="bg-transparent border rounded-md py-2 px-4 outline-none"
        />
        <div className="flex justify-end gap-2">
          <Link
            href=".."
            className="border rounded-md py-2 px-4 hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border rounded-md py-2 px-4 hover:bg-slate-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
