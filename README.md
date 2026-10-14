# InsuTrace — Smart Insulin Cold Chain Monitoring System

> **Intelligent monitoring. Safer insulin storage.**  
> First-Year Engineering Multi-Disciplinary Project (MDP) · VIT Chennai

---

## 📌 Executive Summary
**InsuTrace** is a hardware + companion mobile application prototype specifically designed for patient-level insulin cold-chain monitoring. While traditional cold chain systems monitor transit and bulk warehouse refrigeration, InsuTrace addresses the **last-mile patient gap**—tracking everyday portable storage, commuting, outdoor excursions, and temperature stability.

---

## 🎯 MDP Objectives Implemented

### Objective A — Duration of Exposure
- Tracks not just instantaneous thermal spikes, but how long the insulin container has remained outside the configured range (2.0–8.0 °C).
- Illustrates why duration matters: a 10-minute transient peak vs. a 12-hour prolonged exposure result in distinct risk stages (**Excursion** vs. **Prolonged**).

### Objective B — Power and Battery Status
- Live battery level monitoring (82% baseline).
- Automatic low-battery warning triggered at critical thresholds (15%) to avoid undetected monitoring blackouts.

### Objective C — Storage Opening Detection
- Conceptual reed-switch magnetic sensor tracks when the container opens and closes.
- Records opening timestamps, duration open, and warns against cold leakage.

### Objective D — Temperature History
- 24-hour timestamped temperature waveform using Recharts.
- Clear reference limits for safe range (2.0–8.0 °C), highlighted excursion points, and real CSV data export.

### Objective E — Risk Analysis
- Uses the four project objective exposure labels:
  - **Safe** (Within configured limits)
  - **Excursion** (Transient breach)
  - **Prolonged** (Sustained above-range duration)
  - **Deviation** (Sub-zero freezing hazard or telemetry failure)

---

## 🛠️ Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 (Custom dark biomedical instrumentation theme)
- **Animation**: 
  - **Motion for React** (`motion/react`): Page transitions, spring-responsive modal decks, floating toasts.
  - **Anime.js** (`animejs`): 1.5s introductory SVG drawing sequence, multi-ring radial temperature gauge progress arc, and animated telemetry signal bus.
- **Data Visualization**: Recharts interactive line charts with reference areas and event tooltips.
- **Icons**: Lucide React.
- **State**: Centralized deterministic context with localStorage persistence.

---

## 🚀 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build
```

The application runs locally at `http://localhost:5173/`.

---

## 🎮 Presentation Demonstration Controls
Click the **"Demo Controls"** button in the header or sidebar to trigger live academic scenarios:
1. **Initial Baseline**: 5.2 °C current, previous 9.4 °C excursion (23m) at 14:12, 82% battery.
2. **Simulate Heat Exposure**: Surges reading to 9.4 °C, logs active excursion, updates gauge and alerts.
3. **Simulate Freezing Hazard**: Drops reading to 0.8 °C, triggers *Deviation* stage.
4. **Simulate Prolonged Exposure**: Demonstrates 12 hours sustained heat (11.2 °C).
5. **Simulate Lid Opening**: Toggles Reed Switch state to *Open*.
6. **Simulate Low Battery**: Drops battery to 15%, sounding critical battery alarm.
7. **Simulate Connection Loss**: Stops BLE signal flow, marks telemetry *Interrupted*.
8. **Normalize**: Safely returns reading to 5.2 °C and logs resolution.
9. **Reset**: Restores pristine MDP baseline.

---

## ⚠️ Medical Safety & Prototype Notice
*Values and hardware links in this demonstration are simulated for academic evaluation. Temperature monitoring records physical storage conditions and does not directly measure insulin potency or molecular denaturation.*

