type Piece = {
    image?: string,
    symbol: string,
    color: string,
    moved: boolean,
} | null;

type CellType = {
    x: number,
    y: string,
    piece: Piece,
};
class GameService {

    /**
     * color: w | b
     * symbol: p: pawn, r: rook, n: knight, b: bishop, q: queen, k: king
     * moved: boolean
     * image: string
     * x_axe: number[]
     * y_axe: string[]
     */

    public readonly x_axe: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    public readonly y_axe: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    public readonly board: CellType[][] = [];


    public generatePieces(): Array<{
        x: number;
        y: string;
        s: string;
        color: string;
        image: string;
    }> {
        const pieces = [];
        for (let position = 0; position < 2; position++) {
            const type = position === 0 ? 'w' : 'b';
            const x_pos = position === 0 ? 0 : 7;

            pieces.push(
                {
                    x: x_pos,
                    y: 'a',
                    s: 'r',
                    color: type,
                    image: require(`@/assets/pions/rook_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'b',
                    s: 'n',
                    color: type,
                    image: require(`@/assets/pions/knight_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'c',
                    s: 'b',
                    color: type,
                    image: require(`@/assets/pions/bishop_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'd',
                    s: 'q',
                    color: type,
                    image: require(`@/assets/pions/queen_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'e',
                    s: 'k',
                    color: type,
                    image: require(`@/assets/pions/king_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'f',
                    s: 'b',
                    color: type,
                    image: require(`@/assets/pions/bishop_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'g',
                    s: 'n',
                    color: type,
                    image: require(`@/assets/pions/knight_${type}.png`),
                },
                {
                    x: x_pos,
                    y: 'h',
                    s: 'r',
                    color: type,
                    image: require(`@/assets/pions/rook_${type}.png`),
                },
            );
        }
        for (let i = 0; i < 8; i++) {
            pieces.push(
                {
                    x: 1,
                    y: this.y_axe[i],
                    s: 'p',
                    color: 'w',
                    image: require('@/assets/pions/pawn_w.png'),
                },
                {
                    x: 6,
                    y: this.y_axe[i],
                    s: 'p',
                    color: 'b',
                    image: require('@/assets/pions/pawn_b.png'),
                },
            );
        }

        return pieces;
    }

    public getBoard(): CellType[][] {
        for (let i = 0; i < this.x_axe.length; i++) {
            const row: CellType[] = [];
            for (let j = 0; j < this.y_axe.length; j++) {
                const cell: CellType = { x: i, y: this.y_axe[j], piece: null };
                const piece = this.generatePieces().find(
                    (p) => p.x === i && p.y === this.y_axe[j],
                );
                if (piece) {
                    cell.piece = {
                        moved: false,
                        image: piece.image,
                        symbol: piece.s,
                        color: piece.color,
                    };
                }
                row.push(cell);
            }
            this.board.push(row);
        }
        console.log(this.board);
        return this.board;
    }

    // init chessboard with pieces
    // public getBoard() {
    //     const pieces = [];
    //     for (let position = 0; position < 2; position++) {
    //         const type = position === 0 ? 'w' : 'b';
    //         const x_pos = position === 0 ? 0 : 7;
    //
    //         pieces.push(
    //             {x: x_pos, y: 'a', s: 'r', color: type, image: require(`@/assets/pions/rook_${type}.png`)},
    //             {x: x_pos, y: 'b', s: 'n', color: type, image: require(`@/assets/pions/knight_${type}.png`)},
    //             {x: x_pos, y: 'c', s: 'b', color: type, image: require(`@/assets/pions/bishop_${type}.png`)},
    //             {x: x_pos, y: 'd', s: 'q', color: type, image: require(`@/assets/pions/queen_${type}.png`)},
    //             {x: x_pos, y: 'e', s: 'k', color: type, image: require(`@/assets/pions/king_${type}.png`)},
    //             {x: x_pos, y: 'f', s: 'b', color: type, image: require(`@/assets/pions/bishop_${type}.png`)},
    //             {x: x_pos, y: 'g', s: 'n', color: type, image: require(`@/assets/pions/knight_${type}.png`)},
    //             {x: x_pos, y: 'h', s: 'r', color: type, image: require(`@/assets/pions/rook_${type}.png`)},
    //         );
    //     }
    //     for (let i = 0; i < 8; i++) {
    //         pieces.push({x: 1, y: this.y_axe[i], s: 'p', color: 'w', image: require('@/assets/pions/pawn_w.png')});
    //         pieces.push({x: 6, y: this.y_axe[i], s: 'p', color: 'b', image: require('@/assets/pions/pawn_b.png')});
    //     }
    //
    //     for (let i = 0; i < this.x_axe.length; i++) {
    //         const row: CellType[] = [];
    //         for (let j = 0; j < this.y_axe.length; j++) {
    //             const cell: CellType = {x: i, y: this.y_axe[j], piece: null};
    //             const piece = pieces.find(p => p.x === i && p.y === this.y_axe[j]);
    //             if (piece) {
    //                 cell.piece = {image: piece.image, symbol: piece.s, color: piece.color, moved: false};
    //             }
    //             row.push(cell);
    //         }
    //         this.board.push(row);
    //     }
    //     return this.board;
    // }

    public movePawn(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {

        // Vérifier si la case de départ contient un pion de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'p') {
            console.log(`cest au tour du joueur ${currentPlayer}`)
            return false;
        }
        // Calculer la direction de déplacement du pion
        const direction = currentPlayer === 'w' ? 1 : -1;

        // Vérifier si le déplacement est valide
        if (oldCell.y === newCell.y) { // Déplacement en avant
            if (oldCell.x + direction === newCell.x && !newCell.piece) {
                // Déplacement simple

                newCell.piece = oldCell.piece;
                newCell.piece.moved = true;
                oldCell.piece = null;
                return true;
            } else if (oldCell.x + direction * 2 === newCell.x && !oldCell.piece.moved && !newCell.piece) {
                // Déplacement double au premier coup
                newCell.piece = oldCell.piece;
                newCell.piece.moved = true;
                oldCell.piece = null;
                return true;
            }
        } else if (Math.abs(this.y_axe.indexOf(oldCell.y) - this.y_axe.indexOf(newCell.y)) === 1 && oldCell.x + direction === newCell.x) { // Prise en diagonale
            const toCell = newCell;
            if (toCell.piece && toCell.piece.color !== currentPlayer) {
                newCell.piece = oldCell.piece;
                newCell.piece.moved = true;
                oldCell.piece = null;
                return true;
            }
        }

        return false;
    }

    public moveRook(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {
        // Vérifier si la case de départ contient une tour de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'r') {
            return false;
        }

        // Vérifier si le déplacement est valide
        if (oldCell.x === newCell.x) { // Déplacement horizontal
            const min = Math.min(this.y_axe.indexOf(oldCell.y), this.y_axe.indexOf(newCell.y));
            const max = Math.max(this.y_axe.indexOf(oldCell.y), this.y_axe.indexOf(newCell.y));
            for (let i = min + 1; i < max; i++) {
                if (board[oldCell.x][i].piece) {
                    return false;
                }
            }
        } else if (oldCell.y === newCell.y) { // Déplacement vertical
            const min = Math.min(oldCell.x, newCell.x);
            const max = Math.max(oldCell.x, newCell.x);
            for (let i = min + 1; i < max; i++) {
                if (board[i][this.y_axe.indexOf(oldCell.y)].piece) {
                    return false;
                }
            }
        } else {
            return false;
        }

        // Déplacement
        newCell.piece = oldCell.piece;
        newCell.piece.moved = true;
        oldCell.piece = null;
        return true;
    }

    public moveKnight(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {
        // Vérifier si la case de départ contient un cavalier de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'n') {
            return false;
        }

        // Vérifier si le déplacement est valide
        const x = Math.abs(oldCell.x - newCell.x);
        const y = Math.abs(this.y_axe.indexOf(oldCell.y) - this.y_axe.indexOf(newCell.y));
        if ((x === 2 && y === 1) || (x === 1 && y === 2)) {
            // Déplacement
            newCell.piece = oldCell.piece;
            newCell.piece.moved = true;
            oldCell.piece = null;
            return true;
        }
        return false;
    }

    public moveBishop(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {
        // Vérifier si la case de départ contient un fou de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'b') {
            return false;
        }

        // Vérifier si le déplacement est valide
        const x = Math.abs(oldCell.x - newCell.x);
        const y = Math.abs(this.y_axe.indexOf(oldCell.y) - this.y_axe.indexOf(newCell.y));
        if (x !== y) {
            return false;
        }
        const xDirection = oldCell.x < newCell.x ? 1 : -1;
        const yDirection = this.y_axe.indexOf(oldCell.y) < this.y_axe.indexOf(newCell.y) ? 1 : -1;
        for (let i = 1; i < x; i++) {
            if (board[oldCell.x + i * xDirection][this.y_axe.indexOf(oldCell.y) + i * yDirection].piece) {
                return false;
            }
        }

        // Déplacement
        newCell.piece = oldCell.piece;
        newCell.piece.moved = true;
        oldCell.piece = null;
        return true;
    }

    public moveQueen(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {
        // Vérifier si la case de départ contient une reine de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'q') {
            return false;
        }

        // Vérifier si le déplacement est valide
        if (oldCell.x === newCell.x) { // Déplacement horizontal
            const min = Math.min(this.y_axe.indexOf(oldCell.y), this.y_axe.indexOf(newCell.y));
            const max = Math.max(this.y_axe.indexOf(oldCell.y), this.y_axe.indexOf(newCell.y));
            for (let i = min + 1; i < max; i++) {
                if (board[oldCell.x][i].piece) {
                    return false;
                }
            }
        } else if (oldCell.y === newCell.y) { // Déplacement vertical
            const min = Math.min(oldCell.x, newCell.x);
            const max = Math.max(oldCell.x, newCell.x);
            for (let i = min + 1; i < max; i++) {
                if (board[i][this.y_axe.indexOf(oldCell.y)].piece) {
                    return false;
                }
            }
        } else { // Déplacement diagonal
            const x = Math.abs(oldCell.x - newCell.x);
            const y = Math.abs(this.y_axe.indexOf(oldCell.y) - this.y_axe.indexOf(newCell.y));
            if (x !== y) {
                return false;
            }
            const xDirection = oldCell.x < newCell.x ? 1 : -1;
            const yDirection = this.y_axe.indexOf(oldCell.y) < this.y_axe.indexOf(newCell.y) ? 1 : -1;
            for (let i = 1; i < x; i++) {
                if (board[oldCell.x + i * xDirection][this.y_axe.indexOf(oldCell.y) + i * yDirection].piece) {
                    return false;
                }
            }
        }

        // Déplacement
        newCell.piece = oldCell.piece;
        newCell.piece.moved = true;
        oldCell.piece = null;
        return true;
    }

    public moveKing(board: CellType[][], oldCell: CellType, newCell: CellType, currentPlayer: string): boolean {
        // Vérifier si la case de départ contient un roi de la bonne couleur
        if (!oldCell.piece || oldCell.piece.color !== currentPlayer || oldCell.piece.symbol !== 'k') {
            return false;
        }

        // Vérifier si le déplacement est valide
        const x = Math.abs(oldCell.x - newCell.x);
        const y = Math.abs(this.y_axe.indexOf(oldCell.y) - this.y_axe.indexOf(newCell.y));
        if (x > 1 || y > 1) {
            return false;
        }

        // Déplacement
        newCell.piece = oldCell.piece;
        newCell.piece.moved = true;
        oldCell.piece = null;
        return true;
    }

    // Vérifier si le roi est en échec
    // public isKingInCheck(board: CellType[][], color: string): boolean {
    //     // Trouver la position du roi
    //     let kingPosition: null | CellType = null;
    //     for (let i = 0; i < board.length; i++) {
    //         for (let j = 0; j < board[i].length; j++) {
    //             if (board[i][j].piece && board[i][j]?.piece?.symbol === 'k' && board[i][j]?.piece?.color === color) {
    //                 kingPosition = board[i][j];
    //                 break;
    //             }
    //         }
    //     }
    //
    //     // Vérifier si le roi est en échec
    //     for (let i = 0; i < board.length; i++) {
    //         for (let j = 0; j < board[i].length; j++) {
    //             if (board[i][j].piece && board[i][j]?.piece?.color !== color) {
    //                 if (this.movePiece(board, board[i][j], kingPosition, board[i][j]?.piece?.color)) {
    //                     return true;
    //                 }
    //             }
    //         }
    //     }
    //     return false;
    // }

}
export default new GameService();
