import { useState } from "react";
import { ItemProps } from "./Container";

const Item = ({
    item,
    togglePurchased,
    deleteItem,
    editItem,
}: {
    item: ItemProps;
    togglePurchased: (id: number) => void;
    deleteItem: (id: number) => void;
    editItem: (id: number, newName: string) => void;
}) => {
    const [isEditing, setIsEditing] = useState(false); // Edit mode controler state
    const [editValue, setEditValue] = useState(item.name); // Input state for edit

    // Call the editItem() from the parent
    const handleEditSave = () => {
        if (!editValue.trim()) return;
        editItem(item.id, editValue);
        setIsEditing(false);
    };

    const closeEdit = () => {
        if (!isEditing) return;
        setIsEditing(false);
        setEditValue(item.name);
    }

    return (
        <div className="flex justify-between items-center p-3 border rounded shadow-sm bg-white">
        
            {/* Dynamic render for the item and edit mode */}
            {isEditing ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 p-1 border rounded"
                />
            ) : (
                <p
                    className={`flex-1 cursor-pointer ${item.purchased ? "line-through text-gray-400" : ""}`}
                    onClick={() => togglePurchased(item.id)}
                >
                    {item.name}
                </p>
            )}

            <div className="flex gap-1 ml-2">
                {/* Dynamic render for save button and edit button */}
                {isEditing ? (
                    <div className="space-x-2">
                        <button
                            onClick={handleEditSave}
                            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 transition-colors cursor-pointer"
                        >
                            Save
                        </button>
                        <button
                            onClick={closeEdit}
                            className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 transition-colors cursor-pointer"
                        >
                            X
                        </button>
                    </div>
                ) : (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 transition-colors cursor-pointer"
                    >
                        Edit
                    </button>
                )}

                <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition-colors cursor-pointer"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Item;
