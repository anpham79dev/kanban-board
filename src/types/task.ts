interface Step {
    id: number
    step_title: string
}

interface Task {
    id: number
    task_title: string
    task_description: string | null
    task_priority: number | null
    task_deadline: Date | null
    step_id: number
    assignee_ids: number[]
    author_id: number
    comment_count: number
    created_at: Date | null
}

interface KanbanColumn extends Step {
    tasks: Task[]
}

interface AddTaskForm {
    task_title: string
    task_description: string
    task_priority: number | null
    task_deadline: string | null
}

const TaskPriority = [
    {
        title: 'very high',
        value: 4,
    },
    {
        title: 'high',
        value: 3,
    },
    {
        title: 'medium',
        value: 2,
    },
    {
        title: 'low',
        value: 1,
    },
]

export type { Step, Task, KanbanColumn, AddTaskForm }

export { TaskPriority }
