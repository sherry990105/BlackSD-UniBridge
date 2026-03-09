document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     수정 버튼
  ======================== */
  const btnEdit = document.getElementById("btnEdit");
  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      location.href = "noticeEdit.html";
    });
  }

  /* ========================
     삭제 버튼
  ======================== */
  const btnDelete = document.getElementById("btnDelete");
  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (confirm("공지사항을 삭제하시겠습니까?")) {
        location.href = "noticeList.html";
      }
    });
  }

});
