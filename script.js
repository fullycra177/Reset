window.onload = function () {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 5000); // 5 seconds loading for demo
};

function startReset(type) {
  const status = document.getElementById("status");
  status.innerText = type === "device"
    ? "Resetting Device... (15 min)"
    : "Resetting All WhatsApp Chat Devices... (15 min)";

  setTimeout(() => {
    status.innerText = type === "device"
      ? "✅ Device reset successful!"
      : "✅ All WhatsApp devices reset successfully!";
  }, 3000); // Fast fake delay
}

function showChat() {
  const chatBox = document.getElementById("chat-box");
  chatBox.style.display = "block";
  chatBox.innerText = `
Zeeshan: کیا ھال ھے جناب
Raja G: Ma fitt ap sunao
Zeeshan: بس فٹ آپ بٹاؤ کیا ہو رہا ہے اجکل
Raja G: Kuch ni jani
Zeeshan: اچھا آیان اور راجہ حارث والی ویڈیو تو بھیجو
Raja G: Jani woo larka abi gau ha
Zeeshan: اچھا یہ ویڈیو بنی کس نے ہے
Raja G: Ye haris ke ghr ki video he ya mobile side pe rkh ke khud in dono ne bnai ha...

Adnan: السلام علیکم بھائی
Mohsin: Walikom salam

Adnan: آپ آیان کے بھائی ہو کیا
Saim: Yarrr baat suno bhaii plzz

📢 Voice Message (2) from Unknown Contact
`;
}
