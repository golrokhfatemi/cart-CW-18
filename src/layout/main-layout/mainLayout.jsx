export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#203040] text-white text-center py-4 text-lg">
        React Shopping Cart
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="bg-[#203040] text-white text-center py-4 text-lg">
        All right is reserved
      </footer>
    </div>
  );
}
