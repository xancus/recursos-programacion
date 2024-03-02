export function Button ({ children, slug, handleClick = () => {}, hasExtraClass }) {
  const extraClass = 'bg-primary text-secondary'

  return (
    <button
      name={slug}
      onClick={handleClick}
      className={`hover:bg-hover-primary  hover:cursor-pointer hover:text-secondary flex items-center gap-2 font-semibold px-2 mb-1 py-2 rounded-lg duration-100 ${hasExtraClass === slug ? extraClass : ''}`}
    >
      {children}
    </button>
  )
}
