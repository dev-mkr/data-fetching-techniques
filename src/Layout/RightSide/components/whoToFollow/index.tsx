import useStore from "../../../../store/store";
import WhoToFollowLoader from "./WhoToFollowLoader";
import WhoToFollowPerson from "./WhoToFollowPerson";

const WhoToFollow = () => {
  const WhoToFollowResponse = useStore((state) => state.whoTofollowData);
  const WhoToFollow =
    WhoToFollowResponse &&
    WhoToFollowResponse.map((props, index) => (
      <WhoToFollowPerson key={index} {...props} />
    ));

  return (
    <div className="m-2 rounded-2xl bg-dim-700">
      <span className="text-md block border-b  border-dim-200 p-3 font-bold text-white">
        Who to follow
      </span>
      {!WhoToFollowResponse ? (
        <>
          <WhoToFollowLoader />
          <WhoToFollowLoader />
        </>
      ) : (
        WhoToFollow
      )}
    </div>
  );
};

export default WhoToFollow;
