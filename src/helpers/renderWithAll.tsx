import Content from "@/reduxTesting/content/Content";
import AppRouter from "@/routers/AppRouter";
import { createStore, RootState } from "@/store/state";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

function ComponentWithAll(path: string = "/", store?: RootState) {
  return (
    <Provider store={createStore(store)}>
      <MemoryRouter initialEntries={[path]}>
        <AppRouter />
        <Content />
      </MemoryRouter>
    </Provider>
  );
}

function renderWithAll(path: string = "/", store?: RootState) {
  return render(ComponentWithAll(path, store));
}

export default renderWithAll;
