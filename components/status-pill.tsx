const statusColorMap = {
  archived: 'yellow',
  active: 'green',
  'active slot 1': 'green',
  'active slot 2': 'green',
  'active slot 3': 'green',
};

interface StatusPillProps {
  status: keyof typeof statusColorMap;
}

export default function StatusPill({ status }: StatusPillProps) {
  return (
    <div
      className={`rounded-full text-white py-1 px-3 text-2xs flex items-center justify-center bg-${
        statusColorMap[status] || 'green'
      }-500 uppercase`}
    >
      {status}
    </div>
  );
}
