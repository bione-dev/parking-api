import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/parking-slots";

function App() {
  const [slots, setSlots] = useState([]);

  const fetchSlots = async () => {
    try {
      const response = await axios.get(API_URL);
      setSlots(response.data.slice(0, 8)); // Limita a 8 vagas
    } catch (error) {
      console.error("Erro ao buscar as vagas:", error);
    }
  };

  const toggleSlot = async (id) => {
    try {
      await axios.put(`${API_URL}/${id}/toggle`);
      fetchSlots();
    } catch (error) {
      console.error("Erro ao alternar o estado da vaga:", error);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const renderSlot = (slotNumber) => {
    const slot = slots.find((s) => s.slotNumber === slotNumber.toString());
    if (!slot) {
      return (
        <div
          key={slotNumber}
          style={{
            backgroundColor: "gray",
            border: "1px solid black",
            color: "white",
            width: "120px",
            height: "120px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "5px",
          }}
        >
          Vazio
        </div>
      );
    }
    return (
      <div
        key={slot.id}
        style={{
          backgroundColor: slot.isOccupied ? "red" : "green",
          border: "1px solid black",
          color: "white",
          width: "120px",
          height: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          margin: "5px",
        }}
        onClick={() => toggleSlot(slot.id)}
      >
        Vaga {slot.slotNumber}
        <br />
        {slot.isOccupied ? "Ocupada" : "Disponível"}
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
        width: "100vw", // Preenche toda a largura
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>
        Estacionamento
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          justifyItems: "center", // Centraliza os itens no grid
          alignItems: "center", // Centraliza verticalmente
          width: "100%", // Preenche o container
          maxWidth: "800px",
        }}
      >
        {Array.from({ length: 8 }, (_, i) => renderSlot(i + 1))}
      </div>
    </div>
  );
}

export default App;
