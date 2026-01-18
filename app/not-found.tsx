//create not found page 
import React from 'react'

export default function notFound() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 Not Found</h1>
      <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
    </div>
  )
}
