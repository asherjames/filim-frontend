export const PAGE_INDEX_SELECTED = 'PAGE_INDEX_SELECTED'

export function pageIndexSelected(index) {
    return {
        type: PAGE_INDEX_SELECTED,
        payload: index
    }
}