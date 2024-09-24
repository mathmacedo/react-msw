import { ResponseBody } from "./todosHandlers";

export const TODOS_MOCK: ResponseBody = {
    "todos": [
        {
            "id": 1,
            "todo": "Do something nice for someone I care about",
            "completed": true,
            "userId": 26
        },
    ]
}

export const TODOS_DEFAULT_ERROR = { status: 401, statusText: 'error ocurred' }