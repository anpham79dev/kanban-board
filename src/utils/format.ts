const formattedDate = (date: Date | null) => {
    if (!date) return null

    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })
}

interface PriorityInfo {
    label: string
    color: string
}

const priorityMap: Record<number, PriorityInfo> = {
    1: { label: 'Low', color: 'green' },
    2: { label: 'Medium', color: 'orange' },
    3: { label: 'High', color: 'red' },
}

const priorityInfo = (priority: number | null): PriorityInfo | null =>
    priority !== null ? (priorityMap[priority] ?? null) : null

export { formattedDate, priorityInfo }
