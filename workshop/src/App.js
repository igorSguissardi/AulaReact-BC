import React from 'react';
import Input from "./components/Input.js";
function App() {
  return (
    <div className="flex min-h-screen w-full h-full items-center justify-center">
      <Input description="Digite o seu e-mail" label="E-mail" placeholder="igor@gmail.com" type="text"/>
      <Input description="Carteira para receber NFT" label="Wallet" placeholder="00.00...0000" type="text"/>
      <Input description="Seu nome" label="Nome" placeholder="Johndoe" type="text"/>
    </div className="bg-red-600 w-5/6"> 
      <p> receba a sua Proof-Of-Attandance NFT</p>

      <p className="">
        Para receber sua NFT você precisa ter participado do evento e ter uma carteira na rede sepolia
      </p>

      // o próximo significa que ele vai colocar os itens em coluna -> para centralizar é necessário colocar em dentro da div
  );
}

export default App;
