import axios from "axios";

const deleteCityApi = async function (id: string) {
  try {
    await axios.delete(`http://localhost:3000/cities/${id}`);
  } catch (err) {
    throw new Error("Error : ${err}");
  }
};

export { deleteCityApi };
