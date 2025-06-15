const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-Roboto">
    <div className="bg-primary/10 border border-primary/10 rounded-lg shadow-md p-6 flex flex-col items-center justify-center w-50">
        <h2 className="text-2xl font-bold text-primary mb-4">Rate Limited</h2>
        <p className="text-gray-600 mb-4 font-bold">
            You have reached the maximum number of requests. Please try again later.
        </p>
        <p className="text-gray-600 font-bold">
            If you believe this is an error, please contact support.
        </p>
    </div>
    </div>
  )
}
export default RateLimit