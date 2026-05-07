import './App.css';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🚀 Welcome to Nandhini DevOps Project
      </h1>
      <p style={styles.subtitle}>
        CI/CD Pipeline using AWS, Docker, Jenkins & Monitoring
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "120px",
    fontFamily: "Arial, sans-serif",
    background: "linear-gradient(135deg, #e0f7fa, #f3e5f5)",
    height: "100vh",
    paddingTop: "80px"
  },
  title: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#1a237e",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
  },
  subtitle: {
    fontSize: "18px",
    color: "#4a148c",
    marginTop: "12px"
  }
};

export default App;
