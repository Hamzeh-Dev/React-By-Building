import { FormData } from "../multi-step-form";

const Step3 = ({ data }: { data: FormData }) => (
    <div className="space-y-2">
        <h2 className="text-lg font-semibold">Summary</h2>

        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>Country:</strong> {data.country}</p>
    </div>
);

export default Step3;