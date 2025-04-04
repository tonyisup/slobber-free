import { Sparkles } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">SlobberFree Paws</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">AI-Powered Slobber Removal • Pay What You Want</p>
          </div>
        </div>

        <div>
          <button className="text-sm px-4 py-2 rounded-md border border-zinc-200 border-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:border-zinc-800">
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}

