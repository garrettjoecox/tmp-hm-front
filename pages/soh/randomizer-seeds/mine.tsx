import type { NextPage } from 'next';
import { format, formatDistanceToNow, sub } from 'date-fns';
import StatusPill from 'components/status-pill';
import { ArrowDownTrayIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/solid';
import Table, { TableHeader } from 'components/table';
import { useMemo } from 'react';

const MyRandomizerSeeds: NextPage = () => {
  const data = useMemo(
    () => [
      { id: '0', name: 'Hell mode', info: '18593', status: 'active', lastUpdated: new Date() },
      { id: '1', name: 'Keysanity', info: '48395', status: 'archived', lastUpdated: sub(new Date(), { weeks: 2 }) },
      {
        id: '2',
        name: 'testing scrubsanity',
        info: '49583',
        status: 'archived',
        lastUpdated: sub(new Date(), { weeks: 1 }),
      },
      {
        id: '3',
        name: 'songs everywhere',
        info: '00485',
        status: 'archived',
        lastUpdated: sub(new Date(), { weeks: 5 }),
      },
      { id: '4', name: 'very old', info: '14854', status: 'archived', lastUpdated: sub(new Date(), { weeks: 41 }) },
    ],
    []
  );

  const headers = useMemo(
    () =>
      [
        {
          label: 'Name',
          key: 'name',
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        },
        {
          label: 'Seed',
          key: 'info',
          headerClassName: 'text-left',
          cellClassName: 'text-left',
        },
        {
          label: 'Status',
          key: 'status',
          renderCell: ({ item, tableHeader }) => (
            <td className={`py-3 px-6 whitespace-nowrap ${tableHeader.cellClassName}`}>
              <div className="flex items-center justify-center">
                <StatusPill status={item.status} />
              </div>
            </td>
          ),
        },
        {
          label: 'Last Updated',
          key: 'lastUpdated',
          headerClassName: 'text-right',
          cellClassName: 'text-right',
          renderCell: ({ item, tableHeader }) => (
            <td className={`py-3 px-6 whitespace-nowrap ${tableHeader.cellClassName}`}>
              <div className="flex flex-col">
                <span>{format(item.lastUpdated, 'MM/dd/yyyy')}</span>
                <span className="text-gray-400 text-xs">{formatDistanceToNow(item.lastUpdated)} ago</span>
              </div>
            </td>
          ),
        },
        {
          label: '',
          key: 'id',
          headerClassName: 'text-right',
          cellClassName: 'text-right',
          renderCell: ({ item, tableHeader }) => (
            <td className={`py-3 px-6 whitespace-nowrap ${tableHeader.cellClassName}`}>
              <div className="flex items-center justify-end">
                <EyeIcon className="h-4 w-4 text-gray-800 mr-1" />
                <ArrowDownTrayIcon className="h-4 w-4 text-gray-800 mr-1" />
                <TrashIcon className="h-4 w-4 text-gray-800 mr-1" />
              </div>
            </td>
          ),
        },
      ] as TableHeader<typeof data[number]>[],
    []
  );

  return (
    <div className="p-6">
      <h3 className="text-sm text-gray-700 uppercase">Ship of Harkinion</h3>
      <h1 className="text-3xl font-bold mb-4">Randomizer Seeds</h1>

      <Table data={data} headers={headers} />
    </div>
  );
};

export default MyRandomizerSeeds;
