const STORAGE_KEY = "habit-tracker-board-v1";

const initialHabits = [
  { id: crypto.randomUUID(), title: "Morning stretch", category: "Morning", status: "todo" },
  { id: crypto.randomUUID(), title: "Write priorities", category: "Work", status: "inprogress" },
  { id: crypto.randomUUID(), title: "Read 10 pages", category: "Evening", status: "done" },
];

const state = {
  habits: loadHabits(),
};

const habitInput = document.getElementById("habitInput");
const categorySelect = document.getElementById("categorySelect");
const addHabitButton = document.getElementById("addHabitButton");
const resetButton = document.getElementById("resetButton");

const zones = {
  todo: document.getElementById("todoZone"),
  inprogress: document.getElementById("inprogressZone"),
  done: document.getElementById("doneZone"),
};

const counters = {
  todo: document.getElementById("todoCount"),
  inprogress: document.getElementById("inprogressCount"),
  done: document.getElementById("doneCount"),
};

let draggedHabitId = null;

function loadHabits() {
  try {
    const fromStorage = localStorage.getItem(STORAGE_KEY);

    if (!fromStorage) {
      return [...initialHabits];
    }

    const parsed = JSON.parse(fromStorage);
    if (!Array.isArray(parsed)) {
      return [...initialHabits];
    }

    return parsed;
  } catch (error) {
    console.error("Could not parse localStorage data:", error);
    return [...initialHabits];
  }
}

function persistHabits() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.habits));
}

function countByStatus(status) {
  return state.habits.filter((habit) => habit.status === status).length;
}

function createHabitCard(habit) {
  const card = document.createElement("article");
  card.className = "habit-card";
  card.draggable = true;
  card.dataset.id = habit.id;

  card.innerHTML = `
    <div class="habit-top">
      <p class="habit-name">${habit.title}</p>
      <button class="delete-btn" type="button" data-id="${habit.id}">Delete</button>
    </div>
    <p class="habit-meta">Category: ${habit.category}</p>
  `;

  card.addEventListener("dragstart", () => {
    draggedHabitId = habit.id;
    card.classList.add("is-dragging");
  });

  card.addEventListener("dragend", () => {
    draggedHabitId = null;
    card.classList.remove("is-dragging");
  });

  const deleteButton = card.querySelector(".delete-btn");
  deleteButton.addEventListener("click", () => {
    state.habits = state.habits.filter((item) => item.id !== habit.id);
    persistHabits();
    renderBoard();
  });

  return card;
}

function renderBoard() {
  Object.values(zones).forEach((zone) => {
    zone.innerHTML = "";
  });

  ["todo", "inprogress", "done"].forEach((status) => {
    const habitsForStatus = state.habits.filter((habit) => habit.status === status);

    if (habitsForStatus.length === 0) {
      const empty = document.createElement("p");
      empty.className = "empty-note";
      empty.textContent = "No habits here yet.";
      zones[status].appendChild(empty);
    } else {
      habitsForStatus.forEach((habit) => {
        zones[status].appendChild(createHabitCard(habit));
      });
    }

    counters[status].textContent = String(countByStatus(status));
  });
}

function addHabit() {
  const title = habitInput.value.trim();
  const category = categorySelect.value;

  if (!title) {
    habitInput.focus();
    return;
  }

  const newHabit = {
    id: crypto.randomUUID(),
    title,
    category,
    status: "todo",
  };

  state.habits.unshift(newHabit);
  persistHabits();
  renderBoard();
  habitInput.value = "";
  habitInput.focus();
}

Object.entries(zones).forEach(([status, zone]) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("drag-over");
  });

  zone.addEventListener("dragleave", () => {
    zone.classList.remove("drag-over");
  });

  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("drag-over");

    if (!draggedHabitId) {
      return;
    }

    state.habits = state.habits.map((habit) => {
      if (habit.id === draggedHabitId) {
        return { ...habit, status };
      }
      return habit;
    });

    persistHabits();
    renderBoard();
  });
});

addHabitButton.addEventListener("click", addHabit);

habitInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addHabit();
  }
});

resetButton.addEventListener("click", () => {
  state.habits = [...initialHabits];
  persistHabits();
  renderBoard();
});

renderBoard();
