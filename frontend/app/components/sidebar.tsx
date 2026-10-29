export default function Sidebar({paginaAtual,
  onMudarPagina,onClose}) {
  const itens = ["Dashboard", "Configurações"];

  return (
    <aside
      className={`fixed bottom-0 left-0 top-0 z-50 w-64 border-r border-slate-300 bg-slate-200 p-5 transition-transform duration-300 `} >
        <h2 className="mb-4 text-xl font-bold text-slate-900">
          Analisador Local
        </h2>

        <hr className="mb-3 h-px w-full border-0 bg-slate-300" />

        <nav>
          <ul className="space-y-2">
            {itens.map((item) => (
              <li key={item}>
                <button
                  type="button"
                  onClick={() => {
                    onMudarPagina(item);
                    onClose();
                  }}
                  className={`block w-full rounded-lg px-4 py-3 text-left transition ${
                    paginaAtual === item
                      ? "bg-slate-300 font-semibold text-slate-900"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
    </aside>
  );
}

