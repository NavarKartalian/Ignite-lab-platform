import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Logo } from "../../components/Logo";
import { useCreateSubscriberMutation } from "../../graphql/generated";


export function Subscribe() {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ createSubscriber, { loading } ] = useCreateSubscriberMutation();

  const navigate = useNavigate();

  async function handelSubscribe(event: FormEvent) {
    event.preventDefault();

    if(!name.trim() || !email.trim()) return;
    
    await createSubscriber({
      variables: {
        name,
        email
      }
    });

    setName('');
    setEmail('');

    navigate('/event');
  }

  return (
    <div className="w-full min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full flex items-center justify-between mt-10 lg:mt-20 mx-auto flex-col lg:flex-row lg:max-w-[1116px] lg:px-4">
        <div className="max-w-[640px] flex flex-col items-center lg:block text-center lg:text-left">
          <Logo />

          <h1 className="mt-8 text-[1.85rem] lg:text-[2.5rem] lg:leading-tight px-10 lg:px-0">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, 
            do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed text-sm lg:text-base px-10 lg:px-0">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais 
            utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 mt-8 bg-gray-700 border border-gray-500 rounded w-full md:w-auto lg:mt-0">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handelSubscribe} className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="Seu nome completo" 
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
              onChange={(e) => setName(e.target.value)}
              required
              value={name}
            />

            <input 
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:outline-green-500"
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
            />

            <button 
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 
                transition-colors disabled:opacity-50"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src="/static/code-mockup.png" alt="code image" className="mt-4 px-4 lg:mt-10" />

      <Footer />
    </div>
  );
}