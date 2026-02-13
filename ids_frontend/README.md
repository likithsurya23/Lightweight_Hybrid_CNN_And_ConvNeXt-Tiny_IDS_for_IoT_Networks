# IDS Frontend - Hybrid CNN & ConvNeXt-Tiny

The intelligent frontend dashboard for the Hybrid IDS, providing real-time analytics, prediction interfaces, and system monitoring for IoT networks.

## Prerequisites

- **Node.js 20+**
- **npm**

## Installation

1. **Navigate to the frontend directory**:
   ```bash
   cd ids_frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode (Docker)
The frontend is served using a Node-based server in production. Ensure you are in the project root directory:
```bash
docker-compose up --build frontend
```

## Tech Stack
- **React** (Vite)
- **Tailwind CSS** (Modern UI Design)
- **Lucide React** (Icons)
- **Context API** (State Management)
