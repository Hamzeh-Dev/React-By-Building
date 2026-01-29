import { NextResponse } from "next/server";

type User = {
    id: number;
    name: string;
    role: string;
    age: number;
};

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const users: User[] = [
    { id: 1, name: "John Doe", role: "Developer", age: 22 },
    { id: 2, name: "Jane Smith", role: "Designer", age: 25 },
    { id: 3, name: "Alice Johnson", role: "Product Manager", age: 28 },
  ];

  return NextResponse.json(users);
}
