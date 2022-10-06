import React, { useState } from "react";
import PieceI from "../types/PieceI";
import BlackBishop from "../static/pieces/black_bishop.svg";
type Props = {
	row: number;
	column: number;
	piece: PieceI | null;
	handlePickUpPiece: (piece: PieceI | null, row: number, column: number) => void;
	handleDropPiece: (piece: PieceI | null, row: number, column: number) => void;
	currentlyPickedUp: PieceI | null;
};

const Piece = ({ piece, row, column, handlePickUpPiece, handleDropPiece, currentlyPickedUp }: Props) => {
	const handleClick = () => {
		if (currentlyPickedUp !== null && currentlyPickedUp.color !== piece?.color) {
			handleDropPiece(piece, row, column);
			return;
		}
		handlePickUpPiece(piece, row, column);
	};
	return (
		<div onMouseDown={() => handleClick()} className="w-[60px] h-[60px] group-even:odd:bg-[#779556] group-odd:even:bg-[#779556] bg-[#EBECD0] flex pointer-events: none; focus:cursor-pointer">
			<img className="p-[4px]" src={piece?.svg} />
		</div>
	);
};

export default Piece;
