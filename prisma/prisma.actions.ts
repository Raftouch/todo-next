import { redirect } from 'next/navigation'
import prisma from './prisma.client'

export const getAllTodos = async () => {
  const products = await prisma.todo.findMany({
    orderBy: [
      {
        createdAt: 'desc',
      },
    ],
  })
  return products
}

export const createTodo = async (data: FormData) => {
  'use server'

  const title = data.get('title')?.valueOf()
  if (typeof title !== 'string' || title.length === 0) {
    throw new Error('Invalid title')
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
    },
  })

  redirect('/')
}

export const toggleTodo = async (id: string, complete: boolean) => {
  'use server'

  await prisma.todo.update({ where: { id }, data: { complete } })
}
