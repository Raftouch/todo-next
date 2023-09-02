import prisma from './db'

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
