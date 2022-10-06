import { isReturnStatement } from "typescript";
import Board from "../types/BoardI";

export const allowedPawn = (board: Board, color: "WHITE" | "BLACK", row: number, column: number) => {
	console.log(board);
	let legalMoves: Array<{ row: number; column: number }> = [];
	let movesUp = color === "BLACK" ? 1 : -1;
	let startPosition = color === "BLACK" ? 1 : 6;
	//Check for start position moves
	if (row === startPosition) {
		if (board.pieces[row + 2 * movesUp][column] === null) {
			legalMoves = [...legalMoves, { row: row + 2 * movesUp, column }];
		}
	}
	// forward
	if (board.pieces[row + 1 * movesUp][column] === null) {
		legalMoves = [...legalMoves, { row: row + 1 * movesUp, column }];
	}
	//attack right
	if (board.pieces[row + 1 * movesUp][column + 1] !== null) {
		legalMoves = [...legalMoves, { row: row + 1 * movesUp, column: column + 1 }];
	}
	//attack left
	if (board.pieces[row + 1 * movesUp][column - 1] !== null) {
		legalMoves = [...legalMoves, { row: row + 1 * movesUp, column: column - 1 }];
	}
	return legalMoves;
};
export const allowedRook = (board: Board, row: number, column: number) => {
	console.log(board);
	let legalMoves: Array<{ row: number; column: number }> = [];
	//Check for start position moves

	return legalMoves;
};
const findMovesVertical = (board: Board, row: number, column: number) => {};
