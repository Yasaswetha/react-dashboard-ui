function App() {
  const cards = [
    { title: "Total Users", value: "1,250", icon: "👥" },
    { title: "Revenue", value: "$12,400", icon: "💰" },
    { title: "Projects", value: "18", icon: "📁" },
    { title: "Tasks", value: "42", icon: "✅" },
  ];

  const projects = [
    ["Portfolio Website", "Completed", "100%"],
    ["Dashboard UI", "In Progress", "75%"],
    ["React Login UI", "Completed", "100%"],
  ];

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Arial",
        background:
          "linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
        color: "white",
      }}
    >
      <aside
        style={{
          width: "260px",
          background: "rgba(15, 23, 42, 0.8)",
          backdropFilter: "blur(12px)",
          padding: "30px",
          borderRight: "1px solid rgba(148,163,184,0.2)",
        }}
      >
        <h2 style={{ color: "#38bdf8", marginBottom: "50px" }}>
          ⚡ DashPro
        </h2>

        {["🏠 Home", "📊 Analytics", "📁 Projects", "⚙️ Settings"].map(
          (item) => (
            <p
              style={{
                padding: "14px 18px",
                borderRadius: "12px",
                marginBottom: "15px",
                background:
                  item.includes("Home") ? "rgba(56,189,248,0.15)" : "none",
                color: item.includes("Home") ? "#38bdf8" : "white",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          )
        )}
      </aside>

      <main style={{ flex: 1, padding: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "35px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "46px", marginBottom: "5px",color: "white" }}>
              Admin Dashboard
            </h1>
            <p style={{ color: "#94a3b8" }}>
              Welcome back, manage your projects easily.
            </p>
          </div>

          <button
            style={{
              background: "#38bdf8",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            + New Project
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "22px",
          }}
        >
          {cards.map((card) => (
            <div
              style={{
                background: "rgba(30, 41, 59, 0.85)",
                padding: "28px",
                borderRadius: "20px",
                border: "1px solid rgba(148,163,184,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ fontSize: "32px", marginBottom: "15px" }}>
                {card.icon}
              </div>
              <h3 style={{ color: "#38bdf8" }}>{card.title}</h3>
              <h1 style={{ fontSize: "42px",color: "white"}}>{card.value}</h1>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "rgba(30, 41, 59, 0.85)",
            padding: "28px",
            borderRadius: "20px",
            border: "1px solid rgba(148,163,184,0.2)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          }}
        >
          <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>
            Recent Projects
          </h2>

          <table style={{ width: "100%", color: "white" }}>
            <thead>
              <tr>
                <th align="left">Project</th>
                <th align="left">Status</th>
                <th align="left">Progress</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr>
                  <td style={{ padding: "16px 0" }}>{project[0]}</td>
                  <td>{project[1]}</td>
                  <td>{project[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;