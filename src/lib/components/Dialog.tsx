import React from "react";
import { Fragment } from "react";
import { css } from "@emotion/react";
import Button, { BUTTON_THEME } from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import styled from "@emotion/styled";

const fullscreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DarkLayer = styled.div`
  ${fullscreen};
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const WhiteBoxWrapper = styled.div`
  ${fullscreen};
  z-index: 15;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteBox = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  padding: 2rem;

  h3 {
    font-size: 1.5rem;
    color: #343a40;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.125rem;
    margin: 0;
    color: #868e96;
  }
`;

export type DialogProps = {};
const Dialog = (props: DialogProps) => {
  return (
    <Fragment>
      <DarkLayer />
      <WhiteBoxWrapper>
        <WhiteBox>
          <h3>포스트 삭제</h3>
          <p>포스트를 정말로 삭제하시겠습니까?</p>
          <ButtonGroup style={{marginTop: '1rem'}}>
            <Button theme={BUTTON_THEME.TERTIARY}>취소</Button>
            <Button>삭제</Button>
          </ButtonGroup>
        </WhiteBox>
      </WhiteBoxWrapper>
    </Fragment>
  );
};

export default Dialog;
