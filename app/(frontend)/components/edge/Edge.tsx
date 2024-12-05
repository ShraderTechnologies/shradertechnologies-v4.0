export default function Edge() {
  return (
    <div className="container bg-[#EDEEEF] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Item */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            First Item
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Content for first item goes here
          </p>
        </div>

        {/* Second Item */}
        <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Second Item
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Content for second item goes here
          </p>
        </div>
      </div>
    </div>
  );
}
