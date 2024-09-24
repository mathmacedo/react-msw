import App from "./App";
import { server } from "./test/mocks/server";
import { render, screen, userEvent } from "./utils/test-utils";
import { todosErrorHandlers, todosHandlers } from "./test/mocks/services/todos/todosHandlers";

describe("App", () => {
  beforeEach(() => {
      server.use(todosHandlers);
  });
  
  it("checking whether vite and react text is available", () => {
    render(<App />);
    const text = screen.getByText("Vite + React");
    expect(text).toBeInTheDocument();
  });
  
  it("should increment count on click", async () => {
    render(<App />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });

  it("api success secnario on load", async () => {
    render(<App />);
    expect(await screen.findByText("Todo List : 1")).toBeInTheDocument();
  });

  it("api error scenario on load", async () => {
    // chamamos os handlers dessa forma
    server.use(todosErrorHandlers);
    render(<App />);
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
    // expect(await screen.findByText("error ocurred")).toBeInTheDocument
  });

});
