import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// 🔤 Titre stylisé.
const SectionTitle = ({ title }) => (
  <View style={styles.sectionTitleContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
  </View>
);

export default function PDFCV({ data }) {
  const skillList = data.skills?.split(",").map((s) => s.trim()) || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.container}>

          {/* 📎 Colonne gauche */}
          <View style={styles.leftColumn}>
            {/* Photo de profil */}
            {data.profileImage && (
              <Image src={data.profileImage} style={styles.profileImage} />
            )}

            <Text style={styles.name}>{data.fullName}</Text>
            <Text style={styles.jobTitle}>{data.jobTitle}</Text>

            <View style={styles.section}>
              <Text style={styles.label}>Contact</Text>
              {data.email && <Text style={styles.text}>Email : {data.email || "à compléter"}</Text>}
              {data.city && <Text style={styles.text}>Ville :  {data.city || "à compléter"}</Text>}
            </View>

            {data.phone && (
              <View style={styles.section}>
              <Text style={styles.label}>Téléphone</Text>
              <Text style={styles.text}>{data.phone}</Text>
              </View>
            )}

            {data.interests && (
              <View style={styles.section}>
              <Text style={styles.label}>Centres d’intérêt</Text>
              <Text style={styles.text}>{data.interests}</Text>
              </View>
            )}



            <View style={styles.section}>
              <Text style={styles.label}>Compétences</Text>
              {skillList.map((skill, i) => (
                <Text key={i} style={styles.bullet}>• {skill}</Text>
              ))}
            </View>

            <View style={styles.section}>
              <Text style={styles.label}>Langues</Text>
              {data.languages?.sort((a, b) => b.level - a.level).map((lang, i) => (
                <Text key={i} style={styles.bullet}>
                  • {lang.lang} : {
                    lang.level === "100" ? "Langue maternelle"
                      : lang.level === "80" ? "Professionnel"
                      : lang.level === "60" ? "Intermédiaire"
                      : "Débutant"
                  }
                </Text>
              ))}
            </View>
          </View>

          {/* 📄 Colonne droite */}
          <View style={styles.rightColumn}>
            {data.aboutMe && (<> <SectionTitle title="À propos de moi" /><View style={styles.entry}><Text style={styles.text}>{data.aboutMe}</Text>
          </View>
          </>
            )}

            <SectionTitle title="Expériences professionnelles" />
            {data.experiences?.length > 0 ? (
              data.experiences
                .sort((a, b) => parseInt(b.endYear) - parseInt(a.endYear))
                .map((exp, i) => (
                  <View key={i} style={styles.entry}>
                    <Text style={styles.entryTitle}>
                      {exp.position} — {exp.company}
                    </Text>
                    <Text style={styles.entrySubtitle}>
                      {exp.startYear} - {exp.endYear}
                    </Text>
                    <Text style={styles.text}>{exp.description}</Text>
                  </View>
                ))
            ) : (
              <Text style={styles.text}>Aucune expérience renseignée.</Text>
            )}

            <SectionTitle title="Formations" />
            {data.formations?.length > 0 ? (
              data.formations
                .sort((a, b) => parseInt(b.endYear) - parseInt(a.endYear))
                .map((f, i) => (
                  <View key={i} style={styles.entry}>
                    <Text style={styles.entryTitle}>{f.degree} — {f.school}</Text>
                    <Text style={styles.entrySubtitle}>
                      {f.startYear} - {f.endYear}
                    </Text>
                    {f.description && <Text style={styles.text}>{f.description}</Text>}
                  </View>
                ))
            ) : (
              <Text style={styles.text}>Aucune formation renseignée.</Text>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

// 🎨 Styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    color: "#333",
  },
  container: {
    flexDirection: "row",
    gap: 20,
  },
  leftColumn: {
    width: "35%",
    paddingRight: 10,
    borderRight: "1 solid #ccc",
    alignItems: "center",
  },
  rightColumn: {
    width: "65%",
    paddingLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    objectFit: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "center",
  },
  jobTitle: {
    fontSize: 12,
    color: "#555",
    marginBottom: 12,
    textAlign: "center",
  },
  section: {
    marginBottom: 14,
    width: "100%",
  },
  label: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 10,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  bullet: {
    fontSize: 10,
    marginBottom: 1,
  },
  sectionTitleContainer: {
    backgroundColor: "#f5f5f5",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    borderLeft: "3 solid #3b82f6",
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#333",
  },
  entry: {
    marginBottom: 10,
  },
  entryTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  entrySubtitle: {
    fontSize: 10,
    color: "#666",
    marginBottom: 2,
  },
});
