export type LevelResult = {
  levelId: string;
  bestTime: number;
  bestCollectibles: number;
};

// Storage data is unknown until the persistence owner validates this DTO.
export type SavedProgress = {
  version: 1;
  completed: LevelResult[];
  soundEnabled: boolean;
  reducedMotion: boolean;
};
