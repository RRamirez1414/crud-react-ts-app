import React, { ReactChild } from 'react'

type LinkProps = {
  className?: string
  href: string
  children: ReactChild | ReactChild[]
}

const Link = ({ className, href, children }: LinkProps) => {
  return (
    <a
      className={className}
      href={href}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault()
        //update url, tell Route URL has changed
        window.history.pushState({}, '', href)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }}
    >
      {children}
    </a>
  )
}

export default Link
