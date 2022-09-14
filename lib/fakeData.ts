import { OotSaveFile, GameId, FileType, OotConfigurationFile, OotRandomizerSeedFile } from 'types/file';

const fakeOotSave1: OotSaveFile = {
  id: '1',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.0',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.SAVE,
  typeSpecific: {
    saveFormat: 'v1',
  },
  blob: {
    name: 'Proxy',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotSave2: OotSaveFile = {
  id: '2',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.SAVE,
  typeSpecific: {
    saveFormat: 'v2',
  },
  blob: {
    name: 'Test',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotSave3: OotSaveFile = {
  id: '3',
  userId: '333',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.SAVE,
  typeSpecific: {
    saveFormat: 'v2',
  },
  blob: {
    name: 'Test',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotConfiguration1: OotConfigurationFile = {
  id: '4',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.0',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.CONFIGURATION,
  blob: {
    name: 'Main',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotConfiguration2: OotConfigurationFile = {
  id: '5',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.CONFIGURATION,
  blob: {
    name: 'Steam Deck',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotConfiguration3: OotConfigurationFile = {
  id: '6',
  userId: '333',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.CONFIGURATION,
  blob: {
    name: 'Steam Deck',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotRandomizerSeed1: OotRandomizerSeedFile = {
  id: '7',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.0',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.RANDOMIZER_SEED,
  blob: {
    name: 'Hell Mode',
    seed: '48499',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotRandomizerSeed2: OotRandomizerSeedFile = {
  id: '8',
  userId: '84803555369684992',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.RANDOMIZER_SEED,
  blob: {
    name: '11/13/21 tournament',
    seed: '98495',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

const fakeOotRandomizerSeed3: OotRandomizerSeedFile = {
  id: '9',
  userId: '333',
  gameId: GameId.OOT,
  gameSpecific: {
    sohVersion: '1.0.2',
    romVersion: 'Debug PAL GC',
  },
  type: FileType.RANDOMIZER_SEED,
  blob: {
    name: '11/13/21 tournament',
    seed: '39502',
  },
  md5: 'blah',
  created_at: new Date(),
  updated_at: new Date(),
};

export const fakeFiles = [
  fakeOotSave1,
  fakeOotSave2,
  fakeOotSave3,
  fakeOotConfiguration1,
  fakeOotConfiguration2,
  fakeOotConfiguration3,
  fakeOotRandomizerSeed1,
  fakeOotRandomizerSeed2,
  fakeOotRandomizerSeed3,
];
