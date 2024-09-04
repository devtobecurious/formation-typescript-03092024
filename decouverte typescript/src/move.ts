import Vector2D from "./vector-2d";

// I de SOLID
// Interfaces segregation

export interface Move {
    move(position: Vector2D): void
}

export interface MoveAndStop extends Move {
    stop(): void
}