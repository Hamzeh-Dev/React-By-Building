

const Preview = ({ value } : { value: string }) => {
    return (
        <div className="border rounded-lg p-4 bg-gray-50">
            <p className="text-sm text-gray-500 mb-1">Live Preview</p>

            {/*
                This component is PURE:
                - It receives data via props
                - And re-renders automatically when props change
            */}
            <div className="min-h-6 wrap-break-word">
                {value || <span className="italic">Nothing yet…</span>}
            </div>
        </div>
    )
}

export default Preview;