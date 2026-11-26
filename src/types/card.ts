export type QuestionField = 'startup' | 'block' | 'hit' | 'counterHit' | 'name'

export interface CardState {
    moveId: string
    field: QuestionField
    box: 1 | 2 | 3 | 4 | 5
    lastReviewed: string
}
