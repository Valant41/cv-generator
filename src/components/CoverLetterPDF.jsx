// src/components/CoverLetterPDF.jsx
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.6,
    color: "#333",
  },
  content: {
    whiteSpace: "pre-wrap",
  },
});

export default function CoverLetterPDF({ letterText }) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.content}>{letterText}</Text>
        </View>
      </Page>
    </Document>
  );
}
