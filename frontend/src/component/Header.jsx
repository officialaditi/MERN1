const Header = () => {
  return (
    <div className="flex items-center justify-between bg-slate-300 px-6 py-2">
      <h1 className="font-semibold text-2xl hover:cursor-pointer">E-shop1</h1>
      <div className="flex items-center justify-between gap-3 hover:cursor-pointer" >
        <h2>Cart</h2>

        <h2>Login</h2>
      </div>
    </div>
  );
};
export default Header;
