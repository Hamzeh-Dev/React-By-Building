"use client"

import { useDebounce } from "@/hooks/debounce";
import { useEffect, useMemo, useState } from "react";

type Product = {
    id: number,
    name: string,
};

const Container = () => {
    const [query, setQuery] = useState("");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    /**
        * Fetch products from API based on search value.
        * This function is called after the debounce delay.
    */
    const searchProducts = async (value: string) => {
        if (!value) {
            setProducts([]);
            return;
        }

        setLoading(true);

        const res = await fetch(`/api/products?q=${value}`);
        const data = await res.json();

        setProducts(data);
        setLoading(false);
    };

    /**
        * Debounced query value.
        * Instead of updating immediately on every keystroke,
        * it updates only after the user stops typing.
    */
    const debouncedQuery = useDebounce(query, 350);

    /**
        * Runs whenever debouncedQuery changes.
        * This prevents calling the API on every key press.
    */
    useEffect(() => {
        searchProducts(debouncedQuery);
    }, [debouncedQuery]);

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-16 px-4 text-gray-800">
            <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
                <h1 className="text-xl font-semibold mb-4 text-center">Product Search</h1>

                <input
                    className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                <div className="mt-4 space-y-2 max-h-80 overflow-y-auto pr-1">
                    {loading && Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="animate-pulse border rounded-lg p-3 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                        </div>
                    ))}

                    {!loading && products.length === 0 && query && (
                        <p className="text-center text-gray-400 py-4">No products found</p>
                    )}

                    {!loading && products.map((p) => (
                        <div
                            key={p.id}
                            className="border rounded-lg p-3 hover:bg-gray-50 transition cursor-pointer active:scale-[0.99]"
                        >
                            <p className="font-medium text-gray-800">{p.name}</p>
                            <p className="text-xs text-gray-400">Product ID: {p.id}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Container;