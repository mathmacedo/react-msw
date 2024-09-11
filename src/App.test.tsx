import App from "./App";
import { server } from "./test/mocks/server";
import { render, screen, userEvent } from "./utils/test-utils";
import { errorHandlers } from "./test/mocks/handlers";
import { http, HttpResponse } from "msw";

describe("App", () => {
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

  it.only("api error scenario on load", async () => {
    server.use(
      http.get("https://dummyjson.com/todos", () => {
        return  new HttpResponse('error ocurred', { status: 401, statusText: "error ocurred" });
      })
    );
    render(<App />);
    expect(screen.queryByText("Todo List")).not.toBeInTheDocument();
    // expect(await screen.findByText("error ocurred")).toBeInTheDocument
  });

});
