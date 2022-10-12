const UserProfile = () => {
  return (
    <div className="mt-auto mb-5 flex w-14 cursor-pointer rounded-full  p-2 hover:bg-dim-800">
      <img
        className="h-10 w-10 rounded-full"
        src="https://pbs.twimg.com/profile_images/1308769664240160770/AfgzWVE7_normal.jpg"
        alt="Joe Biden"
      />
      <div className="ml-2  block">
        <h1 className="text-sm font-bold text-white">Joe Biden</h1>
        <p className="text-sm text-gray-400">@JoeBiden</p>
      </div>
    </div>
  );
};

export default UserProfile;
