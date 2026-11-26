import { describe, it, expect } from 'vitest'
import { review, isDue } from './leitner'
import type { CardState } from '../types/card'

const NOW = new Date('2026-11-26T12:00:00Z')

function makeCard(overrides: Partial<CardState> = {}): CardState {
    return {
        moveId: 'Kazuya-f,F+2',
        field: 'startup',
        box: 1,
        lastReviewed: NOW.toISOString(),
        ...overrides,
    }
}

describe('review', () => {
    it('promotes a card one box on a correct answer', () => {
        const result = review(makeCard({ box: 2 }), true, NOW)
        expect(result.box).toBe(3)
    })

    it('keeps a box 5 card in box 5 on a correct answer', () => {
        expect(review(makeCard({ box: 5 }), true, NOW).box).toBe(5)
    })

    it('resets to box 1 on a wrong answer', () => {
        expect(review(makeCard({ box: 4 }), false, NOW).box).toBe(1)
    })

    it('updates lastReviewed', () => {
        expect(review(makeCard(), true, NOW).lastReviewed).toBe(NOW.toISOString())
    })
})

describe('isDue', () => {
    const DAY = 24 * 60 * 60 * 1000

    it('is not due just before the interval ends', () => {
        const card = makeCard({ box: 2 })
        const almost = new Date(NOW.getTime() + 2 * DAY - 1000)
        expect(isDue(card, almost)).toBe(false)
    })

    it('is due once the interval has passed', () => {
        const card = makeCard({ box: 2 })
        const later = new Date(NOW.getTime() + 2 * DAY + 1000)
        expect(isDue(card, later)).toBe(true)
    })
})
