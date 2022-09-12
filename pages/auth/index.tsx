import useUser from 'lib/useUser';
import type { NextPage } from 'next';
import Image from 'next/image';

const Auth: NextPage = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div>
        <div className="bg-white rounded shadow p-4 pb-8 mb-40 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center p-3 mb-4">
            <Image src="/shipofharkinian.png" alt="Harbour Masters Logo" width={80} height={80} />
            <span className="text-3xl font-black mt-2"> Harbour Masters </span>
          </div>
          <a
            href={`${process.env.NEXT_PUBLIC_BACKEND_URL!}/api/v1/auth?from=${encodeURIComponent(
              process.env.NEXT_PUBLIC_FRONTEND_URL!
            )}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow flex items-center"
          >
            <svg fill="#FFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
              <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z" />
            </svg>
            <span className="ml-2">Sign in with Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
