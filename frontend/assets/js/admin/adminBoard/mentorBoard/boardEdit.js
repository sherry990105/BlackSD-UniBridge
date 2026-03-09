document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     기존 데이터 세팅
     백엔드 연동 시 fetch("/api/board/{id}") 로 교체
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
      // 백엔드 연동 시 fetch("/api/board/{id}", { method: "PUT", ... }) 로 교체
      alert("저장되었습니다.");
      location.href = `${boardType}BoardDetail.html`;
    });
  }

  /* ========================
     삭제 버튼
  ======================== */
  const btnEditDelete = document.getElementById("btnEditDelete");
  if (btnEditDelete) {
    btnEditDelete.addEventListener("click", () => {
      if (confirm("게시글을 삭제하시겠습니까?")) {
        location.href = `${boardType}BoardList.html`;
      }
    });
  }

});
