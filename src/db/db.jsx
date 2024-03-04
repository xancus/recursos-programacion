export const contentArray = [
  {
    id: 0,
    slug: 'navbar-blur',
    title: 'Navbar Blur',
    description: 'Copia este código y añade el efecto Blur a tu menú de navegación',
    type: 'frontend',
    category: 'block',
    language: 'html',
    code: `
<header className='shadow-[0_0_30px_0_rgba(0,0,0,.2)] py-4 fixed top-0 left-0 right-0 h-[100px] z-10 backdrop-filter backdrop-blur bg-[rgba(0,0,0,.336)] grid items-center'>
    <nav className='font-Poppinn font-medium flex items-center justify-between max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg  w-full m-auto px-4'>
        <Link href='/'>
          <svg></svg>
        </Link>

        <ul className='inline-flex flex-row font-bold gap-4'>
          <li className='font-bold text-[var(--color-primary)]'>
            Test
          </li>
          <li className='text-[var(--color-primary)] cursor-pointer'>Test</li>
        </ul>
    </nav>
</header>`,
    img: '../navbar-blur.webp'
  }, {
    id: 1,
    slug: 'flask-api',
    title: 'flask api',
    description: '',
    type: 'backend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 2,
    slug: 'digital-ocean',
    title: 'Server Digital Ocean',
    description: '',
    type: 'documentation',
    category: 'documentation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 3,
    slug: 'smkoke-effect',
    title: 'Smoke Effect',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 4,
    slug: 'title-merged-with-image',
    title: 'Title merged with image',
    description: 'Aprende a mezclar un texto con una imagen de fondo con pocas líneas de CSS y HTML',
    type: 'frontend',
    category: 'block',
    language: 'html',
    code: `
<h1>KA-CHAU</h1>

<style>

    h1 {
        background-color: #000;
        line-height: 1;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 100px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 800;
        -webkit-font-smoothing: antialiased;
        background-image: url('../r.png');
        background-size: contain;
    }
</style>
        `,
    img: ''
  }, {
    id: 5,
    slug: 'scroll-bar',
    title: 'Scroll Bar',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 6,
    slug: 'light-dark-mode',
    title: 'Dark mode',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  },
  {
    id: 7,
    slug: 'confetti',
    title: 'Confeti',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 8,
    slug: 'image-grid',
    title: 'Image grid',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 9,
    slug: 'carousel-image',
    title: 'Carousel Image',
    description: '',
    type: 'frontend',
    category: 'block',
    language: '',
    code: '',
    img: ''
  }, {
    id: 10,
    slug: 'blurred-fade-in',
    title: 'Blurred fade-in',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación fade-in con el añadido del efecto blur',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: `<style>
    @keyframes blurred-fade-in{
        0% {
            filter: blur(5px);
            opacity: 0;
        }
        100% {
            filter: blur(0px);
            opacity: 1;
        }
    }
    .animation-blurred-fade-in:hover {
        animation: blurred-fade-in 1.2s ease-in-out;
    }
</style>
<span class='flex h-20 w-20 items-center justify-center rounded-md bg-[var(--color-primary)] animation-blurred-fade-in'>
</span>
    `,
    img: ''
  }, {
    id: 11,
    slug: 'fade-in',
    title: 'Fade in',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación fade-in',
    type: 'frontend',
    category: 'animation',
    language: 'html',
    code: `<style>
            @keyframes fade-in{
                0% {
                    opacity: 0;
                }
                100% {
                    opacity: 1;
                }
            }
            .animation-fade-in:hover {
                animation: fade-in 1.5s ease-in-out;
            }
        </style>
        <span class='flex h-20 w-20 items-center justify-center rounded-md bg-[var(--color-primary)] animation-fade-in'>
        </span>
        `,
    img: ''
  }, {
    id: 12,
    slug: 'fade-out',
    title: 'Fade out',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación fade-out',
    type: 'frontend',
    category: 'animation',
    language: 'html',
    code: `<style>
    @keyframes fade-out{
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    .animation-fade-out:hover {
        animation: fade-out .7s ease-in-out;
    }
</style>
<span class='flex h-20 w-20 items-center justify-center rounded-md bg-[var(--color-primary)] animation-fade-out'>
</span>
    `,
    img: ''
  }, {
    id: 13,
    slug: 'slide-out-left',
    title: 'Slide out left',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación slide-out-left',
    type: 'frontend',
    category: 'animation',
    language: 'html',
    code: `<style>
    @keyframes slide-out-left{
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-20px);
        }
    }
    .animation-slide-out-left:hover {
        animation: slide-out-left .7s ease-in-out;
    }
</style>
<span class='flex h-20 w-20 items-center justify-center rounded-md bg-[var(--color-primary)] animation-slide-out-left'>
</span>
    `,
    img: ''
  }, {
    id: 14,
    slug: 'slide-out-right',
    title: 'Slide out right',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación slide-out-right',
    type: 'frontend',
    category: 'animation',
    language: 'html',
    code: `<style>
    @keyframes slide-out-right{
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(20px);
        }
    }
    .animation-slide-out-right:hover {
        animation: slide-out-right .7s ease-in-out;
    }
</style>
<span class='flex h-20 w-20 items-center justify-center rounded-md bg-[var(--color-primary)] animation-slide-out-right'>
</span>
    `,
    img: ''
  }, {
    id: 15,
    slug: 'slide-out-top',
    title: 'Slide out top',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación sldie-out-top',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 16,
    slug: 'slide-out-bottom',
    title: 'Slide out bottom',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación slide-out-bottom',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 17,
    slug: 'slide-in-bottom',
    title: 'Slide in bottom',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 18,
    slug: 'slide-in-top',
    title: 'Slide in top',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 19,
    slug: 'slide-in-left',
    title: 'Slide in left',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 20,
    slug: 'slide-in-right',
    title: 'Slide in right',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 21,
    slug: 'flip-horizontal',
    title: 'Flip horizontal',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 22,
    slug: 'flip-vertical',
    title: 'Flip vertical',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 23,
    slug: 'scale',
    title: 'Scale',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 24,
    slug: 'fade-in-up',
    title: 'Fade in up',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 25,
    slug: 'fade-in-down',
    title: 'Fade in down',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 26,
    slug: 'fade-in-left',
    title: 'Fade in left',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 27,
    slug: 'fade-in-right',
    title: 'Fade in right',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 28,
    slug: 'fade-out-up',
    title: 'Fade out up',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 29,
    slug: 'fade-out-right',
    title: 'Fade out right',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 30,
    slug: 'fade-out-left',
    title: 'Fade out left',
    description: '',
    type: 'frontend',
    category: 'animation',
    language: '',
    code: '',
    img: ''
  }, {
    id: 31,
    slug: 'image-magic-fade-in',
    title: 'Image magic fade-in',
    description: 'Con estas pocas líneas de código aprenderás a crear un efecto de animación con el que tu imagen aparecerá en pantalla de la forma más espectacular',
    type: 'frontend',
    category: 'block',
    language: 'html',
    code: `
<svg
width="800" 
height="579" 
xmlns="http://www.w3.org/2000/svg"
fill="currentColor"
viewBox="0 0 256 256"
class='h-[300px] w-[150px]'
>
  <path
    id='logo'
    fill="currentColor" stroke="currentColor"
    stroke-width="1"
    d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
  >
  </path>
</svg>
<style>
#logo {
  fill-opacity: 0;
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  animation: dash 2s ease-in forwards;
}

@keyframes dash {
  70% {
    fill-opacity: 0;
  }

  100% {
    fill-opacity: 100%;
    stroke-dashoffset: 0;
    stroke-width: 1;
  }
}
</style>
    `,
    img: 'image-magic.webp'
  }, {
    id: 32,
    slug: 'separator',
    title: 'Separator',
    description: 'Con estas pocas líneas de código podrás crear un separador sencillo y bonito para tu página web.',
    type: 'frontend',
    category: 'block',
    language: 'tailwindcss',
    code: '<div class="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] w-full"></div>',
    img: ''
  }, {
    id: 33,
    slug: 'countdown',
    title: 'Countdown',
    description: 'Aprende a programar un contador con este bloque de código.',
    type: 'frontend',
    category: 'block',
    language: 'javascript',
    code: '',
    img: ''
  }, {
    id: 34,
    slug: 'background-gradient',
    title: 'Background with gradient',
    description: 'Con estas pocas líneas de código hechas con HTML y Tailwind podrás crear un efecto degradado de a bajo hacia arriba.',
    type: 'frontend',
    category: 'block',
    language: 'html',
    code: `
<div class='absolute inset-0 bg-gradient-to-t from-red-900 via-zinc-900/80 z-0' />`,
    img: ''
  }
]
