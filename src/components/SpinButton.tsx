import React, { useState, MouseEvent } from "react";
import "./SpinButton.css";

const SpinButton: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const toggleTooltip = (event: MouseEvent<HTMLDivElement>) => {
    setIsTooltipVisible(!isTooltipVisible);
  };

  return (
    <section className="spinButtonContainer">
      <div>
        <h1>승객 선택</h1>
        <div className="spinButtonLabel">
          <label>성인</label>
          <div
            className="helpIcon"
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            ?
            {isTooltipVisible && (
              <p className="tooltip">최대 인원수는 3명까지 가능합니다</p>
            )}
          </div>
        </div>
        <button
          onClick={decrement}
          aria-label="성인 탑승자 한명 줄이기"
          className="spinButton"
        >
          -
        </button>
        <input
          type="text"
          role="spinbutton"
          readOnly
          className="spinButtonInput"
          value={count}
          aria-label={`성인 승객 ${count}`}
        />
        <button
          onClick={increment}
          aria-label="성인 탑승자 한명 늘리기"
          className="spinButton"
        >
          +
        </button>
        <p aria-live="polite" className="hidden">
          성인 승객 ${count}
        </p>
      </div>
    </section>
  );
};

export default SpinButton;
