export const SORTER_SELECTED = 'SORTER_SELECTED'

export function sorterSelected(sorter) {
    return {
        type: SORTER_SELECTED,
        payload: sorter
    }
}
