export default function Main() {
    return (
        <main className="flex-grow">
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          aria-labelledby="hero-heading"
        >
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-neutral-500 text-sm sm:text-base uppercase tracking-wider">
              What we do
            </p>
            <h1
              id="hero-heading"
              className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight"
            >
              Innovation tailored for you
            </h1>
            <nav
              className="mt-6 flex justify-center items-center space-x-2"
              aria-label="Breadcrumb"
            >
              <a
                href="/"
                className="text-sm text-slate-800 hover:text-sky-500 transition-colors"
              >
                Home
              </a>
              <span className="text-neutral-500">/</span>
              <span className="text-sm text-neutral-500">Team</span>
            </nav>
          </div>
        </section>
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          aria-label="Team gallery"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="aspect-w-16 aspect-h-12">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f35d40acb995a803f75c9ba7cb57ac23dc4d868f08fee87759553e178262a4d?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team collaboration"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09f1c8e8a5a07c86f6bdae925179b7238c95b93d03b6d8ca2fe98c238fbc892c?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team meeting"
                className="object-cover w-full aspect-square rounded-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b376bb3beba2d765cc18f201a106615371db3f2f224fe4dde947d7589225cbf3?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team discussion"
                className="object-cover w-full aspect-square rounded-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd141674e974d3c3447a6638340706dac3a734859b4222b7c5f9ef98eb73ea7c?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team planning"
                className="object-cover w-full aspect-square rounded-lg"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/38ee15f57e3cc0f1d895528229f103d147adce00924f758ad536bd0e7b5fc1d8?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team brainstorming"
                className="object-cover w-full aspect-square rounded-lg"
              />
            </div>
          </div>
        </section>
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
          aria-labelledby="team-heading"
        >
          <h2
            id="team-heading"
            className="text-3xl sm:text-4xl font-bold text-center text-slate-800 mb-16"
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden transition-transform hover:scale-105">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1620400716405979ab7f057a325eca4e3b66c9037f79b42e38346fd68110ed87?placeholderIfAbsent=true&apiKey=a1b30cf101cd4535893ad47d79359566"
                alt="Team member"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-slate-800">Username</h3>
                <p className="mt-2 text-sm text-neutral-500">Profession</p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-sky-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-sky-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-sky-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
            {/* Repeat the team member card structure for all team members */}
          </div>
        </section>
        <section
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
          aria-labelledby="cta-heading"
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2
              id="cta-heading"
              className="text-3xl sm:text-4xl font-bold text-slate-800"
            >
              Start your 14 days free trial
            </h2>
            <p className="mt-4 text-neutral-500">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
              RELIT official consequent.
            </p>
            <a
              href="/trial"
              className="inline-block mt-8 px-8 py-4 text-sm font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-md transition-colors"
            >
              Try it free now
            </a>
            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="#"
                className="text-neutral-400 hover:text-sky-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-sky-500 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-sky-500 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      
    
      )
    }
    
    