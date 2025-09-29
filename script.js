// Create Shipment
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("shipmentForm");
  const result = document.getElementById("result");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const sender = document.getElementById("sender").value;
      const recipient = document.getElementById("recipient").value;
      const country = document.getElementById("country").value;
      const description = document.getElementById("description").value;
      const trackingId = "DHL" + Math.floor(Math.random() * 1000000);

      const shipment = { sender, recipient, country, description, status: "In Transit" };
      localStorage.setItem(trackingId, JSON.stringify(shipment));

      result.innerHTML = `<p>✅ Shipment Created! Your Tracking ID is <strong>${trackingId}</strong></p>`;
    });
  }

  // Track Shipment
  const trackForm = document.getElementById("trackForm");
  const trackingResult = document.getElementById("trackingResult");

  if (trackForm) {
    trackForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const trackId = document.getElementById("trackId").value.trim();
      const data = localStorage.getItem(trackId);

      if (data) {
        const shipment = JSON.parse(data);
        trackingResult.innerHTML = `
          <h3>📦 Shipment Details</h3>
          <p><strong>Sender:</strong> ${shipment.sender}</p>
          <p><strong>Recipient:</strong> ${shipment.recipient}</p>
          <p><strong>Destination:</strong> ${shipment.country}</p>
          <p><strong>Description:</strong> ${shipment.description}</p>
          <p><strong>Status:</strong> ${shipment.status}</p>
        `;
      } else {
        trackingResult.innerHTML = `<p>❌ No shipment found for ID: ${trackId}</p>`;
      }
    });
  }
});
