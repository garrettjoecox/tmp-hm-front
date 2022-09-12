import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';

const fetcher = (url: string, init: RequestInit) =>
  fetch(`http://localhost:4000/api/v1${url}`, {
    ...init,
    credentials: 'include',
  }).then((res) => res.json());

export default function useUser({ redirectTo = '', redirectIfFound = false } = {}) {
  const { data: user, error } = useSWR<any>('/auth/me', fetcher);

  useEffect(() => {
    if (!redirectTo || (!user && !error)) return;

    if ((redirectTo && !redirectIfFound && !user) || (redirectIfFound && user)) {
      Router.push(redirectTo);
    }
  }, [user, error, redirectIfFound, redirectTo]);

  return { user };
}
