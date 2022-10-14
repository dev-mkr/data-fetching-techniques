import WhatHappeningLoader from "./WhatHappeningLoader";
import useFetch from "../../../../hooks/useFetch";
import WhatHappeningTopic from "./WhatHappeningTopic";
type whatsHappeningResponse = {
  name: string;
  tweetsCount: string;
}[];

const WhatHappening = () => {
  const [isError, whatsHappeningResponse] = useFetch<whatsHappeningResponse>(
    "https://run.mocky.io/v3/01855673-8177-44a4-b988-e5ad7b48c59a?mocky-delay=1000ms"
  );

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
      {isError && <div>Something went wrong ...</div>}
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
