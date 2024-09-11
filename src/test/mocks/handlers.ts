import { http, HttpResponse } from 'msw';


type Todo = {
    id: number,
    todo: string,
    completed: boolean,
    userId: number
}

type ResponseBody = {
    todos: Todo[]
}

export const handlers = [
    http.get<never, null, ResponseBody>('https://dummyjson.com/todos', () => {
        return HttpResponse.json({
            "todos": [
                {
                    "id": 1,
                    "todo": "Do something nice for someone I care about",
                    "completed": true,
                    "userId": 26
                },
            ]
        }, { status: 200 })
    }),
]

export const errorHandlers = http.get('https://dummyjson.com/todos', () => {
    return new HttpResponse(null, { status: 401, statusText: 'error ocurred' })
})