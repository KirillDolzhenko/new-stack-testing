import { createStore, store } from "@/store/state";
import { Provider } from "react-redux";
import Content from "./content/Content";

function ReactApp() {
  return (
    <Provider store={createStore()}>
      <Content />
    </Provider>
  );
}

export default ReactApp;
