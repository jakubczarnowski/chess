import { JsxElement } from "typescript";
import BoardI from "./BoardI";

export default interface Piece {
	svg: string;
	color: "WHITE" | "BLACK";
	findAllowedMoves?: (board: BoardI, color: "WHITE" | "BLACK", row: number, column: number) => Array<{ row: number; column: number }>;
}
