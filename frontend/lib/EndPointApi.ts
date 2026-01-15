export const ENDPOINT_API = process.env.API_URL || 'http://localhost:5000/api/products';



export const EndPointApi = {
    GetAllProducts: `${ENDPOINT_API}/`,
    GetProductById: (id: string) => `${ENDPOINT_API}/${id}`,
    DeleteProduct: (id: string) => `${ENDPOINT_API}/${id}`,
    CreateProduct: `${ENDPOINT_API}/`,
    UpdateProduct: (id: string) => `${ENDPOINT_API}/${id}`,
}