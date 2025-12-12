// frontend/src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ClothList from "./components/ClothList";
import ClothForm from "./components/ClothForm";

function App() {
  const [clothes, setClothes] = useState([]);
  const [editingCloth, setEditingCloth] = useState(null);

  useEffect(() => {
    fetchClothes();
  }, []);

  const fetchClothes = async () => {
    const res = await axios.get("http://localhostlocalhost:5000/api/clothes");
    setClothes(res.data);
  };

  const addCloth = async (cloth) => {
    const res = await axios.post("http://localhost:5000/api/clothes", cloth);
    setClothes([...clothes, res.data]);
  };

  const updateCloth = async (id, updatedCloth) => {
    const res = await axios.put(`http://localhost:5000/api/clothes/${id}`, updatedCloth);
    setClothes(clothes.map((cloth) => (cloth._id === id ? res.data : cloth)));
    setEditingCloth(null);
  };

  const deleteCloth = async (id) => {
    await axios.delete(`http://localhost:5000/api/clothes/${id}`);
    setClothes(clothes.filter((cloth) => cloth._id !== id));
  };

  return (
    <div className="App">
      <h1>Thrifting Baju App</h1>
      <ClothForm onAdd={addCloth} onUpdate={updateCloth} editingCloth={editingCloth} />
      <ClothList clothes={clothes} onEdit={setEditingCloth} onDelete={deleteCloth} />
    </div>
  );
}

export default App;
