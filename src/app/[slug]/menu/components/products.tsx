import { ConsumptionMethod, Product } from "@prisma/client";
import Link from "next/link";
import Image from 'next/image';
import { useParams, useSearchParams } from "next/navigation";
import { formatCurrency } from "@/helpers/format-currency";

interface ProductsProps {
    products: Product[];
}

const Products = ({ products }: ProductsProps) => {
    const { slug } = useParams<{ slug: string }>();
    const searchParams = useSearchParams();
    const consumptionMethod = searchParams.get("consumptionMethod");
    return ( 
        <div className="space-y-3 px-5 overflow-y-scroll max-h-[400px] scrollbar-hide">
            {products.map((product: Product) => (
                <Link
                key={product.id}
                href={`/${slug}/menu/${product.id}?consumptionMethod=${consumptionMethod}`}
                className="flex items-center justify-between gap-10 border-b py-3"
                >
                {/* ESQUERDA */}
                <div>
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">
                        {product.description}
                    </p>     
                    <p className="pt-3 text-sm font-semibold">
                        {formatCurrency(product.price)}</p>
                </div>
                {/* DIREITA */}
                <div className="relative min-h-[82px] min-w-[120px]">
                    <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={120}
                        height={82}
                        className="rounded-lg object-contain"
                    />
                </div>
                </Link>
            ))}
        </div>
    );
};

export default Products;