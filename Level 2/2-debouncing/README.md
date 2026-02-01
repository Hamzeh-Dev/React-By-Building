# 2 Debouncing (API Search)

A simple project built to **learn debouncing and efficient API calls** while handling user input.

---

## Goal
Learn how to:

- Handle input-driven searches
- Fetch data from an API
- Manage loading and result states
- Avoid unnecessary API calls
- Implement debouncing for better performance and UX

---

## Why Do We Need Debounce?

Without debouncing, an API request would fire **on every keystroke**.

Typing `phone` would trigger:

- `p` → request
- `ph` → request
- `pho` → request
- `phon` → request
- `phone` → request

This causes:

- Too many API calls
- Poor performance
- Server overload
- Bad user experience

Debouncing waits until the user **stops typing** for a short time before sending the request, resulting in:

- Fewer API calls
- Better performance
- Cleaner UX
- Reduced server load

Only the final intended query is sent.

---

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:

```bash
cd level-2/2-debouncing
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