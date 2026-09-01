import { IconMenu2, IconColumns3, IconLayoutRows, IconLayoutBoardSplit } from '@tabler/icons-vue'

type ViewType = 'list' | 'grid' | 'dynamic' | 'column'

const switcherViewOption = [
    {
        value: 'list',
        label: 'List',
        icon: IconMenu2,
    },
    {
        value: 'grid',
        label: 'Grid',
        icon: IconLayoutBoardSplit,
    },
    {
        value: 'dynamic',
        label: 'Dynamic',
        icon: IconLayoutRows,
    },
    {
        value: 'column',
        label: 'Column',
        icon: IconColumns3,
    },
]

export type { ViewType }

export { switcherViewOption }
