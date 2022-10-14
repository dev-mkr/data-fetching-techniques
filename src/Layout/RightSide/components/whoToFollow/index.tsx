import WhoToFollowLoader from "./WhoToFollowLoader";
import WhoToFollowPerson from "./WhoToFollowPerson";
import useFetch from "../../../../hooks/useFetch";
type WhoToFollowResponse = {
  name: string;
  userId: string;
  imgUrl: string;
}[];

const WhoToFollow = () => {
  const [isError, WhoToFollowResponse] = useFetch<WhoToFollowResponse>(
    "https://run.mocky.io/v3/cc4e2641-0e53-474f-9eef-e04a634d974c?mocky-delay=2000ms"
  );
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
      {isError && <div>Something went wrong ...</div>}
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
