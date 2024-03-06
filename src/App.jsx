import { useState, useCallback } from "react";
import "./styles.css";
import { ChildArea } from "./ChildArea";
import { CssModules } from "./components/CssModules";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };

  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <CssModules />
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
