document.getElementById("process-btn").addEventListener("click", async () => {
    const btn = document.getElementById("process-btn");
    const status = document.getElementById("status");

    btn.classList.add("loading");
    status.textContent = "Đang xử lý...";

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.url.includes("scribd.com/document/")) {
        status.textContent = "Hãy mở trang Scribd trước!";
        btn.classList.remove("loading");
        return;
    }

    chrome.runtime.sendMessage({ action: "processScribd", url: tab.url });

    setTimeout(() => {
        btn.classList.remove("loading");
        status.textContent = "Hoàn tất! Tab mới đã mở.";
    }, 2000);
});
