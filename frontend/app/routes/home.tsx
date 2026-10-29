import type { Route } from "./+types/home";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [paginaAtual, setPaginaAtual] = useState("Dashboard");
  const paginas = {
    Dashboard: "Visão geral do monitoramento",
    Configurações: "Configurações do sistema"
  }
  return (
    <div className="min-h-screen bg-white">
      <Sidebar 
        paginaAtual={paginaAtual}
        onMudarPagina={setPaginaAtual}
      />

      <Navbar 
        titulo={paginas[paginaAtual]}
      />

      <main className="min-h-screen px-4 pt-20 sm:ml-64 sm:px-6 sm:pt-24">
        {/* Conteúdo da página */}
      </main>
    </div>
  );
}
