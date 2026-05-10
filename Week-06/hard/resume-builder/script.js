const state = {
  sections: [
    {
      id: crypto.randomUUID(),
      type: "Education",
      title: "Education",
      content: "B.Tech Computer Science - XYZ University\nCGPA: 8.9/10",
    },
    {
      id: crypto.randomUUID(),
      type: "Projects",
      title: "Projects",
      content: "Crypto Tracker Dashboard using CoinGecko API\nHabit Tracker with drag and drop",
    },
    {
      id: crypto.randomUUID(),
      type: "Skills",
      title: "Technical Skills",
      content: "JavaScript, TypeScript, React\nNode.js, Express, PostgreSQL",
    },
  ],
  editingId: null,
  draggedId: null,
};

const form = document.getElementById("sectionForm");
const sectionTypeInput = document.getElementById("sectionType");
const sectionTitleInput = document.getElementById("sectionTitle");
const sectionContentInput = document.getElementById("sectionContent");
const submitButton = document.getElementById("submitButton");
const cancelEditButton = document.getElementById("cancelEditButton");
const sectionList = document.getElementById("sectionList");
const resumePreview = document.getElementById("resumePreview");
const sectionCount = document.getElementById("sectionCount");
const previewMeta = document.getElementById("previewMeta");

function parseContentLines(content) {
  return content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function clearForm() {
  form.reset();
  sectionTypeInput.value = "Education";
  sectionTitleInput.focus();
}

function resetEditMode() {
  state.editingId = null;
  submitButton.textContent = "Add Section";
  cancelEditButton.hidden = true;
}

function renderManagerList() {
  sectionList.innerHTML = "";

  if (state.sections.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No sections added yet. Create one using the form above.";
    sectionList.appendChild(empty);
    sectionCount.textContent = "0 sections";
    return;
  }

  sectionCount.textContent = `${state.sections.length} sections`;

  state.sections.forEach((section) => {
    const card = document.createElement("article");
    card.className = "section-card";
    card.draggable = true;
    card.dataset.id = section.id;

    card.innerHTML = `
      <div class="card-top">
        <div>
          <p class="card-title">${section.title}</p>
          <p class="card-type">${section.type}</p>
        </div>
        <div class="card-actions">
          <button type="button" class="mini-btn edit" data-action="edit">Edit</button>
          <button type="button" class="mini-btn delete" data-action="delete">Delete</button>
        </div>
      </div>
    `;

    card.addEventListener("dragstart", () => {
      state.draggedId = section.id;
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
      state.draggedId = null;
      card.classList.remove("dragging");
      card.classList.remove("drag-over");
    });

    card.addEventListener("dragover", (event) => {
      event.preventDefault();
      if (section.id !== state.draggedId) {
        card.classList.add("drag-over");
      }
    });

    card.addEventListener("dragleave", () => {
      card.classList.remove("drag-over");
    });

    card.addEventListener("drop", (event) => {
      event.preventDefault();
      card.classList.remove("drag-over");
      moveSection(state.draggedId, section.id);
    });

    card.addEventListener("click", (event) => {
      const action = event.target.dataset.action;
      if (action === "edit") {
        beginEdit(section.id);
      }
      if (action === "delete") {
        removeSection(section.id);
      }
    });

    sectionList.appendChild(card);
  });
}

function renderPreview() {
  resumePreview.innerHTML = "";

  if (state.sections.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Preview will appear here once sections are added.";
    resumePreview.appendChild(empty);
    previewMeta.textContent = "No sections in resume yet.";
    return;
  }

  previewMeta.textContent = `Live preview with ${state.sections.length} ordered sections`;

  state.sections.forEach((section) => {
    const sectionEl = document.createElement("section");
    sectionEl.className = "preview-section";

    const lines = parseContentLines(section.content);
    const lineItems = lines.map((line) => `<li>${line}</li>`).join("");

    sectionEl.innerHTML = `
      <h3 class="preview-title">${section.title}</h3>
      <p class="preview-type">${section.type}</p>
      <ul class="preview-list">${lineItems}</ul>
    `;

    resumePreview.appendChild(sectionEl);
  });
}

function renderAll() {
  renderManagerList();
  renderPreview();
}

function addSection({ type, title, content }) {
  state.sections.push({
    id: crypto.randomUUID(),
    type,
    title,
    content,
  });
  renderAll();
}

function updateSection(id, updates) {
  state.sections = state.sections.map((section) => {
    if (section.id !== id) {
      return section;
    }
    return { ...section, ...updates };
  });
  renderAll();
}

function beginEdit(id) {
  const section = state.sections.find((item) => item.id === id);
  if (!section) {
    return;
  }

  state.editingId = id;
  sectionTypeInput.value = section.type;
  sectionTitleInput.value = section.title;
  sectionContentInput.value = section.content;
  submitButton.textContent = "Update Section";
  cancelEditButton.hidden = false;
  sectionTitleInput.focus();
}

function removeSection(id) {
  state.sections = state.sections.filter((section) => section.id !== id);

  if (state.editingId === id) {
    resetEditMode();
    clearForm();
  }

  renderAll();
}

function moveSection(fromId, toId) {
  if (!fromId || !toId || fromId === toId) {
    return;
  }

  const fromIndex = state.sections.findIndex((section) => section.id === fromId);
  const toIndex = state.sections.findIndex((section) => section.id === toId);

  if (fromIndex < 0 || toIndex < 0) {
    return;
  }

  const next = [...state.sections];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  state.sections = next;
  renderAll();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const payload = {
    type: sectionTypeInput.value,
    title: sectionTitleInput.value.trim(),
    content: sectionContentInput.value.trim(),
  };

  if (!payload.title || !payload.content) {
    return;
  }

  if (state.editingId) {
    updateSection(state.editingId, payload);
    resetEditMode();
  } else {
    addSection(payload);
  }

  clearForm();
});

cancelEditButton.addEventListener("click", () => {
  resetEditMode();
  clearForm();
});

renderAll();
