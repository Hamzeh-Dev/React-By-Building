
/**
 * Reusable label/value row component
 * 
 * Displays a single piece of information in "Label: Value" format.
 * Designed to be simple and reusable across different cards or components.
 */

const InfoRow = ({ label, value } : { label: string, value: string | number }) => {
    return (
        <p>
            {/* Display the label in bold, followed by the value */}
            <strong>{label}:</strong> {value}
        </p>
    )
}

export default InfoRow;