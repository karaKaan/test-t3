import { useState } from "react";
import { api } from "~/utils/api";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState(false);
  const { data } = api.post.hello.useQuery({ text: "" });
  const { mutate } = api.post.create.useMutation({
    onSuccess: (data) => {
      console.log(`mutated ${data}`);
    },
  });
  console.log({ data });

  return <button onClick={() => mutate()}>Click</button>;
}
