import React, { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import "./App.css";

const App = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [updateTimes, setUpdateTimes] = useState([]); // Estado para armazenar os horários fictícios e as cores

  // Lista de bancos com suas versões
  const banks = [
    "Banco do Brasil (v2)",
    "Itau (v2)",
    "Itau (francesa)",
    "Sicoob (v2)",
    "Sicred (v2)",
    "Sicred (v3)",
    "Caixa",
    "Santander (v2)",
    "Banrisul",
    "Inter",
  ];

  // Mapeia os tempos de resposta para cada banco (em milissegundos)
  const responseTimes = {
    "Banco do Brasil (v2)": [200, 500, 800],
    "Itaú (v2)": [300, 450, 750],
    "Itaú (francesa)": [250, 380, 700],
    "Sicoob (v2)": [180, 350, 730],
    "Sicred (v2)": [220, 330, 710],
    "Sicred (v3)": [230, 370, 780],
    Caixa: [160, 420, 710],
    "Santander (v2)": [210, 390, 740],
    Banrisul: [240, 460, 720],
    Inter: [190, 410, 690],
  };

  // Horários fictícios associados aos tempos de resposta
  const fictitiousTimes = ["14:30", "14:35", "14:40"];

  // Função para determinar a cor da bolinha com base no tempo de respostawifi
  const getDotColor = (time) => {
    if (time <= 200) return "green"; // Tempos rápidos
    if (time <= 500) return "yellow"; // Tempos intermediários
    return "red"; // Tempos lentos
  };

  // Atualiza os horários fictícios e cores sempre que o banco selecionado mudar
  useEffect(() => {
    if (selectedBank) {
      const times = responseTimes[selectedBank];
      const formattedTimes = times.map((time, index) => ({
        time: fictitiousTimes[index],
        color: getDotColor(time), // Determina a cor com base no tempo de resposta
      }));

      setUpdateTimes(formattedTimes);
    } else {
      setUpdateTimes([]);
    }
  }, [selectedBank]);

  return (
    <div className="app-container">
      {/* Menu lateral */}
      <div className="sidebar">
        <h2>Bancos</h2>
        <ul>
          {banks.map((bank) => (
            <li
              key={bank}
              className={selectedBank === bank ? "selected" : ""}
              onClick={() =>
                setSelectedBank(selectedBank === bank ? null : bank)
              }
            >
              {bank}
            </li>
          ))}
        </ul>
      </div>

      {/* Container Central com o Gráfico */}
      <div className="main-container">
        <div className="chart-container">
          <BarChart selectedBank={selectedBank} />
        </div>
      </div>

      {/* Área lateral direita com horários fictícios */}
      <div className="ads-container">
        <div className="logo">
          <img
            src="/logos/tecnospeed.png"
            alt="TecnoSpeed"
            style={{
              width: "100px",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="ads-box">
          <p>PROPAGANDA</p>
        </div>
        <div className="schedule-box">
          <h3>Últimas atualizações:</h3>
          {updateTimes.length > 0 ? (
            updateTimes.map((entry, index) => (
              <div key={index} className="schedule-item">
                <span
                  className="dot"
                  style={{ backgroundColor: entry.color }}
                ></span>
                <p style={{ color: "black" }}>{entry.time}</p>
              </div>
            ))
          ) : (
            <p class="branco">Nenhuma atualização recente</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
