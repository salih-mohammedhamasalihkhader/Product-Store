'use server';
import { EndPointApi } from '@/lib/EndPointApi';
import axios from 'axios';

export async function GetAllProducts() {
    try {
        const response = await axios.get(EndPointApi.GetAllProducts);
        return response?.data || [];
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
}