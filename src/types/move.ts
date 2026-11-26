export interface Move {
    id: string;
    character: string;
    num: string;
    name?: string;
    altNames?: string[];
    input: string;
    hitLevel?: string;
    damage?: string;
    range?: string;
    startup: string;
    block: string;
    hit?: string;
    counterHit?: string;
    states?: string;
    recovery: string;
    notes: string;
}

export interface CardState {
    moveId: string;
    box: 1 | 2 | 3 | 4 | 5;
    lastReviewed: string;
}
