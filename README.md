# Tenzies Game

A fun dice-rolling game built with React, where players roll dice until all dice show the same value. Players can hold dice at their current values, and only the unheld dice will roll with each turn. Once all dice match and are held, the game is won, and confetti appears!

## Features

- Roll 10 dice until all show the same number.
- Click to "hold" dice at their current value between rolls.
- Winning condition: All dice are the same value and held.
- Confetti effect upon winning the game.
- Option to start a new game once the current one is won.

## Technologies Used

- React (TypeScript)
- React Confetti
- NanoID (for unique dice ID generation)

## How to Run

1. Clone the repository.

   ```bash
   git clone https://github.com/m-essam-s/tenzies-game.git
   ```

2. Navigate to the project folder.

   ```bash
    cd tenzies-game
    ```

3. Install dependencies.

    ```bash
    npm install
    ```

4. Run the app.

    ```bash
    npm run dev
    ```

## How to Play

- Click "Roll" to roll all the dice.
- Click on individual dice to "hold" them in place.
- Keep rolling until all dice show the same value and are held.
- Once you've won, click "New Game" to start again.

## License

This project is open-source and available under the MIT License.
