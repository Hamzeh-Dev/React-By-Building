import { FormData } from "../multi-step-form";

const Step1 = ({
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
            <label className="block text-sm font-medium">Name:</label>
            <input type="text" value={data.name} onChange={(e) => setData({ name: e.target.value })}
                className={`mt-1 w-full border p-2 rounded outline-none focus:ring-2 transition ${
                    errors.name ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
            <label className="block text-sm font-medium">Email:</label>
            <input type="email" value={data.email} onChange={(e) => setData({ email: e.target.value })}
                className={`mt-1 w-full border p-2 rounded outline-none focus:ring-2 transition ${
                    errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-blue-400"
                }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
    </div>
);

export default Step1;