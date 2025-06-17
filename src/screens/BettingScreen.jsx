import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function BettingScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { item, clubId, club_name } = location.state || {};

  const [betType, setBetType] = useState("Open");
  const [selectedPoint, setSelectedPoint] = useState(0);

  const [bets, setBets] = useState([]);

  const pointOptions = [5, 10, 20, 50, 100, 200, 500, 1000];
  const today = new Date().toISOString().split("T")[0];

  const getBetAmount = (number) => {
    const betSum = bets
      .filter((b) => b.number === number)
      .reduce((sum, b) => sum + Number(b.amount), 0);
    return betSum || "";
  };

  const toggleBet = (number) => {
    if (!selectedPoint) {
      toast.warn("Select points first");
      return;
    }
  
    setBets((prev) => {
      // Add a new bet always — do NOT replace or remove existing bets
      return [
        ...prev,
        {
          number,
          amount: selectedPoint,
          gameName: item?.game_name,
          clubId,
          betType,
          date: today,
        },
      ];
    });
  };
  
  const handleReset = () => {
    setBets([]);
    setSelectedPoint(0);
  };
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = () => {
    if (bets.length === 0) {
      alert("Please place at least one bet before submitting.");
      toast.warn("Please place at least one bet before submitting.");
      return;
    }
    setShowModal(true);
  };

  const handlegoback = () => {
    navigate(-1);
  };
  return (
    <div className="sm:p-6 text-white flex flex-col gap-10">
      <div className="bg-[#00A9EE] p-4">
        <h2
          onClick={handlegoback}
          className=" cursor-pointer text-xl font-bold"
        >
          {" "}
          ← {item?.game_name} ({club_name})
        </h2>
      </div>

      <div className="flex items-center gap-4 px-4">
        <input
          type="date"
          value={today}
          readOnly
          className="p-2 bg-gray-500 rounded"
        />
        <label className="flex items-center gap-2 ">
          <input
            type="radio"
            name="betType"
            value="Open"
            checked={betType === "Open"}
            onChange={() => setBetType("Open")}
          />{" "}
          Open
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="betType"
            value="Close"
            checked={betType === "Close"}
            onChange={() => setBetType("Close")}
          />{" "}
          Close
        </label>
      </div>

      <div className="px-4">
        <h3 className="mb-2">Select Points</h3>
        <div className="flex flex-wrap gap-4 sm:gap-10">
          {pointOptions.map((pt) => (
            <button
              key={pt}
              className={`px-4 py-2 rounded transition transform duration-600 ${
                selectedPoint === pt
                  ? "bg-[#00A9EE]"
                  : "bg-gray-600 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedPoint(pt)}
            >
              {pt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex bg-[#3C3C3C] flex-col gap-2 p-2">
        <div className="flex items-center justify-center">
          <h1 className="mb-2 text-lg flex  ">Select Digits</h1>
        </div>
        <h3 className="mb-2 text-lg sm:px-4">Select All Digits</h3>
        <div className="grid sm:grid-cols-10 grid-cols-4 gap-2">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
            const betAmount = getBetAmount(num);

            return (
              <div
                key={num}
                onClick={() => toggleBet(num)}
                className={`p-2 flex flex-col items-center gap-1 rounded cursor-pointer
                `}
              >
                <span className="text-[18px] font-semibold">{num}</span>
                <div className="flex items-center justify-center rounded bg-white h-14 w-20 ">
                  <span className="text-black text-xl  rounded w-full text-center">
                    {betAmount ? betAmount : ""}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-4 px-4 sm:justify-start justify-around">
        <button
          onClick={handleReset}
          className="bg-[#DB0C0C] px-4 py-2 rounded"
        >
          Reset BID
        </button>
        <button
          onClick={handleSubmit}
          disabled={bets.length === 0}
          className={`px-4 py-2 rounded bg-[#00A9EE] transition 
    ${bets.length === 0 ? "opacity-50 cursor-not-allowed animate-shake" : ""}
  `}
        >
          Submit BID
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-200/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg  w-[80%] text-black">
            <h2 className="text-xl pl-2 sm:pl-6 text-white bg-[#00A9EE] font-bold mb-4 p-2">
              {item?.game_name} ({club_name})
            </h2>

            <div className="overflow-y-auto mb-4 p-6 max-h-60">
              <table className="w-full border border-gray-300">
                <thead>
                  <tr className="bg-[#D9D9D9]">
                    <th className="px-4 py-2 text-left border w-1/4">Digits</th>
                    <th className="px-4 py-2 text-left border w-1/4">Points</th>
                    <th className="px-4 py-2 text-left border w-1/2">
                      Game Type
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bets.map((bet) => (
                    <tr key={bet.number} className="border border-gray-300">
                      <td className="px-4 py-2">{bet.number}</td>
                      <td className="px-4 py-2">{bet.amount}</td>
                      <td className="px-4 py-2">{bet.betType}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-gray-300">
                    <td
                      colSpan="3"
                      className="px-4 py-2 text-start font-medium text-black"
                    >
                      *Note: Bid Once Played Will Not be Cancelled*
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
              <div className="flex px-6 sm:flex-row flex-col justify-between mb-4 font-semibold">
                <div>Total Bids: {bets.length}</div>
                <div>
                  Total Bids Amount:{" "}
                  {bets.reduce((total, bet) => total + Number(bet.amount), 0)}
                </div>
              </div>
            <div className="flex justify-end gap-4 p-6">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#DB0C0C] text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  console.log("Final bets submitted:", bets);
                  setShowModal(false);
                  handleReset();
                  alert("Bets submitted!");
                }}
                className="bg-[#00A9EE] text-white px-4 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        draggable
        theme="colored"
      />
    </div>
  );
}


