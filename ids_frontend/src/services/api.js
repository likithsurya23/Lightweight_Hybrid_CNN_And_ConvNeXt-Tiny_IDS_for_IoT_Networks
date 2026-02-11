import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const predictionService = {
  // single prediction
  async predictSingle(features) {
    const response = await api.post("/predict/", { features });
    return response.data;
  },

  // batch prediction using CSV file upload
  async predictBatchFile(file) {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/batch-predict/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
