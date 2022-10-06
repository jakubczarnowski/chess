import Piece from "./PieceI";

export default interface Board {
	pieces: Array<Array<Piece | null>>;
	history?: Board[];
}
