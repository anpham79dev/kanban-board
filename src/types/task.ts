interface Step {
    id: number
    step_title: string
}

interface Tag {
    id: number
    tag_title: string
    color: string
}

interface Checklist {
    done: number
    total: number
}

interface Task {
    id: number
    task_title: string
    priority: number | null
    step_id: number
    assignee_id: number | null
    author_id: number
    tag_ids: number[]
    checklist: Checklist | null
    created_at: Date | null
}

interface KanbanColumn extends Step {
    tasks: Task[]
}

export type { Step, Tag, Checklist, Task, KanbanColumn }
