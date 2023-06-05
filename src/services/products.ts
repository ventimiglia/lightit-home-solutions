import { ApiResponse } from "./@types";

export const getProductsByCategory = async (category: string | null) => {
  try {
    const response = await fetch(`https://us-central1-prueba-front-280718.cloudfunctions.net/${category}`);
    if (!response.ok) {
      throw new Error("Error al obtener los productos por categoría");
    }
    const data = await response.json();
    return data as ApiResponse[];
  } catch (error) {
    console.error("Ocurrió un error al obtener los productos");
    throw error;
  }
};
