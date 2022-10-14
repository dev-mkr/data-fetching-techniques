import LeftSide from "./Layout/LeftSide";
import RightSide from "./Layout/RightSide";
import Middle from "./Layout/Middel";
function App() {
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
