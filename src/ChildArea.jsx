import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "violet",
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  // 意図的に再レンダリングの際に負荷をかける
  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  console.log(data);

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
