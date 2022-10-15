import useStore from "../../store/store";
import TweetComponent from "./components/TweetComponent";
import TweetComponentLoader from "./components/TweetComponentLoader";
import WriteTweet from "./components/WriteTweet";

const index = () => {
  const feedApiresponse = useStore((state) => state.feedData);
  const feed =
    feedApiresponse &&
    feedApiresponse.map((props, index) => <TweetComponent key={index} {...props} />);

  return (
    <div className="col-start-2">
      <WriteTweet />
      {!feedApiresponse ? (
        <>
          <TweetComponentLoader />
          <TweetComponentLoader />
        </>
      ) : (
        feed
      )}
    </div>
  );
};

export default index;
