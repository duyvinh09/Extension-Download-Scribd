(function () {
  function cleanPage() {
    let scroller = document.querySelector(".document_scroller");
    if (scroller) {
      scroller.classList.remove("document_scroller");
    }

    let classesToRemove = ["toolbar_drop", "mobile_overlay"];
    classesToRemove.forEach((className) => {
      document.querySelectorAll("." + className).forEach((el) => {
        el.remove();
      });
    });
  }

  cleanPage();
  console.log("Đã hoàn thành, vui lòng cuộn hết trang sau đó bấm Ctrl + P để tải.");
})();
