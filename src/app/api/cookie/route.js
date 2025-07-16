import { NextResponse } from 'next/server'

// GET: Reading a cookie
export async function GET(request) {
  const cookie = request.cookies.get('myCookie')
  const value = cookie ? cookie.value : null

  return NextResponse.json({ value })
}

// POST: Creating or modifying a cookie
export async function POST(request) {
  const body = await request.json()
  const value = body.value || ''

  const response = NextResponse.json({
    message: 'Cookie creado/modificado',
    value: value
  })

  // cookie definition
  response.cookies.set('myCookie', value, {
    httpOnly: false, // Cookie will be accessible from the fontend
    path: '/',
    maxAge: 60 * 60 * 24 // 1 day
  })

  return response
}
