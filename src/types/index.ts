// This file exports TypeScript interfaces and types used throughout the application.

export type Mood = 'happy' | 'sad' | 'neutral';

export interface JournalEntry {
    id: string;
    moodId: string;
    content: string;
    createdAt: Date;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    error?: string;
}