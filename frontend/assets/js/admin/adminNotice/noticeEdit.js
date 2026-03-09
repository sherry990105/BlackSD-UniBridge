document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     기존 데이터 세팅
     백엔드 연동 fetch("/api/notice/{id}") 로 교체
  ======================== */
  const editForm = document.getElementById("editForm");
  if (editForm) {
    const existing = {
      title: "기존 제목",
      content: "기존 내용",
    };

    document.getElementById("inputTitle").value = existing.title;
    document.getElementById("inputContent").value = existing.content;

    /* ========================
       저장 submit
    ======================== */
    editForm.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("inputTitle")?.value.trim();
      const content = document.getElementById("inputContent")?.value.trim();
      if (!title) { alert("제목을 입력해주세요."); return; }
      if (!content) { alert("내용을 입력해주세요."); return; }
      // 백엔드 연동 시 fetch("/api/notice/{id}", { method: "PUT", ... }) 로 교체
      alert("저장되었습니다.");
      location.href = "noticeDetail.html";
    });
  }

  /* ========================
     삭제 버튼
  ======================== */
  const btnEditDelete = document.getElementById("btnEditDelete");
  if (btnEditDelete) {
    btnEditDelete.addEventListener("click", () => {
      if (confirm("공지사항을 삭제하시겠습니까?")) {
        location.href = "noticeList.html";
      }
    });
  }

  /* ========================
     파일 선택 시 파일명 표시
  ======================== */
  const fileInput = document.getElementById("fileInput");
  if (fileInput) {
    fileInput.addEventListener("change", () => {
      const fileName = fileInput.files[0]?.name || "선택된 파일 없음";
      const display = document.getElementById("fileDisplay");
      if (display) display.textContent = fileName;
    });
  }

});
