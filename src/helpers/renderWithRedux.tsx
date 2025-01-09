import Content from "@/reduxTesting/content/Content";
import { createStore, RootState } from "@/store/state";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

function ComponentWithRedux(store?: RootState) {
  return (
    <Provider store={createStore(store)}>
      <Content />
    </Provider>
  );
}

function renderWithRedux(store?: RootState) {
  return render(ComponentWithRedux(store));
}

export default renderWithRedux;
