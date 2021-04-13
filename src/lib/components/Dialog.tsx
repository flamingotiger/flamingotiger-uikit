import React from "react";
import { Fragment } from "react";
import { css } from "@emotion/react";
import Button, { BUTTON_APPERANCE } from "../components/Button";
import ButtonGroup, { BUTTON_GROUP_ALIGN } from "../components/ButtonGroup";
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

export type DialogProps = {
  /** 팝업 보임 여부 */
  visible?: boolean;
  /** 팝업 내용 */
  title?: string;
  description?: string;
  children?: React.ReactNode;
  /** 버튼들 숨김 여부 */
  hideButtons?: boolean;
  /** 취소 버튼 숨김 여부 */
  cancellable?: boolean;
  /** 취소 버튼 텍스트 */
  cancelText?: string;
  /** 확인 버튼 텍스트 */
  confirmText?: string;
  /** 흰 박스 스타일 */
  className?: string;
  /** 취소시 기능 */
  onCancel?: () => void;
  /** 확인시 기능 */
  onConfirm?: () => void;
  /** 팝업 닫기 기능 */
  onClose?:() => void;
};
/** 팝업을 사용하고 싶을 땐 `Dialog` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 기본 배경 체워짐 형태로 사용되며, 버튼 숨김처리, 버튼 액션등을 선택할 수 있습니다.
 * @param visible
 * @param title
 * @param description
 * @param children
 * @param hideButtons
 * @param cancellable
 * @param cancelText
 * @param confirmText
 * @param className
 * @param onCancel
 * @param onConfirm
 */
const Dialog: React.FC<DialogProps> = ({
  visible = false,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText = "취소",
  confirmText = "확인",
  children,
  className,
  onCancel,
  onConfirm,
  onClose
}) => {
  if (!visible) return null;

  return (
    <Fragment>
      <DarkLayer onClick={onClose}/>
      <WhiteBoxWrapper>
        <WhiteBox className={className}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <ButtonGroup style={{ marginTop: "1rem" }} buttonGroupAlign={BUTTON_GROUP_ALIGN.RIGHT}>
              {cancellable && (
                <Button apperance={BUTTON_APPERANCE.TERTIARY} onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </WhiteBox>
      </WhiteBoxWrapper>
    </Fragment>
  );
};

export default Dialog;
