function copyText() {
    // Get the textbox element
    let textbox = document.getElementById('myTextbox');

    // Select the text in the textbox
    textbox.select();
    textbox.setSelectionRange(0, 99999); /* For mobile devices */

    // Copy the text to the clipboard
    document.execCommand('copy');

    alert('Text copied!');
}
