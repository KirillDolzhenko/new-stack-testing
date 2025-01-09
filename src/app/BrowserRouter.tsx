import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

function BrowserContainer({ children }: { children: ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default BrowserContainer;
