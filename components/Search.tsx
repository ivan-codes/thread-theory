import React, { useEffect, useState } from "react";

type Props = {
  fillSearch: string | undefined;
};

function Search({ fillSearch }: Props) {
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (fillSearch !== undefined) setSearch(fillSearch);
  }, [fillSearch]);

  return (
    <div className="sticky top-0 bg-white p-3 border-b">
      <input
        type="text"
        className="w-full bg-gray-200 border-2 px-4 py-1 rounded-full focus:outline-none focus:bg-white focus:border-blue-400"
        placeholder="Search for topic..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-flow-col gap-5 place-items-center font-semibold mt-3">
        <div className="text-font-color">Top</div>
        <div className="text-gray-400">Most Viewed</div>
        <div className="text-gray-400">Latest</div>
      </div>
    </div>
  );
}

export default Search;
