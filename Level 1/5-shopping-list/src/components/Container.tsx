"use client";

import { useState } from "react";
import Item from "./item";

export type ItemProps = {
    id: number;
    name: string;
    purchased: boolean;
};

const Container = () => {
    // State to store the items in an array
    const [items, setItems] = useState<ItemProps[]>([]);
    const [inputValue, setInputValue] = useState<string>("");

    // Add a new item
    const addItem = () => {
        if (!inputValue.trim()) return;

        const newItem: ItemProps = {
            id: Date.now(),
            name: inputValue,
            purchased: false,
        };

        // Save the new item into items state array
        setItems([...items, newItem]);

        setInputValue("");
    };

    // Delete an item based on item id
    const deleteItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    // Edit an item based on item id
    const editItem = (id: number, newName: string) => {
        setItems(items.map(item => item.id === id ? { ...item, name: newName } : item));
    };

    // Toggle purchased status based on item id (same as edit method but changed the updated field)
    const togglePurchased = (id: number) => {
        setItems(items.map(item => item.id === id ? { ...item, purchased: !item.purchased } : item));
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 text-gray-800 p-6">
            <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

            <div className="flex gap-2 mb-6 w-full max-w-md">
                <input
                    type="text"
                    placeholder="Add new item..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 p-2 border rounded shadow-sm"
                />
                <button
                    onClick={addItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
                >
                    Add
                </button>
            </div>

            {/* Render list */}
            <div className="w-full max-w-md space-y-2">
                {items.length === 0 && (
                    <p className="text-gray-500 text-center">No items yet. Add one above!</p>
                )}

                {items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        togglePurchased={togglePurchased}
                        deleteItem={deleteItem}
                        editItem={editItem}
                    />
                ))}
            </div>
        </div>
    );
};

export default Container;
