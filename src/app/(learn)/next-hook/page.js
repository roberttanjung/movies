'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function NextHooks() {
  const { push } = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  const getFilterName = searchParams.get('name') || '';

  const getFilterJob = searchParams.get('job') || '';

  return (
    <div>
      <h1>Dashboard {pathname}</h1>
      <h2>Filter: {getFilterName} - {getFilterJob}</h2>
      <button onClick={() => push('/react-hook')}>Go To React Hook</button>
      <button onClick={() => push('/next-hook/1234-abcd')}>Go To Detail</button>
    </div>
  );
}
