document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     탭 링크
  ======================== */
  const tabMentee = document.getElementById("tab-mentee");
  const tabMentor = document.getElementById("tab-mentor");

  if (tabMentee) {
    tabMentee.href = "../menteeBoard/menteeBoardList.html";
    if (!isMentor) tabMentee.classList.add("is-active");
  }
  if (tabMentor) {
    tabMentor.href = "../mentorBoard/mentorBoardList.html";
    if (isMentor) tabMentor.classList.add("is-active");
  }

  /* ========================
     목록 렌더
  ======================== */
  const boardTableBody = document.getElementById("boardTableBody");
  if (boardTableBody) {
    const posts = Array.from({ length: 10 }, (_, i) => ({
      no: 10 - i,
      title: "게시글제목",
      author: "작성자",
      date: "작성날짜 작성시간",
      views: 0,
    }));

    boardTableBody.innerHTML = posts.map(p => `
      <div class="board-table-row" onclick="location.href='${boardType}BoardDetail.html'">
        <div class="col col-no">${p.no}</div>
        <div class="col col-title">${p.title}</div>
        <div class="col col-author text-muted">${p.author}</div>
        <div class="col col-date text-muted">${p.date}</div>
        <div class="col col-views text-muted">조회수 ${p.views}</div>
      </div>
    `).join("");
  }

  /* ========================
     페이지네이션
  ======================== */
  const pagination = document.getElementById("pagination");
  if (pagination) {
    const TOTAL_PAGES = 10;
    const GROUP_SIZE = 5;
    let currentPage = 1;

    function renderPagination() {
      const groupStart = Math.floor((currentPage - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
      const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, TOTAL_PAGES);

      let html = "";
      html += `<button class="page-btn" data-action="prev" ${currentPage === 1 ? "disabled" : ""}>&lt;</button>`;
      for (let i = groupStart; i <= groupEnd; i++) {
        html += `<button class="page-btn ${i === currentPage ? "is-active" : ""}" data-page="${i}">${i}</button>`;
      }
      html += `<button class="page-btn" data-action="next" ${currentPage === TOTAL_PAGES ? "disabled" : ""}>&gt;</button>`;
      pagination.innerHTML = html;
    }

    pagination.addEventListener("click", e => {
      const btn = e.target.closest(".page-btn");
      if (!btn || btn.disabled) return;

      const groupStart = Math.floor((currentPage - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
      const groupEnd = Math.min(groupStart + GROUP_SIZE - 1, TOTAL_PAGES);

      if (btn.dataset.action === "prev") currentPage = groupStart - 1;
      else if (btn.dataset.action === "next") currentPage = groupEnd + 1;
      else if (btn.dataset.page) currentPage = parseInt(btn.dataset.page);

      renderPagination();
    });

    renderPagination();
  }

  /* ========================
     작성 버튼
  ======================== */
  const btnWrite = document.getElementById("btnWrite");
  if (btnWrite) {
    btnWrite.addEventListener("click", () => {
      location.href = `${boardType}BoardWrite.html`;
    });
  }

  /* ========================
     조회 버튼
  ======================== */
  const btnSearch = document.getElementById("btnSearch");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      alert("조회 기능은 백엔드 연동 후 동작합니다.");
    });
  }

});
