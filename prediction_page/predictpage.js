const pageData = {
  title: "Prediksi Model Machine Learning",
  description: "Gunakan alat prediksi kami untuk melakukan prediksi dengan model machine learning.",
  uploadSection: {
    label: "Upload Excel File",
    fileInput: {
      buttonText: "Choose File",
      placeholder: "No file chosen",
      tooltip: "Please select a file."
    },
    predictButton: {
      text: "Predict",
      style: "blue-button"
    }
  },
  resultBoxes: [
    {
      title: "Result Box 1",
      content: ""
    },
    {
      title: "Result Box 2",
      content: ""
    },
    {
      title: "Result Box 3",
      content: ""
    }
  ],
  footer: {
    text: "© 2023 Nama Perusahaan. Semua hak dilindungi."
  }
};

// Contoh render menggunakan JavaScript (vanilla)
document.addEventListener("DOMContentLoaded", () => {
  // Set judul halaman
  document.title = pageData.title;

  // Tambahkan header
  const header = document.createElement("h1");
  header.style.color = "blue";
  header.textContent = pageData.title;

  // Tambahkan deskripsi
  const description = document.createElement("p");
  description.textContent = pageData.description;

  // Input File
  const fileLabel = document.createElement("label");
  fileLabel.textContent = pageData.uploadSection.label;

  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.placeholder = pageData.uploadSection.fileInput.placeholder;

  // Tombol Predict
  const predictButton = document.createElement("button");
  predictButton.textContent = pageData.uploadSection.predictButton.text;
  predictButton.className = pageData.uploadSection.predictButton.style;

  // Result Boxes
  const resultSection = document.createElement("div");
  pageData.resultBoxes.forEach(box => {
    const resultBox = document.createElement("div");
    resultBox.style.border = "1px solid #ccc";
    resultBox.style.margin = "10px";
    resultBox.style.padding = "10px";
    resultBox.innerHTML = `<strong>${box.title}</strong><br>${box.content}`;
    resultSection.appendChild(resultBox);
  });

  // Footer
  const footer = document.createElement("footer");
  footer.textContent = pageData.footer.text;

  // Append semua elemen ke body
  document.body.appendChild(header);
  document.body.appendChild(description);
  document.body.appendChild(fileLabel);
  document.body.appendChild(fileInput);
  document.body.appendChild(predictButton);
  document.body.appendChild(resultSection);
  document.body.appendChild(footer);
});
