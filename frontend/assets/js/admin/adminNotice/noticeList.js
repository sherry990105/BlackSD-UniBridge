document.addEventListener("DOMContentLoaded", () => {

  /* ========================
     목록 렌더
  ======================== */
  const noticeTableBody = document.getElementById("noticeTableBody");
  if (noticeTableBody) {
    const notices = Array.from({ length: 10 }, (_, i) => ({
      no: i + 1,
      title: "게시글제목",
      date: "작성날짜 작성시간",
      views: 0,
    }));

    noticeTableBody.innerHTML = notices.map(n => `
      <div class="notice-table-row" onclick="location.href='noticeDetail.html'">
        <div class="col col-no">${n.no}</div>
        <div class="col col-title">${n.title}</div>
        <div class="col col-date text-muted">${n.date}</div>
        <div class="col col-views text-muted">조회수 ${n.views}</div>
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
     종류 드롭다운
  ======================== */
  const btnType = document.getElementById("btnType");
  const typeDropdown = document.getElementById("typeDropdown");
  if (btnType && typeDropdown) {
    btnType.addEventListener("click", () => {
      typeDropdown.style.display = typeDropdown.style.display === "block" ? "none" : "block";
    });
    document.addEventListener("click", e => {
      if (!btnType.contains(e.target)) typeDropdown.style.display = "none";
    });
  }

  /* ========================
     등록 버튼
  ======================== */
  const btnWrite = document.getElementById("btnWrite");
  if (btnWrite) {
    btnWrite.addEventListener("click", () => {
      location.href = "noticeWrite.html";
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

function selectType(type) {
  document.getElementById("btnType").textContent = type + " ▼";
  document.getElementById("typeDropdown").style.display = "none";
}
