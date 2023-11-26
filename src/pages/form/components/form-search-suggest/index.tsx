import { useEffect, useState } from "react";

import Input from "components/Form/Input";

import useDebounce from "hooks/useDebounce";
import { getDataNormal } from "~/utils/fetch";

export default function Index() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchKey = useDebounce(search, 500);

  useEffect(() => {
    searchKey != "" &&
      getDataNormal(
        `https://dummyjson.com/products/search?q=${searchKey}`,
      ).then((res) => {
        setData(res.products);
      });
  }, [searchKey]);

  return (
    <div>
      <Input
        value={search}
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="h-28 py-4">
        <div className="overflow-y-auto h-full">
          {isOpen ||
            (data?.length != 0 &&
              data?.map((item: any) => (
                <div
                  key={item.id}
                  className="cursor-pointer hover:bg-slate-300 p-2"
                  onMouseOut={() => setIsOpen(false)}
                  onClick={() => {
                    setSearch(item.title);
                    setIsOpen(false);
                  }}
                >
                  {item.title}
                </div>
              )))}
        </div>
      </div>
    </div>
  );
}
