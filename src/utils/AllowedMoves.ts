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
export const allowedRook = (board: Board, color: "WHITE" | "BLACK", row: number, column: number) => {
	console.log(board);
	let legalMoves: Array<{ row: number; column: number }> = [];
	// check vertical
	legalMoves = [...legalMoves, ...findMovesVertical(board, row, column, color)];
	//check horizontal
	legalMoves = [...legalMoves, ...findMovesHorizontal(board, row, column, color)];
	return legalMoves;
};
export const allowedQueen = (board: Board, color: "WHITE" | "BLACK", row: number, column: number) => {
	let legalMoves: Array<{ row: number; column: number }> = [];
	// check vertical
	legalMoves = [...legalMoves, ...findMovesVertical(board, row, column, color)];
	//check horizontal
	legalMoves = [...legalMoves, ...findMovesHorizontal(board, row, column, color)];
	return legalMoves;
};
const findMovesVertical = (board: Board, row: number, column: number, color: "WHITE" | "BLACK") => {
	let legalMoves: Array<{ row: number; column: number }> = [];
	// left
	for (let x = column - 1; x >= 0; x -= 1) {
		if (board.pieces[row][x] === null) {
			legalMoves = [...legalMoves, { row: row, column: x }];
		}
		if (board.pieces[row][x] !== null) {
			if (board.pieces[row][x]?.color !== color) {
				legalMoves = [...legalMoves, { row: row, column: x }];
			}
			break;
		}
	}
	for (let x = column + 1; x < 8; x += 1) {
		if (board.pieces[row][x] === null) {
			legalMoves = [...legalMoves, { row: row, column: x }];
		}
		if (board.pieces[row][x] !== null) {
			if (board.pieces[row][x]?.color !== color) {
				legalMoves = [...legalMoves, { row: row, column: x }];
			}
		}
	}
	return legalMoves;
};
const findMovesHorizontal = (board: Board, row: number, column: number, color: "WHITE" | "BLACK") => {
	let legalMoves: Array<{ row: number; column: number }> = [];
	// left
	for (let x = row - 1; x >= 0; x -= 1) {
		if (board.pieces[x][column] === null) {
			legalMoves = [...legalMoves, { row: x, column }];
		}
		if (board.pieces[x][column] !== null) {
			if (board.pieces[row][x]?.color !== color) {
				legalMoves = [...legalMoves, { row: x, column }];
			}
			break;
		}
	}
	for (let x = column + 1; x < 8; x += 1) {
		if (board.pieces[x][column] === null) {
			legalMoves = [...legalMoves, { row: x, column }];
		}
		if (board.pieces[x][column] !== null) {
			if (board.pieces[row][x]?.color !== color) {
				legalMoves = [...legalMoves, { row: x, column }];
			}
			break;
		}
	}
	return legalMoves;
};
