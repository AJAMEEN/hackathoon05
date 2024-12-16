export default function Header() {
    return (
      
        <div className="flex flex-col min-h-screen bg-white">
        <header className="w-full bg-white shadow-sm">
          <nav
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-4"
            aria-label="Main navigation"
          >
            <div className="flex flex-wrap items-center justify-between">
              <div className="flex items-center space-x-8">
                <a
                  href="/"
                  className="text-2xl font-bold text-slate-800 hover:text-sky-500 transition-colors"
                >
                  Bandage
                </a>
                <nav
                  className="hidden md:flex items-center space-x-6"
                  aria-label="Primary navigation"
                >
                  <a
                    href="/"
                    className="text-sm text-neutral-500 hover:text-sky-500 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/product"
                    className="text-sm text-neutral-500 hover:text-sky-500 transition-colors"
                  >
                    Product
                  </a>
                  <a
                    href="/pricing"
                    className="text-sm text-neutral-500 hover:text-sky-500 transition-colors"
                  >
                    Pricing
                  </a>
                  <a
                    href="/contact"
                    className="text-sm text-neutral-500 hover:text-sky-500 transition-colors"
                  >
                    Contact
                  </a>
                </nav>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <a
                  href="/login"
                  className="text-sm text-sky-500 hover:text-sky-600 transition-colors"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="inline-flex items-center px-6 py-3 text-sm text-white bg-sky-500 hover:bg-sky-600 rounded-md transition-colors"
                >
                  <span>Become a member</span>
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
              <button
                type="button"
                className="md:hidden p-2 rounded-md text-neutral-500 hover:text-sky-500 hover:bg-gray-100"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="/"
                  className="block px-3 py-2 text-sm text-neutral-500 hover:text-sky-500 hover:bg-gray-100 rounded-md"
                >
                  Home
                </a>
                <a
                  href="/product"
                  className="block px-3 py-2 text-sm text-neutral-500 hover:text-sky-500 hover:bg-gray-100 rounded-md"
                >
                  Product
                </a>
                <a
                  href="/pricing"
                  className="block px-3 py-2 text-sm text-neutral-500 hover:text-sky-500 hover:bg-gray-100 rounded-md"
                >
                  Pricing
                </a>
                <a
                  href="/contact"
                  className="block px-3 py-2 text-sm text-neutral-500 hover:text-sky-500 hover:bg-gray-100 rounded-md"
                >
                  Contact
                </a>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <a
                    href="/login"
                    className="block px-3 py-2 text-sm text-sky-500 hover:text-sky-600 hover:bg-gray-100 rounded-md"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="block px-3 py-2 mt-1 text-sm text-white bg-sky-500 hover:bg-sky-600 rounded-md text-center"
                  >
                    Become a member
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
};