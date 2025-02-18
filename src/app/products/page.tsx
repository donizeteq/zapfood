import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductsPage = () => {
    return ( <div className="p-5 border border-red-500 rounded-xl">
        <h1 className="text-red-500">Products</h1>
        <Button>ZAPFOOD</Button>
        <Input placeholder="Bora rodar somosum%"/>
    </div>);
}
 
export default ProductsPage;

