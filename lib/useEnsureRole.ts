import { useEffect } from 'react';
import Router from 'next/router';
import useSWR from 'swr';
import { UserRole } from 'types/user';
import useUser from './useUser';

export default function useEnsureRole({ redirectTo = '/', role = UserRole.MODERATOR } = {}) {
  const { user } = useUser({ redirectTo });

  useEffect(() => {
    if (!redirectTo || !user) return;

    if (user.role < role) {
      Router.push(redirectTo);
    }
  }, [redirectTo, role, user]);
}
