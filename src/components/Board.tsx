import React, { useState } from "react";
import BoardI from "../types/BoardI";
import PieceI from "../types/PieceI";
import Piece from "./Piece";

type Props = {
	board: BoardI;
	updateBoard: (board: BoardI) => void;
};

const Board = ({ board, updateBoard }: Props) => {
	const [pickedPiece, setPickedPiece] = useState<{ piece: PieceI; row: number; column: number } | null>(null);
	const [currentPlayer, setCurrentPlayer] = useState<"WHITE" | "BLACK">("WHITE");
	/* 
	TODO:
		- Check Legal moves:
		  // prob just pass the board to the checking function
		 - Check for checks
		 - Piece by piece legal moves
		 - Cant move behind for pawns
		 - Checkmate
		 - En passant

		- Make pointer icon not change on piece hold
		
		- Castle
		
		- Promotion

		- Write notation
	*/
	const handlePickUpPiece = (piece: PieceI | null, row: number, column: number) => {
		if (piece === null) {
			return;
		}
		if (piece.color !== currentPlayer) {
			return;
		}
		console.log(piece);
		setPickedPiece({ piece, row, column });
	};
	const handleDropPiece = (piece: PieceI | null, row: number, column: number) => {
		if (pickedPiece === null) {
			return;
		}
		if (pickedPiece.column === column && pickedPiece.row === row) {
			return;
		}
		board.pieces[row][column] = pickedPiece.piece;
		board.pieces[pickedPiece.row][pickedPiece.column] = null;
		updateBoard(board);
		setPickedPiece(null);
		setCurrentPlayer((prev) => (prev === "BLACK" ? "WHITE" : "BLACK"));
	};
	return (
		<div className="grid grid-rows-8 gap-0 w-[480px] border-2 border-black">
			{board.pieces.map((row, rowIndex) => (
				<div className="group flex">
					{row.map((piece, index) => (
						<Piece key={rowIndex.toString() + index.toString()} row={rowIndex} column={index} piece={piece} handlePickUpPiece={handlePickUpPiece} handleDropPiece={handleDropPiece} currentlyPickedUp={pickedPiece !== null} />
					))}
				</div>
			))}
		</div>
	);
};

export default Board;
