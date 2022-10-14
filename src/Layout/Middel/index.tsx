import useFetch from "../../hooks/useFetch";
import TweetComponent from "./components/TweetComponent";
import TweetComponentLoader from "./components/TweetComponentLoader";
import WriteTweet from "./components/WriteTweet";
type apiData = {
  name: string;
  userId: string;
  date: string;
  tweetBody: string;
  imgUrl: string;
}[];

const index = () => {
  const [isError, apiData] = useFetch<apiData>(
    "https://run.mocky.io/v3/46eadd96-c939-4501-a49e-4b7cd7ca593f?mocky-delay=3000ms"
  );
  const feed =
    apiData && apiData.map((props, index) => <TweetComponent key={index} {...props} />);

  return (
    <div className="col-start-2">
      <WriteTweet />
      {isError && <div>Something went wrong ...</div>}
      {!apiData ? (
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
