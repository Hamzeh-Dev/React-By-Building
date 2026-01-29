"use client"

const InputBox = ({
    value,
    setValue,
} : {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
}) => {
    return (
        <div className="space-y-2">
            <label className="text-sm font-medium">Type something</label>

            {/*
                This is a CONTROLLED input:
                - value comes from the parent
                - onChange updates that state
            */}
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Start typing..."
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>
    )
}

export default InputBox;