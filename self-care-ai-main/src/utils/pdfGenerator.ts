import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

interface UserProfile {
  full_name: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  profile_image: string | null;
}

interface HistoryRecord {
  id: number;
  label: string;
  confidence: string;
  timestamp: string;
  severity: string;
  image_path: string;
}

export const generatePDF = async (record: HistoryRecord, user: UserProfile | null) => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();

  // Fonts
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const primaryColor = rgb(0.06, 0.45, 0.35); // Emerald-800 like
  const accentColor = rgb(0.16, 0.73, 0.50); // Emerald-500 like
  const textColor = rgb(0.2, 0.2, 0.2);
  const lightGray = rgb(0.95, 0.95, 0.95);

  let y = height - 50;

  // --- Header ---
  page.drawRectangle({
    x: 0,
    y: height - 100,
    width: width,
    height: 100,
    color: primaryColor,
  });

  page.drawText("SelfCare AI", {
    x: 50,
    y: height - 60,
    size: 28,
    font: fontBold,
    color: rgb(1, 1, 1),
  });

  page.drawText("Advanced Ocular Diagnostics Report", {
    x: 50,
    y: height - 80,
    size: 12,
    font: fontRegular,
    color: rgb(0.9, 0.9, 0.9),
  });

  const reportDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  page.drawText(`Date: ${reportDate}`, {
    x: width - 200,
    y: height - 60,
    size: 12,
    font: fontRegular,
    color: rgb(1, 1, 1),
  });

  y = height - 140;

  // --- Patient Information ---
  page.drawText("Patient Information", { x: 50, y, size: 16, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawLine({ start: { x: 50, y }, end: { x: width - 50, y }, thickness: 1, color: accentColor });
  y -= 25;

  if (user) {
    const infoX = 50;
    const infoGap = 20;
    
    page.drawText(`Name:`, { x: infoX, y, size: 12, font: fontBold, color: textColor });
    page.drawText(user.full_name, { x: infoX + 60, y, size: 12, font: fontRegular, color: textColor });
    y -= infoGap;

    const age = user.dob ? Math.abs(new Date(Date.now() - new Date(user.dob).getTime()).getUTCFullYear() - 1970) : 'N/A';
    page.drawText(`Age/Gender:`, { x: infoX, y, size: 12, font: fontBold, color: textColor });
    page.drawText(`${age} years / ${user.gender}`, { x: infoX + 90, y, size: 12, font: fontRegular, color: textColor });
    y -= infoGap;

    page.drawText(`Address:`, { x: infoX, y, size: 12, font: fontBold, color: textColor });
    page.drawText(user.address, { x: infoX + 60, y, size: 12, font: fontRegular, color: textColor });
  }

  y -= 40;

  // --- Analysis Results ---
  page.drawText("Analysis Results", { x: 50, y, size: 16, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawLine({ start: { x: 50, y }, end: { x: width - 50, y }, thickness: 1, color: accentColor });
  y -= 30;

  // Result Box
  const boxHeight = 100;
  page.drawRectangle({
    x: 50,
    y: y - boxHeight,
    width: width - 100,
    height: boxHeight,
    color: lightGray,
    borderColor: accentColor,
    borderWidth: 1,
  });

  const resultY = y - 30;
  const diseaseName = record.label.replace(/_/g, " ").toUpperCase();
  const confidencePercent = (parseFloat(record.confidence) * 100).toFixed(1);

  page.drawText("Detected Condition:", { x: 70, y: resultY, size: 12, font: fontBold, color: textColor });
  page.drawText(diseaseName, { x: 200, y: resultY, size: 14, font: fontBold, color: primaryColor });

  page.drawText("Severity Level:", { x: 70, y: resultY - 25, size: 12, font: fontBold, color: textColor });
  page.drawText(record.severity, { x: 200, y: resultY - 25, size: 12, font: fontRegular, color: textColor });

  page.drawText("AI Confidence:", { x: 70, y: resultY - 50, size: 12, font: fontBold, color: textColor });
  page.drawText(`${confidencePercent}%`, { x: 200, y: resultY - 50, size: 12, font: fontRegular, color: textColor });

  y -= (boxHeight + 40);

  // --- Clinical Image ---
  page.drawText("Clinical Image Analysis", { x: 50, y, size: 16, font: fontBold, color: primaryColor });
  y -= 10;
  page.drawLine({ start: { x: 50, y }, end: { x: width - 50, y }, thickness: 1, color: accentColor });
  y -= 20;

  try {
    // Construct absolute URL for the image
    // Assuming backend runs on localhost:8000. In production, this should be an env var.
    // The record.image_path is like "uploads/uuid.jpg"
    // We need to fetch it.
    
    // Fix path separators if needed (windows vs linux)
    const normalizedPath = record.image_path.replace(/\\/g, '/');
    const imageUrl = `http://localhost:8000/${normalizedPath}`;
    
    const imageBytes = await fetch(imageUrl).then((res) => res.arrayBuffer());
    
    let image;
    if (normalizedPath.toLowerCase().endsWith('.png')) {
        image = await pdfDoc.embedPng(imageBytes);
    } else {
        image = await pdfDoc.embedJpg(imageBytes);
    }

    const imageDims = image.scale(0.5);
    // Center the image
    const imageX = (width - imageDims.width) / 2;
    
    // Check if we have enough space, else add page
    if (y - imageDims.height < 100) {
        const newPage = pdfDoc.addPage();
        y = newPage.getSize().height - 50;
        newPage.drawImage(image, {
            x: imageX,
            y: y - imageDims.height,
            width: imageDims.width,
            height: imageDims.height,
        });
        y -= (imageDims.height + 20);
    } else {
        page.drawImage(image, {
            x: imageX,
            y: y - imageDims.height,
            width: imageDims.width,
            height: imageDims.height,
        });
        y -= (imageDims.height + 20);
    }

  } catch (error) {
    console.error("Failed to embed image", error);
    page.drawText("(Image could not be loaded)", { x: 50, y: y - 20, size: 10, font: fontOblique, color: rgb(0.5, 0.5, 0.5) });
    y -= 40;
  }

  // --- Footer / Disclaimer ---
  const footerY = 50;
  page.drawLine({ start: { x: 50, y: footerY + 20 }, end: { x: width - 50, y: footerY + 20 }, thickness: 0.5, color: rgb(0.7, 0.7, 0.7) });
  
  const disclaimer = "DISCLAIMER: This report is generated by an Artificial Intelligence system. It is intended for screening and informational purposes only and does not constitute a definitive medical diagnosis. Please consult a qualified ophthalmologist for professional medical advice and treatment.";
  
  page.drawText(disclaimer, {
    x: 50,
    y: footerY,
    size: 8,
    font: fontOblique,
    color: rgb(0.5, 0.5, 0.5),
    maxWidth: width - 100,
    lineHeight: 10,
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes as any], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `SelfCareAI_Report_${record.id}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
};
