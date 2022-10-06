import React, { useState } from "react";
import Board from "./components/Board";
import BoardI from "./types/BoardI";
import { GenerateBoard } from "./utils/GenerateBoard";
import { BLACK_PAWN } from "./utils/Pieces";

function App() {
	const [board, setBoard] = useState(GenerateBoard());

	return (
		<div className="flex justify-center items-center h-screen">
			<Board board={board} updateBoard={setBoard} />
		</div>
	);
}

export default App;
