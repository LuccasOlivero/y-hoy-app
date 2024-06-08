export default function Header() {
  return (
    <header className="grid">
      <picture className="flex items-center justify-center w-full mt-4">
        <img className="w-[16rem]" src="./logo.png" alt="logo" />
      </picture>
      <h1 className="font-extrabold text-5xl text-slate-50 mt-4 text-center text-pretty">
        ¿No sabes que vas a tomar?
      </h1>
    </header>
  );
}
