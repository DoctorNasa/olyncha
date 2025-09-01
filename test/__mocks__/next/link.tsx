import React from 'react'

// A very simple Next.js Link mock that behaves like a normal anchor
export default function Link({ href, children, onClick, ...props }: any) {
  const to = typeof href === 'string' ? href : href?.pathname || '#'
  return (
    <a href={to} onClick={onClick} {...props}>
      {children}
    </a>
  )
}

