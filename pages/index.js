import Head from 'next/head';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Layout/Footer';
{
  /*import Widget from '../components/Widget'; */
}
import Script from 'next/script';

const pasos = [
  {
    id: 1,
    title: 'Swing Trading Forex',
    profilePic: '/assets/408shots_so.svg',
    link: 'https://go.hotmart.com/F86186334V',
    excerpt: 'Ver curso',
  },
  {
    id: 2,
    title: 'Mega Curso de Excel',
    profilePic: '/assets/65shots_so.svg',
    link: 'https://go.hotmart.com/H85844445G',
    excerpt: 'Ver curso',
  },

  {
    id: 3,
    title: 'Triunfa con TIKTOK ADS',
    profilePic: '/assets/926shots_so.svg',
    link: 'https://bit.ly/3Va5sTV',
    excerpt: 'Ver curso',
  },
  /*
  {
    id: 4,
    title: 'Binance',
    profilePic: '/assets/binancelogo.svg',
    link: 'https://accounts.binance.com/en/register?ref=WE3OAKWI',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 5,
    title: 'Bybit',
    profilePic: '/assets/bybitlogo.svg',
    link: 'https://www.bybit.com/es-ES/invite?ref=O2PN1K',
    excerpt: 'Registrate y gana un bono.',
  },
  {
    id: 6,
    title: 'Github',
    profilePic: '/assets/githublogo.svg',
    link: 'https://github.com/sarmiente',
    excerpt: 'Mira mis proyectos.',
  }, */
];

export default function Tree() {
  return (
    <>
      <Head>
        <title>Cursos Online</title>
        <meta
          name="google-site-verification"
          content="pikzL5TwWZguhgY2bpjEL27u7lx7E3ALN8Db-SYNlxQ"
        />
        <meta
          name="p:domain_verify"
          content="70355c79926cf892e8c3ee9f91b72aba"
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />

        <Script strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
        </Script>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/faviconsarmiente.svg"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/faviconsarmiente.svg"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ThemeProvider attribute="class">
        <div className="h-screen dark:bg-black py-6 bg-white body-font">
          <div className="m-auto px-6 space-y-8 md:px-12 lg:px-20">
            <div className="container flex justify-between mb-5">
              <span className="dark:text-white ml-3 text-2xl font-logo ">
                Carlosarmiento
              </span>

              <span>
                <ThemeToggle />
              </span>
            </div>
            {/* <Widget /> */}
            <div className="mt-16 grid gap-6 sm:grid-cols-3">
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
