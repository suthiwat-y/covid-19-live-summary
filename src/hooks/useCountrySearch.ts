import { useState } from "react";
import Fuse from "fuse.js";

type SearchParams<T> = {
  fuse: Fuse<T>;
  data: T[];
  term: string;
};

type SearchResult<T> = T[];

function search<T>({ fuse, data, term }: SearchParams<T>): SearchResult<T> {
  const results = fuse.search(term);
  return term ? results.map((x) => x.item) : data;
}

type UseCountrySearchParams<T> = {
  data: T[];
  options: Fuse.IFuseOptions<T>;
};

type UseCountrySearchResult<T> = {
  results: SearchResult<T>;
  setSearchTerm: (s: string) => void;
  searchTerm: string;
  reset: () => void;
};

export default function useCountrySearch<T>({
  data = [],
  options,
}: UseCountrySearchParams<T>): UseCountrySearchResult<T> {
  const [searchTerm, setSearchTerm] = useState("");
  const fuse = new Fuse(data, options);
  const results = search({ fuse, data, term: searchTerm });
  const reset = () => setSearchTerm("");
  return { results, setSearchTerm, searchTerm, reset };
}
