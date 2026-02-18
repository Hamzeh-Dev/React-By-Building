"use client";

import { useState, useRef } from "react";

const Container = () => {
    const [image, setImage] = useState<string | null>(null);
    const [result, setResult] = useState<string | null>(null);

    // Image filter states
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [grayscale, setGrayscale] = useState(0);
    const [saturate, setSaturate] = useState(100);
    const [invert, setInvert] = useState(0);
    const [sepia, setSepia] = useState(0);
    const [blur, setBlur] = useState(0);

    // Image filter states
    const [rotate, setRotate] = useState(0);
    const [flipX, setFlipX] = useState(false);
    const [flipY, setFlipY] = useState(false);
    const [scale, setScale] = useState(1);

    // Image transform states
    const imgRef = useRef<HTMLImageElement>(null);

    // Ref to access image DOM element
    function onFileChange(e: any) {
        const file = e.target.files?.[0];
        if (!file) return;
        setImage(URL.createObjectURL(file));
        setResult(null);
    }

    // Handle file upload
    const exportImage = () => {
        if (!imgRef.current) return;

        const img = imgRef.current;
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        // Export image to a new canvas
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d")!;

        // Move origin to center for rotation & flipping
        ctx.translate(width / 2, height / 2);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
        ctx.scale(scale, scale);

        // Apply CSS filters in canvas
        ctx.filter = `
            brightness(${brightness}%)
            contrast(${contrast}%)
            grayscale(${grayscale}%)
            saturate(${saturate}%)
            invert(${invert}%)
            sepia(${sepia}%)
            blur(${blur}px)
        `;

        // Draw the image on canvas
        ctx.drawImage(img, -width / 2, -height / 2, width, height);

        // Convert canvas to data URL (JPEG)
        setResult(canvas.toDataURL("image/jpeg", 0.9));
    };

    // Computed styles for live preview
    const filterStyle = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        grayscale(${grayscale}%)
        saturate(${saturate}%)
        invert(${invert}%)
        sepia(${sepia}%)
        blur(${blur}px)
    `;

    const transformStyle = `
        rotate(${rotate}deg)
        scaleX(${flipX ? -1 : 1})
        scaleY(${flipY ? -1 : 1})
        scale(${scale})
    `;

    const sliders = [
        { label: "Brightness", value: brightness, setter: setBrightness, min: 0, max: 200 },
        { label: "Contrast", value: contrast, setter: setContrast, min: 0, max: 200 },
        { label: "Grayscale", value: grayscale, setter: setGrayscale, min: 0, max: 100 },
        { label: "Saturate", value: saturate, setter: setSaturate, min: 0, max: 200 },
        { label: "Invert", value: invert, setter: setInvert, min: 0, max: 100 },
        { label: "Sepia", value: sepia, setter: setSepia, min: 0, max: 100 },
        { label: "Blur", value: blur, setter: setBlur, min: 0, max: 10, step: 0.5 },
        { label: "Rotate", value: rotate, setter: setRotate, min: -180, max: 180 },
        { label: "Zoom", value: scale, setter: setScale, min: 0.1, max: 3, step: 0.1 },
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-6 font-sans text-white">

            <div className="flex justify-center">
                <input type="file" accept="image/*" onChange={onFileChange}
                    className="block w-full md:w-96 p-2 border border-gray-300 rounded shadow-sm cursor-pointer"
                />
            </div>

            {/* Image preview and exported result preview */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                {image && (
                    <div className={`w-96 max-w-1/2 bg-gray-100 overflow-hidden flex justify-center items-center mx-auto shadow-lg`}>
                        <img ref={imgRef} src={image} className="object-contain max-h-full transition-all duration-200"
                            style={{
                                filter: filterStyle,
                                transform: transformStyle,
                            }}
                        />
                    </div>
                )}

                {result && (
                    <div className="flex-1 max-w-1/2 mt-6 flex justify-center">
                        <div className="w-full p-4 bg-white text-black shadow-lg rounded-lg border border-gray-200 max-w-sm">
                            <p className="mb-2 font-medium text-center">Result</p>
                            <img src={result} className="w-full h-auto rounded-md border border-gray-100 shadow-sm"/>
                        </div>
                    </div>
                )}
            </div>

            {image && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {sliders.map((s) => (
                        <div key={s.label} className="space-y-1">
                            <label className="block text-sm font-medium">{s.label}</label>
                            <div className="flex items-center space-x-2">
                                <input type="range" min={s.min} max={s.max} step={s.step || 1} value={s.value}
                                    onChange={(e) => s.setter(Number(e.target.value))}
                                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <input type="number" min={s.min} max={s.max} step={s.step || 1} value={s.value}
                                    onChange={(e) => s.setter(Number(e.target.value))}
                                    className="w-16 p-1 border border-gray-300 rounded text-sm"
                                />
                            </div>
                        </div>
                    ))}

                    <div className="space-y-1 flex flex-col justify-center">
                        <label className="block text-sm font-medium">Flip X</label>
                        <input type="checkbox" checked={flipX} onChange={(e) => setFlipX(e.target.checked)} className="w-6 h-6 cursor-pointer" />
                    </div>

                    <div className="space-y-1 flex flex-col justify-center">
                        <label className="block text-sm font-medium">Flip Y</label>
                        <input type="checkbox" checked={flipY} onChange={(e) => setFlipY(e.target.checked)} className="w-6 h-6 cursor-pointer"/>
                    </div>
                </div>
            )}

            {image && (
                <div className="flex justify-center mt-4">
                    <button onClick={exportImage} className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
                        Export Image
                    </button>
                </div>
            )}
        </div>
    );
}

export default Container;