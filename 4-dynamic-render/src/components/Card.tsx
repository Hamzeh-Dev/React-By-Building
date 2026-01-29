import { User } from './Container';
import InfoRow from './InfoRow';

/**
 * Reusable Profile Card component
 * 
 * This component is fully controlled by the parent via props.
 */

const Card = ({
    data,
} : {
    data: User, // User object to display
}) => {

    const { name, role, age } = data;

    return (
        <div className={`border px-3 py-2 rounded-lg hover:bg-gray-50 transition text-gray-800`}>
            <h2 className="text-lg font-semibold mb-2">{name}</h2>

            {/* Reusable label/value rows */}
            <InfoRow label="Role" value={role} />
            <InfoRow label="Age" value={age} />
        </div>
    )
}

export default Card;