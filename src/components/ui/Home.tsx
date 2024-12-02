import Image from "next/image";
import Navbar from "./Navbar";
import {
  AiOutlineClockCircle,
  AiOutlineCreditCard,
  AiOutlineCustomerService,
  AiOutlineSafety,
} from "react-icons/ai";

const HomePage = () => {
  return (
    <div className="padding-container text-black overflow-hidden space-y-7">
      <div className="h-screen flex flex-col mb-20">
        <Navbar />
        <div className="relative flex items-center flex-grow font-black font-inter">
          {/* Contenedor de texto */}
          <div className="space-y-2 z-10 relative bg-white py-8 px-10 ">
            <p className="text-xs md:text-base font-light">
              Vai viajar e embarcar saindo do aeroporto internacional de Foz do
              Iguaçu?
            </p>
            <h1 className="text-[4rem] md:text-[7rem] 2xl:text-[9rem] leading-[4rem] md:leading-[6rem] 2xl:leading-[7.2rem] text-green-950">
              ESTACIONE <br /> HOSPEDE-SE <br />
              VOE
            </h1>
            <p className="text-xs md:text-base font-light">
              Serviço exclusivo do{" "}
              <span className="text-green-950 font-nautical text-[2rem]">
                Hotel Colonial Iguaçu
              </span>
            </p>
          </div>

          <div className="absolute inset-0 flex justify-end items-center z-0">
            <div className="w-[1000px] md:w-[1400px]">
              <Image
                src="/parking.png"
                width={1400} // Tamaño máximo para imágenes grandes
                height={900}
                alt="parking"
                className="object-contain rounded-3xl py-3"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="bg-white py-12 font-inter">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Texto */}
            <div>
              <h3 className="text-gray-500 text-sm uppercase mb-2">
                Quem somos
              </h3>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Colonial Auto Park
              </h2>
              <p className="text-gray-700 mb-6">
                Somos um serviço exclusivo oferecido pelo Hotel Colonial Iguaçu
                com o objetivo de proporcionar o melhor custo-benefício em
                serviços de estacionamento e hospedagem para o seu planejamento
                de viagem, seja a lazer ou a trabalho.
              </p>
              <ul className="mb-6 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Excelente custo-benefício no mercado.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Localizado próximo ao aeroporto.
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Conforto e segurança para sua viagem.
                </li>
              </ul>
            </div>
            {/* Imagens */}
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Cena de estacionamento 1"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Cena de estacionamento 2"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Cena de estacionamento 3"
                className="rounded-lg shadow-md col-span-2 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 font-inter">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Aproveite a comodidade e segurança do nosso serviço de Autopark
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                Garanta tranquilidade ao estacionar seu veículo com segurança e
                facilidade, sem preocupações adicionais.
              </p>
            </div>
          </div>

          {/* Seção de Serviços */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Nossos Serviços
            </h3>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Serviço de Autopark */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineSafety size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Serviço Autopark
                </h4>
                <p className="text-sm text-gray-600">
                  Seu veículo seguro e pronto para sua chegada. O Autopark
                  oferece estacionamento seguro e acessível, com o melhor
                  custo-benefício e total tranquilidade durante sua estadia.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Valor com hospedagem: R$25,00 | Valor sem hospedagem: R$35,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCreditCard size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Hospedagem
                </h4>
                <p className="text-sm text-gray-600">
                  Descanso garantido: evite as surpresas de última hora e o
                  estresse pré-voo. Desfrute de uma noite de sono tranquila em
                  nossas acomodações confortáveis e acorde revigorado, pronto
                  para sua viagem.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Tarifa disponível em nosso motor de reservas (Reservar)
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCustomerService
                    size={30}
                    className="text-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Transporte
                </h4>
                <p className="text-sm text-gray-600">
                  Disponibilizamos serviços de leva e traz aeroporto sob
                  agendamento antecipado, apresentando todas as informações do
                  voo.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Gratuito na contratação de hospedagem e estacionamento |
                  Cobrança: Estacionamento sem hospedagem R$20,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineClockCircle size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Café da Manhã
                </h4>
                <p className="text-sm text-gray-600">
                  Para você que não abre mão de uma boa refeição antes de seguir
                  sua viagem, disponibilizamos toda estrutura de café da manhã
                  para sua degustação antes do embarque ou na sua chegada.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Gratuito na contratação de hospedagem e estacionamento |
                  Cobrança: Estacionamento sem hospedagem R$62,00 por pessoa
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCustomerService
                    size={30}
                    className="text-green-500"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Café Despertar
                </h4>
                <p className="text-sm text-gray-600">
                  Pensado exclusivamente para nosso hóspede que deixou o veículo
                  em nosso pátio, hospedou-se e irá embarcar entre 01h e 05h da
                  manhã.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Obrigatório agendamento no momento do check-in | Custo:
                  R$35,00
                </p>
              </div>

              {/* Outros serviços */}
              <div className="w-full sm:w-1/2 md:w-1/4 p-4 bg-gray-100 rounded-2xl shadow-lg">
                <div className="text-center mb-4">
                  <AiOutlineCreditCard size={30} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  Almoço e Jantar
                </h4>
                <p className="text-sm text-gray-600">
                  Diariamente servimos almoço e jantar para sua comodidade,
                  oferecendo mais tempo e economia, seja no seu embarque, seja
                  na sua chegada.
                </p>
                <p className="text-xs text-gray-500 mt-2 italic">
                  Segunda a segunda, das 11:30 às 23:00 | Valores de acordo com
                  o nosso cardápio à la carte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-10 mb-3 font-inter">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-2">Pacotes de Hospedagem</h1>
          <p className="text-gray-600 mb-8">
            Escolha o pacote que melhor se adapta à sua viagem e aproveite
            nossos benefícios exclusivos.
          </p>
        </section>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Pacote 4 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-purple-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 4 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>

          {/* Pacote 7 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-teal-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 7 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>

          {/* Pacote 14 dias */}
          <div className="bg-white rounded-lg shadow-md border-t-4 border-yellow-500 w-80 p-6">
            <h2 className="text-xl font-semibold mb-2">Pacote 14 dias</h2>
            <p className="text-gray-500 mb-4">
              1 diária em apartamento Single ou Double para até 2 pessoas. Você
              pode utilizar a diária antes do embarque ou no retorno da sua
              viagem.
            </p>
            <ul className="text-gray-500 mb-4 list-disc pl-5">
              <li>
                Buffet de café da manhã incluso a partir das 05hrs da manhã.
              </li>
              <li>
                Até 2 crianças com até 5 anos no mesmo quarto dos pais não
                pagam.
              </li>
              <li>
                Permanência gratuita de 4 dias de estacionamento para o seu
                veículo.
              </li>
              <li>Traslado gratuito Hotel – Aeroporto – Hotel.</li>
              <li>Apartamento na categoria Standard.</li>
              <li>
                Não cobramos taxas adicionais, como ISS ou taxa de serviços.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center my-10">
        <div className="flex flex-col sm:flex-row bg-white shadow-lg rounded-lg max-w-lg">
          {/* Información del hotel */}
          <div className="p-6 bg-blue-700 text-white flex-1">
            <h4 className="text-lg font-bold mb-2">★★★★</h4>
            <h2 className="text-2xl font-bold">GRAND HOTEL</h2>
            <p className="text-sm mt-2">
              Milky Way / Street <br />
              08012, Outer Space
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">
              How to Arrive
            </button>
          </div>

          {/* Mapa */}
          <div className="flex-1">
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=colonial%20autopark%20foz%20do%20igua%C3%A7u&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
              title="colonial autopark foz do iguaçu"
              aria-label="colonial autopark foz do iguaçu"
              className="w- h-56 sm:h-full rounded-r-lg"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="bg-gray-100 border-t border-gray-200">
        <div className=" mx-auto py-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coluna esquerda */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Hotel Colonial
            </h3>
            <p className="text-gray-600">Rodovia das Cataratas Km 20</p>
            <p className="text-gray-600">Foz do Iguaçu - PR</p>
            <p className="text-gray-600">reservas@hotelcolonialfoz.com.br</p>
            <p className="text-gray-600 font-bold mt-2">
              Ligue Grátis: 0800 819 1993
            </p>
          </div>

          {/* Coluna central */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Horários de Atendimento
            </h3>
            <p className="text-gray-600">Segunda a Sexta-feira</p>
            <p className="text-gray-600">9:00 AM - 7:00 PM</p>
            <h3 className="text-lg font-bold text-gray-800 mt-6">
              Políticas de Privacidade
            </h3>
            <p className="text-gray-600">
              Consulte nossas políticas de privacidade para mais informações.
            </p>
          </div>

          {/* Coluna direita */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Siga-nos</h3>
            <div className="flex gap-4 mb-6">
              <div className="bg-primary-green py-3 px-2 rounded-full">
                <Image alt="logo" src="/logo.png" width={60} height={60} />
              </div>
              <div className="bg-primary-green py-3 px-2 rounded-full">
                <Image alt="logo" src="/logo.png" width={60} height={60} />
              </div>
            </div>
            <form className="flex w-full max-w-sm">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="bg-gray-100 text-center py-4">
          <p className="text-gray-600 text-sm">
            © Hotel Colonial 2023, Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
