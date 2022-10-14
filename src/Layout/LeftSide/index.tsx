import { ReactComponent as Logo } from "../../assets/twitterLogo.svg";
import { ReactComponent as Home } from "../../assets/Home.svg";
import { ReactComponent as Explore } from "../../assets/Explore.svg";
import { ReactComponent as Notifications } from "../../assets/Notifications.svg";
import { ReactComponent as Messages } from "../../assets/Messages.svg";
import { ReactComponent as lists } from "../../assets/lists.svg";
import { ReactComponent as Bookmarks } from "../../assets/Bookmarks.svg";
import { ReactComponent as Profile } from "../../assets/Bookmarks.svg";
import { ReactComponent as More } from "../../assets/More.svg";
import LeftSidbarItme from "./components/LeftSidbarItem";
import UserProfile from "./components/UserProfile";
const LeftSide = () => {
  return (
    <aside className="fixed top-0 pr-3 ">
      <Logo className="mt-3 w-8 text-blue-400 text-white" />
      <ul className="mt-5">
        <LeftSidbarItme text="Home" Icon={Home} active={true} />
        <LeftSidbarItme text="Explore" Icon={Explore} />
        <LeftSidbarItme text="Notifications" Icon={Notifications} />
        <LeftSidbarItme text="Messages" Icon={Messages} />
        <LeftSidbarItme text="Bookmarks" Icon={Bookmarks} />
        <LeftSidbarItme text="lists" Icon={lists} />
        <LeftSidbarItme text="Profile" Icon={Profile} />
        <LeftSidbarItme text="More" Icon={More} />
      </ul>
      <button className="font-sm grid w-60 place-items-center rounded-full bg-blue-400 p-3 font-bold text-white hover:bg-blue-500">
        Tweet
      </button>
      <UserProfile />
    </aside>
  );
};

export default LeftSide;
