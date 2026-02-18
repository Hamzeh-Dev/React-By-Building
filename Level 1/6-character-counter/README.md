# 6- Character Counter

A small project focused on **working with derived data instead of unnecessary state**.

This project helps you understand **when NOT to use `useState` and `useEffect`**, and how to derive values directly from existing state or props.

---

## Project Idea

Build a simple text statistics panel that analyzes user input and displays:

- Characters count
- Words count
- Lines count
- Remaining characters based on a maximum limit
- Warning when the limit is exceeded

All statistics are **derived from the text**, not stored as separate state values.

---

## Core Concept

> If data can be calculated from props or existing state,  
> **it should not be stored in state.**

This project demonstrates:
- Why state-driven derived values cause unnecessary complexity
- How derived values keep components simpler and safer

---

## What You Will Learn

- What **derived values** is in React
- Why duplicating state is a common anti-pattern
- When `useEffect` is unnecessary
- Writing cleaner, more predictable components
- Thinking in **data flow**, not side effects

---

## Recommendation After This Project

Build a form with live validation, such as:

- Password strength checker

- Username availability rules

- Character-limited bio editor

Try to:

- Store only the raw input in state

- Derive everything else from it

---

## How to Run

1. Clone the repo:
```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:
```bash
cd '.\Level 1\6-character-counter'
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