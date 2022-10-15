import useStore from "../../../../store/store";
import WhatHappeningLoader from "./WhatHappeningLoader";
import WhatHappeningTopic from "./WhatHappeningTopic";

const WhatHappening = () => {
  const whatsHappeningResponse = useStore((state) => state.whatHappeningData);
  console.log(whatsHappeningResponse);
  const WhatHappening =
    whatsHappeningResponse &&
    whatsHappeningResponse.map((props) => (
      <WhatHappeningTopic key={props.name} {...props} />
    ));

  return (
    <div className="m-2 overflow-hidden rounded-2xl bg-dim-700">
      <span className="text-md block w-full p-3 font-bold text-white">
        What’s happening
      </span>
      {!whatsHappeningResponse ? (
        <>
          <WhatHappeningLoader />
          <WhatHappeningLoader />
          <WhatHappeningLoader />
        </>
      ) : (
        WhatHappening
      )}
      <div className="duration-350 cursor-pointer border-t border-dim-200  p-3 text-sm font-normal text-blue-400 transition ease-in-out hover:bg-dim-300">
        Show more
      </div>
    </div>
  );
};

export default WhatHappening;
