import axios from "axios";

const API = axios.create({
  baseURL: "https://opo-n5pt.onrender.com/api/",
});

export const getNotes = () => API.get("notes/");

export const createNote = (note) => API.post("notes/", note);

export const updateNote = (id, note) =>
  API.put(`notes/${id}/`, note);

export const deleteNote = (id) =>
  API.delete(`notes/${id}/`);

export default API;