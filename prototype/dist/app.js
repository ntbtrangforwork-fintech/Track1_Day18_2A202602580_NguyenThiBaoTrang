"use strict";

const state = {
  active: null,
  completed: new Set(),
  steps: { a: 0, b: 0, c: 0 },
  a: { route: null, observation: null },
  b: { answers: {}, selectedHypothesis: null },
  c: { scope: "screenshot", consent: false, applied: false }
};

const stage = document.querySelector("#prototype-stage");
const workspaceTitle = document.querySelector("#workspace-title");
const workspaceKicker = document.querySelector("#workspace-kicker");
const progress = document.querySelector("#trial-progress");
const toast = document.querySelector("#toast");
const exitDialog = document.querySelector("#exit-dialog");

const optionMeta = {
  a: { letter: "A", name: "Bản đồ tự kiểm tra", subtitle: "User-led · AI chỉ giải thích khi được gọi", theme: "theme-a" },
  b: { letter: "B", name: "Đối thoại đồng chẩn đoán", subtitle: "AI hỏi trước · Hai bên cùng thu hẹp nguyên nhân", theme: "theme-b" },
  c: { letter: "C", name: "AI kiểm tra artefact, user duyệt", subtitle: "AI phân tích sau consent · User duyệt mọi thay đổi", theme: "theme-c" }
};

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char]));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

function renderProgress() {
  progress.innerHTML = ["a", "b", "c"].map(key => {
    const done = state.completed.has(key);
    return `<span class="progress-pill ${done ? "done" : ""}">${done ? "✓ " : ""}${key.toUpperCase()}</span>`;
  }).join("");
}

function setActiveTab(key) {
  document.querySelectorAll(".option-tab").forEach(tab => {
    const isActive = tab.dataset.option === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-current", isActive ? "step" : "false");
  });
}

function stepper(current) {
  const labels = ["Context", "Critical interaction", "Result"];
  return `<div class="stepper" aria-label="Tiến trình phương án">${labels.map((label, index) => {
    const step = index + 1;
    const className = step < current ? "passed" : step === current ? "current" : "";
    return `<span class="${className}">${step < current ? "✓" : step} ${label}</span>`;
  }).join("")}</div>`;
}

function optionShell(key, step, body) {
  const meta = optionMeta[key];
  return `
    <article class="option-shell ${meta.theme}">
      <header class="option-hero">
        <div class="option-hero-copy">
          <div class="option-letter">${meta.letter}</div>
          <div><h3>${meta.name}</h3><p>${meta.subtitle}</p></div>
        </div>
        ${stepper(step)}
      </header>
      <div class="option-body">${body}</div>
    </article>`;
}

function exitButton() {
  return `<button class="button button-ghost js-exit" type="button">Thoát về bài học</button>`;
}

function renderHome() {
  state.active = null;
  setActiveTab(null);
  workspaceKicker.textContent = "MICRO-PROTOTYPE TEST";
  workspaceTitle.textContent = "Ba cách để thoát khỏi điểm kẹt";
  stage.innerHTML = `
    <div class="stage-empty">
      <div class="stage-empty-inner">
        <div class="eyebrow">CÙNG MỘT TASK · BA CƠ CHẾ</div>
        <h3>Hãy tự thao tác, đừng tìm “đáp án đúng”</h3>
        <p>Mỗi phương án giúp bạn xử lý cùng một tình huống nhưng phân chia công việc giữa người học và AI theo cách khác nhau.</p>
        <div class="three-mechanisms">
          <div class="mechanism"><strong>A · Tự kiểm tra</strong><span>Bạn chọn đường đi. AI chỉ giải thích khi được gọi.</span></div>
          <div class="mechanism"><strong>B · Cùng chẩn đoán</strong><span>AI hỏi, bạn cung cấp bằng chứng và chọn điều cần kiểm tra.</span></div>
          <div class="mechanism"><strong>C · AI phân tích</strong><span>AI đọc phạm vi bạn cho phép, chỉ ra dấu hiệu để bạn duyệt.</span></div>
        </div>
        <button class="button button-primary" type="button" data-start="a">Bắt đầu với Option A</button>
      </div>
    </div>`;
  bindSharedActions();
  renderProgress();
}

function selectOption(key) {
  state.active = key;
  setActiveTab(key);
  workspaceKicker.textContent = `OPTION ${key.toUpperCase()}`;
  workspaceTitle.textContent = optionMeta[key].name;
  if (key === "a") renderA();
  if (key === "b") renderB();
  if (key === "c") renderC();
  document.querySelector("#workspace").focus({ preventScroll: true });
}

function renderA() {
  const step = state.steps.a + 1;
  if (step === 1) {
    stage.innerHTML = optionShell("a", 1, `
      <div class="notice">
        <div class="notice-icon">i</div>
        <div><strong>Bạn giữ tay lái</strong><p>Tôi sẽ đưa ra một bản đồ kiểm tra theo đúng triệu chứng. Tôi không đọc file, không tự chẩn đoán và không thay đổi dữ liệu.</p></div>
      </div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>Bắt đầu từ dấu hiệu đang thấy</h3><p>Chọn điều bạn muốn kiểm tra trước. Bạn có thể quay lại mà không mất tiến trình.</p></div><span class="tag">Don't Act</span></div>
          <div class="choice-list">
            <button class="choice" type="button" data-a-route="data"><span class="choice-number">1</span><span><strong>Kiểm tra dữ liệu nguồn</strong><small>Vì Excel đang mặc định Count và tùy chọn Sum bị mờ</small></span><span class="choice-arrow">→</span></button>
            <button class="choice" type="button" data-a-route="values"><span class="choice-number">2</span><span><strong>Kiểm tra vùng Values</strong><small>Xem cột có được kéo đúng vị trí hay không</small></span><span class="choice-arrow">→</span></button>
            <button class="choice" type="button" data-a-route="steps"><span class="choice-number">3</span><span><strong>Xem lại thao tác trong video</strong><small>Đối chiếu từng bước bạn vừa làm</small></span><span class="choice-arrow">→</span></button>
          </div>
          <div class="action-row"><button class="button button-secondary" type="button" data-a-route="unknown">Tôi không biết bắt đầu từ đâu</button>${exitButton()}</div>
        </section>
        <aside class="card">
          <div class="card-head"><div><h3>Tiến trình của bạn</h3><p>Mỗi trạng thái do bạn xác nhận.</p></div></div>
          <div class="checkpoint"><span class="checkpoint-state">1</span><span><strong>Chọn dấu hiệu</strong><small>Đang chờ bạn chọn</small></span></div>
          <div class="checkpoint"><span class="checkpoint-state">2</span><span><strong>Chạy phép kiểm tra</strong><small>Chưa kiểm tra</small></span></div>
          <div class="checkpoint"><span class="checkpoint-state">3</span><span><strong>Xác nhận hoặc loại trừ</strong><small>Chưa có kết luận</small></span></div>
        </aside>
      </div>`);
  } else if (step === 2) {
    const route = state.a.route;
    const routeCopy = {
      data: ["Kiểm tra dữ liệu nguồn", "Mở cột Doanh thu và quan sát 3–5 ô đầu tiên. Tìm dấu hiệu số đang được Excel đọc như văn bản: căn trái, tam giác cảnh báo hoặc khoảng trắng đầu ô."],
      values: ["Kiểm tra vùng Values", "Đối chiếu tên trường trong Values. Nếu đúng là Doanh thu nhưng phép tính vẫn là Count và Sum bị mờ, đánh dấu bước này là đã loại trừ."],
      steps: ["Đối chiếu thao tác", "So sánh việc kéo cột Doanh thu vào Values. Nếu thao tác giống video nhưng kết quả vẫn là Count, đánh dấu bước này là đã loại trừ."],
      unknown: ["Giải thích điểm vào", "Hai dấu hiệu đi cùng nhau — Excel chọn Count và khóa Sum — thường đáng để kiểm tra cách dữ liệu nguồn đang được đọc trước. Đây chỉ là thứ tự kiểm tra, chưa phải kết luận."]
    }[route];
    stage.innerHTML = optionShell("a", 2, `
      <div class="notice">
        <div class="notice-icon">?</div>
        <div><strong>AI chỉ giải thích checkpoint bạn đã chọn</strong><p>Checklist có thể không bao phủ lỗi đặc thù. Chỉ bạn mới có thể xác nhận điều thực sự xuất hiện trong file.</p></div>
      </div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>${routeCopy[0]}</h3><p>${routeCopy[1]}</p></div><span class="tag uncertain">Chưa kiểm tra</span></div>
          <div class="choice-list">
            <button class="choice" type="button" data-a-observation="yes"><span class="choice-number">✓</span><span><strong>Tôi thấy dấu hiệu được mô tả</strong><small>Xác nhận bằng điều đang hiện trong file mô phỏng</small></span><span class="choice-arrow">→</span></button>
            <button class="choice" type="button" data-a-observation="no"><span class="choice-number">×</span><span><strong>Không thấy dấu hiệu này</strong><small>Loại trừ nhánh và quay lại bản đồ</small></span><span class="choice-arrow">→</span></button>
            <button class="choice" type="button" data-a-observation="unsure"><span class="choice-number">?</span><span><strong>Tôi chưa chắc</strong><small>Xem giải thích ngắn mà không để AI quyết định thay</small></span><span class="choice-arrow">→</span></button>
          </div>
          <div class="action-row split"><button class="button button-secondary" type="button" data-back="a">← Chọn nhánh khác</button>${exitButton()}</div>
        </section>
        <aside class="card">
          <div class="checkpoint done"><span class="checkpoint-state">✓</span><span><strong>Chọn dấu hiệu</strong><small>${escapeHtml(routeCopy[0])}</small></span></div>
          <div class="checkpoint"><span class="checkpoint-state">2</span><span><strong>Chạy phép kiểm tra</strong><small>Đang chờ bạn xác nhận</small></span></div>
          <div class="checkpoint"><span class="checkpoint-state">3</span><span><strong>Xác nhận hoặc loại trừ</strong><small>Chưa có kết luận</small></span></div>
        </aside>
      </div>`);
  } else {
    const correctRoute = state.a.route === "data" || state.a.route === "unknown";
    const confirmed = state.a.observation === "yes" && correctRoute;
    const unsure = state.a.observation === "unsure";
    stage.innerHTML = optionShell("a", 3, `
      <div class="result-banner ${confirmed ? "success" : "warning"}">
        <h3>${confirmed ? "✓ Đã xác nhận một dấu hiệu liên quan" : unsure ? "? Chưa đủ bằng chứng để kết luận" : "↩ Nhánh này chưa giải thích được triệu chứng"}</h3>
        <p>${confirmed ? "Một số giá trị trong cột Doanh thu có dấu hiệu đang được đọc như văn bản. Đây là kết quả bạn vừa tự kiểm tra, không phải kết luận tự động của AI." : unsure ? "Giữ trạng thái 'chưa chắc' và thử một phép kiểm tra khác. Không có thay đổi nào được áp dụng." : "Bạn đã loại trừ nhánh vừa thử. Tiến trình được giữ để bạn quay lại chọn nhánh khác."}</p>
      </div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>${confirmed ? "Bước xử lý an toàn" : "Bạn muốn làm gì tiếp?"}</h3><p>${confirmed ? "Thực hiện trên bản sao, sau đó refresh PivotTable và tự kiểm lại kết quả." : "Quay lại bản đồ hoặc tạo gói thông tin để hỏi đồng nghiệp/mentor."}</p></div><span class="tag ${confirmed ? "recommended" : "uncertain"}">${confirmed ? "Đã xác nhận" : "Chưa kết luận"}</span></div>
          ${confirmed ? `<table class="signal-table"><thead><tr><th>Trước</th><th>Thao tác do user chọn</th><th>Cách xác minh</th></tr></thead><tbody><tr><td><span class="signal before">Count</span></td><td>Chuyển cột sang dạng số trên bản sao</td><td>Refresh và kiểm tra có chuyển thành Sum</td></tr></tbody></table>` : ""}
          <div class="action-row">
            ${confirmed ? `<button class="button button-primary" type="button" data-complete="a">Đánh dấu đã xử lý và về bài</button>` : `<button class="button button-primary" type="button" data-retry="a">Thử nhánh khác</button>`}
            <button class="button button-secondary" type="button" data-restart="a">Bắt đầu lại A</button>
            ${exitButton()}
          </div>
        </section>
        <aside class="card">
          <div class="checkpoint done"><span class="checkpoint-state">✓</span><span><strong>Chọn dấu hiệu</strong><small>Đã thực hiện</small></span></div>
          <div class="checkpoint done"><span class="checkpoint-state">✓</span><span><strong>Chạy phép kiểm tra</strong><small>Đã ghi nhận quan sát</small></span></div>
          <div class="checkpoint ${confirmed ? "done" : ""}"><span class="checkpoint-state">${confirmed ? "✓" : "3"}</span><span><strong>${confirmed ? "Đã xác nhận" : "Chưa kết luận"}</strong><small>${confirmed ? "User quyết định bước tiếp theo" : "Có thể quay lại mà không mất tiến trình"}</small></span></div>
        </aside>
      </div>`);
  }
  bindSharedActions();
  bindA();
}

function bindA() {
  document.querySelectorAll("[data-a-route]").forEach(button => button.addEventListener("click", () => {
    state.a.route = button.dataset.aRoute;
    state.steps.a = 1;
    renderA();
  }));
  document.querySelectorAll("[data-a-observation]").forEach(button => button.addEventListener("click", () => {
    state.a.observation = button.dataset.aObservation;
    state.steps.a = 2;
    renderA();
  }));
}

function getBDiagnosis() {
  const answers = state.b.answers || {};
  const evidence = [];
  let dataScore = 0;
  let valuesScore = 0;

  if (answers.expected === "sum") {
    evidence.push({ mark: "✓", text: "Mong đợi Tổng doanh thu (Sum)", open: false });
  } else {
    evidence.push({ mark: "?", text: "Chưa chắc kết quả mong đợi", open: true });
  }

  if (answers.symptom === "count-disabled") {
    evidence.push({ mark: "✓", text: "Count xuất hiện và Sum bị mờ", open: false });
    dataScore += 3;
    valuesScore += 1;
  } else if (answers.symptom === "count") {
    evidence.push({ mark: "✓", text: "Đang thấy Count; chưa kiểm tra trạng thái Sum", open: false });
    dataScore += 1;
    valuesScore += 2;
  } else {
    evidence.push({ mark: "?", text: "Chưa mô tả được dấu hiệu đang thấy", open: true });
  }

  if (answers.tried === "rebuild") {
    evidence.push({ mark: "✓", text: "Đã xem lại video và tạo lại PivotTable", open: false });
    dataScore += 2;
    valuesScore -= 1;
  } else if (answers.tried === "change") {
    evidence.push({ mark: "✓", text: "Đã thử đổi Count sang Sum", open: false });
    dataScore += 2;
  } else {
    evidence.push({ mark: "?", text: "Chưa thử phép kiểm tra nào", open: true });
    valuesScore += 1;
  }

  const dataSupport = [];
  const dataAgainst = [];
  const valuesSupport = [];
  const valuesAgainst = [];

  if (answers.symptom === "count-disabled") {
    dataSupport.push("Excel đang mặc định Count và khóa Sum");
    valuesSupport.push("kết quả hiện tại là Count");
    valuesAgainst.push("Sum bị mờ nên chỉ đổi thiết lập có thể chưa đủ");
  } else if (answers.symptom === "count") {
    dataSupport.push("kết quả hiện tại là Count");
    valuesSupport.push("chưa kiểm tra phép tính trong Values");
  } else {
    dataAgainst.push("chưa có mô tả triệu chứng cụ thể");
    valuesAgainst.push("chưa có mô tả triệu chứng cụ thể");
  }

  if (answers.tried === "rebuild") {
    dataSupport.push("tạo lại PivotTable không làm triệu chứng thay đổi");
    valuesAgainst.push("việc tạo lại không làm kết quả thay đổi");
  } else if (answers.tried === "change") {
    dataSupport.push("đổi phép tính trực tiếp chưa giải quyết được vấn đề");
  } else {
    valuesSupport.push("Values chưa được kiểm tra");
  }

  dataAgainst.push("chưa xem trực tiếp cột dữ liệu nguồn");
  if (answers.symptom !== "count-disabled") {
    valuesAgainst.push("chưa biết tùy chọn Sum có bị khóa hay không");
  }

  const hypotheses = [
    {
      key: "data",
      title: "Dữ liệu nguồn có dấu hiệu không được đọc là số",
      score: dataScore,
      support: dataSupport.length ? dataSupport.join("; ") : "chưa có bằng chứng hỗ trợ trực tiếp",
      against: dataAgainst.join("; ")
    },
    {
      key: "values",
      title: "Thiết lập Values chưa đúng",
      score: valuesScore,
      support: valuesSupport.length ? valuesSupport.join("; ") : "chưa có bằng chứng hỗ trợ trực tiếp",
      against: valuesAgainst.length ? valuesAgainst.join("; ") : "chưa có bằng chứng chống lại trực tiếp"
    }
  ].sort((left, right) => right.score - left.score);

  const tied = hypotheses[0].score === hypotheses[1].score;
  const missingEvidence = evidence.filter(item => item.open).length;
  return {
    evidence,
    hypotheses,
    tied,
    summary: missingEvidence
      ? `Còn ${missingEvidence} mảnh ghép chưa rõ. Xếp hạng dưới đây chỉ là điểm bắt đầu để kiểm tra.`
      : "Tôi đã dùng đúng ba câu trả lời của bạn để xếp hạng hai giả thuyết."
  };
}

function renderB() {
  const step = state.steps.b + 1;
  if (step === 1) {
    stage.innerHTML = optionShell("b", 1, `
      <div class="notice"><div class="notice-icon">i</div><div><strong>AI sẽ hỏi trước khi đề xuất</strong><p>Tôi chỉ dùng câu trả lời của bạn trong phiên này. Tôi không đọc file và có thể bỏ sót nguyên nhân nếu thông tin chưa đủ.</p></div></div>
      <div class="content-grid">
        <form class="card question-stack" id="b-form">
          <div class="card-head"><div><h3>Cho tôi ba mảnh ghép</h3><p>“Không biết” là một câu trả lời hợp lệ.</p></div><span class="tag">Ask</span></div>
          <fieldset class="question"><legend>1. Bạn mong đợi kết quả nào?</legend><div class="radio-grid">
            <label class="radio-row"><input required type="radio" name="expected" value="sum"><span>Tổng doanh thu (Sum)</span></label>
            <label class="radio-row"><input type="radio" name="expected" value="unsure"><span>Tôi không chắc video đang kỳ vọng gì</span></label>
          </div></fieldset>
          <fieldset class="question"><legend>2. Bạn đang thấy dấu hiệu nào?</legend><div class="radio-grid">
            <label class="radio-row"><input required type="radio" name="symptom" value="count-disabled"><span>PivotTable hiện Count và Sum bị mờ</span></label>
            <label class="radio-row"><input type="radio" name="symptom" value="count"><span>Chỉ thấy Count, chưa kiểm tra tùy chọn Sum</span></label>
            <label class="radio-row"><input type="radio" name="symptom" value="unsure"><span>Tôi không biết mô tả dấu hiệu thế nào</span></label>
          </div></fieldset>
          <fieldset class="question"><legend>3. Bạn đã thử gì?</legend><div class="radio-grid">
            <label class="radio-row"><input required type="radio" name="tried" value="rebuild"><span>Xem lại video và tạo lại PivotTable</span></label>
            <label class="radio-row"><input type="radio" name="tried" value="change"><span>Thử đổi Count sang Sum</span></label>
            <label class="radio-row"><input type="radio" name="tried" value="none"><span>Chưa thử gì</span></label>
          </div></fieldset>
          <div class="action-row split"><div><button class="button button-primary" type="submit">Tổng hợp bằng chứng</button></div>${exitButton()}</div>
        </form>
        <aside class="card"><h3>AI chưa hành động</h3><p>Tôi cần tối thiểu ba câu trả lời trước khi xếp hạng giả thuyết.</p><div class="evidence-list"><div class="evidence-item evidence-open"><span class="evidence-check">1</span><span>Kết quả mong đợi</span></div><div class="evidence-item evidence-open"><span class="evidence-check">2</span><span>Triệu chứng quan sát được</span></div><div class="evidence-item evidence-open"><span class="evidence-check">3</span><span>Điều đã thử</span></div></div></aside>
      </div>`);
  } else if (step === 2) {
    const diagnosis = getBDiagnosis();
    const hypothesesHtml = diagnosis.hypotheses.map((hypothesis, index) => {
      const badge = diagnosis.tied ? "Khả dĩ tương đương" : index === 0 ? "Khả dĩ hơn" : "Cần kiểm tra thêm";
      const badgeClass = !diagnosis.tied && index === 0 ? "recommended" : "";
      const buttonClass = index === 0 ? "button-primary" : "button-secondary";
      return `<div class="hypothesis"><div class="hypothesis-top"><strong>${index + 1} · ${escapeHtml(hypothesis.title)}</strong><span class="tag ${badgeClass}">${badge}</span></div><p>Hỗ trợ: ${escapeHtml(hypothesis.support)}. Chống lại/còn thiếu: ${escapeHtml(hypothesis.against)}.</p><div class="action-row"><button class="button ${buttonClass}" type="button" data-b-hypothesis="${hypothesis.key}">Kiểm tra giả thuyết này</button></div></div>`;
    }).join("");
    const evidenceHtml = diagnosis.evidence.map(item => `<div class="evidence-item ${item.open ? "evidence-open" : ""}"><span class="evidence-check">${item.mark}</span><span>${escapeHtml(item.text)}</span></div>`).join("");
    stage.innerHTML = optionShell("b", 2, `
      <div class="notice"><div class="notice-icon">≈</div><div><strong>Đây là xếp hạng định tính, không phải kết luận</strong><p>${escapeHtml(diagnosis.summary)} Tôi chưa đọc dữ liệu nguồn nên vẫn cần bạn xác minh.</p></div></div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>Hai giả thuyết đáng kiểm tra</h3><p>Chọn một phép kiểm tra. Bạn có thể sửa câu trả lời hoặc yêu cầu hướng khác.</p></div><span class="tag uncertain">Còn không chắc chắn</span></div>
          ${hypothesesHtml}
          <div class="action-row split"><button class="button button-secondary" type="button" data-back="b">← Sửa câu trả lời</button>${exitButton()}</div>
        </section>
        <aside class="card"><h3>Evidence đã dùng</h3><div class="evidence-list">${evidenceHtml}<div class="evidence-item evidence-open"><span class="evidence-check">?</span><span>Còn thiếu: quan sát trực tiếp dữ liệu nguồn</span></div></div></aside>
      </div>`);
  } else {
    const data = state.b.selectedHypothesis === "data";
    stage.innerHTML = optionShell("b", 3, `
      <div class="result-banner ${data ? "success" : "warning"}"><h3>${data ? "✓ Phép kiểm tra khớp với triệu chứng" : "↩ Chưa tìm thấy sai khác ở Values"}</h3><p>${data ? "Khi kiểm tra cột Doanh thu, bạn thấy các giá trị căn trái và có khoảng trắng đầu ô. Điều này làm giả thuyết dữ liệu nguồn mạnh hơn, nhưng user vẫn là người xác nhận." : "Trường Doanh thu đã nằm đúng trong Values. Giả thuyết này được hạ hạng; bạn có thể quay lại thử hướng dữ liệu nguồn."}</p></div>
      <div class="content-grid">
        <section class="card"><div class="card-head"><div><h3>${data ? "Đề xuất bước tiếp theo" : "AI cập nhật sau phản hồi của bạn"}</h3><p>${data ? "Chuyển dữ liệu sang dạng số trên bản sao, refresh và tự kiểm kết quả." : "Tôi không tiếp tục đẩy giả thuyết đã bị bác. Evidence và câu trả lời của bạn vẫn được giữ."}</p></div><span class="tag ${data ? "recommended" : "uncertain"}">${data ? "User quyết định" : "Đã bác 1 giả thuyết"}</span></div><div class="action-row">${data ? `<button class="button button-primary" type="button" data-complete="b">Chọn bước xử lý và về bài</button>` : `<button class="button button-primary" type="button" data-retry="b">Thử giả thuyết còn lại</button>`}<button class="button button-secondary" type="button" data-back="b">Sửa câu trả lời</button><button class="button button-secondary" type="button" data-restart="b">Bắt đầu lại B</button>${exitButton()}</div></section>
        <aside class="card"><h3>Ranh giới quyết định</h3><p>AI đề xuất phép kiểm tra. Bạn quyết định kiểm tra gì và có thay đổi dữ liệu hay không.</p><div class="evidence-list"><div class="evidence-item"><span class="evidence-check">✓</span><span>Có thể sửa câu trả lời</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Có thể bác giả thuyết</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Không tự áp dụng thay đổi</span></div></div></aside>
      </div>`);
  }
  bindSharedActions();
  bindB();
}

function bindB() {
  const form = document.querySelector("#b-form");
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    state.b.answers = Object.fromEntries(data.entries());
    state.steps.b = 1;
    renderB();
  });
  document.querySelectorAll("[data-b-hypothesis]").forEach(button => button.addEventListener("click", () => {
    state.b.selectedHypothesis = button.dataset.bHypothesis;
    state.steps.b = 2;
    renderB();
  }));
}

function renderC() {
  const step = state.steps.c + 1;
  if (step === 1) {
    stage.innerHTML = optionShell("c", 1, `
      <div class="notice"><div class="notice-icon">⌁</div><div><strong>Phân tích artefact chỉ sau khi bạn đồng ý</strong><p>Prototype dùng dữ liệu mô phỏng. Trong sản phẩm thật, AI có thể đọc sai và không hiểu đầy đủ bối cảnh nghiệp vụ.</p></div></div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>Chọn phạm vi AI được xem</h3><p>Bạn có thể thu hồi quyền hoặc xóa artefact bất cứ lúc nào. Đổi phạm vi sẽ yêu cầu bạn đồng ý lại.</p></div><span class="tag">Consent trước Act</span></div>
          <div class="scope-grid">
            <label class="scope-card"><input type="radio" name="scope" value="screenshot" ${state.c.scope === "screenshot" ? "checked" : ""}><strong>Chỉ screenshot hiện tại</strong><small>Không đọc ô dữ liệu; chỉ phân tích dấu hiệu trên màn hình.</small></label>
            <label class="scope-card"><input type="radio" name="scope" value="sheet" ${state.c.scope === "sheet" ? "checked" : ""}><strong>Một vùng trong sheet</strong><small>Chỉ đọc cột Doanh thu trong bản sao mô phỏng.</small></label>
          </div>
          <label class="consent-row"><input id="c-consent" type="checkbox" ${state.c.consent ? "checked" : ""}><span>Tôi đồng ý cho AI phân tích ${state.c.scope === "sheet" ? "cột Doanh thu trong bản sao mô phỏng" : "screenshot hiện tại"} trong phiên này. Dữ liệu không được ghi nhớ hoặc dùng để huấn luyện.</span></label>
          <div class="action-row split"><button class="button button-primary" id="c-analyze" type="button" ${state.c.consent ? "" : "disabled"}>Phân tích phạm vi đã chọn</button>${exitButton()}</div>
        </section>
        <aside class="card"><h3>Cam kết kiểm soát</h3><div class="evidence-list"><div class="evidence-item"><span class="evidence-check">✓</span><span>Chế độ chỉ đọc</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Không sửa file gốc</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Cho phép xóa và thu hồi</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Chỉ dùng trong phiên hiện tại</span></div></div></aside>
      </div>`);
  } else if (step === 2) {
    const canCreatePreview = state.c.scope === "sheet";
    stage.innerHTML = optionShell("c", 2, `
      <div class="notice"><div class="notice-icon">≈</div><div><strong>Phát hiện khả dĩ — chưa phải kết luận</strong><p>AI chỉ ra dấu hiệu để bạn tự kiểm. AI không nói thẳng nguyên nhân và chưa thay đổi dữ liệu.</p></div></div>
      <div class="content-grid">
        <section class="card">
          <div class="card-head"><div><h3>Ba dấu hiệu trong phạm vi đã chia sẻ</h3><p>Đọc từng dấu hiệu để hiểu vì sao AI đề xuất phép kiểm tra này.</p></div><span class="tag uncertain">Cần user xác minh</span></div>
          <div class="artifact-view"><div class="sheet-mock"><div class="sheet-cell"><span>A</span><strong>Doanh thu</strong></div><div class="sheet-cell flagged"><span>2</span><span> 1.250.000</span></div><div class="sheet-cell flagged"><span>3</span><span> 980.000</span></div><div class="sheet-cell"><span>4</span><span>2.100.000</span></div></div><div class="evidence-list"><div class="evidence-item"><span class="evidence-check">1</span><span>Giá trị ở một số ô căn trái</span></div><div class="evidence-item"><span class="evidence-check">2</span><span>Có khoảng trắng ở đầu giá trị</span></div><div class="evidence-item"><span class="evidence-check">3</span><span>PivotTable mặc định Count, Sum bị mờ</span></div></div></div>
          <div class="result-banner warning"><h3>Điều nên kiểm tra</h3><p>Kiểm tra liệu cột Doanh thu có đang được Excel nhận thống nhất là dữ liệu số hay không.</p></div>
          ${canCreatePreview ? `<p class="helper-text">Bạn đã cấp quyền cho vùng sheet. Preview chỉ tạo thay đổi trên bản sao và có thể Undo.</p>` : `<p class="helper-text">Phạm vi screenshot chỉ đủ để chỉ ra dấu hiệu. Muốn tạo preview, bạn cần cấp quyền cho vùng sheet và đồng ý lại.</p>`}
          <div class="action-row split"><div>${canCreatePreview ? `<button class="button button-primary" type="button" id="c-preview">Xem bản preview thay đổi</button>` : `<button class="button button-primary" type="button" id="c-upgrade-scope">Cấp quyền vùng sheet để xem preview</button>`}<button class="button button-danger-ghost" type="button" id="c-revoke">Thu hồi và xóa artefact</button></div>${exitButton()}</div>
        </section>
        <aside class="card"><h3>AI đã dùng gì?</h3><p>Phạm vi: ${state.c.scope === "sheet" ? "cột Doanh thu trong bản sao" : "screenshot mô phỏng"}.</p><div class="evidence-list"><div class="evidence-item"><span class="evidence-check">✓</span><span>Evidence nằm cạnh đề xuất</span></div><div class="evidence-item evidence-open"><span class="evidence-check">?</span><span>AI không biết quy tắc nghiệp vụ của báo cáo</span></div></div></aside>
      </div>`);
  } else {
    stage.innerHTML = optionShell("c", 3, `
      <div class="result-banner ${state.c.applied ? "success" : "warning"}"><h3>${state.c.applied ? "✓ Đã áp dụng trên bản sao" : "Preview — chưa có thay đổi nào được áp dụng"}</h3><p>${state.c.applied ? "PivotTable trong bản sao đã refresh thành Sum. File gốc vẫn nguyên vẹn và bạn có thể undo." : "AI đề xuất chuẩn hóa cột Doanh thu thành dạng số rồi refresh PivotTable. Bạn quyết định áp dụng hoặc từ chối."}</p></div>
      <div class="content-grid">
        <section class="card"><div class="card-head"><div><h3>So sánh trước và sau</h3><p>Mọi thay đổi chỉ xảy ra trên bản sao mô phỏng.</p></div><span class="tag ${state.c.applied ? "recommended" : "uncertain"}">${state.c.applied ? "Có thể undo" : "Chờ phê duyệt"}</span></div><table class="signal-table"><thead><tr><th>Thành phần</th><th>Trước</th><th>Preview sau thay đổi</th></tr></thead><tbody><tr><td>Kiểu dữ liệu cột</td><td><span class="signal before">Không đồng nhất</span></td><td><span class="signal after">Number</span></td></tr><tr><td>Values</td><td><span class="signal before">Count · 597</span></td><td><span class="signal after">Sum · 1.248.430.000</span></td></tr><tr><td>File gốc</td><td>Không đổi</td><td>Không đổi</td></tr></tbody></table><div class="action-row">${state.c.applied ? `<button class="button button-secondary" type="button" id="c-undo">Undo thay đổi trên bản sao</button><button class="button button-primary" type="button" data-complete="c">Xác nhận kết quả và về bài</button>` : `<button class="button button-primary" type="button" id="c-apply">Áp dụng trên bản sao</button><button class="button button-danger-ghost" type="button" id="c-reject">Từ chối đề xuất</button>`}<button class="button button-secondary" type="button" data-restart="c">Bắt đầu lại C</button>${exitButton()}</div></section>
        <aside class="card"><h3>Ranh giới quyết định</h3><div class="evidence-list"><div class="evidence-item"><span class="evidence-check">✓</span><span>Preview trước khi áp dụng</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Thay đổi trên bản sao</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>User phê duyệt hoặc từ chối</span></div><div class="evidence-item"><span class="evidence-check">✓</span><span>Có thể undo</span></div></div></aside>
      </div>`);
  }
  bindSharedActions();
  bindC();
}

function bindC() {
  document.querySelectorAll('input[name="scope"]').forEach(input => input.addEventListener("change", () => {
    state.c.scope = input.value;
    state.c.consent = false;
    renderC();
  }));
  const consent = document.querySelector("#c-consent");
  const analyze = document.querySelector("#c-analyze");
  if (consent && analyze) consent.addEventListener("change", () => { state.c.consent = consent.checked; analyze.disabled = !consent.checked; });
  if (analyze) analyze.addEventListener("click", () => { state.steps.c = 1; renderC(); });
  document.querySelector("#c-preview")?.addEventListener("click", () => { state.steps.c = 2; renderC(); });
  document.querySelector("#c-upgrade-scope")?.addEventListener("click", () => {
    state.c.scope = "sheet";
    state.c.consent = false;
    state.steps.c = 0;
    renderC();
    showToast("Đã chọn vùng sheet. Hãy đọc phạm vi và đồng ý lại.");
  });
  document.querySelector("#c-revoke")?.addEventListener("click", () => { resetOption("c"); showToast("Đã thu hồi quyền và xóa artefact khỏi phiên."); });
  document.querySelector("#c-apply")?.addEventListener("click", () => { state.c.applied = true; renderC(); showToast("Chỉ bản sao mô phỏng được thay đổi."); });
  document.querySelector("#c-undo")?.addEventListener("click", () => { state.c.applied = false; renderC(); showToast("Đã hoàn tác thay đổi trên bản sao."); });
  document.querySelector("#c-reject")?.addEventListener("click", () => { state.c.applied = false; state.steps.c = 1; renderC(); showToast("Đã từ chối đề xuất. AI không tiếp tục hành động."); });
}

function renderCompletion(lastKey) {
  const nextKey = ["a", "b", "c"].find(key => !state.completed.has(key));
  workspaceKicker.textContent = "RESULT / USER DECISION";
  workspaceTitle.textContent = `Đã hoàn thành Option ${lastKey.toUpperCase()}`;
  stage.innerHTML = `
    <div class="stage-empty">
      <div class="stage-empty-inner">
        <div class="eyebrow">TIẾN TRÌNH ĐƯỢC GIỮ</div>
        <h3>Bạn đã quay lại bài học mà vẫn giữ quyền quyết định</h3>
        <p>Hãy tiếp tục với phương án khác để so sánh cơ chế, không chỉ so sánh giao diện.</p>
        <div class="completion-grid">${["a", "b", "c"].map(key => `<div class="completion-card ${state.completed.has(key) ? "done" : ""}"><strong>${state.completed.has(key) ? "✓" : "○"} Option ${key.toUpperCase()}</strong><span>${optionMeta[key].name}</span></div>`).join("")}</div>
        <div class="action-row" style="justify-content:center">${nextKey ? `<button class="button button-primary" type="button" data-start="${nextKey}">Tiếp tục với Option ${nextKey.toUpperCase()}</button>` : `<button class="button button-primary" type="button" data-reset-comparison>Thử lại toàn bộ A/B/C</button>`}<button class="button button-secondary" type="button" data-home>Về màn hình chọn</button></div>
      </div>
    </div>`;
  bindSharedActions();
  renderProgress();
}

function resetOption(key) {
  state.steps[key] = 0;
  state.completed.delete(key);
  if (key === "a") state.a = { route: null, observation: null };
  if (key === "b") state.b = { answers: {}, selectedHypothesis: null };
  if (key === "c") state.c = { scope: "screenshot", consent: false, applied: false };
  selectOption(key);
  renderProgress();
}

function resetAll() {
  state.completed.clear();
  state.steps = { a: 0, b: 0, c: 0 };
  state.a = { route: null, observation: null };
  state.b = { answers: {}, selectedHypothesis: null };
  state.c = { scope: "screenshot", consent: false, applied: false };
  renderHome();
  showToast("Đã reset toàn bộ prototype.");
}

function bindSharedActions() {
  document.querySelectorAll("[data-start]").forEach(button => button.addEventListener("click", () => selectOption(button.dataset.start)));
  document.querySelectorAll("[data-home]").forEach(button => button.addEventListener("click", renderHome));
  document.querySelectorAll("[data-back]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.back;
    state.steps[key] = Math.max(0, state.steps[key] - 1);
    selectOption(key);
  }));
  document.querySelectorAll("[data-retry]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.retry;
    state.steps[key] = key === "a" ? 0 : 1;
    if (key === "a") state.a.observation = null;
    if (key === "b") state.b.selectedHypothesis = null;
    selectOption(key);
  }));
  document.querySelectorAll("[data-restart]").forEach(button => button.addEventListener("click", () => resetOption(button.dataset.restart)));
  document.querySelectorAll("[data-complete]").forEach(button => button.addEventListener("click", () => {
    const key = button.dataset.complete;
    state.completed.add(key);
    renderCompletion(key);
  }));
  document.querySelectorAll(".js-exit").forEach(button => button.addEventListener("click", () => exitDialog.showModal()));
  document.querySelectorAll("[data-reset-comparison]").forEach(button => button.addEventListener("click", resetAll));
}

exitDialog.addEventListener("close", () => {
  if (exitDialog.returnValue === "confirm") {
    if (state.active) state.completed.add(state.active);
    renderCompletion(state.active || "a");
  }
});

document.querySelectorAll(".option-tab").forEach(tab => tab.addEventListener("click", () => selectOption(tab.dataset.option)));
document.querySelector("#brand-home").addEventListener("click", event => { event.preventDefault(); renderHome(); });
document.querySelector("#reset-all").addEventListener("click", resetAll);

renderHome();
