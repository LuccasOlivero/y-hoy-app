export default function Container({ children }: any) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-betweem">
      {children}
    </div>
  );
}
