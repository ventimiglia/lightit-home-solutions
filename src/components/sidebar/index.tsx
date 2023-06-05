import { useState } from "react";
import { useQuery } from "react-query";
import { motion, AnimatePresence } from "framer-motion";

import type { ApiResponse } from "../../services/@types";
import SidebarProduct from "../sidebarProduct";
import { getProductsByCategory } from "../../services/products";
import Catalog from "../catalog";
import Menu from "../../container/menu";

export const enum Products {
  Opening = "aberturas",
  Equipment = "equipamiento",
  Finishes = "terminaciones",
}

export const enum MenuOptions {
  List = "list",
  Catalog = "catalog",
}

const Sidebar = () => {
  const [selected, setSelected] = useState<Products | null>(null);
  const [productDetail, setProductDetail] = useState<ApiResponse>();
  const [menu, setMenu] = useState<MenuOptions | null>(null);

  const { data, isLoading } = useQuery(
    ["products", selected],
    () => getProductsByCategory(selected),
    {
      enabled: !!selected,
    }
  );

  const handleSidebar = (category: Products) => {
    setMenu(MenuOptions.List);
    setSelected(category);
  };

  const handleMenu = (item: ApiResponse) => {
    if (menu === MenuOptions.List) {
      setMenu(MenuOptions.Catalog);
    } else {
      setMenu(MenuOptions.List);
    }
    setProductDetail(item);
  };

  const goBack = () => {
    setMenu(MenuOptions.List);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center w-28 h-full bg-white">
        <SidebarProduct
          title="Aberturas"
          icon="src/assets/opening.png"
          onClick={() => handleSidebar(Products.Opening)}
          active={selected === Products.Opening}
        />
        <SidebarProduct
          title="Equipamiento"
          icon="src/assets/equipment.png"
          onClick={() => handleSidebar(Products.Equipment)}
          active={selected === Products.Equipment}
        />
        <SidebarProduct
          title="Terminaciones"
          icon="src/assets/finishes.png"
          onClick={() => handleSidebar(Products.Finishes)}
          active={selected === Products.Finishes}
        />
      </section>
      <AnimatePresence>
        {!!selected && (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ x: -500, zIndex: -1, opacity: 0 }}
          >
            <Menu onClose={() => setSelected(null)}>
              {menu === MenuOptions.List ? (
                <>
                  <h2 className="text-2xl font-bold capitalize">{selected}</h2>
                  {isLoading && <p>Cargando...</p>}
                  {!!data?.length &&
                    data?.map((item) => (
                      <button
                        key={item.name}
                        className="flex items-center justify-between p-4 bg-white rounded-md w-full transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={() => handleMenu(item)}
                      >
                        <span>{item.name}</span>
                        <img
                          className="rotate-180"
                          src="./src/assets/chevron.png"
                          width={15}
                        />
                      </button>
                    ))}
                </>
              ) : (
                <>
                  <Catalog>
                    <Catalog.Breadcrumb
                      onClick={goBack}
                    >{`< ${selected}`}</Catalog.Breadcrumb>
                    <Catalog.Title>{productDetail?.name}</Catalog.Title>
                    <div className="grid grid-cols-3 gap-4 justify-items-center">
                      {productDetail?.items.map((item) => (
                        <Catalog.Product
                          key={item.name}
                          src={item.img}
                          name={item.name}
                        />
                      ))}
                    </div>
                  </Catalog>
                </>
              )}
            </Menu>
          </motion.div>
        )}
      </AnimatePresence>
      <section className="flex flex-col justify-between flex-1 items-end p-4">
        <div className="flex gap-4">
          <button className="bg-white w-24 py-3 rounded-lg text-center text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary">
            Fijar
          </button>
          <button className="bg-white w-24 py-3 rounded-lg text-center text-primary transition duration-300 ease-in-out hover:bg-primary hover:text-white transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary">
            Borrar
          </button>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col flex-wrap justify-between bg-white rounded-md p-1">
            <button className="transition duration-300 ease-in-out transform hover:scale-125">
              <img src="src/assets/plus.png" width={22} />
            </button>
            <hr />
            <button className="transition duration-300 ease-in-out transform hover:scale-125">
              <img src="src/assets/less.png" width={22} />
            </button>
          </div>
          <div className="w-16 h-16 relative bg-white border-4 border-white rounded-md">
            <button
              name="up"
              className="w-5 h-5 absolute top-0 right-1/2 translate-x-1/2 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <img src="src/assets/arrow.png" />
            </button>
            <button
              name="right"
              className="w-5 h-5 absolute right-0 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <img src="src/assets/arrow.png" className="rotate-90" />
            </button>
            <button
              name="down"
              className="w-5 h-5 absolute left-0 top-1/2 -translate-y-1/2 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <img src="src/assets/arrow.png" className="-rotate-90" />
            </button>
            <button
              name="left"
              className="w-5 h-5 absolute bottom-0 left-1/2 -translate-x-1/2 transition duration-300 ease-in-out transform hover:scale-125"
            >
              <img src="src/assets/arrow.png" className="rotate-180" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
