import { css } from "@emotion/react";
import { useEffect } from "react";

const Fallback = ({ onMounted, onUnmounted }: { onMounted?: () => void, onUnmounted?: () => void }) => {

  useEffect(() => {
    onMounted?.();
    return () => {
      onUnmounted?.();
    };
  }, [])

  return (
    <div
      css={
        css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >

    </div>
  )
}

export default Fallback;