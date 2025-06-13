import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/generate-about-me", async (req, res) => {
  const { fullName, jobTitle, skills, education, interests, languages } = req.body;

  if (!fullName || !jobTitle) {
    return res.status(400).json({ error: "fullName et jobTitle sont requis." });
  }

  try {
    const prompt = `
Tu es un expert en rédaction de CV. Génère un court paragraphe (3-4 phrases maximum) pour la section "À propos de moi" d’un CV.

Infos du candidat :
Nom : ${fullName}
Poste visé : ${jobTitle}
Formation : ${education || "non précisée"}
Compétences : ${skills || "non précisées"}
Centres d’intérêt : ${interests || "non précisés"}
Langues : ${languages?.map(l => `${l.lang} (${l.level})`).join(", ") || "non précisées"}

Le texte doit être professionnel, concis, pertinent pour le poste. Ne commence pas par "Je suis".
`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });

    const generatedText = completion.choices[0].message.content.trim();
    res.json({ aboutMe: generatedText });
  } catch (error) {
    console.error("Erreur OpenAI:", error.message);
    res.status(500).json({ error: "Erreur lors de la génération du texte." });
  }
});

app.post("/generate-cover-letter", async (req, res) => {
  const {
    fullName,
    jobTitle,
    education,
    skills,
    experiences,
    interests,
    companyName,
    location,
    recruiterName,
  } = req.body;

  try {
    const prompt = `
Tu es un expert en rédaction RH. Rédige une lettre de motivation professionnelle pour un poste de "${jobTitle}" chez "${companyName}" à "${location}". Le candidat s'appelle ${fullName}.
${recruiterName ? `La lettre est adressée à ${recruiterName}.` : ""}
Il a étudié : ${education || "non précisé"}.
Ses compétences : ${skills || "non précisées"}.
Ses expériences : ${experiences?.map(e => e.position + " chez " + e.company).join(", ") || "non précisées"}.
Ses centres d’intérêt : ${interests || "non précisés"}.

Sois direct, convaincant, professionnel. Ne fais pas de phrases bateau. Personnalise le message selon le poste et l’entreprise.
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
    });

    const letter = completion.choices[0].message.content.trim();
    res.json({ letter });
  } catch (err) {
    console.error("Erreur OpenAI:", err.message);
    res.status(500).json({ error: "Erreur IA lors de la génération de la lettre." });
  }
});


app.get("/", (req, res) => {
  res.send("Backend IA pour CV prêt 🚀");
});

app.listen(port, () => {
  console.log(`✅ Serveur backend lancé sur http://localhost:${port}`);
});
