"use client"

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  const router = useRouter();

  const handleLogin = () => {
    const slug = "fsw-donalds"; // Substitua por um valor de slug válido
    // Redireciona para a página interna da aplicação com o slug
    router.push(`/${slug}`);
  };

  return (
    <div
      className="flex h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/zapfoodimgteste.jpg')" }} // Caminho atualizado para a imagem
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div> {/* Gradiente para melhorar o contraste */}
      <div className="relative bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Descubra o Sabor do ZAPFOOD</h1>
        <p className="mb-6 text-gray-700">
          Entre agora e experimente uma explosão de sabores! Aproveite ofertas exclusivas e uma experiência gastronômica única.
        </p>
        <Button onClick={handleLogin} className="w-full rounded-full bg-green-500 hover:bg-green-600 text-white">
          Entrar e Saborear
        </Button>
      </div>
    </div>
  );
};

export default HomePage;