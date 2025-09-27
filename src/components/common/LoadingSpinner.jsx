const LoadingSpinner = () => {
  return (
    <div role="status" className="flex justify-center my-16">
      <div className="w-12 h-12 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;