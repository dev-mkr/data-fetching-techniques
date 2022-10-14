type WhoToFollowPersonProps = {
  name: string;
  userId: string;
  imgUrl: string;
};
const WhoToFollowPerson = ({ name, userId, imgUrl }: WhoToFollowPersonProps) => {
  return (
    <div className="duration-350 b cursor-pointer border-t border-dim-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-dim-300">
      <div className="flex flex-row justify-between p-2">
        <div className="flex flex-row">
          <img className="h-10 w-10 rounded-full" src={imgUrl} alt="Joe Biden" />
          <div className="ml-2 flex flex-col">
            <span className="text-sm font-bold text-white">{name}</span>
            <p className="text-sm text-gray-400">@{userId}</p>
          </div>
        </div>

        <button className="ext-white flex h-full items-center rounded-full border-2 border-blue-400 px-4 py-1 text-xs font-bold text-blue-400">
          Follow
        </button>
      </div>
    </div>
  );
};

export default WhoToFollowPerson;
