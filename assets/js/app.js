/**
 * QR Code Generator Application
 * ----------------------------------
 * Features:
 * - Default QR Code
 * - Real-time generation
 * - Clear input on first focus
 * - Download QR Code
 */

// Default URL
const defaultURL = "https://rodrigopensky.github.io/qrcode-generator/"

// Control variable to clear input only once
let firstFocus = true

// Initialize QR Code
const qrCode = new QRCode(document.getElementById("qrcode"), {
    text: defaultURL,
    width: 220,
    height: 220
})

// Set default value in input
const input = document.getElementById("qr-input")
input.value = defaultURL


/**
 * Generate QR Code
 */
function generateQRCode() {

    let value = input.value.trim()

    if (value === "") {
        value = defaultURL
    }

    qrCode.makeCode(value)
}


/**
 * Download QR Code
 */
function downloadQRCode() {

    const qrWrapper = document.getElementById("qr-wrapper")

    html2canvas(qrWrapper).then(canvas => {

        const link = document.createElement("a")

        link.download = "qrcode.png"
        link.href = canvas.toDataURL("image/png")

        link.click()
    })
}


/**
 * Clear input only the first time user clicks
 */
input.addEventListener("focus", function () {

    if (firstFocus) {
        input.value = ""
        firstFocus = false
    }

})


/**
 * Update QR Code while typing
 */
input.addEventListener("input", generateQRCode)


/**
 * Download event
 */
document
    .getElementById("download-btn")
    .addEventListener("click", downloadQRCode)