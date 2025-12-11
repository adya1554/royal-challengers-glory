import trophyImage from "@/assets/rcb-trophy.jpeg";

const Index = () => {
  return (
    <div style={{ backgroundColor: "#111", color: "white", minHeight: "100vh", textAlign: "center", padding: "20px" }}>
      
      <h1 style={{ color: "#cc0000", fontSize: "36px" }}>🏆 RCB WON IPL 2025! 🏆</h1>
      
      <img src={trophyImage} alt="RCB Trophy" style={{ width: "300px", borderRadius: "10px", margin: "20px 0" }} />
      
      <p style={{ fontSize: "20px" }}>Finally after 17 years RCB won the cup!</p>
      
      <p>Ee Sala Cup Namde ❤️</p>
      
      <div style={{ marginTop: "30px", backgroundColor: "#222", padding: "20px", borderRadius: "10px", maxWidth: "400px", margin: "30px auto" }}>
        <h3 style={{ color: "#cc0000" }}>About RCB</h3>
        <p>Team from Bangalore</p>
        <p>Started in 2008</p>
        <p>Captain: Virat Kohli</p>
      </div>

      <footer style={{ marginTop: "40px", color: "#666" }}>
        <p>Made by RCB fan</p>
      </footer>
    </div>
  );
};

export default Index;
