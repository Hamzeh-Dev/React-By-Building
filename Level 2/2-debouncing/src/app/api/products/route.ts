import { NextResponse } from "next/server";

const products = [
    { id: 1, name: "iPhone 15" },
    { id: 2, name: "MacBook Pro" },
    { id: 3, name: "AirPods Pro" },
    { id: 4, name: "Samsung Galaxy S24" },
    { id: 5, name: "PlayStation 5" },
    { id: 6, name: "Gaming Mouse" },
    { id: 7, name: "Mechanical Keyboard" },
    { id: 8, name: "4K Monitor" },
];

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q")?.toLowerCase() || "";

    await new Promise((r) => setTimeout(r, 800));

    const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(query)
    );

    return NextResponse.json(filtered);
}
