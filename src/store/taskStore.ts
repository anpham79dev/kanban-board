import { ref } from 'vue'
import { steps } from '@/constant/constant'
import type { KanbanColumn } from '@/types/task'

const columns = ref<KanbanColumn[]>(steps.map((step) => ({ ...step, tasks: [] })))

export const useTaskStore = () => {
    return { columns }
}
