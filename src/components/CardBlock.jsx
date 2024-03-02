export function CardBlock ({title, description, img, slug, category}) {
    return(
        < a href={`/${category}/${slug}`}
            aria-label={`Consulta el bloque de código para ${slug}, se abrirá en uan nueva pestña`}
            rel="noopener noreferrer"
            className="">
            <article 
                aria-label={description}
                style={{border: '1px solid rgba(0,0,0,.2)', background: 'var(--cards-background-color)'}}
                className="h-full rounded-lg bg-secondary hover:scale-105 hover:cursor-pointer transition flex flex-col duration-100 p-4 gap-4">
                <picture className="flex justify-center">
                    <img className="rounded-lg aspect-video" src={img} alt={`Patch for snippet ${title}`} />
                </picture>
                <header className="flex-grow text-primary gap-4">
                    <h2 className="font-bold txt-2xl tracking-light">{title}</h2>
                    <p className="font-medium">
                        {description.slice(0, 100) + "..."}
                    </p>
                </header>
           
            </article>
        </a>
    )
}