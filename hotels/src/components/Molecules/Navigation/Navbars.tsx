export function Navbars({}: any) {
  return (
    <>
      <nav className="border-2 flex w-[100vw] max-w-[980px] justify-between items-center mx-auto">
        {/* <Figure src="https://demo.sirv.com/chair.jpg" width={60} /> */}
        <menu className="flex grow">
          <li>
            <button className="p-4">Home</button>
          </li>
          <li>
            <button className="p-4">About</button>
          </li>
          <li>
            <button className="p-4">Contact</button>
          </li>
        </menu>
        <button>Login</button>
      </nav>
    </>
  );
}
