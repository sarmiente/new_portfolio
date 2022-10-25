import Head from 'next/head';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Layout/Footer';

const pasos = [
  {
    id: 1,
    title: 'Sitio Web',
    profilePic: '/assets/frame1.svg',
    link: '/home',
    excerpt: 'Entra a mi pagina y mira mi trabajo.',
  },
  {
    id: 2,
    title: 'Quantum',
    profilePic: '/assets/quantumlogo.svg',
    link: 'https://office.myquantum.world/register/sarmiente?side=r',
    excerpt: 'Rendimientos de hasta 25% mensual.',
  },
  {
    id: 3,
    title: 'Goarbit',
    profilePic: '/assets/gologo.svg',
    link: 'https://goarbit.com/auth/register?c=71899756',
    excerpt: 'Obten rendimientos de 20% mensual.',
  },
  {
    id: 4,
    title: 'Mediacoin',
    profilePic: '/assets/iconmediacoin.svg',
    link: 'https://mediacoin.inc/u/548540624',
    excerpt: 'Obten rendimientos de 10% mensual.',
  },
  {
    id: 5,
    title: 'Binance',
    profilePic: '/assets/binancelogo.svg',
    link: 'https://accounts.binance.com/en/register?ref=WE3OAKWI',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 6,
    title: 'Bybit',
    profilePic: '/assets/bybitlogo.svg',
    link: 'https://www.bybit.com/es-ES/invite?ref=O2PN1K',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 7,
    title: 'Github',
    profilePic: '/assets/githublogo.svg',
    link: 'https://github.com/sarmiente',
    excerpt: 'Mira mis proyectos.',
  },
];

export default function Tree() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ThemeProvider attribute="class">
        <div className="h-screen dark:bg-black py-6 bg-white body-font">
          <div className="m-auto px-6 space-y-8 md:px-12 lg:px-20">
            <div className="container flex justify-between">
              <span className="dark:text-white ml-3 text-2xl font-logo ">
                Carlosarmiento
              </span>

              <span>
                <ThemeToggle />
              </span>
            </div>
            <div className="mt-16+ grid gap-6 sm:grid-cols-3">
              {pasos.map(({ profilePic, title, excerpt, link }) => (
                <a href={link} target="_blank">
                  <div className="relative group ">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 rounded-xl bg-white group-hover:bg-gray-200 shadow-md transition duration-300 group-hover:scale-105 lg:group-hover:scale-105"
                    />
                    <div className="relative space-y-3 px-3 py-4 md:p-3 lg:p-4 xl:p-6 ">
                      <img
                        className="w-full rounded-md shadow-md"
                        src={profilePic}
                      />
                      <div>
                        <h1 className="text-lg font-hero text-black font-medium transition group-hover:text-white-500">
                          {title}
                        </h1>
                        <p className="text-black font-display group-hover:text-white-500 md:text-lg">
                          {excerpt}
                        </p>
                      </div>
                      {/* <Image
          src={Facebook}
          className="w-16"
          width={50}
          height={50}
          alt="burger illustration"
        /> */}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}