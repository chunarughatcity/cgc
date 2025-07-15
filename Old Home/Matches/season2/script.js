const players = [
// ==============================
// ======= FORWARD PLAYERS =====
// ==============================


  {
    name: "Lionel Messi",
    number: 10,
    category: "forwards",
    image: "images/messi.jpg",
    video: "https://www.youtube.com/embed/1wVho3I0NtU",
    stats: {
      Position: "Forward",
      Appearances: 28,
      Goals: 21,
      Assists: 14,
      Interceptions: 5,
      Blocked: 3,
      "Successful Tackle": 7,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 6,
    },
  },
  {
    name: "Lionel Messi",
    number: 10,
    category: "forwards",
    image: "images/messi.jpg",
    video: "https://www.youtube.com/embed/1wVho3I0NtU",
    stats: {
      Position: "Forward",
      Appearances: 28,
      Goals: 21,
      Assists: 14,
      Interceptions: 5,
      Blocked: 3,
      "Successful Tackle": 7,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 6,
    },
  },
    {
    name: "Lionel Messi",
    number: 10,
    category: "forwards",
    image: "images/messi.jpg",
    video: "https://www.youtube.com/embed/1wVho3I0NtU",
    stats: {
      Position: "Forward",
      Appearances: 28,
      Goals: 21,
      Assists: 14,
      Interceptions: 5,
      Blocked: 3,
      "Successful Tackle": 7,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 6,
    },
  },
    {
    name: "Lionel Messi",
    number: 10,
    category: "forwards",
    image: "images/messi.jpg",
    video: "https://www.youtube.com/embed/1wVho3I0NtU",
    stats: {
      Position: "Forward",
      Appearances: 28,
      Goals: 21,
      Assists: 14,
      Interceptions: 5,
      Blocked: 3,
      "Successful Tackle": 7,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 6,
    },
  },
    {
    name: "Lionel Messi",
    number: 10,
    category: "forwards",
    image: "images/messi.jpg",
    video: "https://www.youtube.com/embed/1wVho3I0NtU",
    stats: {
      Position: "Forward",
      Appearances: 28,
      Goals: 21,
      Assists: 14,
      Interceptions: 5,
      Blocked: 3,
      "Successful Tackle": 7,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 6,
    },
  },
// ==============================
// ===== MIDFIELDER PLAYERS =====
// ==============================

  {
    name: "Kevin De Bruyne",
    number: 17,
    category: "midfielders",
    image: "images/debruyne.jpg",
    video: "https://www.youtube.com/embed/3qaF4tGvW9M",
    stats: {
      Position: "Midfielder",
      Appearances: 30,
      Goals: 10,
      Assists: 20,
      Interceptions: 12,
      Blocked: 2,
      "Successful Tackle": 15,
      "Yellow Cards": 3,
      "Red Cards": 0,
      MOTM: 8,
    },
  },

  
// ============================
// ===== DEFENDER PLAYERS ====
// ============================

  {
    name: "Virgil van Dijk",
    number: 4,
    category: "defenders",
    image: "images/vandijk.jpg",
    video: "https://www.youtube.com/embed/GLB93M_z9gk",
    stats: {
      Position: "Defender",
      Appearances: 32,
      Goals: 3,
      Assists: 1,
      Interceptions: 40,
      Blocked: 22,
      "Successful Tackle": 30,
      "Yellow Cards": 2,
      "Red Cards": 1,
      MOTM: 5,
    },
  },


// ==============================
// ===== GOALKEEPER PLAYERS ====
// ==============================


  {
    name: "Alisson Becker",
    number: 1,
    category: "goalkeepers",
    image: "images/alisson.jpg",
    video: "https://www.youtube.com/embed/_PVRnKrcy3k",
    stats: {
      Position: "Goalkeeper",
      Appearances: 34,
      Goals: 30,
      Assists: 31,
      Interceptions: 5,
      Blocked: 60,
      "Successful Tackle": 3,
      "Yellow Cards": 1,
      "Red Cards": 0,
      MOTM: 7,
    },
  },
];


// =============== FUNCTIONAL CODE ===============

function calculateScore(stats) {
  const goal = stats.Goals || 0;
  const assist = stats.Assists || 0;
  const motm = stats.MOTM || 0;
  const yellow = stats["Yellow Cards"] || 0;
  const red = stats["Red Cards"] || 0;
  const tackle = stats["Successful Tackle"] || 0;
  const interception = stats.Interceptions || 0;
  const blocked = stats.Blocked || 0;

  return goal * 4 + assist * 3 + motm * 3 + tackle + interception + blocked - (yellow + red * 3);
}

function renderPlayers(category = "") {
  const container = document.getElementById("playersContainer");
  container.innerHTML = "";

  const filtered = players
    .filter((p) => !category || p.category === category)
    .sort((a, b) => calculateScore(b.stats) - calculateScore(a.stats));

  filtered.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-img" onclick="playVideo('${player.video}')" />
      <div class="player-name">${player.name}</div>
      <div class="jersey-number"><strong>${player.number}</strong></div>
      <div class="stats">
        ${Object.entries(player.stats)
          .map(([k, v]) => `<div class="stat"><span>${k}</span><span>${v}</span></div>`)
          .join("")}
      </div>
    `;
    container.appendChild(card);
  });
}

function selectCategory(category) {
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.textContent.toLowerCase() === category);
  });
  renderPlayers(category);
}

function searchPlayers() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const filtered = players
    .filter((player) => player.name.toLowerCase().includes(input))
    .sort((a, b) => calculateScore(b.stats) - calculateScore(a.stats));

  const container = document.getElementById("playersContainer");
  container.innerHTML = "";

  filtered.forEach((player) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-img" onclick="playVideo('${player.video}')" />
      <div class="player-name">${player.name}</div>
      <div class="jersey-number"><strong>${player.number}</strong></div>
      <div class="stats">
        ${Object.entries(player.stats)
          .map(([k, v]) => `<div class="stat"><span>${k}</span><span>${v}</span></div>`)
          .join("")}
      </div>
    `;
    container.appendChild(card);
  });
}

function playVideo(url) {
  document.getElementById("overlay").classList.add("active");
  document.getElementById("videoContainer").innerHTML = `
    <iframe width="100%" height="360" src="${url}" frameborder="0" allowfullscreen></iframe>
  `;
  document.getElementById("overlay").focus();
}

function closeOverlay() {
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("videoContainer").innerHTML = "";
}

// Initialize
renderPlayers();
