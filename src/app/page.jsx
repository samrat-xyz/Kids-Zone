import ProductCard from "@/components/Cards/ProductCard";
import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-3">
    <section>
      <Banner></Banner>
    </section>
    <section>
      <Products></Products>
    </section>
    </div>
  );
}
