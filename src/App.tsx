import LeftSide from "./Layout/LeftSide";
import RightSide from "./Layout/RightSide";
import Middle from "./Layout/Middel";
import useStore from "./store/store";
import { useEffect } from "react";
function App() {
  const fetch = useStore((state) => state.fetch);
  useEffect(() => {
    fetch(
      "feedData",
      "https://run.mocky.io/v3/46eadd96-c939-4501-a49e-4b7cd7ca593f?mocky-delay=3000ms"
    );
    fetch(
      "whatHappeningData",
      "https://run.mocky.io/v3/01855673-8177-44a4-b988-e5ad7b48c59a?mocky-delay=1000ms"
    );
    fetch(
      "whoTofollowData",
      "https://run.mocky.io/v3/cc4e2641-0e53-474f-9eef-e04a634d974c?mocky-delay=2000ms"
    );
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid h-screen sm:grid-cols-[1fr_3fr_2fr] xl:grid-cols-[2fr_4fr_2fr]">
        <LeftSide />
        <Middle />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
