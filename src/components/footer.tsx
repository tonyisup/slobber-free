export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} SlobberFree Paws. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

