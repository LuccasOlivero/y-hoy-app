export default function Footer() {
  return (
    <footer className="flex flex-col h-full w-full items-center justify-end text-slate-50">
      <p className="text-normal ">us English</p>
      <p className="text-xs font-extralight mt-4">
        Desarrollado por{" "}
        <a
          href="https://www.linkedin.com/in/lucas-olivero-319090264/"
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-blue-600"
        >
          Luccas Olivero
        </a>
      </p>
    </footer>
  );
}
