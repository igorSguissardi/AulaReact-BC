// Importação de estilos CSS e imagens para serem utilizados no componente
import "./App.css";
import logo from "./assets/logo.svg";
import wpp from "./assets/wpp.svg";
import github from "./assets/github.svg";

// Importação de componentes personalizados para reutilização no aplicativo
import Input from "./components/Input";
import Button from "./components/Button";

// Função principal do App que retorna a estrutura JSX do componente
function App() {
  // A estrutura JSX começa aqui
  return (
    // Container principal com estilos Tailwind para centralizar os itens na tela
    <div className="flex min-h-screen w-full h-full items-center justify-center">
      <div className="flex flex-col items-center w-full justify-center min-h-screen">
        {/* Link para o site, com uma imagem como logo */}
        <a
          href="https://inteliblockchain.co"
          target="_blank" rel="noreferrer" // Abre o link em uma nova aba
          className="w-4/5 md:w-2/3 lg:w-1/2"
        >
          <img
            alt="InteliBlockchain"
            src={logo}
            width={256}
            height={128}
            className="w-full mb-4"
          />
        </a>

        {/* Container para o formulário com um fundo semi-transparente */}
        <div className="shadow-lg rounded-lg w-5/6 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-white text-white bg-opacity-20 px-4 py-8 backdrop-blur-lg">
          <p className="text-xl md:text-2xl mb-4">
            Receba sua Proof-Of-Attandance NFT
          </p>
          {/* Instruções adicionais para o usuário */}
          <p className="text-sm md:text-base text-gray-200">
            Para receber sua NFT você precisa ter participado do evento e ter
            uma carteira na rede Sepolia.{" "}
          </p>
          <p className="text-sm md:text-base text-gray-200 my-2">
            Ainda não tem uma carteira? Acesse o link e crie a sua já:{" "}
            <a
              target="_blank" rel="noreferrer" // Abre o link em uma nova aba
              href={"https://metamask.io/download/"}
              className="text-blue-500 hover:underline"
            >
              Clique aqui.
            </a>
          </p>

          {/* Formulário com inputs para nome, email e carteira */}
          <form className="flex flex-col mt-8">
            {/* 
				Os componentes Input são personalizados e reutilizáveis, e recebem as propriedades:
				- id: identificador único do input
				- name: nome do input
				- description: descrição do input
				- placeholder: texto de exemplo para o input

				Esse componente representa o seguinte código:
				<div className="flex flex-col mb-2">
					<label htmlFor="name">{props.name}</label>
					<span className="text-sm text-gray-200">
					{props.description}
					</span>
					<input
					id="name"
					type="text"
					placeholder={props.placeholder}
					className="p-2 text-black rounded-md shadow-md"
					/>
				</div>
			*/}
            <Input
              id="name"
              name="Seu nome"
              description="Esse nome será gravado no NFT para provar sua presença"
              placeholder="Nome"
            />
            <Input
              id="email"
              name="Email"
              description="Email para receber novidades"
              placeholder="your.email@email.com"
            />
            <Input
              id="wallet"
              name="Wallet"
              description="Carteira para receber o NFT na rede Sepolia"
              placeholder="0x00...0000"
            />

            {/* O componente Button é personalizado e reutilizável, e recebe as propriedades:
				- type: tipo do botão (submit, button, reset)
				- name: texto do botão

				Esse componente representa o seguinte código:
				<button
					className="text-xl mt-4 p-2 bg-blue-500 text-white rounded-md shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed"
					type={props.type}
				>
					{props.name}
				</button>
			*/}
            <Button type="submit" name="Gerar NFT" />
          </form>
        </div>

        {/* Links para GitHub e WhatsApp para suporte adicional */}
        <div className="mt-8">
          <a
            href="https://github.com/InteliBlockchain/onboarding"
            target="_blank" rel="noreferrer" // Abre o link em uma nova aba
          >
            <span className="text-sm text-gray-400 flex flex-row">
              Todo o código pode ser encontrado aqui:{" "}
              <img alt="GitHub" src={github} width={16} height={16} />
            </span>
          </a>
        </div>

        <div className="mt-4">
          <a
            href="https://chat.whatsapp.com/EoP5wbGPujg8vpG9f6KNWz"
            target="_blank" rel="noreferrer" // Abre o link em uma nova aba
          >
            <span className="text-sm text-gray-400 flex flex-row">
              Caso tenha alguma dúvida:{" "}
              <img alt="WhatsApp" src={wpp} width={16} height={16} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
