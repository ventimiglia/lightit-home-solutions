import { ApiResponse } from "./@types"

export const getProductsByCategory = async (category: string | null) => {
  const response = await fetch(`https://us-central1-prueba-front-280718.cloudfunctions.net/${category}`)
  const data = await response.json()
  return data as ApiResponse[]
}