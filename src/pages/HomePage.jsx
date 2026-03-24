import React from "react";
import MainLayout from "../layouts/MainLayout";

const crew = [
    {
        id: 1,
        name: "NAMI",
        title: "Cat Burglar",
        imageUrl: "https://image.cdn2.seaart.ai/2023-10-06/19159876179654661/9062cf56dd005085bb4570ca4a282c3731b45aa0_high.webp",
        color: "rgba(255, 165, 0, 0.2)", // Orange theme
    },
    {
        id: 2,
        name: "SANJI",
        title: "Black Leg",
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.Re7p66eKaxAiX9TTFJVc-wHaEK?pid=Api&P=0&h=180",
        color: "rgba(255, 255, 0, 0.1)", // Yellow theme
    },
    {
        id: 3,
        name: "MONKEY D. LUFFY",
        title: "The King of Pirates",
        imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/luffy-gear-5-oda-freedom-one-piece-featured.jpg",
        color: "rgba(255, 0, 0, 0.2)", // Red theme
    },
    {
        id: 4,
        name: "RORONOA ZORO",
        title: "World's Strongest Swordsman",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.5UJycbDtUR29VXQBM1HoaQHaEK?pid=Api&P=0&h=180",
        color: "rgba(0, 255, 0, 0.1)", // Green theme
    },
    {
        id: 5,
        name: "NICO ROBIN",
        title: "Light of the Revolution",
        imageUrl: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/Nico-robin-from-one-piece-as-seen-during-the-wano-arc.jpg",
        color: "rgba(128, 0, 128, 0.2)", // Purple theme
    },
];
const HomePage = () => {
    return (
        <MainLayout>
            <div style={{
                backgroundColor: "#0f0f0f",
                minHeight: "100vh",
                color: "white",
                fontFamily: "'Inter', sans-serif",
                padding: "40px 20px"
            }}>
                {/* Header Section */}
                <header style={{ textAlign: "center", marginBottom: "60px" }}>
                    <h1 style={{
                        fontSize: "3.5rem",
                        letterSpacing: "8px",
                        textTransform: "uppercase",
                        margin: "0",
                        background: "linear-gradient(to right, #f4d03f, #16a085)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>
                        Straw Hat Crew
                    </h1>
                    <p style={{ color: "#888", marginTop: "10px", fontStyle: "italic" }}>"Wealth, fame, power..."</p>
                </header>

                {/* Cards Container */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "30px",
                    maxWidth: "1200px",
                    margin: "0 auto"
                }}>
                    {crew.map((member) => (
                        <div
                            key={member.id}
                            className="crew-card"
                            style={{
                                position: "relative",
                                overflow: "hidden",
                                borderRadius: "15px",
                                background: "#1a1a1a",
                                border: "1px solid #333",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            {/* Image Wrapper */}
                            <div style={{ height: "350px", overflow: "hidden" }}>
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        filter: "grayscale(30%) contrast(110%)",
                                    }}
                                />
                            </div>

                            {/* Content Overlay */}
                            <div style={{
                                padding: "20px",
                                background: `linear-gradient(to top, #000, ${member.color})`,
                                position: "absolute",
                                bottom: "0",
                                width: "100%",
                                boxSizing: "border-box"
                            }}>
                                <h3 style={{ margin: "0", fontSize: "1.4rem", fontWeight: "900" }}>
                                    {member.name}
                                </h3>
                                <p style={{ margin: "5px 0 0", color: "#ccc", fontSize: "0.9rem", letterSpacing: "1px" }}>
                                    {member.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;