export const PAGE_INDEX_SELECTED = 'PAGE_INDEX_SELECTED'
export const PAGE_INDEX_RESET = 'PAGE_INDEX_RESET'

export function pageIndexSelected(index) {
    return {
        type: PAGE_INDEX_SELECTED,
        payload: index
    }
}

export function pageIndexReset() {
    return {
        type: PAGE_INDEX_RESET
    }
}