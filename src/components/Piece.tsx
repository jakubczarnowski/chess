import React, { useState } from "react";
import PieceI from "../types/PieceI";
import BlackBishop from "../static/pieces/black_bishop.svg";
type Props = {
	row: number;
	column: number;
	piece: PieceI | null;
	handlePickUpPiece: (piece: PieceI | null, row: number, column: number) => void;
	handleDropPiece: (piece: PieceI | null, row: number, column: number) => void;
	currentlyPickedUp: boolean;
};

const Piece = ({ piece, row, column, handlePickUpPiece, handleDropPiece, currentlyPickedUp }: Props) => {
	const handleDrop = () => {
		if (!currentlyPickedUp) {
			return;
		}
		handleDropPiece(piece, row, column);
	};
	return (
		<div onMouseOverCapture={() => handleDrop()} onMouseDown={() => handlePickUpPiece(piece, row, column)} className="w-[60px] h-[60px] group-odd:odd:bg-[#779556] group-even:even:bg-[#779556] bg-[#EBECD0] flex">
			<img className="p-[4px]" src={piece?.svg} />
		</div>
	);
};

export default Piece;
