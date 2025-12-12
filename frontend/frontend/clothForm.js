// frontend/src/components/ClothForm.js
import React, { useState, useEffect } from "react";

const ClothForm = ({ onAdd, onUpdate, editingCloth }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    size: "",
    condition: "Used",
    imageUrl: "",
  });

  useEffect(() => {
    if (editingCloth) {
      setForm(editingCloth);
    }
  }, [editingCloth]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCloth) {
      onUpdate(editingCloth._id, form);
    } else {
      onAdd(form);
    }
    setForm({ name: "", description: "", price: "", size: "", condition: "Used", imageUrl: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nama Baju" required />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Deskripsi" required />
      <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Harga" required />
      <input name="size" value={form.size} onChange={handleChange} placeholder="Ukuran" required />
      <select name="condition" value={form.condition} onChange={handleChange}>
        <option value="New">New</option>
        <option value="Used">Used</option>
        <option value="Worn">Worn</option>
      </select>
      <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="URL Gambar" />
      <button type="submit">{editingCloth ? "Update" : "Add"} Baju</button>
    </form>
  );
};

export default ClothForm;
