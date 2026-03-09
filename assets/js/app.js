/**
 * QR Code Generator Application
 * ----------------------------------
 * This script handles:
 * 
 * - QR Code generation
 * - Input field events
 * - Downloading the generated QR Code as PNG
 */

const qrCode = new QRCode(document.getElementById("qrcode"))

/**
 * Generates a QR Code based on the user input
 */
function generateQRCode() {

    const input = document.getElementById("qr-input")
    const value = input.value.trim()

    if (!value) return

    qrCode.makeCode(value)
}

/**
 * Download QR Code as PNG
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
 * Events
 */

document.getElementById("qr-input")
    .addEventListener("keyup", generateQRCode)

document.getElementById("download-btn")
    .addEventListener("click", downloadQRCode)