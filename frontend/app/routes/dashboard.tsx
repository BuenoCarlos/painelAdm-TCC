import type { Route } from "./+types/dashboard";
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

      
      <main className="min-h-screen bg-slate-50 px-4 pb-6 pt-20 sm:ml-64 sm:px-6 sm:pt-24">
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h5 className="mb-2 text-base font-semibold leading-6 text-slate-900">
              Total de Rotas Auditadas
            </h5>

            <p className="text-2xl leading-7 text-slate-500">
              50
            </p>

            <div className="mt-auto flex justify-end pt-3">
              <a
                href="#"
                className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-600"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h5 className="mb-2 text-base font-semibold leading-6 text-slate-900">
              Em Execução Agora
            </h5>

            <p className="text-2xl leading-7 text-slate-500">
              2
            </p>

            <div className="mt-auto flex justify-end pt-3">
              <a
                href="#"
                className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-600"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h5 className="mb-2 text-base font-semibold leading-6 text-slate-900">
              Rotas com Alerta
            </h5>

            <p className="text-2xl leading-7 text-slate-500">
              20
            </p>

            <div className="mt-auto flex justify-end pt-3">
              <a
                href="#"
                className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-600"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div className="flex h-full min-w-0 flex-col rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <h5 className="mb-2 text-base font-semibold leading-6 text-slate-900">
              Total de Rotas Auditadas
            </h5>

            <p className="text-2xl leading-7 text-slate-500">
              35
            </p>

            <div className="mt-auto flex justify-end pt-3">
              <a
                href="#"
                className="inline-flex rounded-md bg-slate-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-slate-600"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-4">
          <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-3">
            <h2 className="text-base font-semibold text-slate-900">
              Monitoramento das rotas
            </h2>

            <div className="mt-4 h-72">
            </div>
          </div>

          <div className="min-w-0 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:col-span-1">
            <h2 className="text-base font-semibold text-slate-900">
              Motivos dos Alertas
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
