import Image from 'next/image';
import Link from 'next/link';
import { CloudArrowDownIcon, CogIcon, HashtagIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const sections = [
    {
      name: 'Ship of Harkinion',
      children: [
        {
          name: 'Cloud Saves',
          href: '/soh/cloud-saves/mine',
          icon: <CloudArrowDownIcon className="h-6 w-6 text-gray-400 mr-1" />,
        },
        {
          name: 'Configurations',
          href: '/soh/configurations/mine',
          icon: <CogIcon className="h-6 w-6 text-gray-400 mr-1" />,
        },
        {
          name: 'Randomizer Seeds',
          href: '/soh/randomizer-seeds/mine',
          icon: <HashtagIcon className="h-6 w-6 text-gray-400 mr-1" />,
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-800 w-64 text-white">
      <div className="flex justify-center items-center p-3 bg-gray-700 border-gray-600 border-b-2">
        <Image src="/shipofharkinian.png" alt="Harbour Masters Logo" width={24} height={24} />
        <span className="text-xl font-black ml-2"> Harbour Masters </span>
      </div>

      {sections.map(({ name, children }) => (
        <div className="p-3" key={name}>
          <span className="text-xs uppercase text-gray-400">{name}</span>
          {children.map(({ name, href, icon }) => (
            <Link key={name} href={href}>
              <a
                className={`flex px-2 py-1 my-1 text-sm font-semibold items-center hover:bg-gray-900 rounded ${
                  router.pathname === href ? 'bg-gray-900' : ''
                }`}
              >
                {icon}
                {name}
              </a>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
