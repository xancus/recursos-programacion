import { useState, useEffect } from 'react'
import { contentArray } from '../db/db'
import { CardBlock } from './CardBlock'

export function ContentDynamic ({ titleSection }) {
  const [currentContent, setCurrentContent] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    if (titleSection === 'all') {
      setCurrentContent(contentArray)
      return
    }
    const filteredContent = contentArray.filter(cont => cont.category === titleSection)
    setCurrentContent(filteredContent)
  }, [])

  function handleClick (ev) {
    const name = ev.target.getAttribute('data-class')
    if (name === 'all') {
      setCurrentContent(contentArray)
      setShowFilter(!showFilter)
      return
    }

    const filteredContent = currentContent.filter(cont => cont.type === name)
    setCurrentContent(filteredContent)
    setShowFilter(!showFilter)
  }

  return (
    <section className='flex flex-col gap-6'>
      <nav className='flex flex-row text-primary text-xl font-medium gap-4 align-start'>
        <h3 className='sr-only'>{titleSection}</h3>
        <div className='flex flex-col text-primary text-sm md:text-xl font-medium gap-1 items-start relative'>
          <button
            onClick={() => setShowFilter(!showFilter)}
            className='py-1 px-2 md:py-2 md:px-4 border border-primary rounded-lg hover:bg-hover-primary hover:text-secondary relative flex flex-row items-center gap-2'
          >
            Filter by <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='30' height='30'><path fill='none' d='M0 0h24v24H0z' /><path fill='currentColor' d='M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z' /></svg>

          </button>
          <ul className={`${showFilter ? 'block' : 'hidden'} h-auto text-primary text-xl border border-[white] rounded-lg w-full p-2 min-w-[150px] absolute bg-[var(--background-color)] top-11`}>
            <li
              data-class='all'
              onClick={handleClick}
              className='px-2 md:px-4 hover:bg-hover-primary hover:text-secondary hover:cursor-pointer rouned-lg border border-transparent rounded-lg'
            >All
            </li>
            <li
              data-class='frontend'
              onClick={handleClick}
              className='px-2 md:px-4 hover:bg-hover-primary hover:text-secondary hover:cursor-pointer rouned-lg border border-transparent rounded-lg'
            >Frontend
            </li>
            <li
              data-class='backend'
              onClick={handleClick}
              className='px-2 md:px-4 hover:bg-hover-primary hover:text-secondary hover:cursor-pointer rouned-lg border border-transparent rounded-lg'
            >Backend
            </li>
          </ul>
        </div>
      </nav>

      <main className='grid [grid-template-columns:1fr] md:grid-cols-3 gap-4'>
        {
          currentContent.map(content => (
            <CardBlock
              category={content.category}
              key={content.id}
              slug={content.slug}
              title={content.title}
              description={content.description}
              img={content.img}
            />
          ))
        }
      </main>

    </section>
  )
}
