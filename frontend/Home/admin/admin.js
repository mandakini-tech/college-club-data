// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Event Preview
document.getElementById("postEvent").addEventListener("click", () => {
  const name = document.getElementById("eventName").value;
  const date = document.getElementById("eventDate").value;
  const time = document.getElementById("eventTime").value;
  const location = document.getElementById("eventLocation").value;
  const committee = document.getElementById("eventCommittee").value;
  const desc = document.getElementById("eventDesc").value;

  if (!name || !date || !time || !location || !desc) {
    alert("Fill all fields!");
    return;
  }

  const formattedDate = new Date(date).toDateString();

  document.getElementById("eventPreview").innerHTML = `
    <div class="event-card">
      <div class="event-header">
        <div class="event-date">${formattedDate}</div>
      </div>
      <div class="event-body">
        <div class="event-title">${name}</div>
        <div class="event-info">📍 ${location}</div>
        <div class="event-info">⏰ ${time}</div>
        <div class="event-info">${desc}</div>
        <div class="event-tag">${committee}</div>
      </div>
    </div>
  `;
});