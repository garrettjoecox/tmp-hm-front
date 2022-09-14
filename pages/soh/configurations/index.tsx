import type { NextPage } from 'next';
import { format, formatDistanceToNow, sub } from 'date-fns';
import { ArrowDownTrayIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import Table, { TableHeader } from 'components/table';
import { useMemo } from 'react';
import useFiles from 'lib/useFiles';
import { FileType, GameId, OotConfigurationFile } from 'types/file';
import useEnsureRole from 'lib/useEnsureRole';
import { UserRole } from 'types/user';
import Link from 'next/link';

const AllConfigurations: NextPage = () => {
  useEnsureRole({ role: UserRole.MODERATOR, redirectTo: '/soh/configurations/mine' });
  const { files } = useFiles<OotConfigurationFile>({
    gameId: GameId.OOT,
    fileType: FileType.CONFIGURATION,
  });

  const headers = useMemo(
    () =>
      [
        {
          label: 'Name',
          key: 'name',
          headerClassName: 'text-left',
          renderCell: ({ item, tableHeader }) => (
            <td className="py-3 px-6 whitespace-nowrap text-left">
              <span>{item.blob.name}</span>
            </td>
          ),
        },
        {
          label: 'Info',
          key: 'info',
          headerClassName: 'text-left',
          renderCell: ({ item, tableHeader }) => (
            <td className="py-3 px-6 whitespace-nowrap text-left">
              <div className="flex flex-col">
                <span>SoH Version: {item.gameSpecific.sohVersion}</span>
              </div>
            </td>
          ),
        },
        {
          label: 'Last Updated',
          key: 'lastUpdated',
          headerClassName: 'text-right',
          renderCell: ({ item, tableHeader }) => (
            <td className="py-3 px-6 whitespace-nowrap text-right">
              <div className="flex flex-col">
                <span>{format(item.updated_at, 'MM/dd/yyyy')}</span>
                <span className="text-gray-400 text-xs">{formatDistanceToNow(item.updated_at)} ago</span>
              </div>
            </td>
          ),
        },
        {
          label: '',
          key: 'id',
          headerClassName: 'text-right',
          renderCell: ({ item, tableHeader }) => (
            <td className="py-3 px-6 whitespace-nowrap text-right">
              <div className="flex items-center justify-end">
                <EyeIcon className="h-4 w-4 text-gray-800 mr-1" />
                <ArrowDownTrayIcon className="h-4 w-4 text-gray-800 mr-1" />
                <TrashIcon className="h-4 w-4 text-gray-800 mr-1" />
              </div>
            </td>
          ),
        },
      ] as TableHeader<typeof files[number]>[],
    []
  );

  return (
    <div className="p-6">
      <div className="flex items-center">
        <div>
          <h3 className="text-sm text-gray-700 uppercase">Ship of Harkinion</h3>
          <h1 className="text-3xl font-bold mb-4">Configurations</h1>
        </div>
        <div className="ml-auto">
          <Link href="/soh/configurations/mine">
            <a className="flex px-3 py-1 my-1 text-sm font-semibold items-center bg-gray-300 hover:bg-gray-200 rounded">
              View Mine
            </a>
          </Link>
        </div>
      </div>

      <Table data={files} headers={headers} />
    </div>
  );
};

export default AllConfigurations;
