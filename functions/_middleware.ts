export const onRequest: PagesFunction = async (context) => {
  try {
    return await context.next()
  } catch (error) {
    console.error('Middleware error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
} 