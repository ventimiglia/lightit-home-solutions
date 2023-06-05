import { getProductsByCategory } from "./products";

describe("getProductsByCategory", () => {
  it("should return the data when the API call is successful", async () => {
    const category = "aberturas";
    const data = [
      { name: "Product 1", items: [{ name: "Item 1", img: "img1" }] },
      { name: "Product 2", items: [{ name: "Item 2", img: "img2" }] },
    ];

    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(data),
    };

    global.fetch = jest
      .fn()
      .mockResolvedValue(mockResponse as unknown as Response);

    const result = await getProductsByCategory(category);

    expect(result).toEqual(data);
  });

  it("should throw an error when the API call fails", async () => {
    const category = "aberturas";

    const mockResponse = {
      ok: false,
    };

    global.fetch = jest.fn().mockResolvedValue(mockResponse as Response);

    await expect(getProductsByCategory(category)).rejects.toThrowError(
      "Error al obtener los productos por categoría"
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
