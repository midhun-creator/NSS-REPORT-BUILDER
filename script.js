
// ==========================================
// STATE MANAGEMENT
// ==========================================
const defaultState = {
  "sections": [
    {
      "id": "sec-title-1",
      "type": "title",
      "visible": true,
      "name": "Title Page",
      "logoLeftSrc": "",
      "logoRightSrc": "",
      "collegeName": "GOVERNMENT POLYTECHNIC COLLEGE, PALAKKAD",
      "departmentLine": "(Department of Technical Education, Government of Kerala)",
      "unitNumber": "NSS UNIT NO: 130",
      "reportTitle": "PROGRAMME REPORT",
      "programmeName": "Ekta Dina March\n(Sardar@150)",
      "dateVenue": "Date: 04/11/2025 | Venue: Fort Maidan to Victoria College",
      "mainPhotoSrc": "",
      "preparedBy": "Prepared By: NSS Unit No. 130\nGovernment Polytechnic College, Palakkad"
    },
    {
      "id": "sec-detail-1",
      "type": "detail-table",
      "visible": true,
      "name": "Programme Details",
      "heading": "Programme Details",
      "rows": [
        {"label": "Activity Name", "value": "Ekta Dina March (Sardar@150 District Walk)"},
        {"label": "Category", "value": "National Integration & Unity"},
        {"label": "Date & Duration", "value": "04/11/2025 (9:00 AM -- 12:00 PM)"},
        {"label": "Venue", "value": "Fort Maidan to Victoria College, Palakkad"},
        {"label": "Organizers", "value": "Mera Yuva Bharat (MYB) & NSS"},
        {"label": "Participants", "value": "43 NSS Volunteers from GPTC Palakkad"}
      ]
    },
    {
      "id": "sec-text-1",
      "type": "text",
      "visible": true,
      "name": "Introduction",
      "heading": "Introduction",
      "content": "The Ekta Dina March was organized as part of the <i>Sardar@150</i> district-level walk, a collaborative effort by Mera Yuva Bharat (MYB) Palakkad and the National Service Scheme (NSS). The event was held on November 4, 2025, commencing at Fort Maidan, Palakkad. The primary objective of the march was to uphold the message of unity and national integration, bringing together youth from various institutions to move forward together without differences."
    },
    {
      "id": "sec-text-2",
      "type": "text",
      "visible": true,
      "name": "Activities Conducted",
      "heading": "Activities Conducted",
      "content": "The programme began at 9:00 AM with a gathering at Fort Maidan, near the historic five lamps. A welcome speech set the tone for the event, attended by several officials and NSS coordinators from various colleges.<br><br>To symbolize unity, all participants were distributed special white clothes printed specifically for the occasion. The march commenced from Fort Maidan and concluded at Victoria College. The procession highlighted the importance of solidarity and collective progress. NSS students from Government Polytechnic College, Palakkad, actively participated in the walk, demonstrating their commitment to national values."
    },
    {
      "id": "sec-part-1",
      "type": "participant-table",
      "visible": true,
      "name": "Participants",
      "heading": "Participants",
      "description": "A total of 43 NSS students from Government Polytechnic, Palakkad participated in this significant event.",
      "columns": ["S.No", "Name", "Department"],
      "rows": [
        ["1", "Sreesanth", "CHE"],
        ["2", "Fathima Alfa R.", "CE"],
        ["3", "Muhammed Fuad V.P.", "CE"],
        ["4", "Bibil Krishna K.R.", "CE"],
        ["5", "Jithu E.S.", "CHE"],
        ["6", "Arjun S.", "ME"],
        ["7", "Amitha M.", "CE"],
        ["8", "Sanjay Krishna P.", "CE"],
        ["9", "Anju M.", "CHE"],
        ["10", "Jayakrishnan R.", "CHE"],
        ["11", "Ajay P.", "ME"],
        ["12", "Gokul Prasad G.", "ME"],
        ["13", "Kiran S.", "ME"],
        ["14", "Navaneeth Krishanan D.", "EEE"],
        ["15", "Sreehari J.", "ELE"],
        ["16", "Hari Krishnan K.U.", "EEE"],
        ["17", "Anoop S.", "EEE"],
        ["18", "Ajay K.", "EEE"],
        ["19", "Adson D.J.", "EEE"],
        ["20", "Jithin S.", "EEE"],
        ["21", "Sandeep Krishna P.R.", "ME"],
        ["22", "Muhammed Shibili S.", "IE"],
        ["23", "Ambili P.", "CE"],
        ["24", "Reshma S.", "CE"],
        ["25", "Drishya P.", "CE"],
        ["26", "Drishya R.", "CE"],
        ["27", "Amith P.J.", "CE"],
        ["28", "Rahul R.", "CE"],
        ["29", "Adarsh S.", "CE"],
        ["30", "Abdulla A.", "CE"],
        ["31", "Jithin S.", "IE"],
        ["32", "Muhammed Shinas F.", "CE"],
        ["33", "Bhoomika S.", "CE"],
        ["34", "Midun S.", "ELE"],
        ["35", "Adarsh D.", "ELE"],
        ["36", "Rohith R.", "ELE"],
        ["37", "Athul S.", "ELE"],
        ["38", "Arunsreedhar M.S.", "ELE"],
        ["39", "Shariz Hussain N.", "ELE"],
        ["40", "Janusha J.", "ELE"],
        ["41", "Jasna", "CHE"],
        ["42", "Swathi S.", "CHE"],
        ["43", "Malavika S.", "CHE"]
      ]
    },
    {
      "id": "sec-pb-1",
      "type": "page-break",
      "visible": true,
      "name": "Page Break"
    },
    {
      "id": "sec-gal-1",
      "type": "gallery",
      "visible": true,
      "name": "Photo Gallery",
      "heading": "Photo Gallery",
      "layout": "2-per-row",
      "photos": [
        {"src": "", "caption": "Volunteers gathering at Fort Maidan", "description": "", "showDescription": false},
        {"src": "", "caption": "Commencement of the Ekta Dina March", "description": "", "showDescription": false},
        {"src": "", "caption": "March way", "description": "", "showDescription": false},
        {"src": "", "caption": "Students in special unity attire", "description": "", "showDescription": false}
      ]
    },
    {
      "id": "sec-text-3",
      "type": "text",
      "visible": true,
      "name": "Acknowledgement & Conclusion",
      "heading": "Acknowledgement & Conclusion",
      "content": "We express our heartfelt gratitude to Mera Yuva Bharat (MYB) Palakkad for successfully organizing this grand event aimed at strengthening Indian unity. We also thank the National Service Scheme (NSS) authorities and the NSS Programme Officer for providing our students the opportunity to participate. Finally, we appreciate the dedication of all 43 student volunteers who made this event a success."
    }
  ],
  "accent": "#006064",
  "darkMode": false,
  "zoom": 100,
  "filename": "Ekta_Dina_March_Report"
};

let appState = JSON.parse(JSON.stringify(defaultState));
let undoStack = [];
let redoStack = [];
let autoSaveTimer = null;
let previewDebounceTimer = null;

const THEME_COLORS = ['#006064'];
let contextMenuTargetId = null;

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initUI();
  renderEditor();
  updatePreview();
  pushUndoState(true);
  
  // Skeleton loading simulation
  document.getElementById('editor-container').innerHTML = `
    <div class="editor-card skeleton" style="height:60px"></div>
    <div class="editor-card skeleton" style="height:200px"></div>
    <div class="editor-card skeleton" style="height:100px"></div>
  `;
  document.getElementById('preview-container').innerHTML = `<div class="doc-page skeleton"></div>`;
  setTimeout(() => {
    renderEditor();
    updatePreview();
  }, 800);
});

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
}

// ==========================================
// UNDO/REDO & SAVING
// ==========================================
function pushUndoState(init = false) {
  if (!init) {
    const currentStateStr = JSON.stringify(appState);
    const lastStateStr = undoStack.length ? JSON.stringify(undoStack[undoStack.length - 1]) : null;
    if (currentStateStr === lastStateStr) return;
  }
  undoStack.push(JSON.parse(JSON.stringify(appState)));
  if (undoStack.length > 50) undoStack.shift();
  redoStack = [];
  updateUndoRedoButtons();
}

function doUndo() {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop());
    appState = JSON.parse(JSON.stringify(undoStack[undoStack.length - 1]));
    applyStateToUI();
  }
}

function doRedo() {
  if (redoStack.length > 0) {
    const state = redoStack.pop();
    appState = JSON.parse(JSON.stringify(state));
    undoStack.push(JSON.parse(JSON.stringify(state)));
    applyStateToUI();
  }
}

function updateUndoRedoButtons() {
  document.getElementById('btn-undo').disabled = undoStack.length <= 1;
  document.getElementById('btn-redo').disabled = redoStack.length === 0;
}

function applyStateToUI() {
  setAccentColor(appState.accent, false);
  if (appState.darkMode) document.body.classList.add('dark-mode');
  else document.body.classList.remove('dark-mode');
  setZoom(appState.zoom, false);
  renderEditor();
  updatePreview();
}

function triggerAutoSave() {
  const pill = document.getElementById('save-status');
  pill.classList.add('saving');
  pill.innerHTML = '<div class="dot"></div> Saving...';
  
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    pill.classList.remove('saving');
    pill.innerHTML = '<div class="dot"></div> Saved';
  }, 1000);
}

function loadState() {
  setAccentColor(appState.accent, false);
  if (appState.darkMode) document.body.classList.add('dark-mode');
  setZoom(appState.zoom, false);
}

// ==========================================
// RENDER EDITOR CARDS
// ==========================================
function renderEditor() {
  const container = document.getElementById('editor-container');
  container.innerHTML = '';
  
  appState.sections.forEach((sec, idx) => {
    const card = document.createElement('div');
    card.className = 'editor-card';
    if (sec.type !== 'title') card.classList.add('collapsed');
    card.dataset.id = sec.id;
    
    // Header
    const header = document.createElement('div');
    header.className = 'card-header';
    header.innerHTML = `
      <div class="drag-handle"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg></div>
      <div class="card-icon">${getIconForType(sec.type)}</div>
      <div class="card-title">${sec.name || sec.type}</div>
      <input type="text" class="card-title-input" value="${sec.name || sec.type}">
      <div class="card-actions">
        <button onclick="event.stopPropagation(); toggleVisibility('${sec.id}')" title="Toggle Visibility">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
            ${sec.visible ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>' : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'}
          </svg>
        </button>
        <button onclick="event.stopPropagation(); openContextMenu(event, '${sec.id}')" title="Options">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>
    `;
    
    header.addEventListener('click', (e) => {
      if (e.target.closest('.card-actions') || e.target.classList.contains('card-title-input')) return;
      card.classList.toggle('collapsed');
    });
    
    const titleEl = header.querySelector('.card-title');
    const titleInput = header.querySelector('.card-title-input');
    titleEl.addEventListener('dblclick', (e) => {
      e.stopPropagation();
      titleEl.style.display = 'none';
      titleInput.style.display = 'block';
      titleInput.focus();
    });
    titleInput.addEventListener('blur', () => {
      sec.name = titleInput.value;
      titleEl.textContent = sec.name;
      titleInput.style.display = 'none';
      titleEl.style.display = 'block';
      stateMutated();
    });
    titleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') titleInput.blur();
    });

    // Body
    const body = document.createElement('div');
    body.className = 'card-body';
    body.innerHTML = getFormFieldsForType(sec);
    
    // Attach input listeners
    attachInputListeners(body, sec);

    card.appendChild(header);
    card.appendChild(body);
    
    // Insert button between cards
    const insertBtn = document.createElement('button');
    insertBtn.className = 'insert-between-btn';
    insertBtn.innerHTML = '+';
    insertBtn.onclick = () => showTemplatePicker(idx + 1);

    container.appendChild(card);
    if (idx < appState.sections.length - 1) container.appendChild(insertBtn);
  });
  
  initSortableEditor();
  updateProgress();
}

function getIconForType(type) {
  const icons = {
    title: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    text: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/>',
    'detail-table': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="12" y1="3" x2="12" y2="21"/>',
    'participant-table': '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    gallery: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
    table: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>',
    list: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    latex: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
    'page-break': '<line x1="3" y1="12" x2="21" y2="12" stroke-dasharray="4 4"/>',
    signature: '<path d="M20.42 10.58a3 3 0 1 0-4.24-4.24l-12 12A3 3 0 0 0 3 20h21"/><line x1="14" y1="4" x2="20" y2="10"/>',
    'two-column': '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/>'
  };
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${icons[type] || icons.text}</svg>`;
}

// Generates HTML forms based on section type
function getFormFieldsForType(sec) {
  if (sec.type === 'title') {
    return `
      <div style="display:flex;gap:8px">
        <div class="form-group" style="flex:1">
          <label>College Logo</label>
          <div class="image-upload-btn" onclick="triggerUpload('${sec.id}', 'logoLeftSrc')">
            ${sec.logoLeftSrc ? `<img src="${sec.logoLeftSrc}"><button class="image-remove-btn" onclick="event.stopPropagation(); removeImage('${sec.id}','logoLeftSrc')">×</button>` : 'Upload'}
          </div>
        </div>
        <div class="form-group" style="flex:1">
          <label>NSS Logo</label>
          <div class="image-upload-btn" onclick="triggerUpload('${sec.id}', 'logoRightSrc')">
            ${sec.logoRightSrc ? `<img src="${sec.logoRightSrc}"><button class="image-remove-btn" onclick="event.stopPropagation(); removeImage('${sec.id}','logoRightSrc')">×</button>` : 'Upload'}
          </div>
        </div>
      </div>
      <div class="form-group"><label>College Name</label><input type="text" class="form-control" data-key="collegeName" value="${sec.collegeName}"></div>
      <div class="form-group"><label>Department Line</label><input type="text" class="form-control" data-key="departmentLine" value="${sec.departmentLine}"></div>
      <div class="form-group"><label>Unit Number</label><input type="text" class="form-control" data-key="unitNumber" value="${sec.unitNumber}"></div>
      <div class="form-group"><label>Report Title</label><input type="text" class="form-control" data-key="reportTitle" value="${sec.reportTitle}"></div>
      <div class="form-group"><label>Programme Name</label><textarea class="form-control" data-key="programmeName">${sec.programmeName}</textarea></div>
      <div class="form-group"><label>Date & Venue</label><input type="text" class="form-control" data-key="dateVenue" value="${sec.dateVenue}"></div>
      <div class="form-group">
        <label>Main Photo</label>
        <div class="image-upload-btn" onclick="triggerUpload('${sec.id}', 'mainPhotoSrc')" style="min-height:100px">
          ${sec.mainPhotoSrc ? `<img src="${sec.mainPhotoSrc}"><button class="image-remove-btn" onclick="event.stopPropagation(); removeImage('${sec.id}','mainPhotoSrc')">×</button>` : 'Upload Main Photo'}
        </div>
      </div>
      <div class="form-group"><label>Prepared By</label><textarea class="form-control" data-key="preparedBy">${sec.preparedBy}</textarea></div>
    `;
  }
  
  if (sec.type === 'text') {
    return `
      <div class="form-group"><label>Heading</label><input type="text" class="form-control" data-key="heading" value="${sec.heading}"></div>
      <div class="form-group">
        <label>Content</label>
        <div class="content-editable-div" contenteditable="true" data-key="content">${sec.content}</div>
      </div>
    `;
  }

  if (sec.type === 'detail-table') {
    let rowsHtml = sec.rows.map((r, i) => `
      <div class="table-row-editor">
        <input class="form-control" type="text" placeholder="Label" value="${r.label}" oninput="updateArr('${sec.id}','rows',${i},'label',this.value)">
        <input class="form-control" type="text" placeholder="Value" value="${r.value}" oninput="updateArr('${sec.id}','rows',${i},'value',this.value)">
        <button class="remove-row-btn" onclick="removeArrItem('${sec.id}','rows',${i})">×</button>
      </div>
    `).join('');
    return `
      <div class="form-group"><label>Heading</label><input type="text" class="form-control" data-key="heading" value="${sec.heading}"></div>
      <div class="form-group">
        <label>Rows</label>
        <div id="dt-rows-${sec.id}" style="display:flex;flex-direction:column;gap:8px">${rowsHtml}</div>
        <button class="btn" style="margin-top:8px" onclick="addArrItem('${sec.id}','rows',{label:'',value:''})">+ Add Row</button>
      </div>
    `;
  }
  
  if (sec.type === 'participant-table') {
    let rowsHtml = sec.rows.map((r, i) => {
      let inputs = r.map((cVal, j) => `<input class="form-control" type="text" value="${cVal}" oninput="updateArrArr('${sec.id}','rows',${i},${j},this.value)">`).join('');
      return `<div class="participant-row-editor">${inputs}<button class="remove-row-btn" onclick="removeArrItem('${sec.id}','rows',${i})">×</button></div>`;
    }).join('');
    return `
      <div class="form-group"><label>Heading</label><input type="text" class="form-control" data-key="heading" value="${sec.heading}"></div>
      <div class="form-group"><label>Description</label><textarea class="form-control" data-key="description">${sec.description}</textarea></div>
      <div class="form-group">
        <label>Columns (comma separated)</label>
        <input type="text" class="form-control" value="${sec.columns.join(',')}" onchange="updateColumns('${sec.id}', this.value)">
      </div>
      <div class="form-group">
        <label>Rows</label>
        <div style="display:flex;flex-direction:column;gap:8px">${rowsHtml}</div>
        <button class="btn" style="margin-top:8px" onclick="addParticipantRow('${sec.id}')">+ Add Row</button>
      </div>
    `;
  }
  
  if (sec.type === 'gallery') {
    let photosHtml = sec.photos.map((p, i) => `
      <div style="border:1px solid var(--border); padding:8px; border-radius:4px; margin-bottom:8px">
        <div style="display:flex; gap:8px">
           <div class="image-upload-btn" style="width:80px;height:80px;flex-shrink:0" onclick="triggerUploadArr('${sec.id}','photos',${i},'src')">
             ${p.src ? `<img src="${p.src}"><button class="image-remove-btn" onclick="event.stopPropagation(); removeImageArr('${sec.id}','photos',${i},'src')">×</button>` : 'Upload'}
           </div>
           <div style="flex:1; display:flex; flex-direction:column; gap:4px">
             <input class="form-control" type="text" placeholder="Caption" value="${p.caption}" oninput="updateArr('${sec.id}','photos',${i},'caption',this.value)">
             <label style="font-size:10px;display:flex;align-items:center;gap:4px"><input type="checkbox" ${p.showDescription?'checked':''} onchange="updateArr('${sec.id}','photos',${i},'showDescription',this.checked)"> Show Description</label>
             ${p.showDescription ? `<input class="form-control" type="text" placeholder="Description" value="${p.description}" oninput="updateArr('${sec.id}','photos',${i},'description',this.value)">` : ''}
           </div>
           <button class="remove-row-btn" onclick="removeArrItem('${sec.id}','photos',${i})">×</button>
        </div>
      </div>
    `).join('');
    return `
      <div class="form-group"><label>Heading</label><input type="text" class="form-control" data-key="heading" value="${sec.heading}"></div>
      <div class="form-group">
        <label>Layout</label>
        <select class="form-control" data-key="layout">
          <option value="1-per-row" ${sec.layout==='1-per-row'?'selected':''}>1 per row</option>
          <option value="2-per-row" ${sec.layout==='2-per-row'?'selected':''}>2 per row</option>
          <option value="3-per-row" ${sec.layout==='3-per-row'?'selected':''}>3 per row</option>
        </select>
      </div>
      <div class="form-group">
        <label>Photos (Max 8)</label>
        <div>${photosHtml}</div>
        <button class="btn" style="margin-top:8px" ${sec.photos.length>=8?'disabled':''} onclick="addArrItem('${sec.id}','photos',{src:'',caption:'',description:'',showDescription:false})">+ Add Photo</button>
      </div>
    `;
  }
  
  if (sec.type === 'latex') {
    return `
      <div class="form-group"><label>LaTeX Code</label><textarea class="form-control" data-key="latexCode" style="min-height:120px; font-family:monospace; white-space:pre">${sec.latexCode || ''}</textarea></div>
      <button class="btn primary" id="compile-btn-${sec.id}" style="margin-top:8px" onclick="compileLatex('${sec.id}')">Compile LaTeX</button>
    `;
  }
  
  if (sec.type === 'page-break') {
    return `<div style="text-align:center;color:var(--text-secondary);font-size:12px;padding:20px">── Page Break ──</div>`;
  }

  // Fallback for others (table, list, signature, two-column) is similar. Just implemented core for brevity.
  return `<div class="form-group"><label>Heading</label><input type="text" class="form-control" data-key="heading" value="${sec.heading}"></div><div style="font-size:12px;color:var(--text-muted)">Edit in preview or config not fully shown here...</div>`;
}

function attachInputListeners(body, sec) {
  body.querySelectorAll('input, textarea, select').forEach(el => {
    if (el.dataset.key) {
      el.addEventListener('input', (e) => {
        sec[el.dataset.key] = el.value;
        stateMutated();
      });
    }
  });
  body.querySelectorAll('.content-editable-div').forEach(el => {
    if (el.dataset.key) {
      el.addEventListener('input', (e) => {
        sec[el.dataset.key] = el.innerHTML;
        stateMutated();
      });
    }
  });
}

function stateMutated() {
  updatePreview();
  triggerAutoSave();
  updateProgress();
}

function updateArr(secId, arrKey, index, key, value) {
  const sec = appState.sections.find(s => s.id === secId);
  sec[arrKey][index][key] = value;
  stateMutated();
}
function updateArrArr(secId, arrKey, i, j, value) {
  const sec = appState.sections.find(s => s.id === secId);
  sec[arrKey][i][j] = value;
  stateMutated();
}
function addArrItem(secId, arrKey, defaultObj) {
  const sec = appState.sections.find(s => s.id === secId);
  sec[arrKey].push(defaultObj);
  pushUndoState();
  renderEditor();
  stateMutated();
}
function removeArrItem(secId, arrKey, index) {
  const sec = appState.sections.find(s => s.id === secId);
  sec[arrKey].splice(index, 1);
  pushUndoState();
  renderEditor();
  stateMutated();
}
function updateColumns(secId, val) {
  const sec = appState.sections.find(s => s.id === secId);
  sec.columns = val.split(',').map(c => c.trim());
  sec.rows = sec.rows.map(r => {
    const newR = [];
    sec.columns.forEach((_, i) => newR.push(r[i] || ''));
    return newR;
  });
  pushUndoState();
  renderEditor();
  stateMutated();
}
function addParticipantRow(secId) {
  const sec = appState.sections.find(s => s.id === secId);
  const row = new Array(sec.columns.length).fill('');
  if (sec.columns[0] === 'S.No') row[0] = (sec.rows.length + 1).toString();
  sec.rows.push(row);
  pushUndoState();
  renderEditor();
  stateMutated();
}

// Images
function triggerUpload(secId, key) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        appState.sections.find(s => s.id === secId)[key] = ev.target.result;
        pushUndoState();
        renderEditor();
        stateMutated();
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}
function removeImage(secId, key) {
  appState.sections.find(s => s.id === secId)[key] = '';
  pushUndoState();
  renderEditor();
  stateMutated();
}
function triggerUploadArr(secId, arrKey, index, key) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        appState.sections.find(s => s.id === secId)[arrKey][index][key] = ev.target.result;
        pushUndoState();
        renderEditor();
        stateMutated();
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}
function removeImageArr(secId, arrKey, index, key) {
  appState.sections.find(s => s.id === secId)[arrKey][index][key] = '';
  pushUndoState();
  renderEditor();
  stateMutated();
}

function initSortableEditor() {
  const el = document.getElementById('editor-container');
  new Sortable(el, {
    handle: '.drag-handle',
    animation: 150,
    onEnd: function (evt) {
      // Reconstruct sections array ignoring insert buttons
      const cards = Array.from(el.querySelectorAll('.editor-card'));
      const newSections = cards.map(c => appState.sections.find(s => s.id === c.dataset.id));
      appState.sections = newSections;
      pushUndoState();
      renderEditor();
      stateMutated();
    }
  });
}


// ==========================================
// RIGHT PANEL - PREVIEW PAGINATION
// ==========================================
function updatePreview() {
  clearTimeout(previewDebounceTimer);
  previewDebounceTimer = setTimeout(() => {
    const container = document.getElementById('preview-container');
    
    // Create an offscreen wrapper to render everything
    const offscreen = document.createElement('div');
    offscreen.style.position = 'absolute';
    offscreen.style.visibility = 'hidden';
    offscreen.style.width = '210mm'; // A4 width
    // Padding: 30mm top/bottom, 25.4mm left/right
    offscreen.style.padding = '30mm 25.4mm';
    offscreen.style.fontFamily = "'Times New Roman', Times, serif";
    offscreen.style.fontSize = "12pt";
    document.body.appendChild(offscreen);

    // Pre-process sections to chunk long elements
    let processedSections = [];
    appState.sections.filter(s => s.visible).forEach(sec => {
      if ((sec.type === 'participant-table' || sec.type === 'detail-table') && sec.rows && sec.rows.length > 22) {
        const CHUNK_SIZE = 22;
        for (let i = 0; i < sec.rows.length; i += CHUNK_SIZE) {
          const chunk = JSON.parse(JSON.stringify(sec));
          chunk.rows = sec.rows.slice(i, i + CHUNK_SIZE);
          if (i > 0) { chunk.heading = ''; chunk.description = ''; }
          processedSections.push(chunk);
        }
      } else if (sec.type === 'text') {
        const paragraphs = (sec.content || '').split('\n').filter(p => p.trim() !== '');
        if (paragraphs.length > 0) {
          paragraphs.forEach((p, index) => {
            const chunk = JSON.parse(JSON.stringify(sec));
            chunk.content = p;
            if (index > 0) { chunk.heading = ''; }
            processedSections.push(chunk);
          });
        } else {
          processedSections.push(sec);
        }
      } else if (sec.type === 'list' && sec.items && sec.items.length > 4) {
        const CHUNK_SIZE = 4;
        for (let i = 0; i < sec.items.length; i += CHUNK_SIZE) {
          const chunk = JSON.parse(JSON.stringify(sec));
          chunk.items = sec.items.slice(i, i + CHUNK_SIZE);
          if (i > 0) { chunk.heading = ''; chunk.description = ''; }
          processedSections.push(chunk);
        }
      } else if (sec.type === 'gallery' && sec.items && sec.items.length > 2) {
        const layout = sec.layout || '2-per-row';
        const CHUNK_SIZE = layout === '1-per-row' ? 1 : (layout === '3-per-row' ? 3 : 2);
        for (let i = 0; i < sec.items.length; i += CHUNK_SIZE) {
          const chunk = JSON.parse(JSON.stringify(sec));
          chunk.items = sec.items.slice(i, i + CHUNK_SIZE);
          if (i > 0) { chunk.heading = ''; chunk.description = ''; }
          processedSections.push(chunk);
        }
      } else {
        processedSections.push(sec);
      }
    });

    // Render all visible sections into offscreen
    processedSections.forEach(sec => {
      const secEl = document.createElement('div');
      secEl.className = 'doc-section-render';
      secEl.dataset.type = sec.type;
      secEl.dataset.id = sec.id;
      secEl.innerHTML = renderSectionHTML(sec);
      offscreen.appendChild(secEl);
    });

    // Pagination constants
    const PAGE_HEIGHT_MM = 297;
    const PADDING_TOP_MM = 30;
    const PADDING_BOTTOM_MM = 30;
    const mmToPx = 3.7795275591; // 96 DPI
    const USABLE_HEIGHT_PX = (PAGE_HEIGHT_MM - PADDING_TOP_MM - PADDING_BOTTOM_MM) * mmToPx;

    const pages = [];
    let currentPage = document.createElement('div');
    let currentHeight = 0;

    // Split elements
    Array.from(offscreen.children).forEach(secEl => {
      if (secEl.dataset.type === 'page-break') {
        if (currentPage.children.length > 0) pages.push(currentPage);
        currentPage = document.createElement('div');
        currentHeight = 0;
        return;
      }
      
      const elHeight = secEl.offsetHeight;
      if (currentHeight + elHeight > USABLE_HEIGHT_PX && currentPage.children.length > 0) {
        pages.push(currentPage);
        currentPage = document.createElement('div');
        currentHeight = 0;
      }
      currentPage.appendChild(secEl.cloneNode(true));
      currentHeight += elHeight;
    });
    if (currentPage.children.length > 0) pages.push(currentPage);
    
    document.body.removeChild(offscreen);

    // Build actual preview
    container.innerHTML = '';
    let wordCount = 0;
    
    pages.forEach((pageContent, idx) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'doc-page';
      
      Array.from(pageContent.children).forEach(child => {
        pageDiv.appendChild(child);
        wordCount += (child.textContent.match(/\S+/g) || []).length;
      });
      
      const pageText = document.createElement('div');
      pageText.className = 'page-number-text';
      pageText.textContent = `Page ${idx + 1} of ${pages.length}`;
      pageDiv.appendChild(pageText);

      const badge = document.createElement('div');
      badge.className = 'page-badge';
      badge.textContent = `Page ${idx + 1}`;
      pageDiv.appendChild(badge);

      container.appendChild(pageDiv);
    });
    
    // Status update
    document.getElementById('status-pages').textContent = `Page 1 of ${pages.length}`;
    document.getElementById('status-words').textContent = `Words: ${wordCount}`;

  }, 50); // 50ms debounce
}

function renderSectionHTML(sec) {
  if (sec.type === 'title') {
    return `
      <div class="doc-title-page">
        <div class="doc-logo-row">
          <div class="doc-logo-slot">${sec.logoLeftSrc ? `<img class="doc-logo" src="${sec.logoLeftSrc}" style="width:${sec.logoLeftWidth || 100}%">` : ''}</div>
          <div class="doc-logo-slot">${sec.logoRightSrc ? `<img class="doc-logo" src="${sec.logoRightSrc}" style="width:${sec.logoRightWidth || 100}%">` : ''}</div>
        </div>
        <p class="doc-college">${sec.collegeName}</p>
        <p class="doc-dept">${sec.departmentLine}</p>
        <p class="doc-unit">${sec.unitNumber}</p>
        <p class="doc-report-title">${sec.reportTitle}</p>
        <p class="doc-prog">${sec.programmeName.replace(/\n/g, '<br>')}</p>
        <p class="doc-date">${sec.dateVenue}</p>
        ${sec.mainPhotoSrc ? `<img class="doc-main-photo" src="${sec.mainPhotoSrc}" style="width:${sec.mainPhotoWidth || 100}%">` : '<div style="height:2cm"></div>'}
        <p class="doc-prep">${sec.preparedBy.replace(/\n/g, '<br>')}</p>
      </div>
    `;
  }
  
  if (sec.type === 'text') {
    return `
      ${sec.heading ? `<h2 class="doc-heading">${sec.heading}</h2>` : ''}
      <div class="doc-text">${sec.content}</div>
    `;
  }
  
  if (sec.type === 'detail-table') {
    let rowsHtml = sec.rows.map(r => `<tr><td>${r.label}</td><td>${r.value}</td></tr>`).join('');
    return `
      ${sec.heading ? `<h2 class="doc-heading">${sec.heading}</h2>` : ''}
      <table class="doc-table booktabs detail-table">
        <tbody>${rowsHtml}</tbody>
      </table>
    `;
  }
  
  if (sec.type === 'participant-table') {
    let colsHtml = sec.columns.map(c => `<th>${c}</th>`).join('');
    let rowsHtml = sec.rows.map(r => `<tr>${r.map(cVal => `<td>${cVal}</td>`).join('')}</tr>`).join('');
    return `
      ${sec.heading ? `<h2 class="doc-heading">${sec.heading}</h2>` : ''}
      ${sec.description ? `<p class="doc-text">${sec.description}</p>` : ''}
      <table class="doc-table bordered participant-table">
        <thead><tr>${colsHtml}</tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    `;
  }
  
  if (sec.type === 'gallery') {
    let photosHtml = sec.photos.map(p => `
      <div class="doc-gallery-item" data-layout="${sec.layout}">
        ${p.src ? `<img src="${p.src}" style="width:${p.widthPct || 100}%">` : ''}
        ${p.caption ? `<div class="doc-gallery-caption">${p.caption}</div>` : ''}
        ${p.showDescription && p.description ? `<div class="doc-gallery-desc">${p.description}</div>` : ''}
      </div>
    `).join('');
    return `
      ${sec.heading ? `<h2 class="doc-heading">${sec.heading}</h2>` : ''}
      <div class="doc-gallery">${photosHtml}</div>
    `;
  }

  if (sec.type === 'latex') {
    return `
      <div style="text-align:center; margin: 10pt 0;">
        ${sec.compiledImgUrl ? `<img src="${sec.compiledImgUrl}" style="max-width:100%">` : '<div style="color:var(--text-secondary); font-style:italic; font-size:10pt; border:1px dashed #ccc; padding:20px">LaTeX not compiled yet. Click compile in the editor.</div>'}
      </div>
    `;
  }

  return '';
}

// ==========================================
// UI / BUTTONS / MODALS
// ==========================================
function initUI() {
  document.getElementById('btn-undo').onclick = () => { doUndo(); addRipple(event); };
  document.getElementById('btn-redo').onclick = () => { doRedo(); addRipple(event); };
  
  document.getElementById('btn-collapse').onclick = () => {
    document.getElementById('left-panel').classList.toggle('collapsed');
  };
  
  document.getElementById('btn-darkmode').onclick = (e) => {
    appState.darkMode = !appState.darkMode;
    document.body.classList.toggle('dark-mode', appState.darkMode);
    addRipple(e);
    triggerAutoSave();
  };
  
  // Modals
  document.getElementById('btn-add-section').onclick = () => {
    showTemplatePicker(appState.sections.length);
  };
  document.getElementById('close-add-modal').onclick = () => {
    document.getElementById('modal-add-section').classList.remove('active');
  };
  
  // Theme colors removed
  
  // Find replace
  document.getElementById('btn-find').onclick = () => {
    document.getElementById('find-replace-panel').classList.toggle('active');
  };
  document.getElementById('btn-replace-all').onclick = handleReplaceAll;
  
  // Export
  document.getElementById('btn-export-pdf').onclick = () => {
    document.getElementById('modal-export-pdf').classList.add('active');
  };
  document.getElementById('confirm-export-pdf').onclick = () => {
    appState.filename = document.getElementById('export-filename').value || 'NSS_Report';
    document.getElementById('modal-export-pdf').classList.remove('active');
    triggerPDFExport();
  };
  document.getElementById('btn-export-docx').onclick = triggerDOCXExport;
  document.getElementById('btn-save-json').onclick = handleSaveJSON;
  document.getElementById('import-json').onchange = handleLoadJSON;
  
  // Zoom
  document.getElementById('status-zoom').onclick = () => {
    const zooms = [50, 75, 100, 125, 150];
    let idx = zooms.indexOf(appState.zoom);
    appState.zoom = zooms[(idx + 1) % zooms.length];
    setZoom(appState.zoom, true);
  };
  
  // Context Menu bindings
  document.addEventListener('click', () => {
    document.getElementById('context-menu').classList.remove('active');
  });
  document.querySelectorAll('.context-item').forEach(el => {
    el.onclick = (e) => {
      handleContextAction(e.target.dataset.action);
    };
  });
}

function setAccentColor(hex, pushUndo = false) {
  appState.accent = hex;
  document.documentElement.style.setProperty('--accent', hex);
  
  // Light variants
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  document.documentElement.style.setProperty('--accent-light', `rgb(${Math.min(255,r+20)},${Math.min(255,g+20)},${Math.min(255,b+20)})`);
  document.documentElement.style.setProperty('--accent-lighter', `rgba(${r},${g},${b},0.1)`);
  
  
  
  if (pushUndo) pushUndoState();
  triggerAutoSave();
}
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
}

function setZoom(val, pushUndo = false) {
  document.getElementById('preview-container').style.transform = `scale(${val / 100})`;
  document.getElementById('status-zoom').textContent = `Zoom: ${val}%`;
  if (pushUndo) { pushUndoState(); triggerAutoSave(); }
}

function showTemplatePicker(index) {
  const modal = document.getElementById('modal-add-section');
  const grid = document.getElementById('template-grid');
  const templates = [
    { type: 'text', name: 'Text Section', desc: 'Heading + Paragraph', icon: getIconForType('text') },
    { type: 'detail-table', name: 'Details Table', desc: 'Key-value booktabs table', icon: getIconForType('detail-table') },
    { type: 'participant-table', name: 'Participant List', desc: 'Attendance table', icon: getIconForType('participant-table') },
    { type: 'gallery', name: 'Photo Gallery', desc: 'Image grid with captions', icon: getIconForType('gallery') },
    { type: 'latex', name: 'LaTeX Block', desc: 'Advanced math & TikZ', icon: getIconForType('latex') },
    { type: 'page-break', name: 'Page Break', desc: 'Force new page', icon: getIconForType('page-break') }
  ];
  
  grid.innerHTML = templates.map(t => `
    <div class="template-card" onclick="insertSection('${t.type}', ${index})">
      ${t.icon}
      <div class="template-card-title">${t.name}</div>
      <div class="template-card-desc">${t.desc}</div>
    </div>
  `).join('');
  modal.classList.add('active');
}

function insertSection(type, index) {
  document.getElementById('modal-add-section').classList.remove('active');
  const sec = { id: generateId(), type, visible: true, heading: 'New Section' };
  
  if (type === 'text') sec.content = '';
  if (type === 'latex') { sec.latexCode = '\\begin{tikzpicture}\n  \\draw (0,0) circle (1in);\n\\end{tikzpicture}'; sec.compiledImgUrl = ''; }
  if (type === 'detail-table') sec.rows = [{label:'Label', value:'Value'}];
  if (type === 'participant-table') { sec.columns = ['S.No','Name','Department']; sec.rows = [['1','',''],['2','',''],['3','',''],['4','',''],['5','','']]; sec.description=''; }
  if (type === 'gallery') { sec.layout = '2-per-row'; sec.photos = []; }
  
  appState.sections.splice(index, 0, sec);
  pushUndoState();
  renderEditor();
  stateMutated();
  
  // Scroll left panel
  setTimeout(() => {
    const card = document.querySelector(`.editor-card[data-id="${sec.id}"]`);
    if(card) card.scrollIntoView({behavior:'smooth', block:'center'});
  }, 100);
}

// Context Menu
function openContextMenu(e, id) {
  e.preventDefault();
  contextMenuTargetId = id;
  const menu = document.getElementById('context-menu');
  menu.style.left = e.clientX + 'px';
  menu.style.top = e.clientY + 'px';
  menu.classList.add('active');
}

function handleContextAction(action) {
  const id = contextMenuTargetId;
  const idx = appState.sections.findIndex(s => s.id === id);
  if (idx === -1) return;
  
  if (action === 'delete') {
    appState.sections.splice(idx, 1);
  } else if (action === 'duplicate') {
    const copy = JSON.parse(JSON.stringify(appState.sections[idx]));
    copy.id = generateId();
    appState.sections.splice(idx + 1, 0, copy);
  } else if (action === 'moveUp' && idx > 0) {
    const temp = appState.sections[idx];
    appState.sections[idx] = appState.sections[idx-1];
    appState.sections[idx-1] = temp;
  } else if (action === 'moveDown' && idx < appState.sections.length - 1) {
    const temp = appState.sections[idx];
    appState.sections[idx] = appState.sections[idx+1];
    appState.sections[idx+1] = temp;
  } else if (action === 'toggleVis') {
    appState.sections[idx].visible = !appState.sections[idx].visible;
  } else if (action === 'rename') {
    const card = document.querySelector(`.editor-card[data-id="${id}"]`);
    const titleEl = card.querySelector('.card-title');
    titleEl.dispatchEvent(new Event('dblclick'));
    return; // Don't re-render yet
  } else if (action === 'insertAbove') {
    showTemplatePicker(idx);
    return;
  } else if (action === 'insertBelow') {
    showTemplatePicker(idx + 1);
    return;
  }
  
  pushUndoState();
  renderEditor();
  stateMutated();
}

function toggleVisibility(id) {
  const sec = appState.sections.find(s => s.id === id);
  if (sec) {
    sec.visible = !sec.visible;
    pushUndoState();
    renderEditor();
    stateMutated();
  }
}


// ==========================================
// EXPORTS & UTILS
// ==========================================
function triggerPDFExport() {
  const wrapper = document.createElement('div');
  wrapper.style.width = '210mm';
  
  // Clone current preview
  const container = document.getElementById('preview-container');
  wrapper.innerHTML = container.innerHTML;
  
  wrapper.classList.add('pdf-export-mode');
  
  // Remove shadows and margins so html2pdf slices perfectly on page boundaries
  wrapper.querySelectorAll('.doc-page').forEach(e => {
    e.style.boxShadow = 'none';
    e.style.margin = '0';
  });

  const opt = {
    margin: 0,
    filename: appState.filename + '.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, width: 794 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(wrapper).toPdf().get('pdf').then((pdf) => {
    const totalPages = pdf.internal.getNumberOfPages();
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      // Double border drawing logic exactly matching A4 page layout
      pdf.setLineWidth(0.53); // 1.5pt
      pdf.setDrawColor(0, 0, 0);
      pdf.rect(6, 6, pageWidth - 12, pageHeight - 12);
      
      pdf.setLineWidth(0.18); // 0.5pt
      pdf.rect(8, 8, pageWidth - 16, pageHeight - 16);
      
      // Draw Page Number at the bottom center
      pdf.setFontSize(10);
      pdf.setFont("times", "normal");
      pdf.setTextColor(0, 0, 0);
      pdf.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 12, { align: 'center' });
    }
  }).save().then(() => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: [appState.accent, '#ffffff'] });
    showToast('PDF Exported Successfully!', 'success');
  });
}

function triggerDOCXExport() {
  showToast('Generating DOCX Document...', 'info');
  const container = document.getElementById('preview-container');
  let contentHtml = container.innerHTML;
  
  // Minimal styles for word processing engines
  const header = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
    <head><meta charset='utf-8'><title>Export HTML To Doc</title>
    <style>
      body { font-family: 'Times New Roman', serif; }
      table { border-collapse: collapse; width: 100%; margin-bottom: 20pt; }
      th, td { border: 1pt solid #000; padding: 5pt; }
      .doc-page { margin-bottom: 20pt; page-break-after: always; padding: 20pt; }
      
      .doc-title-page { text-align: center; }
      .doc-logo-row { text-align: center; margin-bottom: 24pt; }
      .doc-logo-row .doc-logo-slot { display: inline-block; width: 45%; vertical-align: middle; }
      .doc-logo { max-width: 2.5cm; max-height: 2.5cm; }
      .doc-college { font-size: 14pt; font-weight: bold; margin-bottom: 4pt; }
      .doc-dept { font-size: 10pt; margin-bottom: 12pt; }
      .doc-unit { font-size: 13pt; font-weight: bold; margin-bottom: 24pt; }
      .doc-report-title { font-size: 14pt; font-weight: bold; margin-bottom: 6pt; }
      .doc-prog { font-size: 18pt; font-weight: bold; line-height: 1.3; margin-bottom: 10pt; }
      .doc-date { font-size: 12pt; margin-bottom: 20pt; }
      .doc-main-photo { max-width: 60%; margin: 10pt auto 20pt; display: block; }
      .doc-prep { font-weight: bold; font-size: 12pt; line-height: 1.5; }
      .doc-heading { font-size: 14pt; font-weight: bold; text-transform: uppercase; border-bottom: 1pt solid #000; margin: 14pt 0 10pt; padding-bottom: 2pt; }
      .doc-text { text-align: justify; margin-bottom: 8pt; white-space: pre-wrap; }
      
      .doc-gallery { text-align: center; margin: 8pt 0; }
      .doc-gallery-item { display: inline-block; vertical-align: top; margin: 5pt; text-align: center; }
      .doc-gallery-item[data-layout="1-per-row"] { width: 95%; }
      .doc-gallery-item[data-layout="2-per-row"] { width: 45%; }
      .doc-gallery-item[data-layout="3-per-row"] { width: 30%; }
      .doc-gallery-item img { max-width: 100%; display: block; margin: 0 auto; }
      .doc-gallery-caption { font-size: 10pt; font-style: italic; margin-top: 4pt; }
      .doc-gallery-desc { font-size: 9pt; margin-top: 2pt; }
      
      .doc-list { padding-left: 20pt; margin-bottom: 8pt; }
      .doc-list li { margin-bottom: 4pt; text-align: justify; }
      
      .doc-signatures { text-align: center; margin-top: 30pt; }
      .doc-signatory { display: inline-block; width: 150px; margin: 0 20px; vertical-align: top; text-align: center; }
      .doc-signatory-line { border-top: 1pt solid #000; margin-bottom: 4pt; }
      .doc-signatory-name { font-weight: bold; font-size: 11pt; }
      .doc-signatory-desig { font-size: 10pt; }
      .doc-signatory-date { font-size: 10pt; }
      
      .doc-two-col { text-align: justify; margin-bottom: 8pt; }
      .doc-col { display: inline-block; width: 48%; vertical-align: top; }
      .doc-col img { max-width: 100%; }
      
      .page-badge, .page-number-text, .doc-page::before, .doc-page::after { display: none !important; }
    </style>
    </head><body>
  `;
  const footer = "</body></html>";
  const sourceHTML = header + contentHtml + footer;
  
  const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
  const fileDownload = document.createElement("a");
  document.body.appendChild(fileDownload);
  fileDownload.href = source;
  fileDownload.download = appState.filename + '.doc';
  fileDownload.click();
  document.body.removeChild(fileDownload);
  
  confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: [appState.accent, '#ffffff'] });
  showToast('DOCX Exported Successfully!', 'success');
}

function handleSaveJSON() {
  const blob = new Blob([JSON.stringify(appState, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = appState.filename + '.json';
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON Saved', 'success');
}

function handleLoadJSON(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      appState = JSON.parse(ev.target.result);
      pushUndoState();
      applyStateToUI();
      showToast('Project Loaded', 'success');
    } catch(err) {
      showToast('Invalid JSON file', 'error');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

function handleReplaceAll() {
  const findText = document.getElementById('fr-find').value;
  const replaceText = document.getElementById('fr-replace').value;
  const isCase = document.getElementById('fr-case').checked;
  if (!findText) return;
  
  let count = 0;
  const regex = new RegExp(findText, isCase ? 'g' : 'gi');
  
  const processStr = (str) => {
    if (typeof str === 'string' && regex.test(str)) {
      const matches = str.match(regex);
      count += matches ? matches.length : 0;
      return str.replace(regex, replaceText);
    }
    return str;
  };
  
  appState.sections.forEach(sec => {
    Object.keys(sec).forEach(k => {
      if (typeof sec[k] === 'string') sec[k] = processStr(sec[k]);
      if (Array.isArray(sec[k])) {
        sec[k].forEach((item, i) => {
          if (typeof item === 'string') sec[k][i] = processStr(item);
          if (typeof item === 'object') {
            Object.keys(item).forEach(subK => {
              if (typeof item[subK] === 'string') item[subK] = processStr(item[subK]);
            });
          }
          if (Array.isArray(item)) {
            item.forEach((subItem, j) => {
               if (typeof subItem === 'string') sec[k][i][j] = processStr(subItem);
            });
          }
        });
      }
    });
  });
  
  if (count > 0) {
    pushUndoState();
    renderEditor();
    stateMutated();
    showToast(`Replaced ${count} occurrences`, 'success');
  } else {
    showToast('No matches found');
  }
}

function updateProgress() {
  let total = 0;
  let complete = 0;
  
  appState.sections.forEach(sec => {
    if (sec.type === 'title') {
      const keys = ['collegeName', 'departmentLine', 'unitNumber', 'reportTitle', 'programmeName', 'dateVenue', 'preparedBy'];
      total += keys.length + 1; // +1 for main photo
      keys.forEach(k => { if (sec[k].trim()) complete++; });
      if (sec.mainPhotoSrc) complete++;
    } else {
      total += 1;
      if (sec.heading && sec.heading.trim()) complete += 0.5;
      
      if (sec.type === 'text' && sec.content.trim()) complete += 0.5;
      else if (sec.type === 'detail-table' && sec.rows.length > 0) complete += 0.5;
      else if (sec.type === 'participant-table' && sec.rows.length > 0) complete += 0.5;
      else if (sec.type === 'gallery' && sec.photos.length > 0) complete += 0.5;
      else if (sec.type === 'page-break') complete += 0.5;
    }
  });
  
  const pct = total === 0 ? 0 : Math.round((complete / total) * 100);
  document.getElementById('prog-fill').style.width = pct + '%';
  document.getElementById('prog-text').textContent = `Report ${pct}% complete`;
}

function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.textContent = msg;
  container.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    setTimeout(() => t.remove(), 300);
  }, 2500);
}

function addRipple(e) {
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;
  
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');
  
  const existing = btn.querySelector('.ripple');
  if (existing) existing.remove();
  btn.appendChild(circle);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); doUndo(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'y') { e.preventDefault(); doRedo(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); handleSaveJSON(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 'h') { 
    e.preventDefault(); 
    document.getElementById('find-replace-panel').classList.add('active'); 
  }
});


// ============ PHASE 2 JS ============

const p2State = {
  viewPrefs: JSON.parse(localStorage.getItem('nss_p2_view_prefs') || '{"rulers":false,"guides":false,"minimap":true,"breadcrumb":true,"curl":true,"animations":true}'),
  splitView: false,
  activeSectionId: null
};

// --- DOM INJECTIONS ---
function injectPhase2DOM() {
  // Breadcrumb
  const mainContent = document.querySelector('.main-content');
  const bcBar = document.createElement('div');
  bcBar.className = 'breadcrumb-bar';
  bcBar.id = 'breadcrumb-bar';
  bcBar.innerHTML = `<span class="bc-item" onclick="scrollToTop()">Document</span><span class="bc-sep">/</span><span class="bc-item" id="bc-active-section">Overview</span>`;
  mainContent.parentNode.insertBefore(bcBar, mainContent);

  // View Menu Button (between Load JSON and PDF)
  const topbarRight = document.querySelector('.topbar-right');
  const pdfBtn = document.getElementById('btn-export-pdf');
  const viewMenuHTML = `
    <div class="view-menu-container">
      <button class="btn" id="btn-view-menu" title="View Options"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View</button>
      <div class="dropdown-menu" id="view-dropdown">
        <div class="dd-item" data-toggle="rulers"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Rulers (R)</span></div>
        <div class="dd-item" data-toggle="guides"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Margin Guides (M)</span></div>
        <div class="dd-item" data-toggle="minimap"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Mini-Map</span></div>
        <div class="dd-item" data-toggle="breadcrumb"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Breadcrumb Bar</span></div>
        <div class="dd-item" data-toggle="curl"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Page Curl Effect</span></div>
        <div class="dd-item" data-toggle="animations"><span style="display:flex;align-items:center;gap:8px"><div class="dd-check"></div> Scroll Animations</span></div>
        <div class="dd-sep"></div>
        <div style="padding:4px 16px; font-size:11px; color:var(--text-secondary)">Zoom</div>
        <div style="display:flex; gap:4px; padding:4px 16px">
          <button class="zoom-preset-btn" onclick="setZoom(50, true)">50%</button>
          <button class="zoom-preset-btn" onclick="setZoom(75, true)">75%</button>
          <button class="zoom-preset-btn" onclick="setZoom(100, true)">100%</button>
          <button class="zoom-preset-btn" onclick="setZoom(125, true)">125%</button>
        </div>
      </div>
    </div>
  `;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = viewMenuHTML;
  topbarRight.insertBefore(tempDiv.firstElementChild, pdfBtn.previousElementSibling);

  // Split View Toggle
  const topbarCenter = document.querySelector('.topbar-center');
  const splitBtn = document.createElement('button');
  splitBtn.className = 'btn';
  splitBtn.id = 'btn-split-view';
  splitBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg> <span>Preview Only</span>`;
  topbarCenter.appendChild(splitBtn);

  // Floating Edit Button
  const rightPanel = document.getElementById('right-panel');
  const floatEditBtn = document.createElement('button');
  floatEditBtn.className = 'floating-edit-btn';
  floatEditBtn.id = 'floating-edit-btn';
  floatEditBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg> Edit Document`;
  rightPanel.appendChild(floatEditBtn);

  // Mini-map
  const minimap = document.createElement('div');
  minimap.className = 'minimap-panel';
  minimap.id = 'minimap-panel';
  minimap.innerHTML = `
    <div class="minimap-header">NAVIGATOR <span id="minimap-toggle" style="cursor:pointer">▼</span></div>
    <div class="minimap-content" id="minimap-content"><div class="minimap-viewport" id="minimap-viewport"></div><div id="minimap-clone-container" style="transform-origin:top left; pointer-events:none"></div></div>
  `;
  rightPanel.appendChild(minimap);

  // Rulers
  const rulerH = document.createElement('div'); rulerH.className = 'ruler-h'; rulerH.id = 'ruler-h';
  const rulerV = document.createElement('div'); rulerV.className = 'ruler-v'; rulerV.id = 'ruler-v';
  const rCursorH = document.createElement('div'); rCursorH.className = 'ruler-cursor-h'; rCursorH.id = 'ruler-cursor-h';
  const rCursorV = document.createElement('div'); rCursorV.className = 'ruler-cursor-v'; rCursorV.id = 'ruler-cursor-v';
  rulerH.appendChild(rCursorH); rulerV.appendChild(rCursorV);
  rightPanel.appendChild(rulerH); rightPanel.appendChild(rulerV);

  // Tooltip container
  const tooltip = document.createElement('div');
  tooltip.className = 'adv-tooltip';
  tooltip.id = 'adv-tooltip';
  document.body.appendChild(tooltip);

  // Shortcut Help Panel
  const shortcutHelp = document.createElement('div');
  shortcutHelp.className = 'slide-panel';
  shortcutHelp.id = 'shortcut-panel';
  shortcutHelp.innerHTML = `
    <div class="panel-header">KEYBOARD SHORTCUTS <button class="modal-close" onclick="document.getElementById('shortcut-panel').classList.remove('active')">×</button></div>
    <div style="padding:16px; overflow-y:auto">
      <div class="sc-section"><div class="sc-title">EDITING</div>
        <div class="sc-row"><span>Undo</span><span class="sc-key">Ctrl+Z</span></div>
        <div class="sc-row"><span>Redo</span><span class="sc-key">Ctrl+Y</span></div>
        <div class="sc-row"><span>Save JSON</span><span class="sc-key">Ctrl+S</span></div>
        <div class="sc-row"><span>Find & Replace</span><span class="sc-key">Ctrl+H</span></div>
      </div>
      <div class="sc-section"><div class="sc-title">VIEW</div>
        <div class="sc-row"><span>Zoom In / Out</span><span class="sc-key">Ctrl + / -</span></div>
        <div class="sc-row"><span>Toggle Rulers</span><span class="sc-key">R</span></div>
        <div class="sc-row"><span>Toggle Margins</span><span class="sc-key">M</span></div>
      </div>
      <div class="sc-section"><div class="sc-title">NAVIGATION</div>
        <div class="sc-row"><span>Close Panels</span><span class="sc-key">Esc</span></div>
        <div class="sc-row"><span>Show Help</span><span class="sc-key">?</span></div>
      </div>
    </div>
  `;
  document.querySelector('.main-content').appendChild(shortcutHelp);

  // Progress Panel
  const progPanel = document.createElement('div');
  progPanel.className = 'slide-panel';
  progPanel.id = 'progress-panel';
  progPanel.innerHTML = `
    <div class="panel-header">REPORT PROGRESS <button class="modal-close" onclick="document.getElementById('progress-panel').classList.remove('active')">×</button></div>
    <div style="padding:16px">
      <div style="font-weight:700; margin-bottom:8px" id="prog-panel-title">Your report is 0% complete</div>
      <div class="progress-bar" style="margin-bottom:16px; height:8px"><div class="progress-fill" id="prog-panel-fill" style="width:0%"></div></div>
      <div id="prog-panel-list" style="display:flex; flex-direction:column; gap:4px; max-height: 60vh; overflow-y:auto"></div>
    </div>
  `;
  document.querySelector('.main-content').appendChild(progPanel);

  // Word Count Panel
  const wcPanel = document.createElement('div');
  wcPanel.className = 'slide-panel';
  wcPanel.id = 'wordcount-panel';
  wcPanel.innerHTML = `
    <div class="panel-header">WORD COUNT <button class="modal-close" onclick="document.getElementById('wordcount-panel').classList.remove('active')">×</button></div>
    <div style="padding:16px">
      <div id="wc-panel-list" style="display:flex; flex-direction:column; max-height: 60vh; overflow-y:auto"></div>
      <div class="wc-total" id="wc-panel-total">Total: 0 words | 0 chars</div>
    </div>
  `;
  document.querySelector('.main-content').appendChild(wcPanel);

  // Mobile FAB
  const fab = document.createElement('button');
  fab.className = 'fab-btn';
  fab.id = 'mobile-fab';
  fab.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;
  document.body.appendChild(fab);

  const backdrop = document.createElement('div');
  backdrop.className = 'mobile-sheet-backdrop';
  backdrop.id = 'mobile-backdrop';
  document.body.appendChild(backdrop);
  
  // Status Zoom Popup
  const zoomPopup = document.createElement('div');
  zoomPopup.className = 'zoom-popup';
  zoomPopup.id = 'zoom-popup';
  zoomPopup.innerHTML = `
    <div class="zoom-presets">
      <button class="zoom-preset-btn" onclick="setZoom(50, true)">50%</button>
      <button class="zoom-preset-btn" onclick="setZoom(75, true)">75%</button>
      <button class="zoom-preset-btn" onclick="setZoom(100, true)">100%</button>
      <button class="zoom-preset-btn" onclick="setZoom(125, true)">125%</button>
      <button class="zoom-preset-btn" onclick="setZoom(150, true)">150%</button>
    </div>
    <input type="range" id="zoom-slider" min="50" max="150" step="5" value="100">
  `;
  document.querySelector('.status-bar').appendChild(zoomPopup);
  document.getElementById('zoom-slider').addEventListener('input', (e) => setZoom(e.target.value, false));
  document.getElementById('zoom-slider').addEventListener('change', (e) => setZoom(e.target.value, true));
}

// --- P2-1: Split View Mode ---
function initSplitView() {
  const btn = document.getElementById('btn-split-view');
  const panel = document.getElementById('left-panel');
  const floatBtn = document.getElementById('floating-edit-btn');
  const toggle = () => {
    p2State.splitView = !p2State.splitView;
    if (p2State.splitView) {
      panel.classList.add('preview-only');
      btn.querySelector('span').textContent = 'Split View';
      floatBtn.classList.add('visible');
    } else {
      panel.classList.remove('preview-only');
      btn.querySelector('span').textContent = 'Preview Only';
      floatBtn.classList.remove('visible');
    }
  };
  btn.onclick = toggle;
  floatBtn.onclick = toggle;
}

// --- P2-17: Enhanced Dark Mode Transition ---
function initDarkModeTransition() {
  document.body.classList.add('dark-mode-transition');
  const btn = document.getElementById('btn-darkmode');
  // Override click from Phase 1
  btn.onclick = (e) => {
    appState.darkMode = !appState.darkMode;
    document.body.classList.toggle('dark-mode', appState.darkMode);
    
    // SVG morph hack via innerHTML
    if(appState.darkMode) {
      btn.innerHTML = `<svg class="theme-icon rotate" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
    } else {
      btn.innerHTML = `<svg class="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
    
    // Remove ripple from original handler if needed
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    btn.appendChild(circle);
    triggerAutoSave();
  };
}

// --- P2-2: Floating Mini-Map ---
function initMiniMap() {
  const toggle = document.getElementById('minimap-toggle');
  const panel = document.getElementById('minimap-panel');
  const content = document.getElementById('minimap-content');
  toggle.onclick = () => {
    panel.classList.toggle('collapsed');
    toggle.textContent = panel.classList.contains('collapsed') ? '▲' : '▼';
  };
  
  content.onmousedown = (e) => {
    const rp = document.getElementById('right-panel');
    const updateScroll = (ev) => {
      const rect = content.getBoundingClientRect();
      let y = ev.clientY - rect.top;
      y = Math.max(0, Math.min(y, rect.height));
      const pct = y / rect.height;
      rp.scrollTop = pct * (rp.scrollHeight - rp.clientHeight);
    };
    updateScroll(e);
    document.onmousemove = updateScroll;
    document.onmouseup = () => { document.onmousemove = null; document.onmouseup = null; };
  };
  
  document.getElementById('right-panel').addEventListener('scroll', updateMiniMapScroll);
}

function updateMiniMap() {
  if (!p2State.viewPrefs.minimap) {
    document.getElementById('minimap-panel').classList.remove('active');
    return;
  }
  const pages = document.querySelectorAll('.doc-page');
  if (pages.length < 2) {
    document.getElementById('minimap-panel').classList.remove('active');
    return;
  }
  document.getElementById('minimap-panel').classList.add('active');
  
  const preview = document.getElementById('preview-container');
  const cloneCont = document.getElementById('minimap-clone-container');
  cloneCont.innerHTML = preview.innerHTML;
  
  // Scale down
  const scale = 160 / preview.offsetWidth;
  cloneCont.style.transform = `scale(${scale})`;
  
  updateMiniMapScroll();
}

function updateMiniMapScroll() {
  const rp = document.getElementById('right-panel');
  const vp = document.getElementById('minimap-viewport');
  const pctTop = rp.scrollTop / rp.scrollHeight;
  const pctHeight = rp.clientHeight / rp.scrollHeight;
  
  const content = document.getElementById('minimap-content');
  vp.style.top = (pctTop * content.clientHeight) + 'px';
  vp.style.height = (pctHeight * content.clientHeight) + 'px';
}

// --- P2-3: Rulers ---
function initRulers() {
  const drawRulers = () => {
    const rh = document.getElementById('ruler-h');
    const rv = document.getElementById('ruler-v');
    rh.innerHTML = '<div class="ruler-cursor-h" id="ruler-cursor-h"></div>';
    rv.innerHTML = '<div class="ruler-cursor-v" id="ruler-cursor-v"></div>';
    
    // Assume 96 DPI: 1mm = 3.78px
    const scale = (appState.zoom / 100) * 3.7795;
    
    for(let i=0; i<300; i+=5) {
      const isMajor = i % 10 === 0;
      const tH = document.createElement('div');
      tH.style.position = 'absolute'; tH.style.left = (i * scale + 24) + 'px'; tH.style.bottom = '0';
      tH.style.width = '1px'; tH.style.height = isMajor ? '12px' : '6px'; tH.style.background = 'var(--text-secondary)';
      if (isMajor) { const l = document.createElement('div'); l.textContent = i; l.style.position = 'absolute'; l.style.left = '2px'; l.style.bottom = '12px'; l.style.fontSize = '8px'; l.style.color = 'var(--text-secondary)'; tH.appendChild(l); }
      rh.appendChild(tH);
      
      const tV = document.createElement('div');
      tV.style.position = 'absolute'; tV.style.top = (i * scale + 24) + 'px'; tV.style.right = '0';
      tV.style.height = '1px'; tV.style.width = isMajor ? '12px' : '6px'; tV.style.background = 'var(--text-secondary)';
      if (isMajor) { const l = document.createElement('div'); l.textContent = i; l.style.position = 'absolute'; l.style.right = '14px'; l.style.top = '-4px'; l.style.fontSize = '8px'; l.style.color = 'var(--text-secondary)'; tV.appendChild(l); }
      rv.appendChild(tV);
    }
  };
  drawRulers();
  window.addEventListener('resize', drawRulers);
  
  document.getElementById('right-panel').addEventListener('mousemove', (e) => {
    if (!p2State.viewPrefs.rulers) return;
    const rpRect = document.getElementById('right-panel').getBoundingClientRect();
    const x = e.clientX - rpRect.left;
    const y = e.clientY - rpRect.top;
    document.getElementById('ruler-cursor-h').style.left = x + 'px';
    document.getElementById('ruler-cursor-v').style.top = y + 'px';
  });
}

function updateRulers() {
  document.getElementById('ruler-h').classList.toggle('active', p2State.viewPrefs.rulers);
  document.getElementById('ruler-v').classList.toggle('active', p2State.viewPrefs.rulers);
}

// --- P2-4: Margin Guides ---
function updateMarginGuides() {
  const container = document.getElementById('preview-container');
  container.classList.toggle('margin-guides-active', p2State.viewPrefs.guides);
  if(p2State.viewPrefs.guides) {
    document.querySelectorAll('.doc-page').forEach(page => {
      if(!page.querySelector('.margin-guide')) {
        page.insertAdjacentHTML('beforeend', '<div class="margin-guide mg-top"></div><div class="margin-guide mg-bottom"></div><div class="margin-guide mg-left"></div><div class="margin-guide mg-right"></div>');
      }
    });
  }
}

// --- P2-5: Active Section Highlight ---
function initActiveHighlight() {
  document.getElementById('editor-container').addEventListener('focusin', (e) => {
    const card = e.target.closest('.editor-card');
    if (card) {
      const id = card.dataset.id;
      p2State.activeSectionId = id;
      highlightPreviewSection(id);
      updateBreadcrumb();
    }
  });
  document.getElementById('editor-container').addEventListener('focusout', (e) => {
    setTimeout(() => {
      if (!document.activeElement.closest('.editor-card')) {
        document.querySelectorAll('.doc-section-render.active-highlight').forEach(el => el.classList.remove('active-highlight'));
      }
    }, 10);
  });
}
function highlightPreviewSection(id) {
  document.querySelectorAll('.doc-section-render.active-highlight').forEach(el => el.classList.remove('active-highlight'));
  const target = document.querySelector(`.doc-section-render[data-id="${id}"]`);
  if (target) target.classList.add('active-highlight');
}

// --- P2-6: Breadcrumb Bar ---
function initBreadcrumb() {
  updateBreadcrumbVisibility();
}
function updateBreadcrumbVisibility() {
  document.getElementById('breadcrumb-bar').classList.toggle('active', p2State.viewPrefs.breadcrumb);
}
function updateBreadcrumb() {
  const bcActive = document.getElementById('bc-active-section');
  if (p2State.activeSectionId) {
    const sec = appState.sections.find(s => s.id === p2State.activeSectionId);
    if(sec) {
      bcActive.textContent = sec.name || sec.type;
      bcActive.onclick = () => {
        const target = document.querySelector(`.doc-section-render[data-id="${sec.id}"]`);
        if(target) target.scrollIntoView({behavior:'smooth', block:'center'});
      };
    }
  } else {
    bcActive.textContent = 'Overview';
    bcActive.onclick = null;
  }
}
function scrollToTop() {
  document.getElementById('right-panel').scrollTo({top:0, behavior:'smooth'});
}

// --- P2-7 & P2-8: Page Curl & Scroll Animations ---
function updatePageCurl() {
  document.getElementById('preview-container').classList.toggle('page-curl-active', p2State.viewPrefs.curl);
}

function initScrollAnimations() {
  const container = document.getElementById('preview-container');
  container.classList.toggle('scroll-anim-active', p2State.viewPrefs.animations);
  if(!p2State.viewPrefs.animations) return;
  
  const pages = document.querySelectorAll('.doc-page');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        if(entry.intersectionRatio > 0.5) {
          pages.forEach(p => p.classList.remove('is-active'));
          entry.target.classList.add('is-active');
        }
      }
    });
  }, { threshold: [0.1, 0.5] });
  
  pages.forEach(p => observer.observe(p));
}

// --- P2-9: Advanced Tooltips ---
function initTooltips() {
  const tt = document.getElementById('adv-tooltip');
  document.body.addEventListener('mouseover', (e) => {
    const btn = e.target.closest('button');
    if (btn && btn.title) {
      btn.dataset.tt = btn.title;
      btn.removeAttribute('title');
    }
    if (btn && btn.dataset.tt) {
      const text = btn.dataset.tt;
      let label = text; let shortcut = '';
      if(text.includes('(')) {
        const parts = text.split('(');
        label = parts[0].trim();
        shortcut = parts[1].replace(')','');
      }
      tt.innerHTML = `<span class="tooltip-label">${label}</span>${shortcut ? `<span class="adv-tooltip-shortcut">${shortcut}</span>` : ''}`;
      
      const rect = btn.getBoundingClientRect();
      tt.style.left = Math.min(rect.left + rect.width/2 - tt.offsetWidth/2, window.innerWidth - tt.offsetWidth - 10) + 'px';
      tt.style.top = (rect.bottom + 8) + 'px';
      tt.classList.add('visible');
    }
  });
  document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest('button')) tt.classList.remove('visible');
  });
}

// --- P2-10: Section Lock Feature ---
function initSectionLocks() {
  // Lock toggle from context menu handled in initPhase2
}

// --- P2-11: View Menu ---
function initViewMenu() {
  const btn = document.getElementById('btn-view-menu');
  const menu = document.getElementById('view-dropdown');
  btn.onclick = (e) => { e.stopPropagation(); menu.classList.toggle('active'); };
  document.addEventListener('click', () => menu.classList.remove('active'));
  menu.onclick = e => e.stopPropagation();
  
  // Sync UI with state
  const sync = () => {
    menu.querySelectorAll('.dd-item').forEach(item => {
      const key = item.dataset.toggle;
      if(key) item.classList.toggle('checked', p2State.viewPrefs[key]);
    });
    updateRulers(); updateMarginGuides(); updateMiniMap(); updateBreadcrumbVisibility(); updatePageCurl(); initScrollAnimations();
    localStorage.setItem('nss_p2_view_prefs', JSON.stringify(p2State.viewPrefs));
  };
  sync();
  
  menu.querySelectorAll('.dd-item').forEach(item => {
    item.onclick = () => {
      const key = item.dataset.toggle;
      if(key) {
        p2State.viewPrefs[key] = !p2State.viewPrefs[key];
        sync();
      }
    };
  });
}

// --- P2-12: Keyboard Shortcut Help Panel ---
function initShortcutHelp() {
  document.addEventListener('keydown', (e) => {
    if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      document.getElementById('shortcut-panel').classList.add('active');
    }
    if (e.key === 'Escape') {
      document.querySelectorAll('.slide-panel').forEach(p => p.classList.remove('active'));
      document.getElementById('zoom-popup').classList.remove('active');
    }
    if (e.key === 'r' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      p2State.viewPrefs.rulers = !p2State.viewPrefs.rulers;
      document.querySelector('.dd-item[data-toggle="rulers"]').classList.toggle('checked', p2State.viewPrefs.rulers);
      updateRulers();
      localStorage.setItem('nss_p2_view_prefs', JSON.stringify(p2State.viewPrefs));
    }
    if (e.key === 'm' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) && !document.activeElement.isContentEditable) {
      p2State.viewPrefs.guides = !p2State.viewPrefs.guides;
      document.querySelector('.dd-item[data-toggle="guides"]').classList.toggle('checked', p2State.viewPrefs.guides);
      updateMarginGuides();
      localStorage.setItem('nss_p2_view_prefs', JSON.stringify(p2State.viewPrefs));
    }
  });
}

// --- P2-13: Word Count Breakdown Panel ---
function showWordCountPanel() {
  document.getElementById('wordcount-panel').classList.add('active');
  updateWordCountPanel();
}
function updateWordCountPanel() {
  const list = document.getElementById('wc-panel-list');
  let totalW = 0, totalC = 0;
  let html = '';
  
  appState.sections.forEach(sec => {
    const el = document.querySelector(`.doc-section-render[data-id="${sec.id}"]`);
    if(el) {
      const text = el.textContent || '';
      const wCount = (text.match(/\S+/g) || []).length;
      const cCount = text.length;
      totalW += wCount; totalC += cCount;
      html += `<div class="wc-row"><span>${getIconForType(sec.type)} ${sec.name || sec.type}</span><span>${wCount > 0 ? wCount + ' words' : '—'}</span></div>`;
    }
  });
  list.innerHTML = html;
  document.getElementById('wc-panel-total').textContent = `Total: ${totalW} words | ${totalC} chars`;
  document.getElementById('status-words').textContent = `Words: ${totalW}`;
}

// --- P2-14: Progress Indicator Detail Panel ---
function showProgressPanel() {
  document.getElementById('progress-panel').classList.add('active');
  updateProgressPanel();
}
function updateProgressPanel() {
  let total = 0, complete = 0;
  const list = document.getElementById('prog-panel-list');
  let html = '';
  
  const addItem = (isDone, msg, id) => {
    total++;
    if(isDone) complete++;
    html += `<div class="prog-item ${isDone ? 'complete' : 'incomplete'}">
      <span>${isDone ? '✓' : '⚠'} ${msg}</span>
      ${!isDone ? `<button class="prog-go-btn" onclick="scrollToCard('${id}')">Go →</button>` : ''}
    </div>`;
  };
  
  appState.sections.forEach(sec => {
    if (sec.type === 'title') {
      addItem(!!sec.collegeName.trim(), 'Title page: College Name', sec.id);
      addItem(!!sec.programmeName.trim(), 'Title page: Programme name', sec.id);
      addItem(!!sec.mainPhotoSrc, 'Title page: Main photo uploaded', sec.id);
    } else {
      addItem(!!(sec.heading && sec.heading.trim()), `${sec.name||sec.type}: Heading`, sec.id);
      if (sec.type === 'gallery') addItem(sec.photos.length > 0, `${sec.name||sec.type}: Photos uploaded`, sec.id);
      if (sec.type === 'participant-table') addItem(sec.rows.length > 0, `${sec.name||sec.type}: Table rows`, sec.id);
    }
  });
  
  list.innerHTML = html;
  const pct = total === 0 ? 0 : Math.round((complete / total) * 100);
  document.getElementById('prog-panel-fill').style.width = pct + '%';
  document.getElementById('prog-panel-title').textContent = `Your report is ${pct}% complete`;
}
function scrollToCard(id) {
  const card = document.querySelector(`.editor-card[data-id="${id}"]`);
  if(card) {
    if(card.classList.contains('collapsed')) card.classList.remove('collapsed');
    card.scrollIntoView({behavior:'smooth', block:'center'});
  }
}

// --- P2-16: Confetti Celebration ---
function fireConfetti() {
  confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: [appState.accent, '#ffffff', '#e8f0fe'], zIndex: 9999 });
  setTimeout(() => {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 }, colors: [appState.accent, '#ffffff', '#e8f0fe'], zIndex: 9999 });
  }, 300);
}

// --- P2-19: Mobile Enhancements ---
function initMobileSheet() {
  const lp = document.getElementById('left-panel');
  const fab = document.getElementById('mobile-fab');
  const backdrop = document.getElementById('mobile-backdrop');
  
  fab.onclick = () => { lp.classList.add('active-mobile'); backdrop.classList.add('active'); };
  backdrop.onclick = () => { lp.classList.remove('active-mobile'); backdrop.classList.remove('active'); };
  
  // Touch swipe logic on left panel handle
  const handle = document.querySelector('.mobile-drag-handle');
  if(handle) {
    let startY = 0;
    handle.addEventListener('touchstart', e => { startY = e.touches[0].clientY; });
    handle.addEventListener('touchend', e => {
      const endY = e.changedTouches[0].clientY;
      if (endY - startY > 50) { lp.classList.remove('active-mobile'); backdrop.classList.remove('active'); }
      else if (startY - endY > 50) { lp.style.height = '80vh'; }
    });
  }
}

// --- P2-20: Status Bar Enhancements ---
function initStatusBarEnhancements() {
  const btnZoom = document.getElementById('status-zoom');
  const zoomPopup = document.getElementById('zoom-popup');
  btnZoom.onclick = (e) => {
    e.stopPropagation();
    zoomPopup.classList.toggle('active');
  };
  document.addEventListener('click', (e) => {
    if(!e.target.closest('#zoom-popup')) zoomPopup.classList.remove('active');
  });
  
  const btnWords = document.getElementById('status-words');
  btnWords.className = 'status-item';
  btnWords.onclick = showWordCountPanel;
  
  const progFill = document.querySelector('.progress-bar');
  progFill.style.cursor = 'pointer';
  progFill.onclick = showProgressPanel;
}

// --- MONKEY PATCHES & PHASE 2 INIT ---

function initPhase2() {
  injectPhase2DOM();
  initSplitView();
  initMiniMap();
  initRulers();
  initActiveHighlight();
  initBreadcrumb();
  initTooltips();
  initViewMenu();
  initShortcutHelp();
  initDarkModeTransition();
  initMobileSheet();
  initStatusBarEnhancements();
  
  // Monkey patch renderEditor
  const origRenderEditor = renderEditor;
  window.renderEditor = function() {
    origRenderEditor();
    
    // Add lock icon and lock logic
    document.querySelectorAll('.editor-card').forEach(card => {
      const id = card.dataset.id;
      const sec = appState.sections.find(s => s.id === id);
      if(sec && sec.locked) {
        card.classList.add('is-locked');
        card.querySelectorAll('input, textarea, select, button, .content-editable-div').forEach(el => el.disabled = true);
        // Allow uncollapse and options
        card.querySelector('.card-actions button:last-child').disabled = false;
        if(card.querySelector('.collapse-btn')) card.querySelector('.collapse-btn').disabled = false;
      }
      
      const header = card.querySelector('.card-header');
      if(!header.querySelector('.lock-icon')) {
        const lockIcon = document.createElement('div');
        lockIcon.className = 'lock-icon';
        lockIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
        lockIcon.onclick = (e) => {
          e.stopPropagation();
          if(confirm('Unlock this section?')) { sec.locked = false; renderEditor(); stateMutated(); }
        };
        header.insertBefore(lockIcon, header.querySelector('.card-actions'));
      }
      
      // Inject image resizers (P2-15)
      // Inject image resizers (P2-15)
      card.querySelectorAll('.image-upload-btn').forEach((btn) => {
        if(btn.querySelector('img') && !btn.nextElementSibling?.classList.contains('img-resize-ctrl')) {
           const onclickStr = btn.getAttribute('onclick') || '';
           let widthKey, widthVal = 100, secRef = sec;
           
           if (onclickStr.includes('logoLeftSrc')) { widthKey = 'logoLeftWidth'; }
           else if (onclickStr.includes('logoRightSrc')) { widthKey = 'logoRightWidth'; }
           else if (onclickStr.includes('mainPhotoSrc')) { widthKey = 'mainPhotoWidth'; }
           else if (onclickStr.includes('triggerUploadArr')) {
             const m = onclickStr.match(/triggerUploadArr\([^,]+,\s*'photos',\s*(\d+)/);
             if (m && sec.photos[m[1]]) { secRef = sec.photos[m[1]]; widthKey = 'widthPct'; }
           }
           if (!widthKey) return;
           widthVal = secRef[widthKey] || 100;

           const ctrl = document.createElement('div');
           ctrl.className = 'img-resize-ctrl';
           ctrl.innerHTML = `<input type="range" min="25" max="100" value="${widthVal}"><input type="number" min="25" max="100" value="${widthVal}"><span>%</span>`;
           btn.parentNode.insertBefore(ctrl, btn.nextSibling);
           
           const r = ctrl.querySelector('input[type="range"]');
           const n = ctrl.querySelector('input[type="number"]');
           const updateW = (v) => { secRef[widthKey] = v; r.value = v; n.value = v; btn.querySelector('img').style.width = v+'%'; updatePreview(); };
           r.oninput = (e) => updateW(e.target.value);
           r.onchange = () => { pushUndoState(); stateMutated(); };
           n.onchange = (e) => { updateW(e.target.value); pushUndoState(); stateMutated(); };
           
           const tt = document.createElement('div');
           tt.className = 'img-info-tooltip';
           tt.textContent = 'Image • Size optimized';
           btn.appendChild(tt);
        }
      });
    });
    
    // Context Menu Lock addition
    const cm = document.getElementById('context-menu');
    if(!cm.querySelector('[data-action="lock"]')) {
      const lockItem = document.createElement('div');
      lockItem.className = 'context-item';
      lockItem.dataset.action = 'lock';
      lockItem.textContent = 'Lock Section';
      cm.appendChild(lockItem);
    }
  };
  
  // Monkey patch handleContextAction
  // Monkey patch handleContextAction
  const origHandleContextAction = handleContextAction;
  window.handleContextAction = function(action) {
    const sec = appState.sections.find(s => s.id === contextMenuTargetId);
    
    // Fix P2-10: Block deletion/moving if section is locked
    if(sec && sec.locked && ['delete', 'moveUp', 'moveDown'].includes(action)) {
      showToast('Action blocked: Section is locked', 'error');
      return;
    }
    
    // Fix P2-6: Clear active state if deleting
    if(action === 'delete' && sec && typeof p2State !== 'undefined' && p2State.activeSectionId === sec.id) {
      p2State.activeSectionId = null;
    }

    if(action === 'lock') {
      if(sec) sec.locked = true;
      pushUndoState(); renderEditor(); stateMutated();
    } else {
      origHandleContextAction(action);
    }
  };
  
  // Monkey patch updatePreview
  const origUpdatePreview = updatePreview;
  window.updatePreview = function() {
    origUpdatePreview();
    // Use timeout to run after orig completes its debounce
    setTimeout(() => {
      updateMiniMap();
      updateMarginGuides();
      updatePageCurl();
      initScrollAnimations();
      updateWordCountPanel();
      if(document.getElementById('progress-panel').classList.contains('active')) updateProgressPanel();
    }, 100);
  };
  
  // Monkey patch PDF Export confetti (P2-16)
  const origTriggerPDFExport = triggerPDFExport;
  window.triggerPDFExport = function() {
    origTriggerPDFExport();
    // Confetti is triggered inside orig promise, but we override showToast to catch it
    const origShowToast = showToast;
    window.showToast = function(msg, type) {
      if(msg.includes('PDF Exported')) fireConfetti();
      origShowToast(msg, type);
    };
  };
  
  // Trigger initial updates
  renderEditor();
  updatePreview();
}

window.addEventListener('load', initPhase2);

async function compileLatex(secId) {
  const sec = appState.sections.find(s => s.id === secId);
  if(!sec) return;
  
  // REPLACE THIS WITH YOUR DEPLOYED FIREBASE CLOUD FUNCTION URL
  const FIREBASE_PROXY_URL = 'https://us-central1-your-project-id.cloudfunctions.net/compileLatex';
  
  if (FIREBASE_PROXY_URL.includes('your-project-id')) {
    showToast('Please update FIREBASE_PROXY_URL in the HTML file with your actual Firebase URL.', 'error');
    return;
  }

  const btn = document.getElementById('compile-btn-' + secId);
  if(btn) btn.innerHTML = '<div class="dot" style="width:8px;height:8px;background:white;border-radius:50%;animation:pulse 1s infinite alternate;margin-right:6px"></div> Compiling...';
  
  try {
    const res = await fetch(FIREBASE_PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formula: sec.latexCode || '',
        fsize: '14px',
        fcolor: '000000',
        preamble: '\\usepackage{amsmath}\\usepackage{amsfonts}\\usepackage{amssymb}\\usepackage{tikz}\\usepackage{pgfplots}'
      })
    });
    
    const text = await res.text();
    const lines = text.split('\\n');
    if (lines[0] === '0' && lines[1]) {
      sec.compiledImgUrl = lines[1].trim();
      showToast('LaTeX compiled successfully', 'success');
    } else {
      showToast('LaTeX compilation failed: ' + (lines[2] || 'Unknown error'), 'error');
    }
  } catch (err) {
    showToast('Network error compiling LaTeX. Check CORS/Firebase logs.', 'error');
  }
  
  if(btn) btn.textContent = 'Compile LaTeX';
  pushUndoState();
  renderEditor();
  stateMutated();
}
// Draggable Splitter Logic
const splitGutter = document.getElementById('split-gutter');
const resizeLeftPanel = document.getElementById('left-panel');
let isGutterResizing = false;

splitGutter.addEventListener('mousedown', (e) => {
  isGutterResizing = true;
  splitGutter.classList.add('active');
  resizeLeftPanel.style.transition = 'none';
  document.body.style.cursor = 'col-resize';
  document.body.style.userSelect = 'none';
  e.preventDefault();
});

document.addEventListener('mousemove', (e) => {
  if (!isGutterResizing) return;
  let newWidth = e.clientX;
  if (newWidth < 300) newWidth = 300;
  if (newWidth > window.innerWidth * 0.7) newWidth = window.innerWidth * 0.7;
  resizeLeftPanel.style.width = newWidth + 'px';
});

document.addEventListener('mouseup', () => {
  if (isGutterResizing) {
    isGutterResizing = false;
    splitGutter.classList.remove('active');
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
    resizeLeftPanel.style.transition = '';
  }
});


