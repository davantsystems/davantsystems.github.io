import React, { useState, useCallback, useRef } from 'react';
import { parse } from 'exifr';

type Metadata = { [key: string]: any };

function ImageMetadataExtractor() {
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
            const output = await parse(file, options);
            setMetadata(output);
        } catch (error) {
            console.error('Error parsing image metadata:', error);
            setMetadata(null);
        }
    };

    const renderMetadata = (metadata: Metadata, prefix = ''): JSX.Element[] => {
        return Object.entries(metadata).map(([key, value]) => {
            if (value && typeof value === 'object' && !Array.isArray(value) && value !== null) {
                return <React.Fragment key={prefix + key}>
                    {renderMetadata(value, `${prefix}${key}.`)}
                </React.Fragment>;
            }
            return <p key={prefix + key}>{prefix + key}: {JSON.stringify(value)}</p>;
        });
    };

    return (
        <div>
            <div 
                onDragOver={handleDragOver} 
                onDragLeave={handleDragLeave} 
                onDrop={handleDrop}
                onClick={handleClick}
                style={{
                    border: dragging ? '2px dashed green' : '2px dashed #999',
                    padding: '20px',
                    width: '400px',
                    color: dragging ? 'green' : '#666',
                    textAlign: 'center',
                    cursor: 'pointer'  // Change the cursor to pointer to indicate clickable area
                }}
            >
                Drag and drop an image file here, or click to select a file.
            </div>
            <input 
                type="file" 
                onChange={handleFileChange} 
                accept="image/*" 
                style={{ display: 'none' }} 
                ref={fileInputRef}  // Add ref to the input
            />
            <div>
                <h3>Image Metadata:</h3>
                {metadata ? renderMetadata(metadata) : <p>No metadata found or file not supported.</p>}
            </div>
        </div>
    );
}

export default ImageMetadataExtractor;
