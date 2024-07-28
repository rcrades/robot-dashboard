# Robot Dashboard

## Overview
The Robot Dashboard is a web-based application designed to monitor and control autonomous robots in real-time. It provides a user-friendly interface for visualizing robot positions, sensor data, and operational status.

## Key Features
1. Real-time Robot Tracking
2. Interactive Mapping
3. Sensor Data Visualization
4. Task Management
5. Alert System

## Layout and Functionality
The Robot Dashboard is divided into four main sections:

1. **Header Bar**:
    - Located at the top of the page.
    - Contains the application title, a search bar for filtering robots, and a menu button.
    - The search bar allows users to quickly find robots by name.
    - The menu button toggles the visibility of the sidebar.

2. **Robot List (Left Sidebar)**:
    - Positioned on the left side of the screen.
    - Displays a list of all robots with their name, model, status, and battery level.
    - Each robot item is clickable, allowing users to select a robot and view its details in the right info panel.
    - The sidebar can be hidden or shown using the menu button in the header.

3. **Map (Center)**:
    - Occupies the central part of the screen.
    - Displays the real-time locations of all robots on an interactive map.
    - Users can zoom, pan, and click on map markers to view robot details.
    - The map updates continuously to reflect the current positions of the robots.

4. **Robot Info Panel (Right Sidebar)**:
    - Located on the right side of the screen.
    - Shows detailed information about the selected robot, including its status, battery level, model, and last maintenance date.
    - The panel is initially hidden and expands when a robot is selected from the list or map.
    - Users can close the panel to return to the full map view.

### Code References

- **Header Bar**: Defined in `index.html` (startLine: 13, endLine: 28) and styled in `styles.css` (startLine: 108, endLine: 157).
- **Robot List (Left Sidebar)**: Defined in `index.html` (startLine: 31, endLine: 36) and styled in `styles.css` (startLine: 51, endLine: 64).
- **Map (Center)**: Defined in `index.html` (startLine: 37, endLine: 39) and styled in `styles.css` (startLine: 66, endLine: 71).
- **Robot Info Panel (Right Sidebar)**: Defined in `index.html` (startLine: 40, endLine: 47) and styled in `styles.css` (startLine: 83, endLine: 97).

This layout ensures a user-friendly interface for monitoring and controlling robots in real-time, providing quick access to essential information and controls.

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
- if deployed, navigate to `https://robot-dashboard-eight.vercel.app/`

## Contributing
Please read CONTRIBUTING.md for details on our code of conduct and the process for submitting pull requests.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.