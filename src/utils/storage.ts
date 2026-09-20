import { UserTestAttempt, ErrorLogItem, FontSizeOption } from '../data/types';

const STORAGE_KEYS = {
  FONT_SIZE: 'ielts_portal_font_size_v2',
  SESSION_WRITING_PREFIX: 'ielts_cache_writing_',
  SESSION_READING_PREFIX: 'ielts_cache_reading_',
  SESSION_LISTENING_PREFIX: 'ielts_cache_listening_',
};

// In-memory transient storage for session
let memoryAttempts: UserTestAttempt[] = [];
let memoryErrors: ErrorLogItem[] = [];

export const getAttempts = (): UserTestAttempt[] => {
  return memoryAttempts;
};

export const saveAttempt = (attempt: UserTestAttempt): void => {
  memoryAttempts.unshift(attempt);
};

export const getErrorItems = (): ErrorLogItem[] => {
  return memoryErrors;
};

export const saveErrorItem = (item: ErrorLogItem): void => {
  memoryErrors.unshift(item);
};

export const removeErrorItem = (id: string): void => {
  memoryErrors = memoryErrors.filter(e => e.id !== id);
};

// Transient Browser Cache Helpers (Preserves progress across refreshes)
export const saveWritingCache = (testId: string, essayText: string): void => {
  try {
    sessionStorage.setItem(`${STORAGE_KEYS.SESSION_WRITING_PREFIX}${testId}`, essayText);
  } catch (e) {}
};

export const getWritingCache = (testId: string): string => {
  try {
    return sessionStorage.getItem(`${STORAGE_KEYS.SESSION_WRITING_PREFIX}${testId}`) || '';
  } catch (e) {
    return '';
  }
};

export const clearWritingCache = (testId: string): void => {
  try {
    sessionStorage.removeItem(`${STORAGE_KEYS.SESSION_WRITING_PREFIX}${testId}`);
  } catch (e) {}
};

export const saveReadingProgress = (testId: string, answers: Record<number, string>): void => {
  try {
    sessionStorage.setItem(`${STORAGE_KEYS.SESSION_READING_PREFIX}${testId}`, JSON.stringify(answers));
  } catch (e) {}
};

export const getReadingProgress = (testId: string): Record<number, string> => {
  try {
    const data = sessionStorage.getItem(`${STORAGE_KEYS.SESSION_READING_PREFIX}${testId}`);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const clearReadingProgress = (testId: string): void => {
  try {
    sessionStorage.removeItem(`${STORAGE_KEYS.SESSION_READING_PREFIX}${testId}`);
  } catch (e) {}
};

export const saveListeningProgress = (testId: string, answers: Record<number, string>): void => {
  try {
    sessionStorage.setItem(`${STORAGE_KEYS.SESSION_LISTENING_PREFIX}${testId}`, JSON.stringify(answers));
  } catch (e) {}
};

export const getListeningProgress = (testId: string): Record<number, string> => {
  try {
    const data = sessionStorage.getItem(`${STORAGE_KEYS.SESSION_LISTENING_PREFIX}${testId}`);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const clearListeningProgress = (testId: string): void => {
  try {
    sessionStorage.removeItem(`${STORAGE_KEYS.SESSION_LISTENING_PREFIX}${testId}`);
  } catch (e) {}
};

export const getFontSizeOption = (): FontSizeOption => {
  try {
    return (sessionStorage.getItem(STORAGE_KEYS.FONT_SIZE) as FontSizeOption) || 'md';
  } catch (e) {
    return 'md';
  }
};

export const setFontSizeOption = (size: FontSizeOption): void => {
  try {
    sessionStorage.setItem(STORAGE_KEYS.FONT_SIZE, size);
  } catch (e) {}
};

export const calculateIELTSBand = (rawScore: number, module: 'reading' | 'listening'): number => {
  if (module === 'listening') {
    if (rawScore >= 39) return 9.0;
    if (rawScore >= 37) return 8.5;
    if (rawScore >= 35) return 8.0;
    if (rawScore >= 32) return 7.5;
    if (rawScore >= 30) return 7.0;
    if (rawScore >= 26) return 6.5;
    if (rawScore >= 23) return 6.0;
    if (rawScore >= 18) return 5.5;
    if (rawScore >= 16) return 5.0;
    if (rawScore >= 13) return 4.5;
    if (rawScore >= 10) return 4.0;
    return 3.5;
  } else {
    if (rawScore >= 39) return 9.0;
    if (rawScore >= 37) return 8.5;
    if (rawScore >= 35) return 8.0;
    if (rawScore >= 33) return 7.5;
    if (rawScore >= 30) return 7.0;
    if (rawScore >= 27) return 6.5;
    if (rawScore >= 23) return 6.0;
    if (rawScore >= 19) return 5.5;
    if (rawScore >= 15) return 5.0;
    if (rawScore >= 13) return 4.5;
    if (rawScore >= 10) return 4.0;
    return 3.5;
  }
};
