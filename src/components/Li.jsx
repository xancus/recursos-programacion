import { useState, useEffect } from 'react'

export function Li ({ slug = '', classAttr = '', children }) {
  const [extraClass, setExatraClass] = useState('')

  useEffect(() => {
    if (window.location.pathname.split('/')[1] === slug) setExatraClass('bg-primary text-secondary')
  }, [])

  return (
    <a href={`/${slug.toLowerCase()}`}>
      <li data-label={slug} className={`${classAttr || ' hover:bg-hover-primary hover:cursor-pointer hover:text-secondary flex items-center gap-2 font-semibold px-4 mb-1 py-4 rounded-lg duration-100'} ${extraClass}`}>
        {children}
      </li>
    </a>
  )
}
