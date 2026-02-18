import { FormData } from "../multi-step-form";

const Step2 = ({
    data,
    setData,
    errors,
}: {
    data: FormData;
    setData: (newData: Partial<FormData>) => void;
    errors: Partial<Record<keyof FormData, string>>;
}) => (
    <div className="space-y-4">
        <div>
            <label className="block text-sm font-medium">City:</label>
            <input type="text" value={data.city} onChange={(e) => setData({ city: e.target.value })}
                className={`mt-1 w-full border p-2 rounded outline-none focus:ring-2 transition ${
                    errors.city ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium">Country:</label>
            <input type="text" value={data.country} onChange={(e) => setData({ country: e.target.value })}
                className={`mt-1 w-full border p-2 rounded outline-none focus:ring-2 transition ${
                    errors.country ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
        </div>
    </div>
);

export default Step2;