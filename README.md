# Robot Dashboard

## Overview
The Robot Dashboard is a web-based application designed to monitor and control autonomous robots in real-time. It provides a user-friendly interface for visualizing robot positions, sensor data, and operational status.

## Key Features
1. Real-time Robot Tracking
2. Interactive Mapping
3. Sensor Data Visualization
4. Task Management
5. Alert System

## Mapping Functionality
Our mapping system is a core feature of the Robot Dashboard, offering:

- Real-time Updates: The map refreshes continuously, showing current robot positions.
- Interactive Elements: Users can zoom, pan, and click on robots for detailed information.
- Obstacle Visualization: Detected obstacles are displayed on the map.
- Path Planning: Planned and executed robot paths are visible.
- Multi-floor Support: For buildings with multiple levels, users can switch between floor plans.

## How It Works
1. Data Collection: Robots continuously send telemetry data to the server.
2. Data Processing: The server processes incoming data and updates the database.
3. Web Interface: The dashboard fetches data from the server and renders it in the browser.
4. User Interaction: Operators can send commands back to the robots through the interface.

## Technologies Used
- Frontend: HTML5, CSS3, JavaScript
- Backend: None (Static site)
- Database: None (Static JSON files)
- WebSocket for real-time communication

## Getting Started
- if local, run `python3 -m http.server 8000`
- if deployed, navigate to `https://robot-dashboard-eight.vercel.app/

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.