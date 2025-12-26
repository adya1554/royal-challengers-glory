import heroImage from "@/assets/rcb-hero.jpg";

const Index = () => {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a1a", color: "white" }}>
      {/* Header */}
      <header style={{ backgroundColor: "#cc0000", padding: "20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
          🏆 This fanpage is hosted on kuberneties cluster fullly automated page helm also configerd  !! 
        </h1>
      </header>

      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>
        <img 
          src={heroImage} 
          alt="RCB Team" 
          style={{ width: "100%", maxWidth: "600px", borderRadius: "10px", border: "4px solid #cc0000" }}
        />
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        
        {/* Big Announcement */}
        <div style={{ 
          backgroundColor: "#cc0000", 
          padding: "30px", 
          borderRadius: "10px", 
          textAlign: "center",
          marginBottom: "30px"
        }}>
          <h2 style={{ fontSize: "48px", margin: "0 0 10px 0" }}>🎉 IPL 2025 CHAMPIONS! 🎉</h2>
          <p style={{ fontSize: "24px", margin: 0 }}>
            Finally! Ee Sala Cup Namde came true!
          </p>
        </div>

        {/* Some Info */}
        <div style={{ backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3 style={{ color: "#cc0000", fontSize: "24px" }}>About RCB</h3>
          <p style={{ lineHeight: "1.8" }}>
            Royal Challengers Bangalore is a cricket team in IPL. They started playing in 2008. 
            The team color is red and black. Virat Kohli is the most famous player of RCB.
          </p>
        </div>

        {/* Team Info */}
        <div style={{ backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3 style={{ color: "#cc0000", fontSize: "24px" }}>Team Info</h3>
          <ul style={{ lineHeight: "2" }}>
            <li>Founded: 2008</li>
            <li>Home Ground: M. Chinnaswamy Stadium, Bangalore</li>
            <li>Captain 2025: Virat Kohli</li>
            <li>Owner: United Spirits</li>
            <li>IPL Titles: 1 (2025) 🏆</li>
          </ul>
        </div>

        {/* Famous Players */}
        <div style={{ backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3 style={{ color: "#cc0000", fontSize: "24px" }}>Famous Players</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span style={{ backgroundColor: "#cc0000", padding: "8px 16px", borderRadius: "20px" }}>Virat Kohli</span>
            <span style={{ backgroundColor: "#cc0000", padding: "8px 16px", borderRadius: "20px" }}>AB de Villiers</span>
            <span style={{ backgroundColor: "#cc0000", padding: "8px 16px", borderRadius: "20px" }}>Chris Gayle</span>
            <span style={{ backgroundColor: "#cc0000", padding: "8px 16px", borderRadius: "20px" }}>Glenn Maxwell</span>
            <span style={{ backgroundColor: "#cc0000", padding: "8px 16px", borderRadius: "20px" }}>Faf du Plessis</span>
          </div>
        </div>

        {/* 2025 Win */}
        <div style={{ backgroundColor: "#2a2a2a", padding: "20px", borderRadius: "10px", marginBottom: "20px" }}>
          <h3 style={{ color: "#cc0000", fontSize: "24px" }}>2025 IPL Final</h3>
          <p style={{ lineHeight: "1.8" }}>
            On June 3, 2025, RCB finally won their first IPL trophy! After 17 years of waiting, 
            the fans dream came true. The whole Bangalore city celebrated this historic moment.
            Virat Kohli was the hero of the match. This is the best day for all RCB fans!
          </p>
        </div>

      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: "#cc0000", 
        padding: "20px", 
        textAlign: "center",
        marginTop: "40px"
      }}>
        <p style={{ margin: 0 }}>Made by RCB Fan ❤️ | Play Bold | 2025</p>
      </footer>
    </div>
  );
};

export default Index;
