import { useEffect, useState } from 'react';
import { GameId, FileType, File } from 'types/file';
import { fakeFiles } from './fakeData';

export default function useFiles<T extends File>({
  gameId,
  fileType,
  userId,
}: {
  gameId: GameId;
  fileType: FileType;
  userId?: string;
}) {
  let url = `/files?gameId=${gameId}&fileType=${fileType}`;
  if (userId) {
    url = `/users/${userId}${url}`;
  }
  // const { data: files, error } = useSWR<T>(url, fetcher);
  const [files, setFiles] = useState<T[]>([]);

  useEffect(() => {
    (async () => {
      await new Promise((r) => setTimeout(r, 500));

      setFiles(
        // @ts-ignore
        fakeFiles.filter((file) => {
          return file.gameId == gameId && file.type == fileType && (!userId || file.userId == userId);
        })
      );
    })();
  }, [fileType, gameId, userId]);

  return { files };
}
