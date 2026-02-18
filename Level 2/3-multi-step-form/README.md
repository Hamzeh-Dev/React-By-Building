# Multi-Step Form

A simple multi-step form built to understand state management, conditional rendering, and validation in forms.

### Goal

Learn how to:

- Manage form state across multiple steps

- Conditionally render components based on step

- Validate inputs for each step

- Give the user visual feedback with step indicators (dots)

This project combines state handling, validation, and dynamic UI updates.

### How it works

- Form data is stored in a single useState object

- step state controls which component to render

- Validation runs before moving to the next step

- Step dots dynamically show which step is active

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:

```bash
cd '.\Level 2\3-multi-step-form\'
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

### Challenge

- Add optional steps that appear conditionally based on user input

- Add a progress bar alongside the dots