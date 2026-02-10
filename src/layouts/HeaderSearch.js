'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const HeaderSearch = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const searchTitle = searchParams.get('title');
  const [searchTerm, setSearchTerm] = useState(searchTitle || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    push(`/view?title=${searchTerm}`);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      className="search-input"
      onChange={(e) => setSearchTerm(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSubmit(e);
        }
      }}
    />
  );
};

export default HeaderSearch;