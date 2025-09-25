import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Prodructs page</h1>
      <Button>Mc Donalds</Button>
      <Input placeholder="Fazer pedido"/>
    </div>
  );
};

export default ProductPage;
