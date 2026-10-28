import type { Route } from "./+types/home";
import Sidebar from "../components/sidebar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      {/* Barra Lateral do seu Painel */}
      <Sidebar />
      
      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto p-6">
      </main>
    </div>
  );
}
