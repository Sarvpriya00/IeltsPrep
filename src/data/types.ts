export type TestModule = 'home' | 'reading' | 'listening' | 'writing' | 'speaking' | 'drills' | 'errors' | 'analytics' | 'guide';

export type DisplayTheme = 'standard' | 'dark' | 'yellow-on-black';
export type FontSizeOption = 'sm' | 'md' | 'lg';

export interface QuestionItem {
  num?: number;
  text?: string;
  question?: string;
  label?: string;
  answer?: string | string[];
  options?: string[];
  explanation?: string;
  type?: string;
}

export interface QuestionSection {
  type: string;
  instruction: string;
  noteTitle?: string;
  summaryTitle?: string;
  tableTitle?: string;
  headers?: string[];
  rows?: any[];
  boxOptions?: string[];
  items?: QuestionItem[];
  sections?: {
    heading?: string;
    title?: string;
    bullets?: {
      type: string;
      num?: number;
      text?: string;
      answer?: string;
    }[];
  }[];
  questions?: QuestionItem[];
}

export interface ReadingPassage {
  id: number;
  title: string;
  text: string;
  questions: QuestionSection[];
}

export interface ReadingTest {
  id: string;
  book: string;
  testNumber: number;
  title: string;
  passages: ReadingPassage[];
}

export interface ListeningQuestion {
  num: number;
  text: string;
  answer: string;
  options?: string[];
}

export interface ListeningSection {
  partNumber: number;
  title: string;
  audioUrl?: string;
  instruction: string;
  questions: ListeningQuestion[];
  transcript?: string;
}

export interface ListeningTest {
  id: string;
  title: string;
  book: string;
  testNumber: number;
  sections: ListeningSection[];
}

export interface WritingPrompt {
  id: number | string;
  testBook?: string;
  testNumber?: number;
  task: 1 | 2;
  title: string;
  promptText?: string;
  prompt?: string;
  image?: string | null;
  imageUrl?: string;
  targetWords?: number;
  minWords?: number;
  timeLimitMinutes?: number;
  sampleAnswer?: string;
  sampleBand9?: string;
  sampleBand7?: string;
  keyVocabulary?: string[];
  structuralPlan?: string[];
}

export interface SpeakingTopic {
  parts: {
    part: number;
    title: string;
    duration: string;
    topics?: {
      name: string;
      questions: string[];
    }[];
    cards?: {
      id: string;
      topic: string;
      bullets: string[];
      followUp?: string;
    }[];
    fluency?: any;
  }[];
  criteriaRubric?: any;
}

export interface MicroDrillItem {
  id: string;
  category: 'tfng' | 'vocabulary' | 'grammar' | 'linking' | 'collocations';
  title: string;
  instruction: string;
  passageSnippet?: string;
  statement?: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ErrorLogItem {
  id: string;
  module: 'reading' | 'listening' | 'writing' | 'speaking' | 'drills';
  testId?: string;
  questionNum: number;
  questionText: string;
  userAnswer: string;
  correctAnswer: string;
  explanation?: string;
  dateAdded: string;
  tags?: string[];
  notes?: string;
}

export interface UserTestAttempt {
  id: string;
  module: TestModule;
  testId: string;
  date: string;
  score: number;
  totalQuestions: number;
  bandScore: number;
  answers: Record<string, string>;
  timeSpentSeconds: number;
}

export interface CandidateProfile {
  name: string;
  candidateId: string;
  targetBand: number;
  examDate?: string;
}
