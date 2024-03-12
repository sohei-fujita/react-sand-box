import styled from "styled-components";
import { BaseButton } from "./BaseButoon";

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
  }
`;
