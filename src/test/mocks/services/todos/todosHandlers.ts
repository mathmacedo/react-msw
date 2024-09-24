import { http, HttpResponse } from "msw"
import { TODOS_DEFAULT_ERROR, TODOS_MOCK } from "./todosMock"

type Todo = {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

export type ResponseBody = {
    todos: Todo[]
}


export const todosHandlers =  http.get<never, null, ResponseBody>('https://dummyjson.com/todos', () => {
    return HttpResponse.json(TODOS_MOCK, { status: 200 })
})

export const todosErrorHandlers = http.get('https://dummyjson.com/todos', () => {
    return new HttpResponse(null, TODOS_DEFAULT_ERROR)
})

// daqui em diante poderiam ter outros handlers associados ao serviço de todos
// ex http.post, http.put, http.delete, etc 