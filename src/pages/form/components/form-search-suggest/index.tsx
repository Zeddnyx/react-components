import { useEffect, useState } from "react";

import Input from "components/Form/Input";

import useDebounce from "hooks/useDebounce";
import { getDataNormal } from "~/utils/fetch";

export default function Index() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [clickedSuggestion, setClickedSuggestion] = useState(false);
  const searchKey = useDebounce(search, 500);

  useEffect(() => {
    if (search === "") {
      setIsOpen(false);
      setClickedSuggestion(false);
      setData([]);
      return;
    }

    if (!clickedSuggestion) {
      setIsOpen(true);
    }

    getDataNormal(`https://dummyjson.com/products/search?q=${searchKey}`).then(
      (res) => {
        setData(res.products);
      },
    );
  }, [searchKey, clickedSuggestion]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          value={search}
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
            setClickedSuggestion(false);
          }}
        />
      </form>
      <div className="h-28 py-4">
        <div className="overflow-y-auto h-full">
          {isOpen && data.length === 0 && (
            <div className="text-center">No data</div>
          )}
          {isOpen &&
            data?.map((item: any) => (
              <div
                key={item.id}
                className="cursor-pointer hover:bg-slate-300 p-2"
                onClick={() => {
                  setSearch(item.title);
                  setIsOpen(false);
                  setClickedSuggestion(true);
                }}
              >
                {item.title}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
