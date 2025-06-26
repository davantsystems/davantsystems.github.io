import React, { useState, useCallback, useRef } from 'react';
import exifr from 'exifr';

type Metadata = { [key: string]: any };

export default function ImageMetadataExtractor() {
    const [metadata, setMetadata] = useState<Metadata | null>(null);
    const [dragging, setDragging] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault(); // Prevent default behavior (Prevent file from being opened)
        setDragging(true);
    }, []);

    const handleDragLeave = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
    }, []);

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        processFile(file);
    }, []);

    const handleFileChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            processFile(file);
        }
    }, []);

    const handleClick = () => {
        // Programmatically click the hidden file input
        fileInputRef.current?.click();
    };

    const processFile = async (file: File) => {
        try {
            const options = {
                tiff: true,
                exif: true,
                xmp: true,
                iptc: true,
                icc: true
            };
            const output = await exifr.parse(file, options);
            setMetadata(output);
        } catch (error) {
            console.error('Error parsing image metadata:', error);
            setMetadata(null);
        }
    };

    const renderMetadata = (metadata: Metadata, prefix = ''): JSX.Element[] => {
        return Object.entries(metadata).map(([key, value]) => {
            console.log(typeof value)
            if (key == "parameters") {
                // unstringify value
                console.log(value)
                value = `prompt: "${value}`
                // find "Steps:" and add a line break
                value = value.replace("Steps:", "\", Steps:")
            }

            if (value && typeof value === 'object' && !Array.isArray(value) && value !== null) {
                return <React.Fragment key={prefix + key}>
                    {renderMetadata(value, `${prefix}${key}.`)}
                </React.Fragment>;
            }
            return <p key={prefix + key} className="text-base-content mb-2 break-words">{prefix + key}: {JSON.stringify(value)}</p>;
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-4">Image Metadata Extractor</h1>
                <p className="text-base-content/70">
                    Upload an image to extract and view its metadata, including EXIF data, camera settings, and AI generation parameters.
                </p>
            </div>
            
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
                className={`
                    border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all duration-200
                    ${dragging 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-base-content/30 hover:border-primary/50 hover:bg-base-200'
                    }
                `}
            >
                <div className="flex flex-col items-center space-y-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                        <p className="text-lg font-medium">Drag and drop an image file here</p>
                        <p className="text-base-content/60">or click to select a file</p>
                    </div>
                </div>
            </div>
            
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
            />
            
            {metadata && (
                <div className="mt-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">Image Metadata</h3>
                        <button 
                            onClick={() => setMetadata(null)}
                            className="btn btn-sm btn-outline"
                        >
                            Clear
                        </button>
                    </div>
                    <div className="bg-base-200 rounded-lg p-6 max-h-96 overflow-y-auto">
                        <div className="font-mono text-sm">
                            {renderMetadata(metadata)}
                        </div>
                    </div>
                </div>
            )}
            
            {metadata === null && (
                <div className="mt-8 text-center text-base-content/60">
                    <p>No metadata found or file not supported.</p>
                </div>
            )}
        </div>
    );
}