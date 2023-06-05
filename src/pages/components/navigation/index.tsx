import Button from "../../../components/button";

const Navigation = () => (
  <aside className="flex flex-col justify-between flex-1 items-end p-4">
    <div className="flex gap-4">
      <Button
        onClick={() =>
          console.log("%cFijar", "background-color: blue; color: white;")
        }
      >
        Fijar
      </Button>
      <Button
        onClick={() =>
          console.log("%cBorrar", "background-color: red; color: white;")
        }
      >
        Borrar
      </Button>
    </div>
    <div className="flex gap-4">
      <div className="flex flex-col flex-wrap justify-between bg-white rounded-md p-1">
        <button
          onClick={() =>
            console.log("%cAumentar", "background-color: yellow; color: black")
          }
          className="transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="plus.png" width={22} alt="plus"/>
        </button>
        <hr />
        <button
          onClick={() =>
            console.log("%cDisminuir", "background-color: yellow; color: black")
          }
          className="transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="less.png" width={22} alt="less"/>
        </button>
      </div>
      <div className="w-16 h-16 relative bg-white border-4 border-white rounded-md">
        <button
          onClick={() =>
            console.log("%cArriba", "background-color: orange; color: white")
          }
          name="up"
          className="w-5 h-5 absolute top-0 right-1/2 translate-x-1/2 transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="arrow.png" alt="up"/>
        </button>
        <button
          onClick={() =>
            console.log("%cDerecha", "background-color: orange; color: white")
          }
          name="right"
          className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="arrow.png" className="rotate-90" alt="right"/>
        </button>
        <button
          onClick={() =>
            console.log("%Izquierda", "background-color: orange; color: white")
          }
          name="left"
          className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="arrow.png" className="-rotate-90" alt="left"/>
        </button>
        <button
          onClick={() =>
            console.log("%cAbajo", "background-color: orange; color: white")
          }
          name="down"
          className="w-5 h-5 absolute bottom-0 left-1/2 -translate-x-1/2 transition duration-300 ease-in-out transform hover:scale-125"
        >
          <img src="arrow.png" className="rotate-180" alt="down"/>
        </button>
      </div>
    </div>
  </aside>
);

export default Navigation;
