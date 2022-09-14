type UUID = string;

export enum GameId {
  OOT = 'TLOZPO0',
  MM = 'TLOZPM0',
}

export enum FileType {
  SAVE = 'SAVE',
  CONFIGURATION = 'CONFIGURATION',
  RANDOMIZER_SEED = 'RANDOMIZER_SEED',
}

type BaseFile = {
  id: UUID;
  userId: UUID;
  blob: object;
  md5: string;
  created_at: Date;
  updated_at: Date;
};

type OotBaseFile = BaseFile & {
  gameId: GameId.OOT;
  gameSpecific: {
    sohVersion: string;
  };
};

export type OotSaveFile = OotBaseFile & {
  type: FileType.SAVE;
  typeSpecific: {
    saveFormat: 'v1' | 'v2';
  };
  blob: {
    name: string;
  };
};

export type OotConfigurationFile = OotBaseFile & {
  type: FileType.CONFIGURATION;
  blob: {
    name: string;
  };
};

export type OotRandomizerSeedFile = OotBaseFile & {
  type: FileType.RANDOMIZER_SEED;
  blob: {
    name: string;
    seed: string;
  };
};

export type OotFile = OotSaveFile | OotConfigurationFile | OotRandomizerSeedFile;

type MmBaseFile = BaseFile & {
  gameId: GameId.MM;
};

export type MmSaveFile = MmBaseFile & {
  type: FileType.SAVE;
};

export type MmConfigurationFile = MmBaseFile & {
  type: FileType.CONFIGURATION;
};

export type MmFile = MmSaveFile | MmConfigurationFile;

export type File = OotFile | MmFile;
