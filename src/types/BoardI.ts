import Piece from "./PieceI";

export default interface BoardI {
	pieces: Array<Array<Piece | null>>;
	history?: BoardI[];
}
