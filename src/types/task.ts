interface Step {
    id: number
    step_title: string
}

interface Task {
    id: number
    task_title: string
    description: string | null
    priority: number | null
    step_id: number
    assignee_ids: number[]
    author_id: number
    comment_count: number
    created_at: Date | null
}

interface KanbanColumn extends Step {
    tasks: Task[]
}

export type { Step, Task, KanbanColumn }
