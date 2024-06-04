const ProfileCard = ({ imgSrc, name }) => {
  return (
    <div className="border-2 bg-base-300 p-4 rounded-2xl !w-[220px] shrink-0">
      <div className="flex gap-4">
        <div className="flex gap-2">
          <img src={imgSrc} className="rounded-full w-12 h-12" />
          <div className="flex flex-col gap-2 overflow-hidden">
            <p className="font-bold truncatex group-hover:underline duration-200 truncate">
              {name}
            </p>
            <span className="badge whitespace-nowrap">7 startups</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const profiles = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&h=48",
    name: "Awesome person",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&h=48",
    name: "Awesome person",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&h=48",
    name: "Awesome person",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=48&h=48",
    name: "Awesome person",
  },
];

const ProfileScroll = () => {
  return (
    <div className="flex overflow-x-scroll p-6 gap-4">
      {profiles.map(({ ...rest }, i) => (
        <ProfileCard key={i} {...rest} />
      ))}
    </div>
  );
};

export default ProfileScroll;
