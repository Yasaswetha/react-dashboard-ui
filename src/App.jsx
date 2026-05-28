import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProjectForm, setShowProjectForm] = useState(false);

  const [projectName, setProjectName] = useState("");
  const [projectStatus, setProjectStatus] = useState("");
  const [projectProgress, setProjectProgress] = useState("");

  const [projects, setProjects] = useState([
    { name: "Portfolio Website", status: "Completed", progress: "100%" },
    { name: "Dashboard UI", status: "In Progress", progress: "75%" },
    { name: "React Login UI", status: "Pending", progress: "40%" },
  ]);

  const menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "Analytics", icon: "📊" },
    { name: "Projects", icon: "📁" },
    { name: "Settings", icon: "⚙️" },
  ];

  const cards = [
    { title: "Total Users", value: "1,250", icon: "👥" },
    { title: "Revenue", value: "$12,400", icon: "💰" },
    { title: "Projects", value: projects.length, icon: "📁" },
    { title: "Tasks", value: "42", icon: "✅" },
  ];

  const handleAddProject = () => {
    if (!projectName || !projectStatus || !projectProgress) {
      alert("Please fill all fields");
      return;
    }

    setProjects([
      ...projects,
      {
        name: projectName,
        status: projectStatus,
        progress: projectProgress,
      },
    ]);

    setProjectName("");
    setProjectStatus("");
    setProjectProgress("");
    setShowProjectForm(false);
    setActivePage("Projects");
  };

  return (
    <div className="dashboard">
      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <aside className={menuOpen ? "sidebar mobile-active" : "sidebar"}>
        <h2 className="logo">⚡ DashBoard</h2>

        <div className="menu">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={activePage === item.name ? "menu-item active" : "menu-item"}
              onClick={() => {
                setActivePage(item.name);
                setMenuOpen(false);
              }}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>
      </aside>

      <main className="main">
        <div className="topbar">
          <div>
            <h1>{activePage}</h1>
            <p>Welcome back, manage your work easily.</p>
          </div>

          <div className="top-actions">
            <div className="profile">
              <div className="avatar">S</div>
              <div>
                <h4>Swetha</h4>
                <p>Frontend Developer</p>
              </div>
            </div>

            <button
              className="new-btn"
              onClick={() => setShowProjectForm(!showProjectForm)}
            >
              + New Project
            </button>
          </div>
        </div>

        {showProjectForm && (
          <div className="project-form">
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Status"
              value={projectStatus}
              onChange={(e) => setProjectStatus(e.target.value)}
            />

            <input
              type="text"
              placeholder="Progress"
              value={projectProgress}
              onChange={(e) => setProjectProgress(e.target.value)}
            />

            <button className="add-btn" onClick={handleAddProject}>
              Save Project
            </button>
          </div>
        )}

        {activePage === "Home" && (
          <>
            <div className="cards-grid">
              {cards.map((card) => (
                <div className="stat-card" key={card.title}>
                  <div className="card-icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <h2>{card.value}</h2>
                </div>
              ))}
            </div>

            <div className="content-card">
              <h2>Overview</h2>
              <p>
                Your dashboard is performing well. Active frontend projects are
                progressing smoothly.
              </p>

              <div className="overview-boxes">
                <div>
                  <h3>85%</h3>
                  <p>Performance</p>
                </div>
                <div>
                  <h3>72%</h3>
                  <p>Productivity</p>
                </div>
                <div>
                  <h3>98%</h3>
                  <p>UI Quality</p>
                </div>
              </div>
            </div>
          </>
        )}

        {activePage === "Analytics" && (
          <div className="content-card">
            <h2>Analytics Report</h2>

            <div className="analytics-grid">
              <div className="analytics-box">
                <h3>Website Traffic</h3>
                <div className="bar">
                  <span style={{ width: "85%" }}></span>
                </div>
                <p>85% increased this month</p>
              </div>

              <div className="analytics-box">
                <h3>User Engagement</h3>
                <div className="bar">
                  <span style={{ width: "70%" }}></span>
                </div>
                <p>70% active users</p>
              </div>

              <div className="analytics-box">
                <h3>Project Growth</h3>
                <div className="bar">
                  <span style={{ width: "92%" }}></span>
                </div>
                <p>92% growth rate</p>
              </div>
            </div>
          </div>
        )}

        {activePage === "Projects" && (
          <div className="content-card">
            <h2>Recent Projects</h2>

            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Status</th>
                  <th>Progress</th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{project.name}</td>
                    <td>
                      <span
                        className={`status ${project.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {project.status}
                      </span>
                    </td>
                    <td>{project.progress}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activePage === "Settings" && (
          <div className="content-card">
            <h2>Profile Settings</h2>

            <form className="settings-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Role" />
              <textarea placeholder="Short Bio"></textarea>
              <button type="button">Save Changes</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;