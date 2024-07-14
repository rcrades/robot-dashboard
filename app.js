// 1. Particle Configuration
const particleConfig = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#4a90e2"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.5,
        random: false,
      },
      size: {
        value: 3,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#4a90e2",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
      }
    },
    retina_detect: true
  };
  
  // 2. Particle Movement
  // This step is not needed as the configuration is already done in step 1
  
  // 3. Interactivity Settings
  // This step is not needed as the configuration is already done in step 1
  
  // 4. Interactivity Modes
  // This step is not needed as the configuration is already done in step 1
  
  // 5. Responsive Behavior
  // This step is not needed as the configuration is already done in step 1
  
  // 6. Initialize Particles and Map
  document.addEventListener("DOMContentLoaded", function() {
    initParticles();
    initMap();
    loadRobots();
  });
  
  // 7. Window Resize Handler
  window.addEventListener("resize", function() {
    particlesJS("particles-js", particleConfig);
    if (map) {
      map.invalidateSize();
    }
  });
  
  // 8. Performance Optimization
  const optimizeParticles = () => {
    const width = window.innerWidth;
    if (width < 768) {
      particleConfig.particles.number.value = 20;
      particleConfig.particles.move.speed = 1;
    } else {
      particleConfig.particles.number.value = 40;
      particleConfig.particles.move.speed = 2;
    }
    particlesJS("particles-js", particleConfig);
  };
  
// 9. Map Initialization
let map;
function initMap() {
  if (map) {
    map.remove(); // Remove the existing map instance
  }

  map = L.map('map-container').setView([41.8781, -87.6298], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

  // 10. Load Robots
  async function loadRobots() {
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');
    try {
      console.log('Fetching robot data...');
      const response = await fetch('robot_assets.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Parsing robot data...');
      const data = await response.json();
      console.log('Displaying robots...');
      displayRobots(data.robots);
      console.log('Adding robots to map...');
      addRobotsToMap(data.robots);
    } catch (error) {
      console.error('Error loading robots:', error);
      document.getElementById('robot-list').innerHTML = '<li>Error loading robots. Please try again later.</li>';
    } finally {
      loadingOverlay.classList.add('hidden');
    }
  }
  
  function initParticles() {
    if (typeof particlesJS !== 'undefined') {
      try {
        particlesJS("particles-js", particleConfig);
      } catch (error) {
        console.error('Error initializing particles:', error);
      }
    } else {
      console.error('particlesJS library is not loaded.');
    }
  }
  
// 11. Display Robots in Sidebar
function displayRobots(robots) {
    const robotList = document.getElementById('robot-list');
    robotList.innerHTML = '';
    robots.forEach(robot => {
      const li = document.createElement('li');
      li.className = 'robot-item';
      
      const statusIcon = getStatusIcon(robot.status);
      const statusChip = getStatusChip(robot.status);
      
      li.innerHTML = `
        <h3>${robot.name}</h3>
        <p>Model: ${robot.model}</p>
        <div class="robot-status">
          <i class="icon ${statusIcon}"></i>
          <span class="status-chip ${statusChip}">${robot.status}</span>
          <span class="battery-chip">${robot.battery}%</span>
        </div>
      `;
      li.addEventListener('click', () => selectRobot(robot));
      robotList.appendChild(li);
    });
  }
  
  function getStatusIcon(status) {
    switch (status.toLowerCase()) {
      case 'active': return 'fas fa-check-circle';
      case 'charging': return 'fas fa-bolt';
      case 'standby': return 'fas fa-pause-circle';
      case 'maintenance': return 'fas fa-tools';
      default: return 'fas fa-question-circle';
    }
  }
  
  function getStatusChip(status) {
    switch (status.toLowerCase()) {
      case 'active': return 'status-active';
      case 'charging': return 'status-charging';
      case 'standby': return 'status-standby';
      case 'maintenance': return 'status-maintenance';
      default: return 'status-unknown';
    }
  }
  
  
  // 12. Add Robots to Map
  function addRobotsToMap(robots) {
    robots.forEach(robot => {
      const marker = L.marker([robot.location.lat, robot.location.lng]).addTo(map);
      marker.bindPopup(`<b>${robot.name}</b><br>Status: ${robot.status}<br>Battery: ${robot.battery}%`);
    });
  }
  
// 13. Select Robot
function selectRobot(robot) {
    const { lat, lng } = robot.location;
    map.setView([lat, lng], 14);

    // Check if the image exists and update the robot details
    const robotImage = document.getElementById('robot-image');
    const imagePathWebp = `images/${robot.id}.webp`;
    const imagePathJpg = `images/${robot.id}.jpg`;

    // Check if the .webp image exists
    fetch(imagePathWebp)
        .then(response => {
            if (response.ok) {
                robotImage.src = imagePathWebp;
                robotImage.alt = robot.name;
                robotImage.classList.remove('hidden');
            } else {
                // If .webp doesn't exist, check for .jpg
                fetch(imagePathJpg)
                    .then(response => {
                        if (response.ok) {
                            robotImage.src = imagePathJpg;
                            robotImage.alt = robot.name;
                            robotImage.classList.remove('hidden');
                        } else {
                            robotImage.classList.add('hidden');
                        }
                    })
                    .catch(() => {
                        robotImage.classList.add('hidden');
                    });
            }
        })
        .catch(() => {
            // If fetch fails for .webp, check for .jpg
            fetch(imagePathJpg)
                .then(response => {
                    if (response.ok) {
                        robotImage.src = imagePathJpg;
                        robotImage.alt = robot.name;
                        robotImage.classList.remove('hidden');
                    } else {
                        robotImage.classList.add('hidden');
                    }
                })
                .catch(() => {
                    robotImage.classList.add('hidden');
                });
        });

    document.getElementById('robot-name').textContent = robot.name;
    document.getElementById('robot-status').textContent = `Status: ${robot.status}`;
    document.getElementById('robot-battery').textContent = `Battery: ${robot.battery}%`;
    document.getElementById('robot-model').textContent = `Model: ${robot.model}`;
    document.getElementById('robot-last-maintenance').textContent = `Last Maintenance: ${robot.lastMaintenance}`;

    // Show robot details
    document.getElementById('robot-details').classList.remove('hidden');

    // Open popup for the selected robot
    const marker = L.marker([lat, lng]).addTo(map);
    marker.bindPopup(`<b>${robot.name}</b><br>Status: ${robot.status}<br>Battery: ${robot.battery}%`).openPopup();
}


  // 14. Search Functionality
  document.getElementById('robot-search').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const robotItems = document.querySelectorAll('.robot-item');
    robotItems.forEach(item => {
      const robotName = item.textContent.toLowerCase();
      item.style.display = robotName.includes(searchTerm) ? 'block' : 'none';
    });
  });
  