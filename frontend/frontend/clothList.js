// frontend/src/components/ClothList.js
import React from "react";

const ClothList = ({ clothes, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Daftar Baju</h2>
      {clothes.map((cloth) => (
        <div key={cloth._id}>
          <h3>{cloth.name}</h3>
          <p>{cloth.description}</p>
          <p>Harga: Rp{cloth.price}</p>
          <p>Ukuran: {cloth.size}</p>
          <p>Kondisi: {cloth.condition}</p>
          <button onClick={() => onEdit(cloth)}>Edit</button>
          <button onClick={() => onDelete(cloth._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ClothList;
