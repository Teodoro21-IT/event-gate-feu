import React from "react";
import MainLayout from "../layouts/MainLayout";

// Sample animal data - replace with your actual data
const animals = [
    {
        id: 1,
        name: "Nami chan",
        description: "Navigator",
        imageUrl: "https://image.cdn2.seaart.ai/2023-10-06/19159876179654661/9062cf56dd005085bb4570ca4a282c3731b45aa0_high.webp", // Replace with actual URL
    },
    {
        id: 2,
        name: "Sanji",
        description: "Black Leg",
        imageUrl: "https://tse3.mm.bing.net/th/id/OIP.Re7p66eKaxAiX9TTFJVc-wHaEK?pid=Api&P=0&h=180", // Replace with actual URL
    },
    {
        id: 3,
        name: "Monkey D. Luffy",
        description: "The king of pirates.",
        imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/luffy-gear-5-oda-freedom-one-piece-featured.jpg", // Replace with actual URL
    },
    {
        id: 4,
        name: "ZORO",
        description: "World Strongest Swordsman.",
        imageUrl: "https://tse4.mm.bing.net/th/id/OIP.5UJycbDtUR29VXQBM1HoaQHaEK?pid=Api&P=0&h=180", // Replace with actual URL
    },
    {
        id: 5,
        name: "Niko Robin",
        description: "Curse Child",
        imageUrl: "https://comicbook.com/wp-content/uploads/sites/4/2025/05/Nico-robin-from-one-piece-as-seen-during-the-wano-arc.jpg", // Replace with actual URL
    },
];

const HomePage = () => {
    return (
        <MainLayout>
            <div style={{ padding: "20px" }}>
                <h1>ONE PIECE </h1>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                    {animals.map((animal) => (
                        <div
                            key={animal.id}
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                padding: "15px",
                                width: "200px",
                                textAlign: "center",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                            }}
                        >
                            <img
                                src={animal.imageUrl}
                                alt={animal.name}
                                style={{
                                    maxWidth: "100%",
                                    height: "auto",
                                    borderRadius: "4px",
                                    marginBottom: "10px",
                                }}
                            />
                            <h3>{animal.name}</h3>
                            <p>{animal.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;