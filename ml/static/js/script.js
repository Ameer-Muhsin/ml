// Function to send text for sentiment prediction to the Flask API
async function getSentiment(text) {
    const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: text }),
    });

    const data = await response.json();
    return data.sentiment || "Error: Unable to process sentiment.";
}

// Handle the predict button click
document.getElementById("predict-btn").addEventListener("click", async function () {
    const text = document.getElementById("text-input").value;
    const sentiment = await getSentiment(text);
    document.getElementById("prediction-output").innerText = `Sentiment: ${sentiment}`;
});

// Handle image upload
document.getElementById("image-upload").addEventListener("change", function () {
    const fileInput = document.getElementById("image-upload");
    const file = fileInput.files[0];
    if (file) {
        document.getElementById("image-message").innerText = `Uploaded: ${file.name}`;
    } else {
        document.getElementById("image-message").innerText = "No image uploaded yet.";
    }
});
