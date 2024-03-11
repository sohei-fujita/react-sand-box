import { useLocation, useHistory } from "react-router-dom";

export const Page1Detail1A = () => {
  const location = useLocation();
  const history = useHistory();

  const onClickBack = () => history.goBack();
  console.log(location);
  return (
    <div>
      <h1>Page1Detail1Aページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
