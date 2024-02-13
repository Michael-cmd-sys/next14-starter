import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>The page you requested does not exist.</p>
        <Link href='/'>Back to homepage</Link>
    </div>
  )
}

export default NotFound