import React from 'react';
import Input from "./components/Input.js";
function App() {
  return (
    <div className="flex min-h-screen w-full h-full items-center justify-center">
      <Input description="Digite o seu e-mail" label="E-mail" placeholder="igor@gmail.com" type="text"/>
      <Input description="Carteira para receber NFT" label="Wallet" placeholder="00.00...0000" type="text"/>
      <Input description="Seu nome" label="Nome" placeholder="Johndoe" type="text"/>
    </div>
  );
}

export default App;
