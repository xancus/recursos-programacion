type Content = {
  id: number
  slug: string
  title: string
  description: string
  type: string
  category: string
  language: string
  visualisation: boolean
  code: string
  img: string
}

export const contentArray: Content[] = [
  {
    id: 0,
    slug: 'navbar-blur',
    title: 'Navbar Blur',
    description: 'Copia este código y añade el efecto Blur a tu menú de navegación',
    type: 'frontend',
    category: 'block',
    language: 'html',
    visualisation: true,
    code: `<header style='box-shadow: 0 0 30px 0 rgba(250, 250, 250, 0.2);
    position: fixed;
    max-width: 100%;
    width: auto;
    height: auto;
    z-index: 10;
    backdrop-filter: blur(10px); /* Adjust the blur value as needed */
    background-color: rgba(0,0,0,.336); /* Adjust the background color and opacity as needed */
    display: grid;
    grid-template-areas: "nav";
    align-items: center;'>
            <nav style='font-family: Poppinn;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 100%;
            padding-left: 1rem;
            padding-right: 1rem;'>
            <a href='/'>
                <svg 
                style='max-width: 130px; width: 100%;height: auto; color: var(--color-primary)'
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="769.000000pt" 
                height="513.000000pt" 
                viewBox="0 0 769.000000 513.000000"
                preserveAspectRatio="xMidYMid meet"
                >

                <g transform="translate(0.000000,513.000000) scale(0.100000,-0.100000)"
                fill="currentColor" stroke="none">
                <path d="M5395 3876 c-338 -53 -569 -237 -631 -502 -24 -104 -15 -297 17 -384
                49 -131 164 -265 306 -359 43 -29 211 -118 373 -198 295 -146 295 -146 376
                -227 94 -94 118 -147 117 -256 -1 -146 -90 -255 -253 -310 -214 -72 -579 -23
                -850 115 -29 15 -54 25 -56 23 -9 -9 -104 -354 -100 -364 6 -17 140 -70 247
                -99 192 -51 329 -69 539 -69 219 -1 301 12 452 68 122 46 191 90 279 176 128
                127 188 280 189 476 0 175 -52 308 -171 438 -94 102 -173 152 -489 311 -296
                149 -397 211 -461 283 -62 70 -83 123 -83 212 -1 186 115 287 360 315 135 15
                431 -46 588 -121 28 -13 53 -21 57 -17 11 13 100 344 94 353 -10 17 -157 71
                -257 95 -218 52 -468 68 -643 41z"/>
                <path d="M1899 3823 c-52 -135 -919 -2517 -919 -2524 0 -5 95 -9 223 -9 l223
                0 371 1072 c242 701 375 1073 384 1073 9 0 140 -370 380 -1070 l366 -1070 243
                -3 c139 -1 240 1 238 7 -1 4 -212 581 -468 1280 l-464 1271 -283 0 -283 0 -11
                -27z"/>
                <path d="M3730 2570 l0 -1280 215 0 215 0 0 1280 0 1280 -215 0 -215 0 0
                -1280z"/>
                <path d="M1755 1281 c-3 -5 -30 -80 -60 -165 l-54 -156 534 0 c300 0 535 4
                535 9 0 5 -24 78 -54 162 l-54 154 -420 3 c-257 1 -423 -1 -427 -7z"/>
                </g>
                </svg>
            </a>
    
            <ul style='display: flex; flex-direction: row; list-style:none; font-weight: bold; gap: 18px'>
                <li style='color: var(--color-primary)'>Test</li>
                <li style='color: var(--color-primary)'>
                Test
                </li>
                <li style='color: var(--color-primary)'>Test</li>
            </ul>
            </nav>
        </header>
        <div style='margin-top: 100px; color: var(--color-primary)'>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, tempor bibendum iaculis suspendisse blandit mi natoque, praesent libero aliquet phasellus nulla netus. Hac lectus dictum et habitant vitae habitasse suspendisse odio placerat, etiam convallis potenti ac mattis feugiat montes libero cum primis, luctus mauris vehicula tristique posuere auctor dapibus venenatis. Platea cras turpis parturient viverra pretium netus purus potenti nisi sociis, consequat mus ligula quam mattis malesuada accumsan dui etiam sodales scelerisque, blandit nec urna ullamcorper arcu curae nunc at suspendisse.
                    Sodales eu curae quis odio aptent inceptos auctor id, velit montes nec molestie mauris non in, mus lectus risus felis cras nostra sem. Proin porttitor montes ligula sapien pellentesque bibendum ullamcorper per, tellus curabitur morbi laoreet donec neque auctor vehicula mauris, egestas eu mollis tempor nisi sodales ad. Curae vehicula mauris ornare risus nullam mattis pellentesque nostra, in iaculis libero aliquam faucibus montes ultricies inceptos, class scelerisque parturient accumsan ante dignissim auctor. Lorem ipsum dolor sit amet consectetur adipiscing elit, tempor bibendum iaculis suspendisse blandit mi natoque, praesent libero aliquet phasellus nulla netus.</p>
                  </div>`,
    img: '../navbar-blur.webp'
  }, {
    id: 1,
    slug: 'flask-api',
    title: 'flask api',
    description: '',
    type: 'backend',
    category: 'block',
    language: '',
    visualisation: false,
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
    visualisation: false,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
    code: `<svg
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
    visualisation: true,
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
    visualisation: true,
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
    visualisation: true,
    code: `
<div class='absolute inset-0 bg-gradient-to-t from-red-900 via-zinc-900/80 z-0' />`,
    img: ''
  },
  {
    id: 35,
    slug: 'json-to-xlsx',
    title: 'JSON to XLSX',
    description: 'Simple snippet to build an xlsx file from json using pandas',
    type: 'backend',
    category: 'block',
    language: 'python',
    visualisation: false,
    code: `import json, os
    import pandas as pd
    from os import path
    current = 'YOUR_PATH'
    fileToRead = path.join(os.getcwd() + f"/db/{current}/YOUR_JSON_FILE_NAME.json") 
    fileToWrite = path.join(os.getcwd() + f"/db/{current}/YOUR_XLSX_FILE_NAME.xlsx")

    with open(fileToRead, 'r', encoding='utf-8') as json_file:
        data = json.load(json_file)

    to_return = []

    for user in data:
        name = user['name'].split(' ')[0]
        surname = " ".join(user['name'].split(' ')[1:])
        spec = user['specialty']
        to_return.append({
            'name': name,
            'surname': surname,
            'specialty': spec
        })
    df = pd.DataFrame(to_return)

    df.to_excel(fileToWrite, index=False, header=True)`
  }
]
