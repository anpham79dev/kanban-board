interface Step {
    id: number
    step_title: string
}

interface Task {
    task_title: string
    priority: number | null
    step_id: number
    assignee_id: number | null
    author_id: number
    created_at: Date | null
}

interface KanbanColumn extends Step {
    tasks: Task[]
}

export type { Step, Task, KanbanColumn }
