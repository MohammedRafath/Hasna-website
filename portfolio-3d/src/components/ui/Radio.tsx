import styled from 'styled-components';

const Radio = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <input type="checkbox" id="rollToggle" className="roll-toggle" />
                <div className="result">8</div>
                <div className="dice-area">
                    <div className="dice dice1">
                        <div className="face front" data-value={1}>
                            <div className="dots"><span /></div>
                        </div>
                        <div className="face back" data-value={2}>
                            <div className="dots"><span /><span /></div>
                        </div>
                        <div className="face right" data-value={3}>
                            <div className="dots"><span /><span /><span /></div>
                        </div>
                        <div className="face left" data-value={4}>
                            <div className="dots">
                                <span /><span /><span /><span />
                            </div>
                        </div>
                        <div className="face top" data-value={5}>
                            <div className="dots">
                                <span /><span /><span /><span /><span />
                            </div>
                        </div>
                        <div className="face bottom" data-value={6}>
                            <div className="dots">
                                <span /><span /><span /><span /><span /><span />
                            </div>
                        </div>
                    </div>
                    <div className="dice dice2">
                        <div className="face front" data-value={1}>
                            <div className="dots"><span /></div>
                        </div>
                        <div className="face back" data-value={2}>
                            <div className="dots"><span /><span /></div>
                        </div>
                        <div className="face right" data-value={3}>
                            <div className="dots"><span /><span /><span /></div>
                        </div>
                        <div className="face left" data-value={4}>
                            <div className="dots">
                                <span /><span /><span /><span />
                            </div>
                        </div>
                        <div className="face top" data-value={5}>
                            <div className="dots">
                                <span /><span /><span /><span /><span />
                            </div>
                        </div>
                        <div className="face bottom" data-value={6}>
                            <div className="dots">
                                <span /><span /><span /><span /><span /><span />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="controls">
                    <label htmlFor="rollToggle" className="btn"><span className="btn-text">ROLL</span><span className="btn-text-stop">STOP</span></label>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .roll-toggle {
    display: none;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    transform-style: preserve-3d;
    z-index: 1;
  }

  .result {
    position: absolute;
    top: calc(50% + 90px);
    left: 50%;
    transform: translateX(-50%) translateY(0) scale(0);
    font-size: 60px;
    font-weight: 900;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: #000;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    opacity: 0;
    z-index: 100;
    pointer-events: none;
    letter-spacing: 4px;
  }

  .roll-toggle:not(:checked) ~ .result {
    animation: fall-number 2.5s cubic-bezier(0.4, 0, 0.6, 1) 0.8s forwards;
  }

  @keyframes fall-number {
    0% {
      transform: translateX(-50%) translateY(-30px) scale(0);
      opacity: 0;
    }
    15% {
      transform: translateX(-50%) translateY(0) scale(1.1);
      opacity: 1;
    }
    25%,
    45% {
      transform: translateX(-50%) translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(200px) scale(0.6);
      opacity: 0;
    }
  }

  .dice-area {
    display: flex;
    gap: 60px;
    transform-style: preserve-3d;
    z-index: 10;
    position: relative;
    transform: scale(0.7);
  }

  .dice-area::before {
    content: "";
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 360px;
    height: 35px;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.12) 40%,
      rgba(0, 0, 0, 0.06) 60%,
      transparent 80%
    );
    border-radius: 50%;
    filter: blur(15px);
  }

  .dice-area::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 320px;
    height: 50px;
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.15) 0%,
      rgba(0, 0, 0, 0.1) 35%,
      rgba(0, 0, 0, 0.05) 60%,
      transparent 80%
    );
    border-radius: 50%;
    filter: blur(20px);
  }

  .dice {
    width: 90px;
    height: 90px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-25deg) rotateY(-15deg);
    animation: float 8s ease-in-out infinite;
  }

  .dice2 {
    animation-delay: 4s;
  }

  @keyframes float {
    0%,
    100% {
      transform: rotateX(-35deg) rotateY(-45deg) translateY(0);
    }
    25% {
      transform: rotateX(-25deg) rotateY(25deg) translateY(-20px);
    }
    50% {
      transform: rotateX(-45deg) rotateY(55deg) translateY(0);
    }
    75% {
      transform: rotateX(-30deg) rotateY(-25deg) translateY(-20px);
    }
  }

  .roll-toggle:checked ~ .dice-area .dice {
    animation: roll 1.2s linear infinite !important;
  }

  .roll-toggle:checked ~ .dice-area .dice2 {
    animation: roll 1s linear infinite !important;
  }

  @keyframes roll {
    to {
      transform: rotateX(360deg) rotateY(360deg);
    }
  }

  .roll-toggle:not(:checked) ~ .dice-area .dice1 {
    animation:
      float 8s ease-in-out infinite,
      stop-at-5 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .roll-toggle:not(:checked) ~ .dice-area .dice2 {
    animation:
      float 8s ease-in-out 4s infinite,
      stop-at-3 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  @keyframes stop-at-5 {
    to {
      transform: rotateX(-70deg) rotateY(-15deg);
    }
  }

  @keyframes stop-at-3 {
    to {
      transform: rotateX(-25deg) rotateY(-105deg);
    }
  }

  .face {
    position: absolute;
    width: 90px;
    height: 90px;
    background: linear-gradient(145deg, #fff 0%, #f8f8f8 50%, #f2f2f2 100%);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:
      inset 3px 3px 8px rgba(0, 0, 0, 0.08),
      inset -3px -3px 8px rgba(0, 0, 0, 0.08),
      0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .face::before {
    content: "";
    position: absolute;
    inset: 1px;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      transparent 50%
    );
    border-radius: 7px;
    pointer-events: none;
  }

  .front {
    transform: rotateY(0deg) translateZ(45px);
  }

  .back {
    transform: rotateY(180deg) translateZ(45px);
  }

  .right {
    transform: rotateY(90deg) translateZ(45px);
  }

  .left {
    transform: rotateY(-90deg) translateZ(45px);
  }

  .top {
    transform: rotateX(90deg) translateZ(45px);
  }

  .bottom {
    transform: rotateX(-90deg) translateZ(45px);
  }

  .dots {
    display: grid;
    padding: 15px;
    gap: 15px;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  .face[data-value="1"] .dots {
    grid-template: 1fr / 1fr;
    place-items: center;
  }

  .face[data-value="2"] .dots {
    grid-template: 1fr 1fr / 1fr;
    place-items: center;
  }

  .face[data-value="3"] .dots {
    grid-template: 1fr 1fr 1fr / 1fr;
    place-items: center;
  }

  .face[data-value="4"] .dots {
    grid-template: 1fr 1fr / 1fr 1fr;
  }

  .face[data-value="5"] .dots {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
  }

  .face[data-value="6"] .dots {
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
  }

  .face[data-value="5"] .dots span:nth-child(3) {
    grid-column: 1 / -1;
    justify-self: center;
  }

  .dots span {
    width: 12px;
    height: 12px;
    background: radial-gradient(
      circle at 40% 40%,
      rgba(40, 40, 40, 1) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    border-radius: 50%;
    box-shadow:
      inset 1px 1px 3px rgba(0, 0, 0, 0.8),
      inset -1px -1px 2px rgba(255, 255, 255, 0.1),
      0 1px 2px rgba(0, 0, 0, 0.3);
  }

  .controls {
    display: flex;
    gap: 30px;
    z-index: 10;
    position: relative;
    transform: scale(0.7);
  }

  .controls::before {
    content: "";
    position: absolute;
    width: 155px;
    height: 72px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 36px;
    background: rgba(0, 0, 0, 0.08);
    filter: blur(4px);
    z-index: -1;
  }

  .controls::after {
    content: "";
    position: absolute;
    width: 170px;
    height: 90px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      ellipse at top,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0.15) 50%,
      rgba(0, 0, 0, 0.05) 75%,
      transparent 100%
    );
    border-radius: 85px 85px 0 0;
    filter: blur(25px);
    z-index: -1;
  }

  .btn {
    width: 140px;
    height: 60px;
    border-radius: 30px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow:
      -10px -10px 20px rgba(255, 255, 255, 1),
      10px 10px 20px rgba(0, 0, 0, 0.25);
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: -3px;
    border-radius: 33px;
    padding: 3px;
    background: linear-gradient(
      45deg,
      rgba(0, 230, 160, 0) 0%,
      rgba(0, 230, 160, 0.4) 25%,
      rgba(0, 230, 160, 1) 50%,
      rgba(0, 230, 160, 0.4) 75%,
      rgba(0, 230, 160, 0) 100%
    );
    background-size: 200% 200%;
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rotate-gradient 3s linear infinite;
    pointer-events: none;
  }

  @keyframes rotate-gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .btn::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 20%;
    right: 20%;
    height: 25%;
    border-radius: 30px 30px 0 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 100%
    );
    pointer-events: none;
  }

  .btn span {
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 5px;
    color: #00cc8e;
    text-shadow:
      1px 1px 2px rgba(255, 255, 255, 0.8),
      -1px -1px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .btn-text-stop {
    display: none;
  }

  .roll-toggle:checked ~ .controls .btn {
    background: linear-gradient(180deg, #ff3366 0%, #ee2255 100%);
    animation: pulse-neuro 0.8s ease-in-out infinite;
  }

  @keyframes pulse-neuro {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.02);
    }
  }

  .roll-toggle:checked ~ .controls .btn::before {
    background: linear-gradient(
      45deg,
      rgba(255, 51, 102, 0) 0%,
      rgba(255, 51, 102, 0.4) 25%,
      rgba(255, 51, 102, 1) 50%,
      rgba(255, 51, 102, 0.4) 75%,
      rgba(255, 51, 102, 0) 100%
    );
    background-size: 200% 200%;
    animation: rotate-gradient 2s linear infinite;
  }

  .roll-toggle:checked ~ .controls .btn span {
    color: #fff;
  }

  .roll-toggle:checked ~ .controls .btn-text {
    display: none;
  }

  .roll-toggle:checked ~ .controls .btn-text-stop {
    display: block;
  }

  .btn:active {
    transform: scale(0.98);
    box-shadow:
      inset -4px -4px 12px rgba(0, 0, 0, 0.2),
      inset 4px 4px 12px rgba(255, 255, 255, 0.5);
  }`;

export default Radio;
