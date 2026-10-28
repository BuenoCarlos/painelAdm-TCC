
import { useState } from "react";

export default function Sidebar() {
  const [menuAberto, setMenuAberto] = useState(false);

  const itens = [
    "Dashboard",
    "Configurações",
  ];

  return (
    <div className="min-h-screen ">
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        className="m-3 rounded-lg  px-4 py-2 text-white sm:hidden"
      >
        {menuAberto ? "Fechar menu" : "Abrir menu"}
      </button>

      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 bg-gray-200 p-5  ${
          menuAberto ? "translate-x-0" : "-translate-x-full"
        } transition-transform sm:translate-x-0`}
      >
        <h2 className="mb-6 text-xl font-bold">
          Painel Administrativo
        </h2>

        <nav>
          <ul className="space-y-2">
            {itens.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={() => setMenuAberto(false)}
                  className="block rounded-lg px-4 py-3 hover:bg-gray-700"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
