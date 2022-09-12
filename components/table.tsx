import { ReactElement } from 'react';

interface TableItem {
  id: string;
}

export interface TableHeader<T extends TableItem> {
  key: keyof T;
  label: string;
  headerClassName?: string;
  cellClassName?: string;
  renderHeader?: (props: DefaultRenderTableHeaderProps<T>) => ReactElement;
  renderCell?: (props: DefaultRenderTableCellProps<T>) => ReactElement;
}

interface TableProps<T extends TableItem> {
  data: T[];
  headers: TableHeader<T>[];
}

export default function Table<T extends TableItem>(props: TableProps<T>) {
  return (
    <table className="min-w-max w-full table-auto rounded overflow-hidden shadow bg-white">
      <thead>
        <tr className="bg-gray-700 text-gray-200 uppercase text-xs leading-normal">
          {props.headers.map((tableHeader) => {
            const Header = tableHeader.renderHeader || DefaultRenderTableHeader;

            return <Header key={tableHeader.label} tableHeader={tableHeader} />;
          })}
        </tr>
      </thead>
      <tbody className="text-gray-600 text-md font-light">
        {props.data.map((item, index) => (
          <tr key={item.id} className="border-b border-gray-200">
            {props.headers.map((tableHeader) => {
              const Cell = tableHeader.renderCell || DefaultRenderTableCell;

              return <Cell key={tableHeader.label} item={item} index={index} tableHeader={tableHeader} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

interface DefaultRenderTableHeaderProps<T extends TableItem> {
  tableHeader: TableHeader<T>;
}

export function DefaultRenderTableHeader<T extends TableItem>({ tableHeader }: DefaultRenderTableHeaderProps<T>) {
  return <th className={`py-3 px-6 ${tableHeader.headerClassName}`}>{tableHeader.label}</th>;
}

interface DefaultRenderTableCellProps<T extends TableItem> {
  item: T;
  index: number;
  tableHeader: TableHeader<T>;
}

export function DefaultRenderTableCell<T extends TableItem>({ item, tableHeader }: DefaultRenderTableCellProps<T>) {
  return (
    <td className={`py-3 px-6 whitespace-nowrap ${tableHeader.cellClassName}`}>
      {item[tableHeader.key] as ReactElement}
    </td>
  );
}
