type CatalogProps = {
  children: React.ReactNode;
};

type TitleProps = {
  children: React.ReactNode;
};

type BreadcrumbProps = {
  children: React.ReactNode;
  onClick: () => void;
};

type ProductProps = {
  src: string;
  name: string;
};

const Catalog = ({ children }: CatalogProps) => (
  <div className="w-full">{children}</div>
);

const Breadcrumb = ({ children, onClick }: BreadcrumbProps) => (
  <p className="text-xs capitalize text-left w-full mb-2 cursor-pointer hover:underline" onClick={onClick}>
    {children}
  </p>
);

const Title = ({ children }: TitleProps) => (
  <h2 className="text-left font-bold text-lg mb-4">{children}</h2>
);

const Product = ({ src, name }: ProductProps) => (
  <article>
    <img src={src} alt={name} className="h-36 object-contain mb-1" />
    <p className="text-xs">{name}</p>
  </article>
);

Catalog.Breadcrumb = Breadcrumb;
Catalog.Title = Title;
Catalog.Product = Product;

export default Catalog;
