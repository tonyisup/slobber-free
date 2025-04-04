"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import UploadArea from "@/components/upload-area"
import ImageComparison from "@/components/image-comparison"
import { useState } from "react"

export default function SlobberFree() {
  const [originalImage, setOriginalImage] = useState<string | null>(null)
  const [processedImage, setProcessedImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFileUpload = (file: File) => {
    // Reset states
    setError(null)

    // Validate file
    const validTypes = ["image/jpeg", "image/png"]
    const maxSize = 10 * 1024 * 1024 // 10MB

    if (!validTypes.includes(file.type)) {
      setError("Error: Invalid file format. Please upload a JPG or PNG image.")
      return
    }

    if (file.size > maxSize) {
      setError("Error: File size exceeds 10MB limit.")
      return
    }

    // Create URL for the original image
    const originalUrl = URL.createObjectURL(file)
    setOriginalImage(originalUrl)

    // Simulate AI processing
    setIsProcessing(true)
    setTimeout(() => {
      // In a real app, this would be an API call to process the image
      // For demo purposes, we're just using the same image
      setProcessedImage(originalUrl)
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UploadArea onFileUpload={handleFileUpload} error={error} />
          <ImageComparison originalImage={originalImage} processedImage={processedImage} isProcessing={isProcessing} />
        </div>
      </div>

      <Footer />
    </main>
  )
}

