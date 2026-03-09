document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     등록 폼 submit
  ======================== */
  const writeForm = document.getElementById("writeForm");
  if (writeForm) {
    writeForm.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("inputTitle")?.value.trim();
      const content = document.getElementById("inputContent")?.value.trim();
      if (!title) { alert("제목을 입력해주세요."); return; }
      if (!content) { alert("내용을 입력해주세요."); return; }
      // 백엔드 연동 시 fetch("/api/board", { method: "POST", ... }) 로 교체
      alert("등록되었습니다.");
      location.href = `${boardType}BoardList.html`;
    });
  }

});
