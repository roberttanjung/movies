'use client';

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

const useGetLink = () => {
  const pathname = usePathname();

  const params = useParams();

  const searchParams = useSearchParams();

  const searchParamName = searchParams.get('name') || '';

  const searchParamJob = searchParams.get('job') || '';

  const [getPathname, setGetPathname] = useState('');

  const [getParamId, setGetParamId] = useState('');

  const [getFilterName, setGetFilterName] = useState('');

  const [getFilterJob, setGetFilterJob] = useState('');

  const handleGetLink = useCallback(() => {
    setGetPathname(pathname);
    setGetParamId(params.id);
    setGetFilterName(searchParamName);
    setGetFilterJob(searchParamJob);
  }, [pathname, params, searchParamName, searchParamJob]);

  return { getPathname, getParamId, getFilterName, getFilterJob, handleGetLink };
};

export default useGetLink;
