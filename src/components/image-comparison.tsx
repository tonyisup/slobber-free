"use client"

import { Download, Loader2 } from "lucide-react"
import { useState } from "react"
import { useTheme } from "next-themes"
import PaymentSection from "./payment-section"

interface ImageComparisonProps {
  originalImage: string | null
  processedImage: string | null
  isProcessing: boolean
}

export default function ImageComparison({ originalImage, processedImage, isProcessing }: ImageComparisonProps) {
  const [downloadReady, setDownloadReady] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)
  const { theme } = useTheme()

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement("a")
      link.href = processedImage
      link.download = "slobberfree-dog.jpg"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-medium mb-4">Image Preview</h2>

      <div className="flex-1 border border-zinc-200 border-gray-200 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-900 flex flex-col dark:border-zinc-800">
        {!originalImage ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={theme === 'dark' ? "/placeholder-dark.svg" : "/placeholder.svg"} 
              alt="Placeholder dog" 
              className="mb-4 rounded-md" 
            />
            <p className="text-gray-500 dark:text-gray-400">Upload a photo to see the magic!</p>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 border-b border-gray-200">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Original Image:</p>
              <div className="relative h-[200px] bg-gray-100 rounded-md overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={originalImage || "/placeholder-dark.svg"}
                  alt="Original dog"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="flex-1 p-4">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Processed Image:</p>
              <div className="relative h-[200px] bg-gray-100 rounded-md overflow-hidden">
                {isProcessing ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
                    <div className="flex flex-col items-center">
                      <Loader2 className="h-8 w-8 text-blue-500 animate-spin mb-2" />
                      <p className="text-sm text-gray-600">Analyzing image and removing slobber...</p>
                    </div>
                  </div>
                ) : processedImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={processedImage || "/placeholder-dark.svg"}
                    alt="Processed dog"
                    className="w-full h-full object-contain"
                    onLoad={() => setDownloadReady(true)}
                  />
                ) : null}
              </div>

              {downloadReady && processedImage && (
                <div className="mt-4 flex flex-col items-center">
                  <button
                    onClick={handleDownload}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500 dark:bg-green-700 text-white rounded-md hover:bg-green-600 dark:hover:bg-green-800 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download Slobber-Free Photo</span>
                  </button>

                  {!paymentComplete && (
                    <PaymentSection processingCost={0.05} onPaymentComplete={() => setPaymentComplete(true)} />
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

