
export default function Navbar({titulo}) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-30 border-b border-slate-300 bg-slate-200 sm:left-64">
      <div className="flex min-h-16 items-center justify-between gap-3 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <p className="text-sm font-semibold text-slate-900 sm:text-lg">
            {titulo}
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-lg bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-600">Alterar Porta</button>
      </div>
    </nav>
  );
}
