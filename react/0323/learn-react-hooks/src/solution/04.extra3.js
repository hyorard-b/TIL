/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import useLocalStorageState from 'hooks/useLocalStorageState';

const { localStorage: storage } = window;
const SQUARE_KEY = 'squares';
/* -------------------------------------------------------------------------- */
/*                                     말판                                    */
/* -------------------------------------------------------------------------- */
const INITIAL_SQUARES = Array(9).fill(null);

/* 게임 상수 -------------------------------------------------------------------- */
const SQUARE_VALUES = {
  o: 'O',
  x: '✕',
}

/* 파생 상태를 계산하는 함수 --------------------------------------------------------- */

function calcNextValue(squares) {
  const { o, x } = SQUARE_VALUES
  // ○의 개수
  const oLength = squares.filter((square) => square === o).length
  // ✕의 개수
  const xLength = squares.filter((square) => square === x).length
  // 결과 반환
  return oLength === xLength ? x : o
}

function calcWinner(squares) {
  // 승리 조건 검사를 위한 라인 집합
  const lines = [
    // 수평선
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // 수직선
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // 대각선
    [0, 4, 8],
    [2, 4, 6],
  ]

  // 라인 집합의 개별 항목 순환 조사
  for (let i = 0, l = lines.length; i < l; ++i) {
    // 개별 항목의 각 원소 추출
    const [x, y, z] = lines[i]
    // 첫번째 원소의 값 할당
    const squareX = squares[x]
    // 첫번째, 두번째, 세번째 원소 값이 모두 같은 지 검사
    if (squareX && squareX === squares[y] && squareX === squares[z]) {
      // 모든 원소의 값이 같다면 승리 조건 충족!
      return squareX
    }
  }

  return null
}

function calcStatus(winner, squares, nextValue) {
  // 조건 1. 게임 종료
  if (winner) {
    return `게임 승자는 ${winner}`
  }
  // 조건 2. 게임 중, 모든 값이 채워져도 승자가 없다면
  else if (squares.every(Boolean)) {
    return `게임 결과는 무승부!`
  }
  // 조건 3. 게임 중, 아직 모든 값이 채워지지 않았다면
  else {
    return `다음 플레이어는 ${nextValue}`
  }
}

/* ----------------------------------------------------------------------------- */

function Board({onSelect, squares, serialize = JSON.stringify, deserialize = JSON.parse} = {}) {

  const renderSquare = (index) => (
    <button
      type="button"
      className="button--square"
      onClick={() => onSelect(index)}
    >
      {squares[index]}
    </button>
  )

  return (
    <>
      <div className="board__row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board__row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board__row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </>
  )
}

export default function TicTacToe() {
  // const [squares, setSquares] = useLocalStorageState(SQUARE_KEY, INITIAL_SQUARES);

  const [history, setHistory] = useState([INITIAL_SQUARES]);

  const [currentStep, setCurrentStep] = useState(0);

  const currentSquares = history[currentStep];

  const nextValue = calcNextValue(currentSquares);
  const winner = calcWinner(currentSquares);
  const status = calcStatus(winner, currentSquares, nextValue);

  const selectSquare = (squareIndex) => {
    if (currentSquares[squareIndex] || winner) return;

    const squaresCopy = [...currentSquares];

    squaresCopy[squareIndex] = nextValue;

    setHistory([...history, squaresCopy]);
    setCurrentStep(currentStep + 1);
  }

  const restart = () => {
    setCurrentStep(0);
    setHistory(INITIAL_SQUARES);
  }

  const renderHistoryItems = history.map((squares, index) => {
    const message = index === 0 ? '게임 스타트!!' : `게임 ${index + 1}번째 기록`
    const isCurrentStep = currentStep === index;

    return (
      <li key={`log-${index}`}>
        <button
          disabled={isCurrentStep}
          onClick={() => setCurrentStep(index)}
        >{message}{currentStep === index && '(현재)'}</button>
      </li>
      )
    })

  return (
    <div className="game">
      <div className="board">
        <Board onSelect={selectSquare} squares={currentSquares} />
        <button type="button" className="button--restart" onClick={restart}>
          게임 다시 시작
        </button>
      </div>
      <div className="info">
        <div className="info__status">
          {status}
        </div>
        <ol className="info__history">{renderHistoryItems}</ol>
      </div>
    </div>
  )
}