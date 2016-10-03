export const KEYWORD_CHANGED = 'KEYWORD_CHANGED'

export function keywordChanged(keyword) {
    return {
        type: KEYWORD_CHANGED,
        payload: keyword
    }
}
