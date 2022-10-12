import Left from "./Layout/LeftSide";

function App() {
  return (
    <div className="container flex justify-center">
      <div className="grid h-screen  sm:grid-cols-[1fr_3fr_2fr] xl:grid-cols-[2fr_3fr_2fr]">
        <Left />
      </div>
    </div>
  );
}

export default App;
// ?mocky-delay=3000ms
