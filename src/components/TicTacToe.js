import React, { Fragment, useEffect, useReducer, useState } from "react";

const initialState = {
  pos1: "",
  pos2: "",
  pos3: "",
  pos4: "",
  pos5: "",
  pos6: "",
  pos7: "",
  pos8: "",
  pos9: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case 1:
      return { ...state, pos1: "X", color1: action.color };
    case 2:
      return { ...state, pos2: "X", color2: action.color };
    case 3:
      return { ...state, pos3: "X", color3: action.color };
    case 4:
      return { ...state, pos4: "X", color4: action.color };
    case 5:
      return { ...state, pos5: "X", color5: action.color };
    case 6:
      return { ...state, pos6: "X", color6: action.color };
    case 7:
      return { ...state, pos7: "X", color7: action.color };
    case 8:
      return { ...state, pos8: "X", color8: action.color };
    case 9:
      return { ...state, pos9: "X", color9: action.color };
    default:
      return initialState;
  }
};

const TicTacToe = () => {
  const [click, dispatch] = useReducer(reducer, initialState);
  const [turn, setTurn] = useState(true);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);

  const game = () => {
    const { pos1, pos2, pos3, pos4, pos5, pos6, pos7, pos8, pos9 } = click;
    if (
      (pos1 && pos2 && pos3) ||
      (pos4 && pos5 && pos6) ||
      (pos7 && pos8 && pos9) ||
      (pos1 && pos4 && pos7) ||
      (pos2 && pos5 && pos8) ||
      (pos3 && pos6 && pos9) ||
      (pos1 && pos5 && pos9) ||
      (pos7 && pos5 && pos3) === "X"
    ) {
      if (turn) {
        setRed(red + 1);
      } else {
        setBlue(blue + 1);
      }
      setTimeout(() => {
        alert(turn ? "Player Red Wins" : "Player Blue Wins");
        dispatch({ type: null });
      }, 200);
    }
  };

  useEffect(() => {
    game();
  }, [turn]);
  return (
    <Fragment>
      <div className="col-lg-6 col-12 mt-3">
        <table className="table table-bordered tic-tac-toe">
          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 1, color: turn });
                  }}
                  disabled={click.pos1 ? "disabled" : ""}
                >
                  <span
                    className={click.color1 ? "text-danger" : "text-primary"}
                  >
                    {click.pos1}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 2, color: turn });
                  }}
                  disabled={click.pos2 ? "disabled" : ""}
                >
                  <span
                    className={click.color2 ? "text-danger" : "text-primary"}
                  >
                    {click.pos2}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 3, color: turn });
                  }}
                  disabled={click.pos3 ? "disabled" : ""}
                >
                  <span
                    className={click.color3 ? "text-danger" : "text-primary"}
                  >
                    {click.pos3}
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 4, color: turn });
                  }}
                  disabled={click.pos4 ? "disabled" : ""}
                >
                  <span
                    className={click.color4 ? "text-danger" : "text-primary"}
                  >
                    {click.pos4}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 5, color: turn });
                  }}
                  disabled={click.pos5 ? "disabled" : ""}
                >
                  <span
                    className={click.color5 ? "text-danger" : "text-primary"}
                  >
                    {click.pos5}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 6, color: turn });
                  }}
                  disabled={click.pos6 ? "disabled" : ""}
                >
                  <span
                    className={click.color6 ? "text-danger" : "text-primary"}
                  >
                    {click.pos6}
                  </span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 7, color: turn });
                  }}
                  disabled={click.pos7 ? "disabled" : ""}
                >
                  <span
                    className={click.color7 ? "text-danger" : "text-primary"}
                  >
                    {click.pos7}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 8, color: turn });
                  }}
                  disabled={click.pos8 ? "disabled" : ""}
                >
                  <span
                    className={click.color8 ? "text-danger" : "text-primary"}
                  >
                    {click.pos8}
                  </span>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-block"
                  onClick={() => {
                    setTurn(!turn);
                    dispatch({ type: 9, color: turn });
                  }}
                  disabled={click.pos9 ? "disabled" : ""}
                >
                  <span
                    className={click.color9 ? "text-danger" : "text-primary"}
                  >
                    {click.pos9}
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="col-lg-3 col-12 mt-3 pt-3">
        <div className="turn">
          <h2 className="text-center">Turn</h2>
          <h3 className="text-danger text-center">
            <span className={turn ? "text-danger" : "text-primary"}>
              {turn ? "Player Red" : "Player Blue"}
            </span>
          </h3>
        </div>
        <div className="wins mt-5">
          <h2 className="text-center">Wins</h2>
          <h3 className="text-danger text-center">
            Red : <span>{red}</span>
          </h3>
          <h3 className="text-primary text-center mb-5">
            Blue : <span>{blue}</span>
          </h3>
          <button
            className="btn btn-outline-success btn-block"
            onClick={() => {
              dispatch({ type: null });
            }}
          >
            Clear
          </button>
          <br />
          <button
            className="btn btn-outline-danger btn-block "
            onClick={() => {
              if (window.confirm("Are You Sure?")) {
                dispatch({ type: null });
                setRed(0);
                setBlue(0);
              }
            }}
          >
            Reset Game
          </button>
        </div>
      </div>
    </Fragment>
  );
};
export default TicTacToe;
