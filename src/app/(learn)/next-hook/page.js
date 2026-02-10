'use client';

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const getFilterName = searchParams.get('name') || '';
  const getFilterJob = searchParams.get('job') || '';

  return (
    <h2>Filter: {getFilterName} - {getFilterJob}</h2>
  );
}

export default function NextHooks() {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <div>
      <h1>Dashboard {pathname}</h1>
      <Suspense fallback={<h2>Loading filters...</h2>}>
        <SearchParamsComponent />
      </Suspense>
      <button onClick={() => push('/react-hook')}>Go To React Hook</button>
      <button onClick={() => push('/next-hook/1234-abcd')}>Go To Detail</button>
    </div>
  );
}
