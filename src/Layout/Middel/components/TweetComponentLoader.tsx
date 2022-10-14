const TweetComponentLoader = () => {
  return (
    <div className="bborder-b flex animate-pulse  gap-x-3 border-l border-r border-dim-200 p-5 hover:bg-dim-300">
      <div className="h-11 w-11 rounded-full bg-gray-400"></div>

      <div className="flex-1 py-1 [&>*]:bg-gray-400">
        <div className="h-4 w-1/4 rounded"></div>
        <div className="mt-4 h-3 w-8/12 rounded"></div>
        <div className="mt-2 h-3 w-full rounded"></div>
        <div className="mt-2 h-3 w-9/12 rounded"></div>
        <div className="mt-6 flex h-80 rounded-2xl border border-gray-600"></div>
      </div>
    </div>
  );
};

export default TweetComponentLoader;
