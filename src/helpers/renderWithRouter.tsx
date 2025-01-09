import AppRouter from "@/routers/AppRouter";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

function ComponentWithRouter(path: string = "/", children: ReactNode = <></>) {
  return (
    <MemoryRouter initialEntries={[path]}>
      <AppRouter />
      {children}
    </MemoryRouter>
  );
}

function renderWithRouter(path: string = "/", children: ReactNode = <></>) {
  return render(ComponentWithRouter(path, children));
}

export default renderWithRouter;
