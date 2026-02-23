function Settings() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </header>
      <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-lg">
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="companyName" className="text-sm font-semibold text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              defaultValue="My Company"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue="admin@company.com"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="timezone" className="text-sm font-semibold text-gray-700">
              Timezone
            </label>
            <select
              id="timezone"
              defaultValue="UTC-5"
              className="px-3 py-2.5 border border-gray-300 rounded-lg text-sm font-[inherit] focus:outline-none focus:border-indigo-600"
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-7">Mountain Time (UTC-7)</option>
              <option value="UTC-6">Central Time (UTC-6)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC</option>
              <option value="UTC+1">Central European (UTC+1)</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white border-none px-5 py-2.5 rounded-lg cursor-pointer font-semibold text-sm hover:bg-indigo-700 transition-colors"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
