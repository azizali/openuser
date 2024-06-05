const SubScribeMe = () => {
  return (
    <div className="xp-4 xborder xrounded flex flex-col gap-4">
      👇 2M+ people are subscribers to Aziz's newsletter
      <div className="flex items-center">
        <input
          type="text"
          className="border px-3 py-2 rounded-md leading-4 text-sm !rounded-e-none !rounded-s flex-1x"
          placeholder="Enter your email"
        />
        <button className="btn !border border-solid !rounded-e !rounded-s-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubScribeMe;
