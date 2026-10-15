// Duotone illustrations and line icons, drawn inline so nothing is fetched at runtime.
(function () {
  const P = {
    historic: ["#EADFD2", "#8A5A44"], loft: ["#EADFD2", "#8A5A44"], hall: ["#F1E6DA", "#7A4E3A"],
    modern: ["#EEF1F2", "#293033"], boardroom: ["#EEF1F2", "#21333A"], av: ["#EEF1F2", "#293033"],
    city: ["#C2E0E1", "#294B4F"], rooftop: ["#DCE6F2", "#2B4A6B"], lakeside: ["#C2E0E1", "#2F6E6D"],
    retreat: ["#DCEBE3", "#2F6B57"], structured: ["#F4F1E8", "#21333A"], social: ["#FBE5C8", "#9A5A16"],
    catering: ["#FDF0DE", "#8A4B00"], dinner: ["#F3E2D7", "#7A3E2A"], cooking: ["#FBE5C8", "#8A4B00"],
    hotel: ["#E6F1EF", "#294B4F"]
  };
  const S = {
    historic: (f) => `<rect x="0" y="70" width="160" height="30" fill="${f}" opacity=".15"/>${[18, 62, 106].map(x => `<path d="M${x} 78V40a18 18 0 0 1 36 0v38z" fill="${f}" opacity=".85"/><path d="M${x + 18} 22v56M${x} 52h36" stroke="#fff" stroke-width="2" opacity=".6"/>`).join("")}<rect x="0" y="78" width="160" height="4" fill="${f}"/>`,
    loft: (f) => `${[0, 1, 2, 3, 4, 5, 6].map(r => `<path d="M0 ${r * 12 + 6}h160" stroke="${f}" stroke-width=".8" opacity=".25"/>`).join("")}<path d="M52 86V40a28 28 0 0 1 56 0v46z" fill="${f}" opacity=".9"/><path d="M80 12v74M52 52h56M66 20v66M94 20v66" stroke="#fff" stroke-width="1.6" opacity=".55"/><rect x="0" y="86" width="160" height="14" fill="${f}" opacity=".35"/>`,
    hall: (f) => `${[34, 80, 126].map(x => `<path d="M${x} 0v18" stroke="${f}" stroke-width="1.5"/><path d="M${x - 9} 26a9 9 0 0 1 18 0z" fill="${f}"/>`).join("")}<rect x="22" y="60" width="116" height="8" rx="2" fill="${f}"/>${[30, 50, 70, 90, 110, 130].map(x => `<rect x="${x - 5}" y="48" width="10" height="10" rx="3" fill="${f}" opacity=".55"/><rect x="${x - 5}" y="70" width="10" height="10" rx="3" fill="${f}" opacity=".55"/>`).join("")}<rect x="0" y="90" width="160" height="10" fill="${f}" opacity=".2"/>`,
    modern: (f) => `<rect x="14" y="14" width="132" height="62" fill="#fff" opacity=".7"/><path d="M58 14v62M102 14v62" stroke="${f}" stroke-width="1.5"/><rect x="14" y="14" width="132" height="62" fill="none" stroke="${f}" stroke-width="1.5"/><rect x="0" y="84" width="160" height="16" fill="${f}" opacity=".12"/><circle cx="128" cy="70" r="10" fill="${f}" opacity=".85"/><rect x="126" y="78" width="4" height="10" fill="${f}"/><rect x="34" y="72" width="44" height="6" rx="3" fill="${f}" opacity=".7"/>`,
    boardroom: (f) => `<rect x="34" y="38" width="92" height="28" rx="14" fill="${f}"/>${[46, 66, 86, 106].map(x => `<circle cx="${x + 4}" cy="28" r="6" fill="${f}" opacity=".5"/><circle cx="${x + 4}" cy="76" r="6" fill="${f}" opacity=".5"/>`).join("")}<circle cx="24" cy="52" r="6" fill="${f}" opacity=".5"/><circle cx="136" cy="52" r="6" fill="${f}" opacity=".5"/>`,
    av: (f) => `<rect x="36" y="16" width="88" height="52" rx="4" fill="${f}"/><rect x="42" y="22" width="76" height="40" rx="2" fill="#fff" opacity=".18"/><path d="M80 68v14M60 86h40" stroke="${f}" stroke-width="3" stroke-linecap="round"/><rect x="134" y="50" width="8" height="18" rx="4" fill="${f}" opacity=".7"/><path d="M138 68v16" stroke="${f}" stroke-width="2"/>`,
    city: (f) => `${[[6, 46], [26, 30], [44, 54], [60, 18], [80, 40], [98, 26], [118, 48], [136, 34]].map(([x, y]) => `<rect x="${x}" y="${y}" width="18" height="${100 - y}" fill="${f}" opacity="${y < 30 ? 1 : .75}"/>`).join("")}${[30, 38, 46, 54, 62].map(y => `<rect x="64" y="${y}" width="3" height="3" fill="#fff" opacity=".6"/><rect x="71" y="${y}" width="3" height="3" fill="#fff" opacity=".6"/>`).join("")}`,
    rooftop: (f) => `<circle cx="122" cy="26" r="12" fill="${f}" opacity=".35"/>${[[8, 58], [28, 46], [46, 62], [64, 40], [84, 54], [104, 44], [124, 60], [142, 50]].map(([x, y]) => `<rect x="${x}" y="${y}" width="16" height="${100 - y}" fill="${f}" opacity=".45"/>`).join("")}<path d="M0 72h160" stroke="${f}" stroke-width="3"/>${[8, 28, 48, 68, 88, 108, 128, 148].map(x => `<path d="M${x} 72v28" stroke="${f}" stroke-width="2"/>`).join("")}<rect x="0" y="86" width="160" height="14" fill="${f}" opacity=".9"/>`,
    lakeside: (f) => `<path d="M0 54l26-22 22 16 30-26 30 24 22-12 30 20v6H0z" fill="${f}" opacity=".55"/><rect x="0" y="60" width="160" height="40" fill="${f}" opacity=".85"/>${[70, 78, 86, 94].map((y, i) => `<path d="M${10 + i * 12} ${y}h${40 - i * 4}M${90 - i * 6} ${y + 2}h${30}" stroke="#fff" stroke-width="1.4" opacity=".5"/>`).join("")}<path d="M112 60V46l12-8 12 8v14z" fill="${f}"/>`,
    retreat: (f) => `<path d="M0 70c30-18 50-18 80-4s50 10 80-6v40H0z" fill="${f}" opacity=".45"/><path d="M0 84c40-14 70-8 100 0s44 4 60-4v20H0z" fill="${f}" opacity=".8"/>${[[30, 44], [44, 52], [120, 40], [134, 50]].map(([x, y]) => `<path d="M${x} ${y}l8 22h-16z" fill="${f}"/>`).join("")}<circle cx="80" cy="24" r="8" fill="${f}" opacity=".3"/>`,
    structured: (f) => `<rect x="40" y="10" width="80" height="34" rx="3" fill="${f}"/><path d="M50 22h40M50 30h56" stroke="#fff" stroke-width="2" opacity=".55"/>${[56, 70, 84].map(y => [30, 50, 70, 90, 110, 130].map(x => `<rect x="${x - 6}" y="${y}" width="12" height="8" rx="3" fill="${f}" opacity=".55"/>`).join("")).join("")}`,
    social: (f) => `<rect x="70" y="54" width="20" height="4" rx="2" fill="${f}"/><path d="M80 58v30M70 88h20" stroke="${f}" stroke-width="2.5"/>${[[40, 48], [56, 40], [104, 40], [120, 50], [30, 70], [130, 72]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="7" fill="${f}" opacity=".85"/><rect x="${x - 7}" y="${y + 9}" width="14" height="22" rx="7" fill="${f}" opacity=".5"/>`).join("")}`,
    catering: (f) => `${[[40, 40], [80, 34], [120, 40], [60, 70], [100, 70]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="16" fill="#fff" opacity=".85"/><circle cx="${x}" cy="${y}" r="16" fill="none" stroke="${f}" stroke-width="1.5"/><circle cx="${x}" cy="${y}" r="7" fill="${f}" opacity=".7"/>`).join("")}`,
    dinner: (f) => `<rect x="10" y="60" width="140" height="6" rx="3" fill="${f}"/>${[30, 62, 98, 130].map(x => `<ellipse cx="${x}" cy="56" rx="11" ry="3.5" fill="${f}" opacity=".55"/>`).join("")}${[46, 80, 114].map(x => `<rect x="${x - 2}" y="34" width="4" height="20" fill="${f}" opacity=".8"/><path d="M${x} 26c3 3 3 6 0 8c-3-2-3-5 0-8z" fill="${f}" opacity=".9"/>`).join("")}<path d="M20 66v26M140 66v26" stroke="${f}" stroke-width="3"/>`,
    cooking: (f) => `<path d="M46 46h68v24a14 14 0 0 1-14 14H60a14 14 0 0 1-14-14z" fill="${f}"/><path d="M38 50h8M114 50h8" stroke="${f}" stroke-width="4" stroke-linecap="round"/><rect x="52" y="40" width="56" height="6" rx="3" fill="${f}" opacity=".7"/>${[64, 80, 96].map(x => `<path d="M${x} 32c-4-6 4-10 0-16" stroke="${f}" stroke-width="2" fill="none" opacity=".45"/>`).join("")}`,
    hotel: (f) => `<rect x="24" y="38" width="112" height="34" rx="4" fill="${f}" opacity=".85"/><rect x="24" y="24" width="10" height="56" rx="2" fill="${f}"/><rect x="40" y="30" width="30" height="12" rx="5" fill="#fff" opacity=".85"/><rect x="74" y="30" width="30" height="12" rx="5" fill="#fff" opacity=".85"/><path d="M136 72v10M30 80v4" stroke="${f}" stroke-width="3"/><circle cx="140" cy="20" r="6" fill="${f}" opacity=".3"/>`
  };

  window.art = function (kind, label) {
    const [bg, fg] = P[kind] || P.modern;
    const a11y = label ? `role="img" aria-label="${label}"` : `aria-hidden="true"`;
    return `<svg class="art" viewBox="0 0 160 100" preserveAspectRatio="xMidYMid slice" ${a11y}><rect width="160" height="100" fill="${bg}"/>${(S[kind] || S.modern)(fg)}</svg>`;
  };

  const I = {
    offsite: '<path d="M3 20l6-11 4 6 3-4 5 9z"/><path d="M9 9V4l4 1.5L9 7"/>',
    dinner: '<path d="M7 3v8M5 3v4a2 2 0 0 0 4 0V3M7 11v10M16 3c-2 0-3 2-3 5s1 4 3 4v9"/>',
    kickoff: '<path d="M4 14l12-6v12L4 14z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2M7 15l1 5h3l-1-4"/>',
    client: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18"/>',
    workshop: '<rect x="4" y="3" width="16" height="11" rx="1"/><path d="M8 21l4-7 4 7M8 8h5M8 11h8"/>',
    holiday: '<path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8zM18 15l.8 1.7 1.7.8-1.7.8L18 20l-.8-1.7-1.7-.8 1.7-.8z"/>',
    board: '<rect x="5" y="9" width="14" height="6" rx="3"/><circle cx="8" cy="5.5" r="1.5"/><circle cx="12" cy="5.5" r="1.5"/><circle cx="16" cy="5.5" r="1.5"/><circle cx="8" cy="18.5" r="1.5"/><circle cx="12" cy="18.5" r="1.5"/><circle cx="16" cy="18.5" r="1.5"/>',
    other: '<circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/>',
    theatre: '<path d="M4 4h16"/><path d="M5 9h3M10.5 9h3M16 9h3M5 13h3M10.5 13h3M16 13h3M5 17h3M10.5 17h3M16 17h3"/>',
    classroom: '<path d="M4 4h16"/><rect x="4" y="8" width="7" height="3" rx="1"/><rect x="13" y="8" width="7" height="3" rx="1"/><rect x="4" y="15" width="7" height="3" rx="1"/><rect x="13" y="15" width="7" height="3" rx="1"/>',
    banquet: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="16" r="3"/><circle cx="16" cy="7" r="2"/><circle cx="7" cy="16" r="2"/>',
    reception: '<circle cx="6" cy="7" r="1.6"/><circle cx="12" cy="5" r="1.6"/><circle cx="18" cy="8" r="1.6"/><circle cx="9" cy="14" r="1.6"/><circle cx="15" cy="15" r="1.6"/><path d="M12 19v2M10 21h4"/>',
    boardroom: '<rect x="6" y="8" width="12" height="8" rx="2"/><path d="M8 5h.01M12 5h.01M16 5h.01M8 19h.01M12 19h.01M16 19h.01M3 12h.01M21 12h.01" stroke-width="3"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    up: '<path d="M6 15l6-6 6 6"/>',
    down: '<path d="M6 9l6 6 6-6"/>',
    grip: '<path d="M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01" stroke-width="3"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
    card: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/>',
    file: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/>',
    bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    swap: '<path d="M7 7h12l-3-3M17 17H5l3 3"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
    bolt: '<path d="M13 3L5 14h6l-1 7 8-11h-6z"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/>'
  };
  window.icon = function (name, size) {
    return `<svg class="ic" width="${size || 20}" height="${size || 20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name] || ""}</svg>`;
  };
})();
