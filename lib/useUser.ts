import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import fetcher from './fetcher';
import { User, UserRole } from 'types/user';

export default function useUser({ redirectTo = '/auth', redirectIfFound = false } = {}) {
  const { data: user, error } = useSWR<User>('/auth/me', fetcher);

  // Temporary until roles are added to user
  useEffect(() => {
    if (user) {
      user.role = UserRole.ADMINISTRATOR;
    }
  }, [user]);

  useEffect(() => {
    if (!redirectTo || (!user && !error)) return;

    if ((redirectTo && !redirectIfFound && !user) || (redirectIfFound && user)) {
      Router.push(redirectTo);
    }
  }, [user, error, redirectIfFound, redirectTo]);

  return { user };
}
