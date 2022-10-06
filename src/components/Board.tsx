import React from "react";
import BoardI from "../types/BoardI";
import Piece from "./Piece";

type Props = {
	board: BoardI;
};

const Board = ({ board }: Props) => {
	return (
		<div className="grid grid-rows-8 gap-0 w-[480px] border-2 border-black">
			{board.pieces.map((row, rowIndex) => (
				<div className="group flex">
					{row.map((piece, index) => (
						<Piece key={rowIndex.toString() + index.toString()} row={rowIndex} column={index} piece={piece} />
					))}
				</div>
			))}
		</div>
	);
};

export default Board;
