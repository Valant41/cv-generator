import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/generate-about", async (req, res) => {
  const { jobTitle, education } = req.body;

  if (!jobTitle || !education) {
    return res.status(400).json({ error: "jobTitle et education sont requis." });
  }

  try {
    const prompt = `Rédige un paragraphe de présentation professionnelle pour un candidat qui vise le poste de ${jobTitle}. Il a étudié ${education}. Le texte doit être fluide, professionnel, et adapté à un CV.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      max_tokens: 120,
    });

    const generatedText = response.data.choices[0].text.trim();
    res.json({ aboutMe: generatedText });
  } catch (error) {
    console.error("Erreur OpenAI:", error.message);
    res.status(500).json({ error: "Erreur lors de la génération." });
  }
});

app.get("/", (req, res) => {
  res.send("Backend IA pour CV prêt 🚀");
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
