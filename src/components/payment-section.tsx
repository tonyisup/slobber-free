"use client"

import type React from "react"

import { Info } from "lucide-react"
import { useState } from "react"

interface PaymentSectionProps {
  processingCost: number
  onPaymentComplete: () => void
}

export default function PaymentSection({ processingCost, onPaymentComplete }: PaymentSectionProps) {
  const [paymentAmount, setPaymentAmount] = useState(processingCost.toFixed(2))
  const [showThankYou, setShowThankYou] = useState(false)

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would process the payment
    setShowThankYou(true)
    onPaymentComplete()
  }

  if (showThankYou) {
    return (
      <div className="mt-6 p-4 bg-green-50 border border-zinc-200 border-green-100 rounded-lg text-center dark:border-zinc-800">
        <p className="text-green-700">Thank you for your contribution!</p>
      </div>
    )
  }

  return (
    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900 border border-zinc-200 border-blue-100 rounded-lg dark:border-zinc-800">
      <div className="flex items-start space-x-3">
        <Info className="h-5 w-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200">Transparent Pricing</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
            The estimated cost to process this image was <strong>${processingCost.toFixed(2)}</strong>. We operate on a
            pay-what-you-want model.
          </p>

          <form onSubmit={handlePaymentSubmit} className="mt-3 flex items-end">
            <div className="mr-3">
              <label htmlFor="payment-amount" className="block text-xs text-blue-700 dark:text-blue-300 mb-1">
                Pay what you want (even $0.00 is okay!)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">$</span>
                <input
                  type="number"
                  id="payment-amount"
                  min="0"
                  step="0.01"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="pl-7 pr-3 py-1.5 border border-zinc-200 border-blue-200 rounded-md w-24 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="px-3 py-1.5 bg-blue-500 dark:bg-blue-600 text-white rounded-md hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors text-sm"
            >
              Support Us
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

