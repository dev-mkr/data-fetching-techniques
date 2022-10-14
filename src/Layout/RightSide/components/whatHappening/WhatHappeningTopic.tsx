type WhatHappeningTopic = {
  name: string;
  tweetsCount: string;
};

const WhatHappeningTopic = ({ name, tweetsCount }: WhatHappeningTopic) => {
  return (
    <div className="duration-350 cursor-pointer border-t  border-dim-200 p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-dim-300">
      <span className="text-md block font-bold text-white">#{name}</span>
      <p className="text-xs text-gray-400">{tweetsCount} Tweets</p>
    </div>
  );
};

export default WhatHappeningTopic;
