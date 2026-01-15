"use client";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { useQuery } from "@tanstack/react-query";
import { GetAllProducts } from "@/app/my-store/_action";
import ImagePlaceholder from "@/public/image.jpg";

export interface CardUIProps {
  name?: string;
  price?: number;
  imageUrl?: string;
}

function CardUI() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await GetAllProducts();
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto my-24 p-4">
      {data?.data?.map((product: CardUIProps, index: number) => (
        <Card key={index}>
          <CardHeader>
            <Image
              src={product.imageUrl || ImagePlaceholder}
              alt="Product Image"
              width={200}
              height={200}
              className="w-full rounded-2xl"
            />
            <CardTitle className="mt-4">
              {product.name || "Product Name"}
            </CardTitle>
          </CardHeader>
          <CardFooter className="flex items-center justify-between">
            <p className="text-xl">$ {product.price || 0}</p>
            <Button className="cursor-pointer">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default CardUI;
