# ⏱️ React Timer

A simple countdown timer built with React and Tailwind CSS, focused on practicing React component architecture, state management, side effects, and user interaction.

The project was built feature-by-feature rather than following a single implementation, with emphasis on understanding **why state, effects, refs, and component boundaries are used**.

## 🚀 Features

* Set a timer duration in minutes
* Start countdown
* Pause / resume timer
* Reset timer
* Input validation
* Automatic timer stop when countdown reaches `00:00`
* Formatted time display (`MM:SS`)
* Responsive and clean UI

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* Tailwind CSS
* Vite
* Lucide React

## 🧠 React Concepts Practiced

### Component Architecture

The application is divided into focused components:

```text
App
├── TimerInput
├── Display
└── TimerControl
```

Each component has a specific responsibility:

* **App** — owns the timer state and coordinates the application
* **TimerInput** — collects the duration from the user
* **Display** — converts seconds into `MM:SS` and renders the timer
* **TimerControl** — handles Start, Pause/Resume, and Reset interactions

### State Management

The application uses separate state variables for different concepts:

```js
const [minutes, setMinutes] = useState("");
const [totalSeconds, setTotalSeconds] = useState(0);
const [hasStarted, setHasStarted] = useState(false);
const [isRunning, setIsRunning] = useState(false);
```

This separates:

* User input
* Current timer value
* Whether the timer has been started
* Whether the countdown is currently running

### `useEffect`

`useEffect` is used to manage the countdown interval based on the timer's running state.

The interval is cleaned up whenever the effect is re-run or the component is unmounted, preventing multiple intervals from running simultaneously.

### `useRef`

`useRef` is used to store the interval ID:

```js
const intervalID = useRef(null);
```

The interval ID does not affect rendering, so it does not need to be stored in React state.

### State Lifting

The minute input is stored in the parent component because both the input and timer controls need access to it.

```text
TimerInput
     ↓
   App state
     ↓
TimerControl
```

This helped practice React's **lifting state up** pattern and passing data/functions through props.

### Input Validation

Timer input is validated before starting the countdown.

The validation handles cases such as:

* Empty input
* Non-numeric input
* Zero
* Negative values
* Decimal values when whole minutes are expected

The validation logic is kept separate from the timer state update.

### State Transitions

The timer has three practical states:

```text
Initial
   ↓
Running
   ↓
Paused
   ↓
Running
   ↓
Reset
   ↓
Initial
```

The project also handles the automatic transition from:

```text
Running → 00:00 → Stopped
```

## 📁 Project Structure

```text
src/
├── Component/
│   ├── Button/
│   ├── Display/
│   ├── TimerControl/
│   └── TimerInput/
│
├── utils/
│   └── InputValidator.js
│
├── App.jsx
└── App.css
```

## ⚙️ Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd <project-folder>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL provided by Vite in your browser.

## 🎯 Purpose of the Project

This project is intentionally small. The main goal was not to build a feature-heavy timer, but to practice designing a React application independently.

The project focuses on understanding:

* Where state should live
* How components communicate
* When to use state vs refs
* How `useEffect` manages external/side-effectful processes
* Effect cleanup
* Controlled inputs
* Validation and edge cases
* State transitions
* Separation of concerns

## 🔮 Possible Improvements

Future improvements could include:

* Custom hours/minutes/seconds input
* Progress indicator
* Sound/notification when the timer finishes
* Multiple timers
* Preset durations
* Local storage persistence
* Better accessibility
* Keyboard controls
* Timer history
