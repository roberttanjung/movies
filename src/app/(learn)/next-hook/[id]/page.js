'use client';

import useGetLink from "@/hooks/useGetLink";
import { useEffect } from "react";

export default function NextHooksDetail() {
  const { getPathname, getParamId, getFilterName, getFilterJob, handleGetLink } = useGetLink();

  useEffect(() => {
    handleGetLink();
  }, [handleGetLink]);

  return (
    <div>
      <h1>Dashboard Detail: {getPathname} - {getParamId}</h1>
      <h3>List Filter</h3>
      <ul>
        <li>Name: {getFilterName}</li>
        <li>Job: {getFilterJob}</li>
      </ul>
    </div>
  );
}
