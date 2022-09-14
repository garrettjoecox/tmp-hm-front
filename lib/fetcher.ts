const fetcher = (url: string, init: RequestInit) =>
  fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1${url}`, {
    ...init,
    credentials: 'include',
  }).then((res) => res.json());

export default fetcher;
