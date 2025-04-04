"use client"

import type React from "react"

import { Upload } from "lucide-react"
import { useCallback, useState } from "react"

interface UploadAreaProps {
  onFileUpload: (file: File) => void
  error: string | null
}

export default function UploadArea({ onFileUpload, error }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        const file = e.dataTransfer.files[0]
        if (!file) return
        onFileUpload(file)
      }
    },
    [onFileUpload],
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        const file = e.target.files[0]
        if (!file) return
        onFileUpload(file)
      }
    },
    [onFileUpload],
  )

  const handleButtonClick = useCallback(() => {
    document.getElementById("file-upload")?.click()
  }, [])

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-medium mb-4">Upload Your Dog Photo</h2>

      <div
        className={`flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-8 transition-colors ${
          isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="sr-only"
          accept="image/jpeg,image/png"
          onChange={handleFileChange}
        />

        <Upload className="h-12 w-12 text-gray-400 mb-4" />
        <p className="text-center mb-2">Drag & Drop Your Dog Photo Here</p>
        <p className="text-center mb-4 text-sm text-gray-500">or</p>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
        >
          Choose File
        </button>
        <p className="mt-4 text-xs text-gray-500">Supported formats: JPG, PNG. Max file size: 10MB</p>

        {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">{error}</div>}
      </div>
    </div>
  )
}

