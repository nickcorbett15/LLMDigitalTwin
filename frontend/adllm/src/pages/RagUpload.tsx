import { useRef, useState } from "react";


export default function RagUpload() {

    const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handles files from both drag-and-drop and traditional input
  const handleFiles = (selectedFiles: FileList | null) => {
    if (selectedFiles) {
      const newFilesArray = Array.from(selectedFiles);
      setFiles((prevFiles) => [...prevFiles, ...newFilesArray]);
      // In a real app, you would now send these files to a backend or process them
      console.log('Files ready for upload:', newFilesArray);
    }
  };

  // Drag event handlers
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Prevent default to allow drop
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // Traditional file input change handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  // Trigger file input click when drag area is clicked
  const handleAreaClick = () => {
    fileInputRef.current?.click();
  };

    return (
        <>
        <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Upload Documents</h3>
      <h4>TODO: Allow upload new documents to give Models additional/latest infomation</h4>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors duration-200
          ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 bg-gray-50 hover:bg-gray-100'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleAreaClick}
      >
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          ref={fileInputRef}
          className="hidden" // Hide the default file input
        />
        <p className="text-gray-600">
          Drag & drop your documents here, or <span className="text-indigo-600 font-medium">click to browse</span>
        </p>
        <p className="text-sm text-gray-400 mt-1">Supports multiple files</p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-medium mb-3 text-gray-700">Uploaded Files:</h4>
          <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg border border-gray-200 max-h-40 overflow-y-auto">
            {files.map((file, index) => (
              <li key={index} className="text-gray-700 text-sm py-1">
                {file.name} - ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
        </>
        
    )
}