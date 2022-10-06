import React from "react";
import PieceI from "../types/PieceI";
import BlackBishop from "../static/pieces/black_bishop.svg";
type Props = {
	row: number;
	column: number;
	piece: PieceI | null;
};

const Piece = ({ piece }: Props) => {
	return (
		<div className="w-[60px] h-[60px] group-odd:odd:bg-[#779556] group-even:even:bg-[#779556] bg-[#EBECD0] flex">
			<img className="p-[4px]" src={piece?.svg} />
		</div>
	);
};

export default Piece;
