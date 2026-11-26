import type { CardState } from '../types/card'

const INTERVAL_DAYS = [1, 2, 4, 8, 16]
const DAY_MS = 24 * 60 * 60 * 1000;

export function isDue(card: CardState, now: Date): boolean {
    const due = new Date(card.lastReviewed).getTime() + INTERVAL_DAYS[card.box - 1] * DAY_MS
    return now.getTime() >= due;
}

export function review(card: CardState, correct: boolean, now: Date): CardState {
    const box = correct ? (Math.min(card.box + 1, 5) as CardState['box']) : 1
    return { ...card, box, lastReviewed: now.toISOString() }
}
