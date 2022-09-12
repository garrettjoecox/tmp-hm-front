import useUser from 'lib/useUser';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { user } = useUser({
    redirectTo: '/auth',
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-center min-h-screen text-gray-400 font-semibold text-lg">
        Please select an option on the sidebar
      </div>
    </div>
  );
};

export default Home;
