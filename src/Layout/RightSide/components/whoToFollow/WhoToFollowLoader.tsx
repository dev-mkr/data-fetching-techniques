const WhoToFollowLoader = () => {
  return (
    <div className="flex animate-pulse gap-x-3  border-t  border-dim-200 p-4">
      <div className="h-11 w-11 rounded-full bg-gray-400"></div>

      <div className="flex-1  py-1">
        <div className="h-4 w-3/4 rounded bg-gray-400"></div>
        <div className="mt-3 h-3 rounded bg-gray-400"></div>
        <div className="mt-2 h-3 w-5/6 rounded bg-gray-400"></div>
      </div>
    </div>
  );
};

export default WhoToFollowLoader;
