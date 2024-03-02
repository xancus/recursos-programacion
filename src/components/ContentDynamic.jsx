import { useState, useEffect } from 'react'
import { contentArray } from '../db/db'
import { CardBlock } from './CardBlock'
import { Button } from './Button'

export function ContentDynamic ({ titleSection }) {
  const [currentContent, setCurrentContent] = useState([])
  const [hasExtraClass, sethasExtraClass] = useState('')

  useEffect(() => {
    if (titleSection === 'all') {
      setCurrentContent([])
      return
    }
    const filteredContent = contentArray.filter(cont => cont.category === titleSection)
    setCurrentContent(filteredContent)
  }, [])

  function handleClick (ev) {
    const { name } = ev.target
    sethasExtraClass(name)
    if (name === 'all') {
      setCurrentContent([])
      return
    }
    const filteredContent = contentArray.filter(cont => cont.type === name)
    setCurrentContent(filteredContent)
  }

  return (
    <section className='flex flex-col gap-6'>
      <div className='flex flex-col gap-6'>
        <h3 className='sr-only'>Diferentes desarrollos</h3>
        <span className='text-primary text-3xl font-semibold uppercase'>{titleSection}</span>
        <ul className='flex flex-row text-primary text-xl font-medium gap-4'>
          <Button
            slug='all'
            handleClick={handleClick}
            hasExtraClass={hasExtraClass}
          >
            All
          </Button>
          <Button
            slug='backend'
            handleClick={handleClick}
            hasExtraClass={hasExtraClass}
          >
            Backend
          </Button>

          <Button
            slug='frontend'
            handleClick={handleClick}
            hasExtraClass={hasExtraClass}
          >
            Frontend
          </Button>
        </ul>
      </div>

      <main className='grid [grid-template-columns:1fr] md:grid-cols-3 gap-8'>
        {
            currentContent.length > 0
              ? (
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
                )
              : (
                  contentArray.map(content => (
                    <CardBlock
                      category={content.category}
                      key={content.id}
                      slug={content.slug}
                      title={content.title}
                      description={content.description}
                      img={content.img}
                    />
                  ))
                )
        }
      </main>

    </section>
  )
}
