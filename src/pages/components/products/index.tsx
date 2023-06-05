import { useState } from "react";

import { ApiResponse } from "../../../services/@types";
import Sidebar from "../sidebar";
import SidebarCategory from "../sidebarCategory";
import { AnimatePresence, motion } from "framer-motion";
import ProductsDetails from "../productsDetails";
import { useQuery } from "react-query";
import { getProductsByCategory } from "../../../services/products";
import Categories from "../categories";
import Catalog from "../catalog";
import Navigation from "../navigation";

export const enum CategoriesOptions {
  Opening = "aberturas",
  Equipment = "equipamiento",
  Finishes = "terminaciones",
}

export const enum ProductsDetailOptions {
  Categories = "categories",
  Catalog = "catalog",
}

const Products = () => {
  const [categorySelected, setCategorySelected] =
    useState<CategoriesOptions | null>(null);
  const [productSelected, setProductSelected] = useState<ApiResponse>();
  const [productDetail, setProductDetail] =
    useState<ProductsDetailOptions | null>(null);

  const { data, isLoading, error } = useQuery(
    ["products", categorySelected],
    () => getProductsByCategory(categorySelected),
    {
      enabled: !!categorySelected,
    }
  );

  const handleSidebarCategory = (category: CategoriesOptions) => {
    setProductDetail(ProductsDetailOptions.Categories);
    setCategorySelected(category);
  };

  const handleProductDetail = (item: ApiResponse) => {
    if (productDetail === ProductsDetailOptions.Categories) {
      setProductDetail(ProductsDetailOptions.Catalog);
    } else {
      setProductDetail(ProductsDetailOptions.Categories);
    }
    setProductSelected(item);
  };

  return (
    <main className="flex flex-1">
      <Sidebar>
        <SidebarCategory
          title={CategoriesOptions.Opening}
          icon="opening.png"
          onClick={() => handleSidebarCategory(CategoriesOptions.Opening)}
          active={categorySelected === CategoriesOptions.Opening}
        />
        <SidebarCategory
          title={CategoriesOptions.Equipment}
          icon="equipment.png"
          onClick={() => handleSidebarCategory(CategoriesOptions.Equipment)}
          active={categorySelected === CategoriesOptions.Equipment}
        />
        <SidebarCategory
          title={CategoriesOptions.Finishes}
          icon="finishes.png"
          onClick={() => handleSidebarCategory(CategoriesOptions.Finishes)}
          active={categorySelected === CategoriesOptions.Finishes}
        />
      </Sidebar>
      <AnimatePresence>
        {!!categorySelected && (
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -500, opacity: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ x: -500, zIndex: -1, opacity: 0 }}
          >
            <ProductsDetails onClose={() => setCategorySelected(null)}>
              {productDetail === ProductsDetailOptions.Categories ? (
                <Categories>
                  <Categories.Title>{categorySelected}</Categories.Title>
                  {isLoading && <p>Cargando...</p>}
                  {!!error && <p>Hubo un error</p>}
                  {!!data?.length &&
                    data?.map((item) => (
                      <Categories.Category
                        key={item.name}
                        item={item}
                        onClick={handleProductDetail}
                      />
                    ))}
                </Categories>
              ) : (
                <>
                  <Catalog>
                    <Catalog.Breadcrumb
                      onClick={() => setProductDetail(ProductsDetailOptions.Categories)}
                    >{`< ${categorySelected}`}</Catalog.Breadcrumb>
                    <Catalog.Title>{productSelected?.name}</Catalog.Title>
                    <div className="grid grid-cols-3 gap-4 justify-items-center">
                      {productSelected?.items.map((item) => (
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
            </ProductsDetails>
          </motion.div>
        )}
      </AnimatePresence>
      <Navigation />
    </main>
  );
};

export default Products;
