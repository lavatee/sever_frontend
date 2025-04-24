
document.getElementById('downloadBtn').addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = `https://raw.githubusercontent.com/lavatee/sever_frontend/refs/heads/main/pdf/${localStorage.getItem("pdf").split("pdf/")[1]}`
    link.download = ""
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});