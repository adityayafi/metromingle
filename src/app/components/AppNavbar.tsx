const AppNavbar = () => {
  const navMenu = ['Home','Services','Our Team','About Us'];
  return (
    <div className="w-full h-20 bg-black/65 mb-[-5rem] z-10 relative">
      <div className="flex justify-center h-20">
        <nav className="flex items-center">
          <ul className="flex gap-4">
            {navMenu.map((item,i) => (
              <li className="group" key={i}>
                <a href={`#${item}`} className="text-white font-semibold cursor-pointer hover:text-secondary hover:underline
                hover:underline-offset-4 hover:transition hover:ease-in-out hover:duration-700">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default AppNavbar