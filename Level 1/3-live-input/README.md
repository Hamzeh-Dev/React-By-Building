# Live Input

A simple app built to **understand controlled inputs** and how state flows from a parent component to child components using props.

## Goal
Learn how to manage input values using React state, update that state from a child component, and pass the updated value to another child for rendering.

## Data Flow

The parent component store the input state.

The input child receives the state value and a setter function as props.

When the user types, the input child updates the parent state.

The updated state is passed down to the preview child.

React automatically re-renders the UI to reflect the new value.

User types -> input updates the value -> parent state updates -> New props passed to preview child -> preview child re-renders

## How to Run

1. Clone the repo:
```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:
```bash
cd .\level 1\3-live-input
```

3. Install dependencies:
```bash
npm install
```

4. Start the app:
```bash
npm run dev
```

Open in browser at http://localhost:3000