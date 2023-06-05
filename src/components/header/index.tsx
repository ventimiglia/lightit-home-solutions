//background-color: rgb(51,51,51)

import Select from "../select";

const Header = () => (
  <header className="bg-gray-dark">
    <div className="flex justify-between items-center px-48 py-6 mx-auto">
      <img src="./src/assets/logo.png" />
      <Select options={["Guardar y Salir","Salir Sin Guardar","Guardar y Continuar"]} />
    </div>
  </header>
)

export default Header;