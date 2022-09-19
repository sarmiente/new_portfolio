import Typed from 'react-typed';
const HeroWelcome = () => (
  <section className="dark:text-white text-gray-700 body-font">
    <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Typed
          className="text-3xl text-yellow-500	font-mono"
          strings={['Ingeniero', 'Desarrollador', 'Diseñador']}
          typeSpeed={100}
          backSpeed={50}
          loop
        />
        <h1 className="dark:text-white title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
          Que esperas para ser parte de la Revolución Digital
        </h1>
        <p className="mb-8 leading-relaxed">
          Esta transformación ya está aquí, haz que tu negocio sea visible al
          mundo. No te quedes atrás. Avancemos juntos!
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg shadow"
          >
            Comenzar
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
        <img
          style={{ 'border-radius': '10px 100px' }}
          className="object-cover object-center shadow-xl"
          alt="hero"
          src="/assets/herophoto2.svg"
        />
      </div>
    </div>
  </section>
);

export default HeroWelcome;
