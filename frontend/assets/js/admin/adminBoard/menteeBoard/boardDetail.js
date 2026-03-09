document.addEventListener("DOMContentLoaded", () => {

  const path = window.location.pathname;
  const isMentor = path.includes("mentorBoard");
  const boardType = isMentor ? "mentor" : "mentee";

  /* ========================
     댓글 렌더
  ======================== */
  const commentList = document.getElementById("commentList");
  if (commentList) {
    const comments = [
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
      { nickname: "닉네임", content: "댓글내용", date: "작성날짜 작성시간" },
    ];

    commentList.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-body">
          <div class="comment-nickname">${c.nickname}</div>
          <div class="comment-content">${c.content}</div>
          <div class="comment-date">${c.date}</div>
        </div>
        <button class="btn btn-red" onclick="deleteComment(this)">삭제</button>
      </div>
    `).join("");
  }

  /* ========================
     수정 버튼
  ======================== */
  const btnEdit = document.getElementById("btnEdit");
  if (btnEdit) {
    btnEdit.addEventListener("click", () => {
      location.href = `${boardType}BoardEdit.html`;
    });
  }

  /* ========================
     삭제 버튼
  ======================== */
  const btnDelete = document.getElementById("btnDelete");
  if (btnDelete) {
    btnDelete.addEventListener("click", () => {
      if (confirm("게시글을 삭제하시겠습니까?")) {
        location.href = `${boardType}BoardList.html`;
      }
    });
  }

});

function deleteComment(btn) {
  if (confirm("댓글을 삭제하시겠습니까?")) {
    btn.closest(".comment-item").remove();
  }
}
