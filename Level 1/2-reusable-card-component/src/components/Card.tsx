import { User } from './Container';
import InfoRow from './InfoRow';

/**
 * Reusable Profile Card component
 * 
 * Displays user information and allows updating their status.
 * This component is fully controlled by the parent via props.
 */

const Card = ({
    data,
    onUpdate,
} : {
    data: User, // User object to display
    onUpdate: (newData: User) => void, // Callback to update user in parent state
}) => {

    const { name, role, age, status } = data;

    return (
        // Dynamic styling based on the user status
        <div className={`border-4 rounded-lg p-4 shadow-sm bg-white text-black w-64 
                ${status === "Active" ? "border-green-500" : "border-red-500"}
            `}
        >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>

            {/* Reusable label/value rows */}
            <InfoRow label="Role" value={role} />
            <InfoRow label="Age" value={age} />
            <InfoRow label="Status" value={status} />

            <div className="flex items-center gap-2 mt-4">
                <button
                    className="flex-1 bg-green-500 text-white py-1 px-2 rounded hover:bg-green-600 transition-colors cursor-pointer"
                    onClick={() => onUpdate({ ...data, status: "Active" })}
                >
                    Activate
                </button>
                <button
                    className="flex-1 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition-colors cursor-pointer"
                    onClick={() => onUpdate({ ...data, status: "Inactive" })}
                >
                    Deactivate
                </button>
            </div>
        </div>
    )
}

export default Card;