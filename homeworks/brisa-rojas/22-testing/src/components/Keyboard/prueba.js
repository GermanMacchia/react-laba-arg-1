import Keyboard from "./Keyboard";
import { render, cleanup, screen } from "@testing-library/react";


render(<Keyboard />);
const keyboardElement = document.querySelector(".keyboard");
console.log((keyboardElement.children.length));
