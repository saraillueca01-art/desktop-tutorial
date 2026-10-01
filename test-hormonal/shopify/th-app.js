(function(){
var root=document.getElementById('th-app');if(!root){root=document.createElement('div');root.id='th-app';document.body.appendChild(root);}
document.head.insertAdjacentHTML('beforeend',"<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap\" rel=\"stylesheet\"><style>#th-app {\n      --ink: #0e3a4f;\n      --ink-soft: #2b7a9a;\n      --text: #1f3340;\n      --muted: #5f7480;\n      --bg: #ffffff;\n      --bg-alt: #f2f9fb;\n      --white: #ffffff;\n      --line: #dceaf0;\n      --accent: #14a38b;\n      --accent-soft: #dcf4ee;\n      --blue: #2f80c8;\n      --blue-soft: #e3f0fb;\n      --sage: #4fbf8f;\n      --grad: linear-gradient(120deg, #2f80c8 0%, #14a38b 100%);\n      --radius: 24px;\n      --max: 1080px;\n    }\n#th-app, #th-app * { box-sizing: border-box; margin: 0; padding: 0; }\n#th-app { scroll-behavior: smooth; }\n#th-app {\n      font-family: \"Inter\", system-ui, sans-serif; color: var(--text); background: var(--bg);\n      line-height: 1.65; overflow-x: hidden; -webkit-font-smoothing: antialiased;\n    }\n#th-app a { color: inherit; }\n#th-app h1, #th-app h2, #th-app h3 { font-family: \"Fraunces\", Georgia, serif; font-weight: 400; color: var(--ink); line-height: 1.15; letter-spacing: -.01em; }\n#th-app h1 em, #th-app h2 em { font-style: italic; color: var(--accent); }\n#th-app p { color: var(--muted); }\n#th-app .container { width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 20px; }\n#th-app section { padding: 88px 0; }\n#th-app .eyebrow {\n      display: inline-block; font-size: .72rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;\n      color: var(--ink-soft); margin-bottom: 1rem;\n    }\n#th-app .center { text-align: center; }\n#th-app .btn {\n      display: inline-flex; align-items: center; justify-content: center; gap: 10px;\n      padding: 17px 34px; border-radius: 999px; border: 0;\n      background: var(--ink); color: var(--white); text-decoration: none;\n      font: 600 1rem \"Inter\", sans-serif; letter-spacing: .01em; cursor: pointer;\n      box-shadow: 0 10px 30px rgba(14, 58, 79, .22); transition: transform .15s, background .2s;\n    }\n#th-app .btn:hover { background: #164e66; transform: translateY(-1px); }\n#th-app .btn-accent { background: var(--accent); box-shadow: 0 10px 30px rgba(20, 163, 139, .35); }\n#th-app .btn-accent:hover { background: #0f8a75; }\n#th-app .btn-ghost { background: none; box-shadow: none; color: var(--ink-soft); padding: 10px 14px; font-weight: 500; }\n#th-app .btn-ghost:hover { background: none; color: var(--ink); transform: none; }\n#th-app .topbar { background: var(--grad); color: #d9eef5; text-align: center; font-size: .82rem; padding: 9px 16px; }\n#th-app .topbar strong { color: var(--white); }\n#th-app .hero { padding: 64px 0 80px; background: var(--white); position: relative; overflow: hidden; isolation: isolate; }\n#th-app .hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 56px; align-items: center; }\n#th-app .hero h1 { font-size: clamp(2.3rem, 5.4vw, 3.9rem); margin-bottom: 1.3rem; }\n#th-app .hero .lead { font-size: 1.12rem; max-width: 520px; margin-bottom: 2rem; color: var(--text); }\n#th-app .hero-meta { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 1.6rem; font-size: .88rem; color: var(--muted); }\n#th-app .hero-meta span::before { content: \"\u2713\"; color: var(--sage); font-weight: 700; margin-right: 7px; }\n#th-app .hero-card {\n      background: var(--white); border-radius: var(--radius); padding: 30px; border: 1px solid var(--line);\n      box-shadow: 0 30px 60px rgba(14, 58, 79, .08);\n    }\n#th-app .hero-card h3 { font-size: 1.25rem; margin-bottom: 1rem; }\n#th-app .signs { list-style: none; display: grid; gap: 10px; }\n#th-app .signs li { display: flex; gap: 12px; align-items: center; padding: 12px 14px; background: var(--bg); border-radius: 14px; font-size: .95rem; color: var(--text); }\n#th-app .signs li b { flex: none; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--accent-soft); color: var(--ink); font-weight: 600; font-size: .85rem; }\n#th-app .hero-card p { margin-top: 1rem; font-size: .9rem; }\n#th-app .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }\n#th-app .step { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; }\n#th-app .step .num { font-family: \"Fraunces\", serif; font-size: 2.2rem; line-height: 1; margin-bottom: .8rem; background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block; }\n#th-app .step h3 { font-size: 1.15rem; margin-bottom: .4rem; }\n#th-app h2 { font-size: clamp(1.8rem, 3.6vw, 2.5rem); margin-bottom: .8rem; }\n#th-app .section-intro { max-width: 600px; margin: 0 auto; }\n#th-app #test { background: var(--white); position: relative; overflow: hidden; overflow: clip; }\n#th-app .quiz {\n      max-width: 680px; margin: 40px auto 0; background: var(--white); border-radius: var(--radius);\n      border: 1px solid var(--line); padding: 36px; box-shadow: 0 30px 60px rgba(14, 58, 79, .07);\n      scroll-margin-top: 16px;\n    }\n#th-app .progress { height: 6px; background: var(--bg-alt); border-radius: 99px; overflow: hidden; margin-bottom: 10px; }\n#th-app .progress span { display: block; height: 100%; width: 0; background: linear-gradient(90deg, var(--accent), var(--ink-soft)); transition: width .35s ease; }\n#th-app .progress-label { font-size: .8rem; color: var(--muted); margin-bottom: 1.6rem; }\n#th-app .question h3 { font-size: clamp(1.3rem, 3vw, 1.6rem); margin-bottom: .4rem; }\n#th-app .question .hint { font-size: .9rem; margin-bottom: 1.4rem; }\n#th-app .options { display: grid; gap: 10px; }\n#th-app .option {\n      display: flex; align-items: center; gap: 14px; width: 100%; text-align: left;\n      padding: 16px 18px; border-radius: 16px; border: 1.5px solid var(--line); background: var(--white);\n      font: 500 1rem \"Inter\", sans-serif; color: var(--text); cursor: pointer; transition: border-color .15s, background .15s;\n    }\n#th-app .option::before { content: \"\"; flex: none; width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--line); transition: all .15s; }\n#th-app .option:hover { border-color: var(--accent); background: #f6fcfa; }\n#th-app .option.selected { border-color: var(--accent); background: var(--accent-soft); }\n#th-app .option.selected::before { border-color: var(--accent); background: var(--accent); box-shadow: inset 0 0 0 4px var(--accent-soft); }\n#th-app .quiz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.4rem; min-height: 44px; }\n#th-app .fade-in { animation: fade .35s ease; }\n@keyframes fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }\n#th-app .loading { text-align: center; padding: 30px 0; }\n#th-app .spinner { width: 46px; height: 46px; border-radius: 50%; border: 4px solid var(--accent-soft); border-top-color: var(--accent); margin: 0 auto 1.2rem; animation: spin .9s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\n#th-app .result-tag { display: inline-block; padding: 6px 14px; border-radius: 99px; font-size: .78rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 1rem; }\n#th-app .result-tag.low { background: #dff3ea; color: #137a63; }\n#th-app .result-tag.mid { background: #e3f0fb; color: #1f5f99; }\n#th-app .result-tag.high { background: var(--accent-soft); color: #0e3a4f; }\n#th-app .result h3 { font-size: clamp(1.5rem, 3.4vw, 1.9rem); margin-bottom: .8rem; }\n#th-app .result > p { color: var(--text); margin-bottom: 1.2rem; }\n#th-app .meter { margin: 1.4rem 0; }\n#th-app .meter-bar { height: 10px; border-radius: 99px; background: linear-gradient(90deg, var(--sage), #2f80c8, var(--accent)); position: relative; }\n#th-app .meter-dot { position: absolute; top: 50%; width: 22px; height: 22px; border-radius: 50%; background: var(--white); border: 4px solid var(--ink); transform: translate(-50%, -50%); transition: left .8s ease; left: 0; }\n#th-app .meter-labels { display: flex; justify-content: space-between; font-size: .75rem; color: var(--muted); margin-top: 8px; }\n#th-app .prod { display: flex; align-items: center; gap: 12px; background: var(--white); border-radius: 14px; padding: 8px 12px 8px 8px; margin: 0 0 1rem; color: var(--text); }\n#th-app .prod img { width: 56px; height: 56px; object-fit: cover; border-radius: 10px; flex: none; background: var(--bg-alt); }\n#th-app .pimg { flex: none; display: grid; place-items: center; width: 56px; height: 56px; border-radius: 10px; background: var(--bg-alt); overflow: hidden; }\n#th-app .pimg img { width: 100%; height: 100%; }\n#th-app .pimg.noimg { background: linear-gradient(135deg, #dceefa, #d6f3ea); }\n#th-app .pimg.noimg::before { content: attr(data-icon); font-size: 1.7rem; }\n#th-app .r-row .pimg { width: 48px; height: 48px; }\n#th-app .prod strong { display: block; font-size: .92rem; color: var(--ink); line-height: 1.3; }\n#th-app .prod span { font-size: .8rem; color: var(--muted); }\n#th-app .prod em { display: block; font-style: normal; font-weight: 600; font-size: .85rem; color: var(--ink); white-space: nowrap; }\n#th-app .combo-tag { display: inline-block; font-size: .72rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); margin-bottom: .4rem; }\n#th-app .btn-line { background: var(--white); color: var(--ink); border: 1.5px solid var(--ink); box-shadow: none; }\n#th-app .btn-line:hover { background: var(--ink); color: var(--white); }\n#th-app .legal-note { font-size: .75rem; color: var(--muted); margin-top: 1rem; }\n#th-app .reasons-title { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.3rem; color: var(--ink); margin-top: 1.6rem; }\n#th-app .reasons-sub { font-size: .9rem; margin-bottom: .8rem; }\n#th-app .reasons { list-style: none; display: grid; gap: 10px; margin-bottom: 1.6rem; }\n#th-app .reasons li { padding: 16px; background: var(--bg); border-radius: 14px; border-left: 3px solid var(--accent); }\n#th-app .reasons li strong { display: block; color: var(--ink); margin-bottom: .3rem; }\n#th-app .reasons li p { font-size: .93rem; color: var(--text); }\n#th-app .reasons .study { display: inline-block; margin-top: .5rem; font-size: .78rem; color: var(--ink-soft); text-decoration: underline; text-underline-offset: 2px; }\n#th-app .reco-tag { display: inline-block; font-size: .7rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: #8fe0cb; margin-bottom: .5rem; }\n#th-app .reco .dose { font-size: .85rem; color: #b9d6e0; border-top: 1px solid rgba(255,255,255,.15); padding-top: .9rem; }\n#th-app .reco { background: linear-gradient(145deg, #0e3a4f 0%, #145b6e 60%, #13806f 100%); color: #d9eef5; border-radius: 20px; padding: 26px; }\n#th-app .reco h4 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.35rem; color: var(--white); margin-bottom: .5rem; }\n#th-app .reco p { color: #cfe6ee; margin-bottom: 1.3rem; font-size: .95rem; }\n#th-app .reco .btn { width: 100%; }\n#th-app .restart { margin-top: 1rem; text-align: center; }\n#th-app .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }\n#th-app .quote { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; }\n#th-app .quote .stars { color: #e0a85a; letter-spacing: 2px; margin-bottom: .6rem; }\n#th-app .quote p { color: var(--text); font-size: .96rem; margin-bottom: 1rem; }\n#th-app .quote span { font-size: .85rem; color: var(--muted); }\n#th-app .faq { max-width: 720px; margin: 40px auto 0; }\n#th-app details { border-bottom: 1px solid var(--line); padding: 18px 0; }\n#th-app summary { cursor: pointer; list-style: none; font-weight: 600; color: var(--ink); display: flex; justify-content: space-between; gap: 16px; }\n#th-app summary::-webkit-details-marker { display: none; }\n#th-app summary::after { content: \"+\"; font-size: 1.3rem; line-height: 1; color: var(--accent); }\n#th-app details[open] summary::after { content: \"\u2013\"; }\n#th-app details p { margin-top: .7rem; }\n#th-app .final { background: var(--white); text-align: center; }\n#th-app .final-box { background: var(--grad); border-radius: 32px; padding: 64px 24px; position: relative; overflow: hidden; }\n#th-app .final h2 { color: var(--white); }\n#th-app .final h2 em { color: #c9f5e8; }\n#th-app .final p { color: #cfe6ee; margin-bottom: 2rem; }\n#th-app .final .btn { background: var(--white); color: var(--ink); }\n#th-app .final p { color: #e6f4f8; }\n#th-app footer { padding: 32px 0 110px; font-size: .78rem; text-align: center; }\n#th-app footer p { max-width: 720px; margin: 0 auto .6rem; }\n#th-app .sticky-cta {\n      position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 40; display: none;\n      transition: transform .3s, opacity .3s;\n    }\n#th-app .sticky-cta .btn { width: 100%; }\n#th-app .sticky-cta.hidden { transform: translateY(140%); opacity: 0; pointer-events: none; }\n@media (max-width: 860px) {\n#th-app section { padding: 64px 0; }\n#th-app .hero { padding: 40px 0 56px; }\n#th-app .hero-grid, #th-app .steps, #th-app .quotes { grid-template-columns: 1fr; }\n#th-app .hero-grid { gap: 36px; }\n#th-app .hero .btn { width: 100%; }\n#th-app .quiz { padding: 24px 18px; }\n#th-app .sticky-cta { display: block; }\n#th-app .routine { padding: 16px 12px; }\n#th-app .tier strong { font-size: 1.2rem; }\n}\n#th-app .body-section { position: relative; overflow: hidden; }\n#th-app .result .body-section { padding: 8px 0 24px; margin-bottom: 8px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n#th-app .result .body-section .container { padding: 0; }\n#th-app .result .body-section h2 { font-size: clamp(1.4rem, 3.4vw, 1.8rem); margin-top: .6rem; }\n#th-app .result .body-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 18px; }\n#th-app .result .body-figure svg { max-width: 230px; }\n#th-app .body-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 40px; align-items: center; margin-top: 36px; }\n#th-app .body-figure svg { width: 100%; max-width: 300px; display: block; margin: 0 auto; overflow: visible; }\n#th-app .silhouette > * { fill: url(#bodyGrad); stroke: #b9dbe8; stroke-width: 1.5; }\n#th-app .flow path { fill: none; stroke: var(--accent); stroke-width: 2.5; stroke-linecap: round; stroke-dasharray: 4 10; opacity: .55; animation: flow 1.6s linear infinite; }\n@keyframes flow { to { stroke-dashoffset: -28; } }\n#th-app .hs { cursor: pointer; }\n#th-app .hs .ring { fill: rgba(20, 163, 139, .18); transform-box: fill-box; transform-origin: center; animation: ringPulse 2.2s ease-out infinite; }\n#th-app .hs .dot { fill: var(--white); stroke: var(--accent); stroke-width: 2; transition: all .3s; }\n#th-app .hs text { font-size: 9px; text-anchor: middle; pointer-events: none; }\n#th-app .hs.on .dot { fill: var(--accent); stroke: var(--white); transform: scale(1.5); transform-box: fill-box; transform-origin: center; }\n#th-app .hs.on .ring { fill: rgba(47, 128, 200, .25); animation-duration: 1.2s; }\n#th-app .hs:nth-of-type(2) .ring { animation-delay: .4s; }\n#th-app .hs:nth-of-type(3) .ring { animation-delay: .8s; }\n#th-app .hs:nth-of-type(4) .ring { animation-delay: 1.2s; }\n#th-app .hs:nth-of-type(5) .ring { animation-delay: 1.6s; }\n@keyframes ringPulse { 0% { transform: scale(.6); opacity: .9; } 100% { transform: scale(1.9); opacity: 0; } }\n#th-app .organ-card { background: var(--white); border: 1.5px solid var(--line); border-radius: 22px; padding: 22px; box-shadow: 0 20px 40px rgba(14, 58, 79, .07); min-height: 170px; }\n#th-app .organ-card .o-emoji { font-size: 2.2rem; display: inline-block; animation: bob 2.4s ease-in-out infinite; }\n#th-app .organ-card h3 { font-size: 1.35rem; margin: .3rem 0 .4rem; }\n#th-app .organ-card p { color: var(--text); font-size: .98rem; }\n#th-app .organ-card.swap { animation: cardIn .45s ease; }\n@keyframes cardIn { from { opacity: 0; transform: translateY(10px) scale(.98); } to { opacity: 1; transform: none; } }\n#th-app .organ-dots { display: flex; gap: 8px; justify-content: center; margin: 12px 0 22px; }\n#th-app .organ-dots button { width: 10px; height: 10px; border-radius: 99px; border: 0; background: var(--line); cursor: pointer; padding: 0; transition: all .3s; }\n#th-app .organ-dots button.on { width: 26px; background: var(--grad); }\n#th-app .cell-anim { background: linear-gradient(180deg, #f2f9fb, #ffffff); border: 1.5px solid var(--line); border-radius: 22px; padding: 18px 18px 8px; }\n#th-app .cell-anim h3 { font-size: 1.15rem; margin-bottom: .4rem; text-align: left; }\n#th-app .cell-anim svg { width: 100%; display: block; overflow: visible; }\n#th-app .cell { fill: rgba(20, 163, 139, .06); stroke: var(--accent); stroke-width: 2.5; stroke-dasharray: 6 5; }\n#th-app .cell-glow { fill: #c9f5e8; opacity: 0; animation: cGlow 6s ease-in-out infinite; }\n#th-app .receptor { fill: var(--blue); }\n#th-app .key { font-size: 26px; animation: cKey 6s ease-in-out infinite; }\n#th-app .msg { fill: var(--accent); opacity: 0; }\n#th-app .m1 { animation: cMsg1 6s ease-in-out infinite; }\n#th-app .m2 { animation: cMsg2 6s ease-in-out infinite; }\n#th-app .m3 { animation: cMsg3 6s ease-in-out infinite; }\n#th-app .glu { fill: var(--blue); opacity: .85; }\n#th-app .g1 { animation: cGlu1 6s ease-in-out infinite; }\n#th-app .g2 { animation: cGlu2 6s ease-in-out infinite; }\n#th-app .g3 { animation: cGlu3 6s ease-in-out infinite; }\n#th-app .bolt { font-size: 26px; opacity: 0; transform-box: fill-box; transform-origin: center; animation: cBolt 6s ease-in-out infinite; }\n@keyframes cKey { 0% { transform: translateX(0); opacity: 0; } 8% { opacity: 1; } 28%, 85% { transform: translateX(140px); opacity: 1; } 95%, 100% { transform: translateX(140px); opacity: 0; } }\n@keyframes cMsg1 { 0%, 30% { opacity: 0; transform: translate(0, 0); } 36% { opacity: 1; } 58%, 85% { opacity: 1; transform: translate(26px, -18px); } 95%, 100% { opacity: 0; transform: translate(26px, -18px); } }\n@keyframes cMsg2 { 0%, 34% { opacity: 0; transform: translate(0, 0); } 40% { opacity: 1; } 62%, 85% { opacity: 1; transform: translate(34px, 4px); } 95%, 100% { opacity: 0; transform: translate(34px, 4px); } }\n@keyframes cMsg3 { 0%, 38% { opacity: 0; transform: translate(0, 0); } 44% { opacity: 1; } 66%, 85% { opacity: 1; transform: translate(22px, 22px); } 95%, 100% { opacity: 0; transform: translate(22px, 22px); } }\n@keyframes cGlu1 { 0%, 62% { transform: translate(0, 0); opacity: .85; } 80% { transform: translate(80px, 26px); opacity: 1; } 90%, 100% { transform: translate(80px, 26px); opacity: 0; } }\n@keyframes cGlu2 { 0%, 64% { transform: translate(0, 0); opacity: .85; } 82% { transform: translate(78px, -22px); opacity: 1; } 92%, 100% { transform: translate(78px, -22px); opacity: 0; } }\n@keyframes cGlu3 { 0%, 66% { transform: translate(0, 0); opacity: .85; } 84% { transform: translate(102px, 0); opacity: 1; } 94%, 100% { transform: translate(102px, 0); opacity: 0; } }\n@keyframes cGlow { 0%, 72% { opacity: 0; } 82%, 90% { opacity: .9; } 100% { opacity: 0; } }\n@keyframes cBolt { 0%, 74% { opacity: 0; transform: scale(.4); } 82%, 92% { opacity: 1; transform: scale(1.25); } 100% { opacity: 0; transform: scale(1); } }\n#th-app .cell-steps { list-style: none; display: grid; gap: 6px; margin: 4px 0 10px; text-align: left; }\n#th-app .cell-steps li { display: flex; gap: 10px; align-items: center; font-size: .9rem; color: var(--muted); padding: 6px 8px; border-radius: 10px; }\n#th-app .cell-steps b { flex: none; width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; background: var(--line); color: var(--ink); font-size: .78rem; }\n#th-app .cell-steps .s1 { animation: st1 6s infinite; }\n#th-app .cell-steps .s2 { animation: st2 6s infinite; }\n#th-app .cell-steps .s3 { animation: st3 6s infinite; }\n@keyframes st1 { 0%, 30% { background: var(--accent-soft); color: var(--ink); } 33%, 100% { background: transparent; color: var(--muted); } }\n@keyframes st2 { 0%, 32% { background: transparent; color: var(--muted); } 35%, 62% { background: var(--accent-soft); color: var(--ink); } 65%, 100% { background: transparent; color: var(--muted); } }\n@keyframes st3 { 0%, 64% { background: transparent; color: var(--muted); } 67%, 96% { background: var(--accent-soft); color: var(--ink); } 100% { background: transparent; color: var(--muted); } }\n#th-app .why-take { margin-top: 16px; text-align: left; color: var(--text); font-size: .95rem; background: var(--blue-soft); border-radius: 16px; padding: 14px 16px; }\n#th-app .why-take a { display: inline-block; margin-top: 4px; font-size: .8rem; color: var(--ink-soft); }\n@media (max-width: 860px) {\n#th-app .body-grid { grid-template-columns: 1fr; gap: 10px; }\n#th-app .body-figure svg { max-width: 220px; }\n}\n#th-app .body-chip { display: inline-flex; align-items: center; gap: 8px; margin: -.4rem 0 1.2rem; padding: 8px 14px; border-radius: 99px; background: var(--accent-soft); color: var(--ink); text-decoration: none; font-size: .86rem; border: 1px solid #a9e3d4; animation: chipGlow 2.8s ease-in-out infinite; }\n#th-app .body-chip b { color: var(--accent); white-space: nowrap; }\n@keyframes chipGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(20, 163, 139, .25); } 50% { box-shadow: 0 0 0 8px rgba(20, 163, 139, 0); } }\n#th-app .body-facts { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 1rem; }\n#th-app .body-facts span { padding: 8px 14px; border-radius: 99px; background: var(--white); border: 1.5px solid var(--line); font-size: .86rem; color: var(--ink); box-shadow: 0 6px 16px rgba(14, 58, 79, .05); }\n#th-app .body-note { background: rgba(255, 255, 255, .1); border-radius: 12px; padding: 10px 12px; font-size: .9rem !important; color: #e6f4f8 !important; }\n#th-app .body-note strong { color: var(--white); }\n#th-app .notice { font-size: .78rem; color: var(--muted); background: #f6f8fa; border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px; margin: 0 0 1.4rem; text-align: left; }\n#th-app .why-take + .notice { margin-top: 10px; }\n#th-app .plan { margin: 14px 0 4px; padding: 16px; border-radius: 18px; border: 1.5px solid var(--line); background: var(--white); }\n#th-app .plan h5 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.15rem; color: var(--ink); }\n#th-app .plan-sub { font-size: .88rem !important; color: var(--text) !important; margin: .3rem 0 .8rem !important; }\n#th-app .plan-list { list-style: none; display: grid; gap: 10px; position: relative; }\n#th-app .plan-list li { display: flex; gap: 12px; align-items: flex-start; animation: optIn .4s ease; }\n#th-app .pl-ico { flex: none; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; background: var(--accent-soft); font-size: 1.1rem; }\n#th-app .pl-when { display: block; font-size: .72rem; font-weight: 600; letter-spacing: .03em; color: var(--accent); text-transform: uppercase; }\n#th-app .plan-list strong { display: block; color: var(--ink); font-size: .95rem; }\n#th-app .plan-list p { font-size: .85rem !important; color: var(--text) !important; margin: .1rem 0 0 !important; }\n#th-app .plan-foot { font-size: .8rem !important; color: var(--ink-soft) !important; margin-top: .8rem !important; }\n#th-app .rewards { position: sticky; top: 8px; z-index: 5; background: rgba(255, 255, 255, .96); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1.5px solid #a9e3d4; border-radius: 16px; padding: 12px 14px 4px; margin: 0 0 14px; box-shadow: 0 10px 24px rgba(14, 58, 79, .08); }\n#th-app .ship p { font-size: .86rem !important; color: var(--ink) !important; margin-bottom: 10px !important; }\n#th-app .rw-bar { position: relative; height: 8px; border-radius: 99px; background: var(--line); margin: 6px 14px 30px 0; }\n#th-app .rw-bar span { display: block; height: 100%; border-radius: 99px; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .rw-bar .mk { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 28px; height: 28px; border-radius: 50%; background: var(--white); border: 2px solid var(--line); display: grid; place-items: center; font-style: normal; font-size: .8rem; transition: all .3s; }\n#th-app .rw-bar .mk b { position: absolute; top: 30px; font-size: .66rem; color: var(--muted); white-space: nowrap; }\n#th-app .rw-bar .mk.done { border-color: var(--accent); background: var(--accent-soft); transform: translate(-50%, -50%) scale(1.15); }\n#th-app .sum-row.gift { color: var(--accent); font-weight: 600; animation: pop .45s cubic-bezier(.2, 1.4, .4, 1); }\n#th-app .sum-row.gift s { color: var(--muted); font-weight: 400; margin-right: 4px; }\n#th-app .ship { margin: .6rem 0 .2rem; font-size: .85rem; color: var(--ink); }\n#th-app .ship-bar { height: 6px; border-radius: 99px; background: var(--line); overflow: hidden; margin-top: 6px; }\n#th-app .ship-bar span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: .55; z-index: -1; pointer-events: none; animation: float 14s ease-in-out infinite alternate; }\n#th-app .b1 { width: 420px; height: 420px; background: #bfe0f7; top: -120px; right: -80px; }\n#th-app .b2 { width: 320px; height: 320px; background: #c4eedf; bottom: -120px; left: -100px; animation-duration: 18s; }\n#th-app .b3 { width: 220px; height: 220px; background: #d6f0f6; top: 40%; left: 45%; animation-duration: 11s; }\n#th-app .b4 { width: 380px; height: 380px; background: #d2ecf9; top: 10%; left: -160px; animation-duration: 16s; }\n#th-app .b5 { width: 340px; height: 340px; background: #cdf1e4; bottom: 0; right: -140px; animation-duration: 20s; }\n#th-app #test > .container { position: relative; z-index: 1; }\n@keyframes float {\n      0% { transform: translate(0, 0) scale(1); }\n      50% { transform: translate(40px, 30px) scale(1.08); }\n      100% { transform: translate(-30px, 50px) scale(.95); }\n    }\n#th-app .rotator { display: inline-grid; vertical-align: bottom; }\n#th-app .rotator .word { grid-area: 1 / 1; opacity: 0; transform: translateY(.5em); transition: opacity .5s, transform .5s; white-space: nowrap;\n      background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; padding-right: .08em; }\n#th-app .rotator .word.is-on { opacity: 1; transform: none; }\n#th-app .rotator .word.is-out { opacity: 0; transform: translateY(-.5em); }\n#th-app h2 em { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }\n#th-app .reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s cubic-bezier(.2, .7, .2, 1); }\n#th-app .reveal.in { opacity: 1; transform: none; }\n#th-app .btn { position: relative; overflow: hidden; }\n#th-app .btn-accent { background: var(--grad); }\n#th-app .btn-accent:hover { background: var(--grad); filter: brightness(1.08); }\n#th-app .pulse { animation: pulse 2.4s ease-in-out infinite; }\n@keyframes pulse {\n      0%, 100% { box-shadow: 0 10px 30px rgba(20, 163, 139, .30), 0 0 0 0 rgba(20, 163, 139, .35); }\n      50% { box-shadow: 0 10px 30px rgba(20, 163, 139, .30), 0 0 0 12px rgba(20, 163, 139, 0); }\n    }\n#th-app .ripple { position: absolute; border-radius: 50%; transform: scale(0); background: rgba(255, 255, 255, .45); animation: ripple .6s ease-out; pointer-events: none; }\n#th-app .option .ripple { background: rgba(20, 163, 139, .25); }\n@keyframes ripple { to { transform: scale(4); opacity: 0; } }\n#th-app .hero-card { transition: transform .4s ease, box-shadow .4s ease; }\n#th-app .signs-hint { margin: -.6rem 0 .8rem; font-size: .85rem; }\n#th-app .signs li { padding: 0; background: none; }\n#th-app .sign { width: 100%; display: flex; gap: 12px; align-items: center; padding: 12px 14px; border-radius: 14px; border: 1.5px solid transparent;\n      background: var(--bg-alt); font: 400 .95rem \"Inter\", sans-serif; color: var(--text); text-align: left; cursor: pointer; transition: all .25s; }\n#th-app .sign b { flex: none; width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; border: 1.5px solid var(--line); background: var(--white); color: transparent; font-size: .8rem; transition: all .25s; }\n#th-app .sign:hover { transform: translateX(4px); border-color: var(--line); }\n#th-app .sign.on { background: var(--accent-soft); border-color: var(--accent); }\n#th-app .sign.on b { background: var(--accent); border-color: var(--accent); color: var(--white); transform: scale(1.1); }\n#th-app .signs-meter { height: 6px; background: var(--bg-alt); border-radius: 99px; overflow: hidden; margin-top: 1rem; }\n#th-app .signs-meter span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app #signs-msg { transition: color .3s; }\n#th-app #signs-msg.hot { color: var(--ink); font-weight: 600; }\n#th-app .signs-cta { width: 100%; margin-top: 1rem; display: none; }\n#th-app .signs-cta.show { display: inline-flex; animation: pop .45s cubic-bezier(.2, 1.4, .4, 1); }\n@keyframes pop { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: none; } }\n#th-app .step, #th-app .quote { transition: transform .35s ease, box-shadow .35s ease, border-color .35s; }\n#th-app .step:hover, #th-app .quote:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(14, 58, 79, .08); border-color: #b9dbe8; }\n#th-app .step .ico { float: right; font-size: 1.6rem; transition: transform .4s; }\n#th-app .step:hover .ico { transform: rotate(-12deg) scale(1.2); }\n#th-app .progress span { background: var(--grad); position: relative; }\n#th-app .progress span::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent); animation: shimmer 1.6s infinite; }\n@keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }\n#th-app .option { position: relative; overflow: hidden; opacity: 0; animation: optIn .45s ease forwards; transition: border-color .15s, background .15s, transform .15s; }\n#th-app .option:hover { transform: translateX(4px); background: var(--bg-alt); }\n#th-app .option:active { transform: scale(.98); }\n#th-app .option.selected::before { box-shadow: inset 0 0 0 4px var(--accent-soft); }\n@keyframes optIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }\n#th-app .question.fade-in { animation: slideIn .4s ease; }\n@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: none; } }\n#th-app .q-emoji { font-size: 2rem; display: inline-block; margin-bottom: .4rem; animation: bob 2.4s ease-in-out infinite; }\n@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }\n#th-app .stagger > *, #th-app .pop-in { opacity: 0; animation: optIn .55s ease forwards; }\n#th-app .score-num { font-family: \"Fraunces\", serif; font-size: 2.6rem; line-height: 1; background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }\n#th-app .score-row { display: flex; align-items: baseline; gap: 10px; margin: .4rem 0 .2rem; }\n#th-app .score-row span:last-child { font-size: .85rem; color: var(--muted); }\n#th-app .confetti { position: fixed; top: -12px; width: 9px; height: 14px; border-radius: 2px; z-index: 100; pointer-events: none; animation: fall linear forwards; }\n@keyframes fall { to { transform: translateY(105vh) rotate(720deg); opacity: .8; } }\n#th-app .faq-section { background: var(--white); }\n#th-app details { transition: background .2s; }\n#th-app details[open] { background: linear-gradient(90deg, var(--bg-alt), transparent); border-radius: 12px; padding-left: 12px; }\n#th-app summary::after { transition: transform .3s; }\n#th-app details[open] summary::after { transform: rotate(180deg); }\n#th-app .price-line { margin: -.4rem 0 1rem; color: #cfe6ee; }\n#th-app .price-line s { opacity: .7; }\n#th-app .price-line strong { font-size: 1.3rem; color: var(--white); margin: 0 6px; }\n#th-app .badge { display: inline-block; font-size: .72rem; font-weight: 600; padding: 4px 10px; border-radius: 99px; background: rgba(255,255,255,.16); color: #c9f5e8; }\n#th-app .reco-more { display: block; text-align: center; margin-top: .9rem; font-size: .88rem; color: #c9f5e8; text-decoration: underline; text-underline-offset: 3px; }\n#th-app .routine { margin-top: 1.8rem; padding: 22px; border-radius: 22px; border: 1.5px solid var(--line); background: linear-gradient(180deg, #f3fafc, #ffffff 30%); scroll-margin-top: 16px; }\n#th-app .routine .reasons-title { margin-top: .2rem; }\n#th-app .tiers { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin: 1rem 0 1.2rem; padding-top: 14px; }\n#th-app .tiers-bar { position: absolute; top: 0; left: 16%; right: 16%; height: 6px; border-radius: 99px; background: var(--line); overflow: hidden; }\n#th-app .tiers-bar span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .tier { text-align: center; padding: 10px 4px; border-radius: 14px; border: 1.5px solid var(--line); background: var(--white); transition: all .3s; }\n#th-app .tier strong { display: block; font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.4rem; color: var(--muted); line-height: 1.1; transition: color .3s; }\n#th-app .tier span { font-size: .72rem; color: var(--muted); }\n#th-app .tier.done strong { color: var(--ink-soft); }\n#th-app .tier.active { border-color: var(--accent); background: var(--accent-soft); transform: translateY(-3px); box-shadow: 0 10px 22px rgba(20, 163, 139, .18); }\n#th-app .tier.active strong { color: var(--accent); }\n#th-app .r-item { border: 1.5px solid var(--line); border-radius: 16px; padding: 12px; margin-bottom: 10px; background: var(--white); transition: border-color .25s, background .25s, transform .25s; }\n#th-app .r-item.on, #th-app .r-item.fixed { border-color: var(--accent); background: #f2fbf8; }\n#th-app .r-item.reco-item:not(.on) { border-style: dashed; border-color: #9fd9c9; }\n#th-app .r-row { display: flex; align-items: center; gap: 10px; }\n#th-app .r-row .prod { flex: 1; min-width: 0; margin: 0; background: transparent; padding: 0; }\n#th-app .r-row .prod img { width: 48px; height: 48px; }\n#th-app .r-item p { font-size: .9rem; color: var(--text); margin-top: .6rem; }\n#th-app .r-item .study { display: inline-block; margin-top: .4rem; font-size: .76rem; color: var(--ink-soft); text-decoration: underline; text-underline-offset: 2px; }\n#th-app .r-item details { border: 0; padding: 6px 0 0; }\n#th-app .r-item details[open] { background: none; padding-left: 0; }\n#th-app .r-item summary { font-size: .82rem; font-weight: 500; color: var(--ink-soft); }\n#th-app .r-item summary::after { font-size: 1rem; }\n#th-app .incl { flex: none; font-size: .8rem; font-weight: 600; color: var(--accent); padding: 8px 12px; }\n#th-app .toggle { flex: none; position: relative; overflow: hidden; padding: 9px 12px; white-space: nowrap; border-radius: 99px; border: 1.5px solid var(--accent); background: var(--white); color: var(--accent); font: 600 .85rem \"Inter\", sans-serif; cursor: pointer; transition: all .25s; }\n#th-app .toggle .t-on { display: none; }\n#th-app .toggle[aria-pressed=\"true\"] { background: var(--grad); border-color: transparent; color: var(--white); }\n#th-app .toggle[aria-pressed=\"true\"] .t-on { display: inline; }\n#th-app .toggle[aria-pressed=\"true\"] .t-add { display: none; }\n#th-app .toggle:active { transform: scale(.95); }\n#th-app .summary { margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--line); }\n#th-app .sum-row { display: flex; justify-content: space-between; font-size: .92rem; color: var(--text); padding: 3px 0; }\n#th-app .sum-row.disc { color: var(--accent); font-weight: 600; }\n#th-app .sum-row.total { font-size: 1.15rem; font-weight: 700; color: var(--ink); padding-top: 8px; }\n#th-app .bump { display: inline-block; animation: bump .45s cubic-bezier(.2, 1.6, .4, 1); }\n@keyframes bump { 0% { transform: scale(1); } 40% { transform: scale(1.18); color: var(--accent); } 100% { transform: scale(1); } }\n#th-app .nudge { font-size: .88rem; color: var(--ink); background: var(--blue-soft); border-radius: 12px; padding: 10px 12px; margin: .8rem 0; }\n#th-app .summary .btn { width: 100%; }\n#th-app .dur-label { font-size: .85rem; font-weight: 600; color: var(--ink); margin: .8rem 0 .5rem; }\n#th-app .dur { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n#th-app .dur-opt { position: relative; padding: 12px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 14px; border: 1.5px solid var(--line); background: var(--white); cursor: pointer; overflow: hidden; font-family: \"Inter\", sans-serif; transition: all .25s; }\n#th-app .dur-opt strong { display: block; font-size: 1rem; color: var(--ink); }\n#th-app .dur-opt span { font-size: .74rem; color: var(--muted); }\n#th-app .dur-opt.on { border-color: var(--accent); background: var(--accent-soft); box-shadow: 0 8px 18px rgba(20, 163, 139, .15); }\n#th-app .dur-badge { display: block; align-self: stretch; margin: -12px -8px 8px; font-style: normal; font-size: .62rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--white); background: var(--grad); padding: 4px 6px; text-align: center; }\n#th-app .dur-opt:not(:has(.dur-badge)) { padding-top: 30px; }\n#th-app .dur-price { display: block; font-weight: 700; color: var(--ink) !important; font-size: .82rem !important; margin-top: 2px; }\n#th-app .r-item:not(.on) .dur-opt { opacity: .75; }\n#th-app .rev-title { margin-top: 1.2rem; }\n#th-app .reviews { display: grid; gap: 8px; }\n#th-app .review { background: var(--white); border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; }\n#th-app .review .stars { color: #f2b632; letter-spacing: 2px; font-size: .9rem; }\n#th-app .review p { font-size: .9rem !important; color: var(--text) !important; margin: .3rem 0 !important; }\n#th-app .review span { font-size: .74rem; color: var(--muted); }\n#th-app .dur-note { font-size: .8rem !important; color: var(--ink-soft) !important; margin-top: .5rem !important; }\n#th-app .proof { margin: 14px 0 4px; padding: 16px; border-radius: 18px; background: linear-gradient(180deg, #f2f9fb, #ffffff); border: 1.5px solid var(--line); }\n#th-app .proof h5 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.15rem; color: var(--ink); margin-bottom: .7rem; }\n#th-app .proof img, #th-app .ba img { width: 100%; border-radius: 14px; display: block; }\n#th-app .proof-quote { margin: .8rem 0 0; padding: 14px 16px; border-radius: 14px; background: var(--grad); color: var(--white); font-size: .93rem; line-height: 1.55; }\n#th-app .proof-quote .stars { color: #ffd54a; letter-spacing: 3px; font-size: 1.05rem; margin-top: .4rem; }\n#th-app .proof-note { font-size: .72rem !important; color: var(--muted) !important; margin-top: .5rem !important; }\n#th-app .reels { display: grid; gap: 10px; margin-top: 12px; }\n#th-app .reels .instagram-media { min-width: 0 !important; width: 100% !important; margin: 0 !important; }\n#th-app .ba { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center; max-width: 900px; margin: 40px auto 0; text-align: left; }\n#th-app .ba .btn { margin-top: 1rem; }\n@media (max-width: 860px) {\n#th-app .ba { grid-template-columns: 1fr; gap: 16px; }\n#th-app .ba .btn { width: 100%; }\n}\n#th-app .email-step h3 { font-size: clamp(1.4rem, 3.2vw, 1.8rem); margin-bottom: .4rem; }\n#th-app .email-step .hint { margin-bottom: 1.2rem; }\n#th-app #lead-form { display: grid; gap: 14px; }\n#th-app .field span { display: block; font-size: .85rem; font-weight: 600; color: var(--ink); margin-bottom: 6px; }\n#th-app .field input { width: 100%; padding: 15px 16px; border-radius: 14px; border: 1.5px solid var(--line); font: 400 1rem \"Inter\", sans-serif; color: var(--text); background: var(--white); transition: border-color .2s, box-shadow .2s; }\n#th-app .field input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }\n#th-app .check { display: flex; gap: 10px; align-items: flex-start; font-size: .88rem; color: var(--text); cursor: pointer; }\n#th-app .check input { flex: none; width: 20px; height: 20px; margin-top: 1px; accent-color: var(--accent); }\n#th-app .check a { color: var(--ink-soft); text-decoration: underline; }\n#th-app .field input.invalid { border-color: #c0392b; box-shadow: 0 0 0 4px #fbe3e0; }\n#th-app .check.invalid { color: #c0392b; background: #fdf1ef; border-radius: 10px; padding: 8px; margin: -8px; }\n#th-app .shake { animation: shake .4s; }\n@keyframes shake { 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }\n#th-app .form-error { color: #c0392b; font-weight: 600; font-size: .88rem; min-height: 1em; margin: -4px 0 -6px; }\n#th-app .form-note { font-size: .8rem; text-align: center; }\n#th-app #lead-form .btn { width: 100%; margin-top: 4px; }\n@media (prefers-reduced-motion: reduce) {\n#th-app, #th-app *, #th-app *::before, #th-app *::after { animation: none !important; transition: none !important; }\n#th-app .reveal, #th-app .option, #th-app .stagger > * { opacity: 1; transform: none; }\n}\n#th-app { position: fixed; inset: 0; z-index: 2147483000; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; }\n#th-app h1, #th-app h2, #th-app h3, #th-app h4, #th-app h5 { text-transform: none; font-weight: 400; }\n#th-app button, #th-app input, #th-app textarea { font-family: inherit; text-transform: none; letter-spacing: normal; min-height: 0; line-height: normal; }\n#th-app a { text-decoration-thickness: auto; }\n#th-app ul, #th-app ol { margin: 0; padding: 0; }\n#th-app [hidden] { display: none !important; }\nhtml { font-size: 16px !important; }\n#th-app header, #th-app section, #th-app footer, #th-app main, #th-app aside, #th-app nav, #th-app form, #th-app div { height: auto; min-height: 0; max-height: none; float: none; line-height: inherit; }\n#th-app header, #th-app footer { background: none; color: inherit; position: static; box-shadow: none; border: 0; }\n#th-app p, #th-app li, #th-app label, #th-app summary, #th-app span, #th-app a { font-size: 1rem; letter-spacing: normal; text-transform: none; line-height: inherit; }\n#th-app span, #th-app a, #th-app strong, #th-app em, #th-app b { font-size: inherit; }\n#th-app button { padding: 0; background: none; border: 0; box-shadow: none; border-radius: 0; color: inherit; width: auto; height: auto; }\n#th-app img, #th-app svg { max-width: 100%; height: auto; }\n#th-app input[type=\"checkbox\"] { -webkit-appearance: auto; appearance: auto; position: static; opacity: 1; }\n</style>");
root.innerHTML="<div class=\"topbar\">\ud83c\udf81 <strong>Test 100% gratuito</strong> \u00b7 Env\u00edo gratis desde 35 \u20ac \u00b7 <strong>Vitamina C de regalo</strong> desde 60 \u20ac</div>\n\n  <!-- ---------- Hero ---------- -->\n  <header class=\"hero\">\n    <div class=\"blob b1\"></div><div class=\"blob b2\"></div><div class=\"blob b3\"></div>\n    <div class=\"container hero-grid\">\n      <div>\n        <span class=\"eyebrow\">Test hormonal gratuito \u00b7 2 minutos</span>\n        <h1>\u00bfC\u00f3mo est\u00e1n <span class=\"rotator\"><em class=\"word is-on\">tus hormonas</em><em class=\"word\">tu ciclo</em><em class=\"word\">tu energ\u00eda</em><em class=\"word\">tu piel</em><em class=\"word\">tus antojos</em></span> de verdad?</h1>\n        <p class=\"lead\">Ciclos irregulares, cansancio, granitos, antojos, hinchaz\u00f3n\u2026 Tu cuerpo te est\u00e1 hablando. Responde un m\u00e1ximo de 10 preguntas y descubre qu\u00e9 te est\u00e1 diciendo.</p>\n        <a href=\"#test\" class=\"btn btn-accent pulse\" data-start>Hacer el test gratis \u2192</a>\n        <div class=\"hero-meta\">\n          <span>Gratis</span><span>2 minutos</span><span>Recomendaci\u00f3n personalizada</span>\n        </div>\n      </div>\n      <aside class=\"hero-card reveal\">\n        <h3>\u00bfTe suena alguna de estas se\u00f1ales?</h3>\n        <p class=\"signs-hint\">Toca las que te pasen \ud83d\udc47</p>\n        <ul class=\"signs\">\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Reglas irregulares o muy dolorosas</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Cansancio aunque duermas bien</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Granitos en barbilla y mand\u00edbula</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Antojos de dulce y cambios de humor</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Te cuesta perder peso en la tripa</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Sofocos o duermo peor que antes</button></li>\n        </ul>\n        <div class=\"signs-meter\"><span id=\"signs-bar\"></span></div>\n        <p id=\"signs-msg\">Si te has identificado con dos o m\u00e1s, este test es para ti.</p>\n        <a href=\"#test\" class=\"btn btn-accent signs-cta\" id=\"signs-cta\" data-start>Descubrir qu\u00e9 significan \u2192</a>\n      </aside>\n    </div>\n  </header>\n\n  <!-- ---------- C\u00f3mo funciona ---------- -->\n  <section>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">C\u00f3mo funciona</span>\n      <h2>Tres pasos, <em>cero complicaciones</em></h2>\n      <div class=\"steps\">\n        <div class=\"step reveal\"><div class=\"num\">01</div><div class=\"ico\">\ud83d\udcdd</div><h3>Responde</h3><p>10 preguntas r\u00e1pidas sobre tu etapa, tu ciclo, tu energ\u00eda, tu piel y tu \u00e1nimo.</p></div>\n        <div class=\"step reveal\"><div class=\"num\">02</div><div class=\"ico\">\ud83d\udd0d</div><h3>Descubre</h3><p>Recibe al instante tu perfil hormonal y las \u00e1reas que m\u00e1s te conviene cuidar.</p></div>\n        <div class=\"step reveal\"><div class=\"num\">03</div><div class=\"ico\">\ud83c\udf3f</div><h3>Act\u00faa</h3><p>Te recomendamos el complemento y la combinaci\u00f3n que mejor encajan contigo, con los estudios que lo respaldan.</p></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- El inositol en tu cuerpo ---------- -->\n  <section id=\"cuerpo\" class=\"body-section\" hidden>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Lo que quiz\u00e1 no sab\u00edas</span>\n      <h2>El inositol <em>ya vive en tu cuerpo</em></h2>\n      <p class=\"section-intro\">No es algo extra\u00f1o para ti: <strong>tu propio cuerpo lo fabrica cada d\u00eda</strong> y lo usa en muchas funciones. Toca cada punto para descubrir d\u00f3nde trabaja.</p>\n      <div class=\"body-facts\">\n        <span>\ud83e\uddec Lo fabricas t\u00fa</span><span>\ud83c\udf4a Est\u00e1 en frutas, legumbres y frutos secos</span><span>\u2728 Tus c\u00e9lulas ya lo conocen</span>\n      </div>\n    </div>\n    <div class=\"container body-grid\">\n      <div class=\"body-figure reveal\">\n        <svg viewBox=\"0 0 200 400\" role=\"img\" aria-label=\"Silueta del cuerpo con los lugares donde act\u00faa el inositol\">\n          <defs>\n            <linearGradient id=\"bodyGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0\" stop-color=\"#d6ebf8\"/><stop offset=\"1\" stop-color=\"#d3f1e6\"/>\n            </linearGradient>\n          </defs>\n          <g class=\"silhouette\">\n            <circle cx=\"100\" cy=\"50\" r=\"30\"/>\n            <rect x=\"90\" y=\"76\" width=\"20\" height=\"18\" rx=\"6\"/>\n            <path d=\"M64 96 Q100 86 136 96 Q154 104 152 130 L150 178 Q146 206 140 222 Q156 252 148 290 L134 392 H112 L102 300 H98 L88 392 H66 L52 290 Q44 252 60 222 Q54 206 50 178 L48 130 Q46 104 64 96 Z\"/>\n            <path d=\"M48 112 Q30 150 30 200 Q30 228 38 250 L46 248 Q42 222 44 200 Q46 160 58 128 Z\"/>\n            <path d=\"M152 112 Q170 150 170 200 Q170 228 162 250 L154 248 Q158 222 156 200 Q154 160 142 128 Z\"/>\n          </g>\n          <g class=\"flow\">\n            <path d=\"M100 60 C 115 110, 85 150, 100 190 S 115 230, 100 250 S 70 300, 78 330\"/>\n          </g>\n          <g class=\"hs\" data-i=\"0\" transform=\"translate(100 46)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\udde0</text></g>\n          <g class=\"hs\" data-i=\"1\" transform=\"translate(126 132)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\uddec</text></g>\n          <g class=\"hs\" data-i=\"2\" transform=\"translate(100 190)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\uded8</text></g>\n          <g class=\"hs\" data-i=\"3\" transform=\"translate(100 248)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83c\udf38</text></g>\n          <g class=\"hs\" data-i=\"4\" transform=\"translate(76 322)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\u26a1</text></g>\n        </svg>\n      </div>\n      <div class=\"body-info reveal\">\n        <div class=\"organ-card\" id=\"organ-card\" aria-live=\"polite\"></div>\n        <div class=\"organ-dots\" id=\"organ-dots\"></div>\n        <div class=\"cell-anim\">\n          <h3>As\u00ed trabaja en cada c\u00e9lula</h3>\n          <svg viewBox=\"0 0 320 130\" aria-hidden=\"true\">\n            <circle class=\"cell-glow\" cx=\"236\" cy=\"62\" r=\"48\"/>\n            <circle class=\"cell\" cx=\"236\" cy=\"62\" r=\"48\"/>\n            <rect class=\"receptor\" x=\"182\" y=\"52\" width=\"10\" height=\"20\" rx=\"3\"/>\n            <text class=\"key\" x=\"16\" y=\"70\">\ud83d\udd11</text>\n            <circle class=\"msg m1\" cx=\"196\" cy=\"62\" r=\"4.5\"/><circle class=\"msg m2\" cx=\"196\" cy=\"62\" r=\"4.5\"/><circle class=\"msg m3\" cx=\"196\" cy=\"62\" r=\"4.5\"/>\n            <circle class=\"glu g1\" cx=\"150\" cy=\"30\" r=\"5\"/><circle class=\"glu g2\" cx=\"150\" cy=\"96\" r=\"5\"/><circle class=\"glu g3\" cx=\"130\" cy=\"62\" r=\"5\"/>\n            <text class=\"bolt\" x=\"226\" y=\"72\">\u26a1</text>\n          </svg>\n          <ol class=\"cell-steps\">\n            <li class=\"s1\"><b>1</b>La insulina llama a la puerta de la c\u00e9lula</li>\n            <li class=\"s2\"><b>2</b>El inositol lleva el mensaje hacia dentro</li>\n            <li class=\"s3\"><b>3</b>La glucosa entra y se convierte en energ\u00eda</li>\n          </ol>\n        </div>\n        <p class=\"why-take\"><strong>Entonces, \u00bfpor qu\u00e9 tomarlo?</strong> Porque en situaciones como el SOP o la resistencia a la insulina se ha visto que el cuerpo lo aprovecha peor. Por eso se estudia como complemento: para darle a tus c\u00e9lulas m\u00e1s de algo que ya conocen.\n          <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC8896029/\" target=\"_blank\" rel=\"noopener\">\ud83d\udcda Ver revisi\u00f3n cient\u00edfica</a></p>\n        <p class=\"notice\">Las funciones que describimos son las que el inositol cumple de forma natural en el organismo. Los estudios citados son informaci\u00f3n cient\u00edfica, no declaraciones de propiedades saludables autorizadas del producto.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- Test ---------- -->\n  <section id=\"test\">\n    <div class=\"blob b4\"></div><div class=\"blob b5\"></div>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Tu test</span>\n      <h2>Empieza ahora, <em>es gratis</em></h2>\n      <p class=\"section-intro\">Elige la respuesta que m\u00e1s se parezca a c\u00f3mo te has sentido en los \u00faltimos 3 meses.</p>\n    </div>\n    <div class=\"container\">\n      <div class=\"quiz reveal\" id=\"quiz\" aria-live=\"polite\"></div>\n    </div>\n  </section>\n\n  <!-- ---------- Testimonios ---------- -->\n  <section>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Resultados reales</span>\n      <h2>Antes y despu\u00e9s de tomar <em>Myo-Inositol</em></h2>\n      <div class=\"ba reveal\" id=\"ba-section\"></div>\n    </div>\n  </section>\n\n  <!-- ---------- FAQ ---------- -->\n  <section class=\"faq-section\">\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Preguntas frecuentes</span>\n      <h2>Lo que <em>te estar\u00e1s preguntando</em></h2>\n    </div>\n    <div class=\"container\">\n      <div class=\"faq\">\n        <details class=\"reveal\"><summary>\u00bfEl test es realmente gratis?</summary><p>S\u00ed. No te pedimos tarjeta ni que te registres. Solo tu email al final, para ense\u00f1arte tu resultado y tu recomendaci\u00f3n.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto tarda en llegar mi pedido?</summary><p>Preparamos tu pedido en 24\u201348 horas h\u00e1biles y lo enviamos con Correos o Packlink. La entrega suele tardar entre 2 y 7 d\u00edas h\u00e1biles seg\u00fan tu zona. Los pedidos de fin de semana o festivos salen el siguiente d\u00eda h\u00e1bil, y recibir\u00e1s un enlace para seguir tu paquete.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto cuesta el env\u00edo?</summary><p>El env\u00edo a Espa\u00f1a cuesta 3,50 \u20ac y es <strong>gratis a partir de 35 \u20ac</strong>.</p></details>\n        <details class=\"reveal\"><summary>Si mi cuerpo ya fabrica inositol, \u00bfpor qu\u00e9 tomarlo?</summary><p>Tu cuerpo lo fabrica y lo usa en muchas funciones, pero en situaciones como el SOP o la resistencia a la insulina se ha visto que lo aprovecha peor. Por eso se estudia como complemento: aporta m\u00e1s de una mol\u00e9cula que tus c\u00e9lulas ya conocen.</p></details>\n        <details class=\"reveal\"><summary>\u00bfC\u00f3mo se toma el Myo-Inositol?</summary><p>2 g al d\u00eda, una cuchara dosificadora rasa (viene incluida), preferiblemente por la ma\u00f1ana en ayunas. Disu\u00e9lvelo en agua, zumo o tu bebida favorita: no tiene sabor y se disuelve f\u00e1cilmente.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto me dura un tarro?</summary><p>El tarro de 200 g son 100 tomas de 2 g: m\u00e1s de 3 meses. Con el tratamiento de 6 meses (2 tarros) tienes para todo el semestre.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1ndo notar\u00e9 los resultados?</summary><p>Los complementos trabajan con el tiempo. En los estudios los efectos se valoran a partir de los 3 meses de uso continuado, y en la piel la mejora se vio a los 6 meses. Cada cuerpo es diferente y los resultados pueden variar.</p></details>\n        <details class=\"reveal\"><summary>\u00bfLo puedo combinar con otros complementos?</summary><p>S\u00ed, el Myo-Inositol se puede combinar con otros complementos, como el magnesio, la vitamina C, la creatina o el col\u00e1geno. Si tomas medicaci\u00f3n o anticonceptivos, cons\u00faltalo antes con tu m\u00e9dico.</p></details>\n        <details class=\"reveal\"><summary>\u00bfPuedo tomarlo si estoy embarazada o dando el pecho?</summary><p>En el embarazo, la lactancia o si tienes alguna enfermedad, consulta siempre con tu m\u00e9dico o ginec\u00f3loga antes de tomar cualquier complemento.</p></details>\n        <details class=\"reveal\"><summary>\u00bfTen\u00e9is alg\u00fan regalo?</summary><p>S\u00ed: en compras de m\u00e1s de 60 \u20ac te regalamos una Vitamina C pura (tarro de 100 g, valor 15,95 \u20ac). Se a\u00f1ade sola al carrito desde tu rutina personalizada.</p></details>\n        <details class=\"reveal\"><summary>\u00bfC\u00f3mo funcionan los descuentos del test?</summary><p>Se aplican solos al pagar: un 10% en el Myo-Inositol, un 15% en toda tu compra con 2 productos y un 20% con 3 o m\u00e1s. Los descuentos no se pueden sumar entre s\u00ed.</p></details>\n        <details class=\"reveal\"><summary>\u00bfY si quiero devolverlo?</summary><p>Tienes 30 d\u00edas desde que lo recibes para solicitar una devoluci\u00f3n, con el producto sin abrir y en su embalaje original. Escr\u00edbenos y te ayudamos.</p></details>\n        <details class=\"reveal\"><summary>\u00bfQu\u00e9 hac\u00e9is con mis datos?</summary><p>Guardamos tu email y tu resultado en nuestra tienda. Solo te escribiremos si nos das permiso, no compartimos tus datos con nadie y puedes darte de baja cuando quieras.</p></details>\n        <details class=\"reveal\"><summary>\u00bfSustituye a una anal\u00edtica o a ir al m\u00e9dico?</summary><p>No. Es una herramienta orientativa para que conozcas mejor las se\u00f1ales de tu cuerpo. Si tienes s\u00edntomas intensos o persistentes, consulta con tu m\u00e9dico o ginec\u00f3loga.</p></details>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- CTA final ---------- -->\n  <section class=\"final\">\n    <div class=\"container\"><div class=\"final-box reveal\">\n      <h2>Tu cuerpo te est\u00e1 hablando. <em>Esc\u00fachalo.</em></h2>\n      <p>Descubre en 2 minutos c\u00f3mo est\u00e1n tus hormonas.</p>\n      <a href=\"#test\" class=\"btn pulse\" data-start>Hacer el test gratis \u2192</a>\n    </div></div>\n  </section>\n\n  <footer>\n    <div class=\"container\">\n      <p>Este test es orientativo y no constituye un diagn\u00f3stico m\u00e9dico. No sustituye la consulta con un profesional sanitario.</p>\n      <p>Los complementos alimenticios no son medicamentos y no est\u00e1n destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. No deben utilizarse como sustitutos de una dieta equilibrada y un modo de vida saludable. No superar la dosis diaria recomendada. Mantener fuera del alcance de los ni\u00f1os. En embarazo, lactancia, si tomas medicaci\u00f3n o tienes alguna enfermedad, consulta con tu m\u00e9dico.</p>\n      <p>Los estudios cient\u00edficos citados se muestran a t\u00edtulo informativo; no son declaraciones de propiedades saludables autorizadas y no garantizan resultados. Las experiencias y opiniones mostradas son personales y reales; los resultados pueden variar de una persona a otra.</p>\n      <p>\u00a9 <span id=\"year\"></span> Benissalud \u00b7 Complementos alimenticios envasados en Espa\u00f1a.</p>\n    </div>\n  </footer>\n\n  <!-- Formularios nativos de Shopify (igual que el bolet\u00edn del tema): crean el cliente con sus etiquetas -->\n  <iframe name=\"sh-sink\" id=\"sh-sink\" title=\"env\u00edo\" hidden tabindex=\"-1\" style=\"display:none\"></iframe>\n  <form id=\"sh-customer\" method=\"post\" action=\"/contact#contact_form\" accept-charset=\"UTF-8\" target=\"sh-sink\" hidden>\n    <input type=\"hidden\" name=\"form_type\" value=\"customer\"><input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n    <input type=\"hidden\" name=\"contact[email]\"><input type=\"hidden\" name=\"contact[first_name]\"><input type=\"hidden\" name=\"contact[tags]\">\n  </form>\n  <form id=\"sh-contact\" method=\"post\" action=\"/contact#contact_form\" accept-charset=\"UTF-8\" target=\"sh-sink\" hidden>\n    <input type=\"hidden\" name=\"form_type\" value=\"contact\"><input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n    <input type=\"hidden\" name=\"contact[email]\"><input type=\"hidden\" name=\"contact[name]\"><textarea name=\"contact[body]\" hidden></textarea>\n  </form>\n\n  <div class=\"sticky-cta\" id=\"sticky-cta\"><a href=\"#test\" class=\"btn btn-accent\" data-start>Hacer el test gratis \u2192</a></div>";
document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';
})();

    /* ====================================================================
       CONFIGURACIÓN — cambia aquí el enlace a la página del inositol
       ==================================================================== */
    var SHOP = "https://www.benissalud.com";
    // Los contactos se guardan en Shopify → Clientes, con estas etiquetas para Shopify Email
    var TAG_PREFIX = "th-";
    var PRIVACY_URL = SHOP + "/policies/privacy-policy";
    // Prueba social: antes y después real y vídeos de Instagram
    var BEFORE_AFTER_IMG = "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/test-hormonal-antes-despues.webp?v=1790866244";
    var BEFORE_AFTER_QUOTE = "Siempre me decían que los anticonceptivos eran la única solución, pero yo sentía que eso no resolvía mi problema hormonal, solo lo ocultaba. Cuando descubrí el myo-inositol, entendí que había otra forma de ayudar a mi cuerpo.";
    // Pega aquí los enlaces de tus reels de Instagram, p. ej. "https://www.instagram.com/reel/XXXXXXXX/"
    var INSTAGRAM_REELS = [];

    // Formatos y duraciones de cada producto (según la ficha de la tienda).
    // q = unidades que van al carrito y que cuentan para el descuento por cantidad
    var OPTIONS = {
      inositol: [
        { t: "3 meses", s: "1 tarro · 100 tomas", v: "56619259330885", q: 1, p: 24.95, note: "1 tarro = 100 tomas de 2 g, más de 3 meses: el tiempo en el que los estudios valoran los efectos." },
        { t: "6 meses", s: "2 tarros", v: "56619259330885", q: 2, p: 49.90, badge: "Más completo", note: "En el estudio sobre la piel, la mejora del acné y del vello se vio a los 6 meses de uso continuado." }
      ],
      magnesio: [
        { t: "1 mes", s: "Tarro de cristal 100 g", v: "58574868283717", q: 1, p: 19.95, note: "3 g al día: el tarro de 100 g dura 1 mes." },
        { t: "3 meses", s: "Reutilizable 300 g", v: "58574868316485", q: 1, p: 34.95, badge: "Ahorras 24,90 €", note: "El formato de 300 g dura 3 meses: te sale a 11,65 € al mes en lugar de 19,95 €." }
      ],
      creatina: [
        { t: "50 días", s: "1 bote 150 g", v: "56619269882181", q: 1, p: 10.95, note: "3 g al día: un bote de 150 g dura unos 50 días." },
        { t: "3 meses", s: "2 botes · 100 días", v: "56619269882181", q: 2, p: 21.90, badge: "Suma 2 al descuento", note: "Con 2 botes tienes para unos 100 días y sumas 2 productos a tu descuento." }
      ],
      vitc: [
        { t: "6 meses", s: "Tarro 100 g", v: "56590721024325", q: 1, p: 15.95, note: "Una cucharadita al día: el tarro dura unos 6 meses." }
      ],
      colageno: [
        { t: "1 mes", s: "1 bote 120 g", v: "56749441057093", q: 1, p: 14.95, note: "5 g al día: un bote son 24 tomas, aproximadamente un mes." },
        { t: "3 meses", s: "3 botes", v: "56749441057093", q: 3, p: 44.85, badge: "Suma 3 al descuento", note: "Los estudios sobre la piel con colágeno duran entre 8 y 12 semanas. Con 3 botes completas ese tiempo y sumas 3 productos a tu descuento." }
      ]
    };
    // Opiniones reales de clientas (TikTok Shop), guardadas en las fichas de producto
    var REVIEWS = [
      { p: "Vitamina C pura", t: "Ya he comprado varias veces, me subió el hierro al tomarlo junto, ni un resfriado y trabajo en un hospital. Seguiré comprando, el envío rapidísimo y son muy detallistas." },
      { p: "Bisglicinato de Magnesio", t: "Buenísimo producto y atención. Me quedo con él sin lugar a dudas." },
      { p: "Creatina Creapure", t: "Me encanta esta creatina y es Creapure. Para el gym es lo mejor." }
    ];
    var STUDY_NOTICE = "ℹ️ <strong>Sobre los estudios:</strong> son investigaciones científicas publicadas, hechas en grupos concretos de personas (muchas en mujeres con SOP) y con dosis y duraciones determinadas. Los mostramos a título informativo: no son declaraciones de propiedades saludables autorizadas, no garantizan resultados y no sustituyen el consejo de un profesional sanitario.";
    // Para qué sirve cada producto y cuándo se toma (fichas de la tienda y declaraciones autorizadas por la UE)
    var ROUTINE = {
      inositol: { order: 1, when: "Por la mañana, en ayunas", icon: "🌅", how: "2 g (1 cuchara) en agua o zumo",
        why: "La molécula que tu cuerpo ya fabrica y usa como mensajero de la insulina y de tus hormonas. Es la base de tu rutina." },
      vitc: { order: 2, when: "Por la mañana", icon: "🍊", how: "1 cucharadita rasa",
        why: "Contribuye a la formación normal de colágeno para la piel, a disminuir el cansancio y a absorber el hierro (declaraciones autorizadas UE)." },
      magnesio: { order: 3, when: "Con la comida", icon: "🍽️", how: "3 g (1 cucharilla) en agua",
        why: "Contribuye al funcionamiento normal del sistema nervioso, a la función psicológica y a disminuir el cansancio (declaraciones autorizadas UE)." },
      creatina: { order: 4, when: "Antes o después de entrenar", icon: "🏋️‍♀️", how: "3 g con la cuchara incluida",
        why: "Con 3 g al día aumenta el rendimiento físico en ejercicios breves e intensos (declaración autorizada UE). También es energía para tus células." },
      colageno: { order: 5, when: "Cuando quieras", icon: "☕", how: "5 g en tu café, batido o agua",
        why: "Péptidos de colágeno Peptan®, el colágeno más estudiado en la piel. Combina muy bien con la vitamina C." }
    };
    var ALT_CODE = "TESTBIENESTAR10"; // 10% cuando el producto principal no es el inositol
    var FREE_SHIPPING = 35; // envío gratis en España a partir de 35 €
    var GIFT_MIN = 60;      // a partir de 60 € (sin contar la vitamina C) regalamos una Vitamina C
    var GIFT_VARIANT = "56590721024325"; // Vitamina C pura, tarro 100 g
    // Descuentos creados en Shopify: solo inositol / +1 producto / +2 o más
    var TIERS = [
      { min: 1, pct: 10, code: "TESTHORMONAL10", label: "Solo inositol" },
      { min: 2, pct: 15, code: "TESTHORMONAL15", label: "2 productos" },
      { min: 3, pct: 20, code: "TESTHORMONAL20", label: "3 o más" }
    ];
    // variant = ID de la variante de Shopify que se añade al carrito en el pack
    var PRODUCTS = {
      inositol: { name: "Myo-Inositol", detail: "Tarro de cristal 200 g · 100 tomas", price: "24,95 €", handle: "myo-inositol", variant: "56619259330885",
        img: "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/31_f09196dd-dcfe-41bc-968b-b9e53e9bd31b.png?v=1783611771" },
      magnesio: { name: "Bisglicinato de Magnesio Albion®", detail: "Tarro de cristal 100 g", price: "19,95 €", handle: "bisglicinato-de-magnesio-albion®-chelate-magnesio-en-polvo-benissalud", variant: "58574868283717",
        img: "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/42E514FE-228D-4A37-B0D8-B6210A1140E9.png?v=1789659803" },
      vitc: { name: "Vitamina C pura", detail: "Tarro 100 g", price: "15,95 €", handle: "vitamina-c-sistema-inmune-500mg", variant: "56590721024325",
        img: "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/19_29da44c8-43ac-4ccf-94d7-dd96c962d39d.png?v=1783595729" },
      creatina: { name: "Creatina Creapure®", detail: "150 g", price: "10,95 €", handle: "creatina-creapure", variant: "56619269882181",
        img: "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/21_4b80701a-2dc4-4113-828b-9d8cf0ee91da.png?v=1765493529" },
      colageno: { name: "Colágeno Marino Peptan®", detail: "120 g", price: "14,95 €", handle: "colageno-marino-peptan®", variant: "56749441057093",
        img: "https://cdn.shopify.com/s/files/1/1007/7516/6277/files/46.png?v=1783613746" }
    };
    /* ==================================================================== */

    /* --------------------------------------------------------------------
       Estudios científicos en los que se basa cada recomendación
       -------------------------------------------------------------------- */
    var STUDIES = {
      ciclo: { label: "Revisión y metaanálisis para la guía internacional de SOP 2023 (J Clin Endocrinol Metab)", url: "https://academic.oup.com/jcem/article/109/6/1630/7504796" },
      piel: { label: "Mio-inositol en problemas de piel de mujeres jóvenes con SOP (Gynecological Endocrinology, 2009)", url: "https://pubmed.ncbi.nlm.nih.gov/19551544/" },
      insulina: { label: "Mio-inositol en resistencia a la insulina y síndrome metabólico, revisión (2022)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8896029/" },
      peso: { label: "Inositol e índice de masa corporal: metaanálisis de ensayos clínicos (Obesity Science & Practice, 2022)", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/osp4.569" },
      animo: { label: "Mio-inositol en el trastorno disfórico premenstrual (Human Psychopharmacology, 2011)", url: "https://www.researchgate.net/publication/51749049_Myo-inositol_in_the_treatment_of_premenstrual_dysphoric_disorder" },
      sueno: { label: "Mio-inositol y calidad del sueño: ensayo aleatorizado con placebo (2020)", url: "https://pubmed.ncbi.nlm.nih.gov/32933356/" },
      perimenopausia: { label: "La insulina en la perimenopausia y la aparición de sofocos (J Clin Endocrinol Metab, 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13183428/" },
      menopausia: { label: "Efectos de un año de mio-inositol en mujeres posmenopáusicas con síndrome metabólico (2012)", url: "https://pubmed.ncbi.nlm.nih.gov/22192068/" },
      sofocos: { label: "Suplemento de mio-inositol y flavonoides en mujeres posmenopáusicas: ensayo aleatorizado (2014)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4164131/" },
      fertilidad: { label: "Inositol en el SOP: metaanálisis de ensayos aleatorizados (Reprod Biol Endocrinol, 2023)", url: "https://link.springer.com/article/10.1186/s12958-023-01055-z" },
      ue: { label: "Declaraciones de propiedades saludables autorizadas por la UE (Reglamento UE 432/2012)", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32012R0432" },
      mg_regla: { label: "Magnesio en obstetricia y ginecología, revisión", url: "https://www.gynaecology-obstetrics-journal.com/wp-content/uploads/2020/11/06.pdf" },
      mg_sueno: { label: "Bisglicinato de magnesio en adultos que duermen mal: ensayo aleatorizado con placebo (Nature and Science of Sleep, 2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40918053/" },
      mg_ansiedad: { label: "Efectos del magnesio sobre la ansiedad y el estrés: revisión sistemática (Nutrients, 2017)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5452159/" },
      mg_insulina: { label: "Magnesio y sensibilidad a la insulina: metaanálisis de 21 ensayos (Pharmacological Research, 2016)", url: "https://www.researchgate.net/publication/304144967_A_systematic_review_and_meta-analysis_of_randomized_controlled_trials_on_the_effects_of_magnesium_supplementation_on_insulin_sensitivity_and_glucose_control" },
      vitc_hierro: { label: "Vitamina C y absorción del hierro (The Blood Project)", url: "https://www.thebloodproject.com/oral-iron-and-vitamin-c/" },
      creatina_mujer: { label: "La creatina en la salud de la mujer a lo largo de la vida (Nutrients, 2021)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7998865/" },
      creatina_meno: { label: "Creatina y salud femenina: de la menstruación a la menopausia (2025)", url: "https://pubmed.ncbi.nlm.nih.gov/40371844/" },
      peptan: { label: "Colágeno Peptan® e hidratación de la piel: ensayos aleatorizados con placebo (J Cosmet Dermatol, 2015)", url: "https://onlinelibrary.wiley.com/doi/10.1111/jocd.12174" }
    };

    /* --------------------------------------------------------------------
       Cómo se recomienda el inositol según cada respuesta
       -------------------------------------------------------------------- */
    var MSGS = {
      fertil: { area: "ciclo", title: "Estás en edad fértil", study: null,
        text: "Es la etapa en la que el equilibrio entre insulina y hormonas sexuales más se nota en tu ciclo, tu piel y tu energía. Por eso el inositol es tan popular entre mujeres de tu edad." },
      embarazo: { area: "fertilidad", title: "Estás buscando embarazo", study: "fertilidad",
        text: "En mujeres con SOP, los estudios han visto que el inositol mejora la ovulación y la regularidad del ciclo. Muchas lo combinan con ácido fólico. Coméntalo siempre con tu ginecóloga." },
      perimenopausia: { area: "menopausia", title: "Estás en la perimenopausia", study: "perimenopausia",
        text: "En esta etapa la insulina gana protagonismo: las mujeres con la insulina más alta a los 47 años empezaron antes con los sofocos y los sudores nocturnos. El inositol actúa como mensajero de la insulina, y por eso se estudia en esta etapa." },
      menopausia: { area: "menopausia", title: "Estás en la menopausia", study: "menopausia",
        text: "Con la bajada de estrógenos, cuesta más controlar el azúcar, el peso y el colesterol. En mujeres posmenopáusicas, 2 g de mio-inositol dos veces al día durante 6 meses redujeron la resistencia a la insulina y los triglicéridos y mejoraron el colesterol bueno." },
      ciclo_leve: { area: "ciclo", title: "Tu ciclo a veces se descoloca", study: "ciclo",
        text: "Los pequeños desajustes suelen ser la primera señal. El inositol es uno de los complementos más estudiados para que el ciclo recupere su ritmo." },
      ciclo_irregular: { area: "ciclo", title: "Tu ciclo es irregular", study: "ciclo",
        text: "Es la señal en la que el inositol tiene más evidencia. En mujeres con SOP, las que tomaban inositol tenían 1,8 veces más probabilidades de tener reglas regulares que las que tomaban placebo, e incluso superó a la metformina en este punto." },
      pildora: { area: "ciclo", title: "Tomas anticonceptivos o no conoces tu ciclo", study: null,
        text: "La píldora puede tapar las señales de tu ciclo, pero no la forma en que tu cuerpo usa la insulina. El inositol actúa justo ahí. Si la tomas, consulta con tu ginecóloga antes de empezar cualquier complemento." },
      regla_dolor: { area: "ciclo", title: "Tus reglas te condicionan", study: "ciclo",
        text: "Unas reglas difíciles suelen ir de la mano de un ciclo desequilibrado. El inositol se ha estudiado sobre todo para devolver la regularidad al ciclo. Si el dolor es intenso, consulta también con tu ginecóloga." },
      regla_abundante: { area: "ciclo", title: "Tus reglas son muy abundantes", study: "ciclo",
        text: "Las reglas muy abundantes pueden ir ligadas a un desequilibrio hormonal y te hacen perder hierro. El inositol trabaja el ciclo de fondo; y si sangras mucho, consulta con tu ginecóloga para revisar tu hierro." },
      piel_leve: { area: "piel", title: "Te salen granitos de vez en cuando", study: "piel",
        text: "Los brotes que van y vienen, como los de antes de la regla, suelen tener un origen hormonal. En estudios con mujeres con SOP, el inositol se asoció a una bajada de los andrógenos, las hormonas que estimulan la grasa de la piel." },
      acne: { area: "piel", title: "Tienes granitos en barbilla y mandíbula", study: "piel",
        text: "Es el acné hormonal típico, ligado a un exceso de andrógenos. En un estudio, las mujeres que tomaron mio-inositol bajaron la testosterona a los 3 meses y, a los 6 meses, tenían menos acné." },
      vello: { area: "piel", title: "Tienes piel grasa o vello donde no te gustaría", study: "piel",
        text: "Las dos son señales de andrógenos altos. En los estudios, el mio-inositol redujo la testosterona libre y, después de 6 meses, también el vello y el acné." },
      energia_leve: { area: "energia", title: "Tienes un bajón a media tarde", study: "insulina",
        text: "Ese bajón suele ser un pico y caída de azúcar. El inositol actúa en tu cuerpo como mensajero de la insulina, la hormona que gestiona ese azúcar." },
      cansancio: { area: "energia", title: "Estás cansada aunque duermas", study: "insulina",
        text: "Cuando las células no responden bien a la insulina, la glucosa no se convierte en energía. Los estudios han visto que el mio-inositol mejora la resistencia a la insulina (el índice HOMA) en mujeres." },
      energia_ciclo: { area: "energia", title: "Tu energía cambia con el ciclo", study: "ciclo",
        text: "Si tu energía sube y baja según el día del ciclo, tus hormonas están marcando el ritmo. El inositol participa en las señales de esas hormonas y se estudia por su papel en el ciclo." },
      antojos_leve: { area: "metabolismo", title: "Tienes antojos de vez en cuando", study: "insulina",
        text: "Las ganas de dulce suelen aparecer cuando baja la sensibilidad a la insulina, por ejemplo antes de la regla. El inositol participa en cómo tu cuerpo gestiona el azúcar y se ha estudiado en la resistencia a la insulina." },
      antojos: { area: "metabolismo", title: "Necesitas dulce a menudo", study: "insulina",
        text: "Los antojos frecuentes son una señal clásica de que la insulina no está trabajando bien. En los estudios, el mio-inositol bajó la insulina en ayunas y mejoró la sensibilidad a la insulina." },
      retencion: { area: "metabolismo", title: "Notas retención o hinchazón", study: null,
        text: "La hinchazón suele cambiar a lo largo del ciclo. Observar cómo cambia a lo largo del mes te ayuda a entender a tu cuerpo." },
      peso: { area: "metabolismo", title: "Te cuesta perder la tripa", study: "peso",
        text: "La grasa abdominal está muy ligada a la insulina. Un metaanálisis vio que el mio-inositol reducía el IMC, sobre todo en mujeres con SOP o con sobrepeso. No es una pastilla para adelgazar, pero sí una buena ayuda." },
      peso_subida: { area: "metabolismo", title: "Has ganado peso sin cambiar tus hábitos", study: "peso",
        text: "Cuando el peso sube sin motivo aparente, suele haber un cambio hormonal o en la insulina. En mujeres con SOP, 6 meses de mio-inositol se asociaron a una bajada media de unos 2 kg, mayor cuanto más resistencia a la insulina había." },
      animo_leve: { area: "animo", title: "Estás más sensible algunos días", study: "animo",
        text: "El mio-inositol participa en las señales de la serotonina, la hormona del bienestar. En un estudio con mujeres con síntomas premenstruales intensos, mejoró el ánimo y los síntomas diarios." },
      ansiedad: { area: "animo", title: "Estás irritable o con altibajos", study: "animo",
        text: "El mio-inositol actúa como mensajero de la serotonina. En un ensayo con mujeres con síndrome premenstrual intenso, mejoró los síntomas de ánimo. Los resultados aún son variados, así que si te sientes así a menudo, busca también apoyo profesional." },
      sueno_leve: { area: "animo", title: "Te cuesta dormirte", study: "sueno",
        text: "El mio-inositol influye en los neurotransmisores que regulan el sueño. En un ensayo con placebo, 2 g diarios mejoraron la calidad del sueño." },
      sueno: { area: "animo", title: "Te despiertas o duermes mal", study: "sueno",
        text: "En un ensayo aleatorizado con placebo, las mujeres que tomaron 2 g diarios de mio-inositol durante 10 semanas durmieron más tiempo y mejor." },
      sofocos_leve: { area: "menopausia", title: "Tienes algún sofoco", study: "sofocos",
        text: "Los sofocos están relacionados con la resistencia a la insulina. En un ensayo con mujeres posmenopáusicas, un suplemento de mio-inositol con flavonoides redujo la frecuencia y la intensidad de los sofocos." },
      sofocos: { area: "menopausia", title: "Tienes sofocos o sudores nocturnos frecuentes", study: "sofocos",
        text: "Las mujeres con más resistencia a la insulina tienen más sofocos. En un ensayo aleatorizado, un suplemento de mio-inositol con flavonoides redujo la frecuencia y la intensidad de los sofocos en mujeres posmenopáusicas." }
    };

    var isMeno = function (a) { return a.etapa === 2 || a.etapa === 3; };
    var hasCycle = function (a) { return a.etapa !== 3; };
    var fertile = function (a) { return a.etapa === 0 || a.etapa === 1; };

    // Cada opción: [texto, puntos, mensaje del inositol]
    var QUESTIONS = [
      { id: "etapa", emoji: "🌸", q: "¿En qué etapa de tu vida estás?", hint: "Así adaptamos el test a ti.",
        options: [["Tengo reglas (edad fértil)", 0, "fertil"], ["Estoy buscando embarazo", 0, "embarazo"], ["Perimenopausia: mis reglas están cambiando (40+)", 1, "perimenopausia"], ["Menopausia: más de 12 meses sin regla", 1, "menopausia"]] },
      { id: "ciclo", emoji: "📅", q: "¿Cómo es tu ciclo menstrual?", hint: "Piensa en los últimos 3–6 meses.", show: hasCycle,
        options: [["Regular, cada 26–32 días", 0, null], ["A veces se adelanta o se retrasa", 1, "ciclo_leve"], ["Muy irregular o tengo faltas", 3, "ciclo_irregular"], ["Tomo anticonceptivos / no lo sé", 1, "pildora"]] },
      { id: "regla", emoji: "🩸", q: "¿Cómo son tus reglas y los días previos?", hint: "Dolor, hinchazón, sensibilidad en el pecho…", show: fertile,
        options: [["Llevaderas, apenas noto nada", 0, null], ["Algo de dolor o hinchazón", 1, "retencion"], ["Dolorosas, me condicionan el día", 2, "regla_dolor"], ["Muy intensas o muy abundantes", 3, "regla_abundante"]] },
      { id: "sofocos", emoji: "🔥", q: "¿Tienes sofocos o sudores nocturnos?", hint: "", show: isMeno,
        options: [["No, nunca", 0, null], ["Alguno de vez en cuando", 1, "sofocos_leve"], ["Varias veces por semana", 2, "sofocos"], ["Cada día, me afectan mucho", 3, "sofocos"]] },
      { id: "piel", emoji: "✨", q: "¿Cómo está tu piel?", hint: "Especialmente barbilla, mandíbula y espalda.",
        options: [["Limpia y estable", 0, null], ["Algún granito de vez en cuando", 1, "piel_leve"], ["Granitos frecuentes en barbilla o mandíbula", 3, "acne"], ["Piel grasa y vello donde no me gustaría", 3, "vello"]] },
      { id: "energia", emoji: "⚡", q: "¿Cómo es tu energía durante el día?", hint: "",
        options: [["Me levanto con energía y me dura", 0, null], ["Bajón a media tarde", 1, "energia_leve"], ["Cansada casi siempre, aunque duerma", 3, "cansancio"], ["Muy variable según el día", 2, "energia_ciclo"]] },
      { id: "antojos", emoji: "🍫", q: "¿Tienes antojos de dulce o hambre después de comer?", hint: "",
        options: [["Casi nunca", 0, null], ["A veces (por ejemplo, antes de la regla)", 1, "antojos_leve"], ["A menudo, necesito algo dulce", 2, "antojos"], ["Constantemente, me cuesta controlarlo", 3, "antojos"]] },
      { id: "peso", emoji: "⚖️", q: "¿Cómo va tu peso?", hint: "",
        options: [["Estable, sin cambios", 0, null], ["Algo de retención o hinchazón", 1, "retencion"], ["Me cuesta perder peso, sobre todo en la tripa", 3, "peso"], ["He ganado peso sin cambiar mis hábitos", 3, "peso_subida"]] },
      { id: "animo", emoji: "💭", q: "¿Cómo está tu estado de ánimo?", hint: "",
        options: [["Tranquila y estable", 0, null], ["Algo más sensible algunos días", 1, "animo_leve"], ["Irritable, ansiosa o con altibajos", 2, "ansiedad"], ["Me siento desbordada a menudo", 3, "ansiedad"]] },
      { id: "sueno", emoji: "🌙", q: "¿Cómo duermes?", hint: "",
        options: [["Duermo bien y me levanto descansada", 0, null], ["Me cuesta un poco dormirme", 1, "sueno_leve"], ["Me despierto por la noche", 2, "sueno"], ["Duermo mal casi todas las noches", 3, "sueno"]] },
      { id: "ejercicio", emoji: "🏃‍♀️", q: "¿Haces ejercicio?", hint: "Última pregunta: nos ayuda a elegir qué combinar con tu inositol.", score: false,
        options: [["Casi nada", 0, null], ["Camino o hago algo suave", 0, null], ["Fuerza o deporte 2–3 días por semana", 0, null], ["Entreno casi a diario", 0, null]] }
    ];

    /* --------------------------------------------------------------------
       VENTA CRUZADA — qué complemento combinar con el inositol.
       Cada respuesta suma puntos a un complemento y el motivo con más
       puntos es el que se explica.
       -------------------------------------------------------------------- */
    var COMBO_RULES = {
      regla_dolor:     [["magnesio", 3, "regla"]],
      retencion:       [["magnesio", 1, "regla"]],
      regla_abundante: [["vitc", 4, "hierro"], ["magnesio", 1, "regla"]],
      animo_leve:      [["magnesio", 2, "animo"]],
      ansiedad:        [["magnesio", 3, "animo"], ["creatina", 1, "animo"]],
      sueno_leve:      [["magnesio", 2, "sueno"]],
      sueno:           [["magnesio", 4, "sueno"]],
      cansancio:       [["magnesio", 2, "cansancio"], ["vitc", 1, "cansancio"], ["creatina", 1, "animo"]],
      energia_leve:    [["magnesio", 1, "cansancio"]],
      antojos:         [["magnesio", 2, "insulina"]],
      peso:            [["magnesio", 1, "insulina"], ["creatina", 1, "musculo"]],
      peso_subida:     [["magnesio", 1, "insulina"], ["creatina", 1, "musculo"]],
      acne:            [["vitc", 2, "piel"]],
      vello:           [["vitc", 1, "piel"]],
      piel_leve:       [["vitc", 1, "piel"]],
      perimenopausia:  [["creatina", 2, "menopausia"], ["magnesio", 1, "sueno"], ["colageno", 2, "menopausia"]],
      menopausia:      [["creatina", 3, "menopausia"], ["colageno", 3, "menopausia"]],
      sofocos:         [["magnesio", 1, "sueno"]]
    };
    // Según la respuesta de ejercicio (índice de la opción)
    var EXERCISE_RULES = [[], [], [["creatina", 3, "ejercicio"]], [["creatina", 4, "ejercicio"]]];

    var COMBOS = {
      magnesio: {
        regla: { why: "Para tus reglas", study: "mg_regla",
          text: "El magnesio relaja el músculo y es uno de los minerales más estudiados para el dolor de regla: en un ensayo, 250 mg al día durante 3 ciclos redujeron los calambres frente a placebo. El inositol trabaja el ciclo de fondo y el magnesio, los síntomas." },
        sueno: { why: "Para dormir mejor", study: "mg_sueno",
          text: "En un ensayo de 2025 con 155 adultos que dormían mal, el bisglicinato de magnesio, la misma forma que este, mejoró el insomnio frente a placebo, sobre todo en quienes tomaban poco magnesio en la dieta." },
        animo: { why: "Para tu calma", study: "mg_ansiedad",
          text: "El magnesio contribuye a la función psicológica normal y al funcionamiento normal del sistema nervioso. Una revisión sistemática encontró indicios de que ayuda con la ansiedad leve y el estrés. Junto al inositol, que participa en las señales de la serotonina, son una pareja clásica." },
        cansancio: { why: "Para tu energía", study: "ue",
          text: "El magnesio contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE). Combinado con el inositol, ayudas a tu cuerpo a convertir la glucosa en energía." },
        insulina: { why: "Para tus antojos", study: "mg_insulina",
          text: "Un metaanálisis de 21 ensayos vio que tomar magnesio más de 3 meses mejora la resistencia a la insulina. El inositol también se ha estudiado en la insulina, por otra vía: por eso muchas personas los combinan." }
      },
      vitc: {
        hierro: { why: "Para tus reglas abundantes", study: "vitc_hierro",
          text: "Con reglas abundantes se pierde hierro. La vitamina C aumenta la absorción del hierro (declaración autorizada por la UE): tomada con una comida rica en hierro, puede multiplicar su absorción por 2 o 3." },
        piel: { why: "Para tu piel", study: "ue",
          text: "La vitamina C contribuye a la formación normal de colágeno para el funcionamiento normal de la piel y protege las células frente al daño oxidativo (declaraciones autorizadas por la UE). El inositol trabaja los granitos desde las hormonas y la vitamina C cuida la piel." },
        cansancio: { why: "Para tu energía", study: "ue",
          text: "La vitamina C contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE)." }
      },
      creatina: {
        ejercicio: { why: "Para tus entrenos", study: "creatina_mujer",
          text: "La creatina es uno de los complementos deportivos más estudiados. En mujeres mejora la fuerza y el rendimiento, y 3 g al día aumentan el rendimiento físico en ejercicios intensos y cortos (declaración autorizada por la UE)." },
        menopausia: { why: "Para tu músculo y tus huesos", study: "creatina_meno",
          text: "Con la bajada de estrógenos se pierde músculo y hueso más rápido. Las revisiones científicas señalan la menopausia como una de las etapas en las que más sentido tiene la creatina, sobre todo si se combina con ejercicio de fuerza." },
        animo: { why: "Para tu energía mental", study: "creatina_mujer",
          text: "La creatina no es solo para el músculo: también es energía para el cerebro. Hay estudios que muestran efectos positivos sobre el ánimo y la concentración en mujeres." },
        musculo: { why: "Para tu metabolismo", study: "creatina_mujer",
          text: "El músculo es el órgano que más azúcar consume. Ganar músculo con ayuda de la creatina hace que tu cuerpo use mejor la glucosa, igual que el inositol." }
      },
      colageno: {
        piel: { why: "Para tu piel", study: "peptan",
          text: "El colágeno es la proteína que da firmeza a la piel y su producción baja a partir de los 25 años. En ensayos con placebo, el colágeno Peptan®, el mismo de este producto, mejoró la hidratación de la piel." },
        menopausia: { why: "Para tu piel en esta etapa", study: "peptan",
          text: "Con la menopausia baja el colágeno de la piel. En ensayos con placebo, el colágeno Peptan®, el mismo de este producto, mejoró la hidratación de la piel." }
      }
    };
    COMBOS.inositol = {
      mantener: { why: "Para mantener tu equilibrio", study: "insulina",
        text: "Ahora tienes pocas señales hormonales, pero el inositol es una molécula que tu cuerpo usa cada día como mensajero de la insulina y de tus hormonas. Muchas mujeres lo añaden para mantener ese equilibrio." }
    };
    var COMBO_DEFAULT = { key: "magnesio", reason: "cansancio" };
    var DEFAULT_REASON = { magnesio: "cansancio", vitc: "cansancio", creatina: "animo", colageno: "piel" };

    // Enfoque del inositol según lo que más le preocupa
    var ANGLES = {
      ciclo: { title: "Inositol para cuidar tu ciclo", cta: "Quiero cuidar mi ciclo",
        text: "Tus respuestas apuntan sobre todo a tu ciclo. Es justo donde el inositol tiene más evidencia: la guía internacional de SOP de 2023 lo recoge como opción que se puede valorar para la regularidad de la regla." },
      piel: { title: "Inositol para cuidar tu piel desde dentro", cta: "Quiero cuidar mi piel",
        text: "Tus respuestas apuntan sobre todo a tu piel. El acné hormonal no se arregla solo con cremas: el inositol actúa sobre los andrógenos, que están en el origen de los brotes." },
      energia: { title: "Inositol para cuidar tu energía", cta: "Quiero cuidar mi energía",
        text: "Tus respuestas apuntan sobre todo a tu energía. El inositol es el mensajero que tu cuerpo usa para que la insulina haga su trabajo con la glucosa, y se ha estudiado en la resistencia a la insulina." },
      metabolismo: { title: "Inositol para cuidar tu metabolismo", cta: "Quiero cuidar mi metabolismo",
        text: "Tus respuestas apuntan sobre todo a la insulina: antojos, tripa, peso que no se mueve. Es uno de los campos donde el inositol más se ha estudiado." },
      animo: { title: "Inositol para tu calma y tu descanso", cta: "Quiero cuidar mi descanso",
        text: "Tus respuestas apuntan sobre todo a tu ánimo y tu descanso. El mio-inositol participa en las señales de la serotonina y se ha estudiado en el sueño y en los síntomas premenstruales." },
      menopausia: { title: "Inositol para acompañarte en la menopausia", cta: "Quiero vivir mejor esta etapa",
        text: "En la menopausia, cuidar la insulina es cuidar tu peso, tu corazón y tus sofocos. En mujeres posmenopáusicas, el mio-inositol mejoró la resistencia a la insulina, los triglicéridos y la tensión." },
      fertilidad: { title: "Inositol para preparar tu cuerpo", cta: "Quiero cuidar mi fertilidad",
        text: "Si buscas embarazo, un ciclo regular y una buena ovulación son clave. En mujeres con SOP, el inositol con ácido fólico es uno de los complementos más estudiados. Coméntalo con tu ginecóloga." },
      equilibrio: { title: "Inositol para mantener tu equilibrio", cta: "Quiero cuidar mis hormonas",
        text: "Tus hormonas están bastante bien. Mantener el equilibrio es mucho más fácil que recuperarlo, y el inositol es una molécula que tu propio cuerpo fabrica y usa cada día." }
    };

    var RESULTS = {
      low: { tag: "Equilibrio bueno", title: "Tus hormonas parecen estar bastante en equilibrio",
        text: "¡Buenas noticias! Tus respuestas muestran pocas señales de desequilibrio. Aun así, hay detalles que puedes cuidar para mantenerte así a largo plazo." },
      mid: { tag: "Señales leves", title: "Tu cuerpo te está dando algunas señales",
        text: "Tus respuestas muestran señales de un desequilibrio hormonal leve. Es muy común y suele responder bien a pequeños cambios en tu rutina." },
      high: { tag: "Señales claras", title: "Tus hormonas te están pidiendo atención",
        text: "Tus respuestas muestran varias señales claras de desequilibrio hormonal. No estás sola: les pasa a muchísimas mujeres y hay formas de empezar a sentirte mejor." }
    };

    var quiz = document.getElementById("quiz");
    var answers = {};
    var current = 0;

    function visibleQuestions() {
      return QUESTIONS.filter(function (item) { return !item.show || item.show(answers); });
    }

    function track(event, params) {
      try { if (window.fbq) fbq("track", event, params || {}); } catch (e) {}
      try { if (window.gtag) gtag("event", event, params || {}); } catch (e) {}
    }

    // Lleva los parámetros del anuncio (utm_*, fbclid…) hasta la página del producto
    function withParams(href, level, angle) {
      try {
        var url = new URL(href);
        new URLSearchParams(location.search).forEach(function (v, k) { if (!url.searchParams.has(k)) url.searchParams.set(k, v); });
        url.searchParams.set("test_resultado", level);
        url.searchParams.set("test_perfil", angle);
        return url.toString();
      } catch (e) { return href; }
    }
    function productLink(key, level, angle) {
      return withParams(SHOP + "/products/" + encodeURIComponent(PRODUCTS[key].handle), level, angle);
    }
    // Enlace de carrito de Shopify: añade todos los productos y va directo a pagar
    function packLink(keys, level, angle) {
      var qty = {};
      keys.forEach(function (k) { qty[k] = (qty[k] || 0) + 1; });
      return withParams(SHOP + "/cart/" + Object.keys(qty).map(function (k) { return PRODUCTS[k].variant + ":" + qty[k]; }).join(","), level, angle);
    }

    // Elige los complementos que mejor encajan con sus respuestas
    function pickCombos(picked) {
      var pts = {}, why = {};
      function add(rule) {
        var k = rule[0], p = rule[1], r = rule[2];
        pts[k] = (pts[k] || 0) + p;
        if (!why[k] || p > why[k].p) why[k] = { r: r, p: p };
      }
      picked.forEach(function (p) { (COMBO_RULES[p.key] || []).forEach(add); });
      (EXERCISE_RULES[answers.ejercicio] || []).forEach(add);
      var list = Object.keys(pts).sort(function (a, b) { return pts[b] - pts[a]; })
        .map(function (k) { return { key: k, reason: why[k].r }; });
      if (!list.length) list.push(COMBO_DEFAULT);
      list = list.slice(0, 2).map(function (c) { c.reco = true; return c; });
      Object.keys(DEFAULT_REASON).forEach(function (k) {
        if (list.every(function (c) { return c.key !== k; })) list.push({ key: k, reason: DEFAULT_REASON[k], reco: false });
      });
      return list;
    }

    function tierFor(n) { return TIERS.filter(function (t) { return n >= t.min; }).pop(); }
    function fmt(n) { return n.toFixed(2).replace(".", ",") + " €"; }
    function priceOf(k) { return parseFloat(PRODUCTS[k].price.replace(",", ".")); }
    function routineLink(keys, level, angle) {
      var url = new URL(packLink(keys, level, angle));
      url.searchParams.set("discount", tierFor(keys.length).code);
      return url.toString();
    }
    function mainCode(key) { return key === "inositol" ? TIERS[0].code : ALT_CODE; }
    function mainLink(key, level, angle) {
      return withParams(SHOP + "/discount/" + mainCode(key) + "?redirect=" + encodeURIComponent("/products/" + PRODUCTS[key].handle), level, angle);
    }
    function inositolLink(level, angle) { return mainLink("inositol", level, angle); }
    // Carrito con variantes y cantidades: [{ v: variante, q: cantidad }]
    function linesLink(lines, code, level, angle) {
      var qty = {};
      lines.forEach(function (l) { qty[l.v] = (qty[l.v] || 0) + l.q; });
      var url = new URL(withParams(SHOP + "/cart/" + Object.keys(qty).map(function (v) { return v + ":" + qty[v]; }).join(","), level, angle));
      url.searchParams.set("discount", code);
      return url.toString();
    }

    function proofHtml() {
      var reels = INSTAGRAM_REELS.map(function (u) {
        return '<blockquote class="instagram-media" data-instgrm-permalink="' + u + '" data-instgrm-version="14"></blockquote>';
      }).join("");
      return '<div class="proof">' +
        '<span class="combo-tag">★★★★★ Resultados reales</span>' +
        '<h5>Antes y después de tomar Myo-Inositol</h5>' +
        '<img src="' + BEFORE_AFTER_IMG + '" alt="Antes y después del acné hormonal tomando Myo-Inositol" loading="lazy">' +
        '<blockquote class="proof-quote">“' + BEFORE_AFTER_QUOTE + '”<div class="stars">★★★★★</div></blockquote>' +
        (reels ? '<div class="reels">' + reels + '</div>' : '') +
        '<p class="proof-note">Experiencia personal y real. Cada cuerpo es diferente y los resultados pueden variar de una persona a otra. No es un resultado garantizado.</p>' +
        '<h5 class="rev-title">Lo que dicen nuestras clientas</h5>' +
        '<div class="reviews">' + REVIEWS.map(function (r) {
          return '<div class="review"><div class="stars">★★★★★</div><p>“' + r.t + '”</p><span>' + r.p + ' · Opinión en TikTok Shop</span></div>';
        }).join("") + '</div>' +
        '<p class="proof-note">Opiniones reales de clientas sobre su experiencia personal con nuestros productos.</p>' +
        '</div>';
    }
    function loadInstagram() {
      if (!INSTAGRAM_REELS.length) return;
      if (window.instgrm) { window.instgrm.Embeds.process(); return; }
      var sc = document.createElement("script");
      sc.async = true; sc.src = "https://www.instagram.com/embed.js";
      document.body.appendChild(sc);
    }

    function defaultOpt(key, angle) {
      if (key === "inositol") return angle === "piel" ? 1 : 0;
      if (key === "magnesio") return 1; // el formato de 300 g es el que más compensa
      return 0;
    }
    function optionsHtml(key) {
      var opts = OPTIONS[key];
      if (opts.length < 2) return '<p class="dur-note solo">' + opts[0].s + ' · ' + opts[0].note + '</p>';
      return '<div class="dur">' + opts.map(function (o, i) {
        return '<button type="button" class="dur-opt" data-o="' + i + '">' + (o.badge ? '<em class="dur-badge">' + o.badge + '</em>' : '') +
          '<strong>' + o.t + '</strong><span>' + o.s + '</span><span class="dur-price">' + fmt(o.p) + '</span></button>';
      }).join("") + '</div><p class="dur-note"></p>';
    }

    function setupRoutine(level, angle, mainKey, preselect) {
      var box = document.getElementById("routine"), sel = {};
      sel[mainKey] = defaultOpt(mainKey, angle);
      if (preselect) sel[preselect] = defaultOpt(preselect, angle);
      loadInstagram();

      function update() {
        var keys = Object.keys(sel), lines = keys.map(function (k) { return OPTIONS[k][sel[k]]; });
        var count = lines.reduce(function (a, o) { return a + o.q; }, 0);
        var sub = lines.reduce(function (a, o) { return a + o.p; }, 0);
        var t = tierFor(count), code = t.min === 1 ? mainCode(mainKey) : t.code, disc = sub * t.pct / 100, total = sub - disc;

        box.querySelectorAll(".r-item[data-key]").forEach(function (el) {
          var k = el.dataset.key, on = k in sel, oi = on ? sel[k] : defaultOpt(k, angle), o = OPTIONS[k][oi];
          el.classList.toggle("on", on);
          var tg = el.querySelector(".toggle"); if (tg) tg.setAttribute("aria-pressed", on);
          el.querySelectorAll(".dur-opt").forEach(function (b) { b.classList.toggle("on", on && Number(b.dataset.o) === oi); });
          var note = el.querySelector(".dur-note:not(.solo)"); if (note) note.textContent = on ? o.note : "";
          var pr = el.querySelector(".prod em"); if (pr) pr.textContent = fmt(o.p);
          var ds = el.querySelector(".prod > div > span"); if (ds) ds.textContent = o.s;
        });
        box.querySelectorAll(".tier").forEach(function (el, i) { el.classList.toggle("active", TIERS[i] === t); el.classList.toggle("done", TIERS[i].min <= count); });
        document.getElementById("tiers-fill").style.width = (Math.min(count, 3) - 1) / 2 * 100 + "%";
        document.getElementById("sum-sub").textContent = fmt(sub);
        document.getElementById("sum-disc-label").textContent = "Descuento -" + t.pct + "%" + (t.min === 1 ? " (" + PRODUCTS[mainKey].name + ")" : "");
        document.getElementById("sum-disc").textContent = "-" + fmt(disc);
        bump(document.getElementById("sum-total"), fmt(total));
        // Regalo: cuenta lo que se paga en productos que no son vitamina C, ya con el descuento
        var giftBase = keys.reduce(function (a, k, i) { return k === "vitc" ? a : a + lines[i].p; }, 0) * (1 - t.pct / 100);
        var giftOn = giftBase >= GIFT_MIN, faltaShip = FREE_SHIPPING - total, faltaGift = GIFT_MIN - giftBase;
        var msg = giftOn
          ? "🎉 <strong>¡Envío gratis + Vitamina C de regalo!</strong> (valor 15,95 €)"
          : faltaShip > 0
            ? "🚚 Te faltan <strong>" + fmt(faltaShip) + "</strong> para el envío gratis y <strong>" + fmt(faltaGift) + "</strong> para tu Vitamina C de regalo 🎁"
            : "🚚 <strong>¡Envío gratis!</strong> Te faltan <strong>" + fmt(faltaGift) + "</strong> para llevarte una Vitamina C de regalo 🎁";
        document.getElementById("ship").innerHTML = '<p>' + msg + '</p>' +
          '<div class="rw-bar"><span style="width:' + Math.min(100, Math.max(giftBase, total) / GIFT_MIN * 100) + '%"></span>' +
          '<i class="mk' + (faltaShip <= 0 ? ' done' : '') + '" style="left:' + (FREE_SHIPPING / GIFT_MIN * 100) + '%">🚚<b>35 €</b></i>' +
          '<i class="mk' + (giftOn ? ' done' : '') + '" style="left:100%">🎁<b>60 €</b></i></div>';
        document.getElementById("plan-list").innerHTML = keys.slice().sort(function (a, b) { return ROUTINE[a].order - ROUTINE[b].order; }).map(function (k) {
          var R = ROUTINE[k];
          return '<li><span class="pl-ico">' + R.icon + '</span><div><span class="pl-when">' + R.when + ' · ' + R.how + '</span>' +
            '<strong>' + PRODUCTS[k].name + '</strong><p>' + R.why + '</p></div></li>';
        }).join("");
        var giftRow = document.getElementById("gift-row");
        giftRow.style.display = giftOn ? "" : "none";
        if (giftOn && !box.dataset.gift) { box.dataset.gift = "1"; confettiSmall(); track("GiftUnlocked"); }
        if (!giftOn) delete box.dataset.gift;
        var next = TIERS.filter(function (x) { return x.min > count; })[0];
        document.getElementById("nudge").innerHTML = next
          ? "👉 Añade " + (next.min - count) + " producto más o elige un tratamiento más largo y consigue un <strong>" + next.pct + "% en toda tu compra</strong>."
          : "🎉 ¡Tienes el descuento máximo! Te ahorras <strong>" + fmt(disc) + "</strong>.";
        var buy = document.getElementById("buy-routine");
        buy.href = linesLink(giftOn ? lines.concat([{ v: GIFT_VARIANT, q: 1 }]) : lines, code, level, angle);
        buy.dataset.what = "rutina_" + count;
        buy.textContent = "Comprar mi rutina con -" + t.pct + "% · " + fmt(total) + (giftOn ? " + regalo" : "") + " →";
      }

      box.querySelectorAll(".r-item[data-key] .toggle").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          var k = btn.closest(".r-item").dataset.key;
          if (k in sel) delete sel[k]; else sel[k] = defaultOpt(k, angle);
          ripple(btn, e);
          track("RoutineChange", { content_name: k, value: Object.keys(sel).length });
          update();
        });
      });
      box.querySelectorAll(".r-item[data-key] .dur-opt").forEach(function (b) {
        b.addEventListener("click", function (e) {
          var k = b.closest(".r-item").dataset.key;
          sel[k] = Number(b.dataset.o); ripple(b, e);
          track("RoutineChange", { content_name: k + "_" + OPTIONS[k][sel[k]].t, value: OPTIONS[k][sel[k]].q });
          update();
        });
      });
      update();
    }
    function bump(el, text) {
      if (el.textContent === text) return;
      el.textContent = text;
      el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
    }

    // Icono de cada producto por si la foto no carga
    var PRODUCT_ICON = { inositol: "🧬", magnesio: "🌙", vitc: "🍊", creatina: "💪", colageno: "✨" };
    function productImg(key) {
      var P = PRODUCTS[key];
      // Foto pequeña servida por Shopify (más rápida); si falla, se muestra el icono
      var src = P.img + (P.img.indexOf("?") > -1 ? "&" : "?") + "width=200";
      return '<span class="pimg" data-icon="' + PRODUCT_ICON[key] + '"><img src="' + src + '" alt="' + P.name + '" loading="lazy" onerror="this.parentNode.classList.add(\'noimg\');this.remove()"></span>';
    }
    function productCard(key) {
      var P = PRODUCTS[key];
      return '<div class="prod">' + productImg(key) + '<div><strong>' + P.name + '</strong><span>' + P.detail + '</span><em>' + P.price + '</em></div></div>';
    }

    function renderQuestion() {
      var list = visibleQuestions();
      var item = list[current];
      var pct = Math.round((current / list.length) * 100);
      var html = '<div class="progress"><span style="width:' + pct + '%"></span></div>' +
        '<div class="progress-label">Pregunta ' + (current + 1) + ' de ' + list.length + '</div>' +
        '<div class="question fade-in"><span class="q-emoji">' + item.emoji + '</span><h3>' + item.q + '</h3>' +
        '<p class="hint">' + (item.hint || "&nbsp;") + '</p><div class="options">';
      item.options.forEach(function (opt, i) {
        var sel = answers[item.id] === i ? " selected" : "";
        html += '<button type="button" class="option' + sel + '" data-i="' + i + '" style="animation-delay:' + (i * 70) + 'ms">' + opt[0] + '</button>';
      });
      html += '</div></div><div class="quiz-nav">' +
        (current > 0 ? '<button type="button" class="btn btn-ghost" id="back">← Atrás</button>' : '<span></span>') +
        '<span></span></div>';
      quiz.innerHTML = html;

      quiz.querySelectorAll(".option").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          quiz.querySelectorAll(".option").forEach(function (b) { b.classList.remove("selected"); });
          btn.classList.add("selected");
          ripple(btn, e);
          answers[item.id] = Number(btn.dataset.i);
          if (current === 0) track("StartTest");
          setTimeout(next, 380);
        });
      });
      var back = document.getElementById("back");
      if (back) back.addEventListener("click", function () { current--; renderQuestion(); });
    }

    function next() {
      if (current < visibleQuestions().length - 1) { current++; renderQuestion(); }
      else showEmailStep();
    }

    // Paso del email: se pide antes de enseñar el resultado
    var lead = null;
    function showEmailStep() {
      quiz.innerHTML = '<div class="progress"><span style="width:100%"></span></div>' +
        '<div class="email-step fade-in">' +
        '<span class="q-emoji">💌</span><h3>¡Tu resultado está listo!</h3>' +
        '<p class="hint">Déjanos tu email para ver tu resultado y tu recomendación personalizada con descuento.</p>' +
        '<div id="lead-form">' +
        '<label class="field"><span>Tu nombre</span><input type="text" name="name" autocomplete="given-name" placeholder="Laura"></label>' +
        '<label class="field"><span>Tu email *</span><input type="email" name="email" autocomplete="email" placeholder="tuemail@ejemplo.com" required></label>' +
        '<label class="check" id="privacy-row"><input type="checkbox" name="privacy"><span>He leído y acepto la <a href="' + PRIVACY_URL + '" target="_blank" rel="noopener">política de privacidad</a> *</span></label>' +
        '<label class="check"><input type="checkbox" name="marketing"><span>Quiero recibir mi resultado, consejos de salud hormonal y ofertas de Benissalud por email</span></label>' +
        '<p class="form-error" id="form-error"></p>' +
        '<button type="button" class="btn btn-accent pulse" id="lead-submit">Ver mi resultado →</button>' +
        '<p class="form-note">🔒 No compartimos tus datos con nadie. Puedes darte de baja cuando quieras.</p>' +
        '</div></div>' +
        '<div class="quiz-nav"><button type="button" class="btn btn-ghost" id="back">← Atrás</button><span></span></div>';
      document.getElementById("back").addEventListener("click", function () { renderQuestion(); });
      // Sin <form>: así funciona también dentro de vistas previas que bloquean los formularios
      var box = document.getElementById("lead-form");
      var field = function (n) { return box.querySelector('[name="' + n + '"]'); };
      var err = document.getElementById("form-error"), privacyRow = document.getElementById("privacy-row");
      function fail(msg, el) {
        err.textContent = msg;
        if (el) { el.classList.remove("shake"); void el.offsetWidth; el.classList.add("shake", "invalid"); }
      }
      function submitLead() {
        var email = field("email").value.trim();
        err.textContent = ""; box.querySelectorAll(".invalid").forEach(function (x) { x.classList.remove("invalid"); });
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { fail("Escribe un email válido para ver tu resultado.", field("email")); field("email").focus(); return; }
        if (!field("privacy").checked) { fail("Marca la casilla de la política de privacidad para continuar.", privacyRow); return; }
        lead = { email: email, name: field("name").value.trim(), marketing: field("marketing").checked };
        track("Lead", { content_name: "test_hormonal_email" });
        if (onShopify()) {
          // Guardamos sus respuestas, enviamos el formulario de Shopify y al volver mostramos el resultado
          var data = showResult(true);
          lead.sent = true;
          saveState();
          showLoading(true);
          sendLead(data, true);
          // Red de seguridad: si el envío no sale de la página, mostramos el resultado igualmente
          setTimeout(function () {
            if (quiz.querySelector(".loading")) { loadState(); showResult(); }
          }, 7000);
        } else {
          showLoading();
        }
      }
      document.getElementById("lead-submit").addEventListener("click", submitLead);
      box.addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.tagName === "INPUT") { e.preventDefault(); submitLead(); } });
      field("privacy").addEventListener("change", function () { privacyRow.classList.remove("invalid"); if (field("privacy").checked && /privacidad/.test(err.textContent)) err.textContent = ""; });
      track("ViewEmailStep");
    }

    // Envía el contacto a Shopify (formularios nativos de la tienda, mismo dominio)
    // Rellena el formulario nativo de Shopify y lo envía en segundo plano (sin salir de la página)
    function onShopify() { return !!(window.Shopify && window.Shopify.shop); }
    function shopifyForm(fields, topLevel) {
      try {
        var form = document.getElementById(fields.form_type === "customer" ? "sh-customer" : "sh-contact");
        if (topLevel) {
          // Se envía en la propia página: si Shopify pide el captcha antispam, la clienta lo ve y lo resuelve
          form.removeAttribute("target");
          var rt = form.querySelector('[name="return_to"]');
          if (!rt) { rt = document.createElement("input"); rt.type = "hidden"; rt.name = "return_to"; form.appendChild(rt); }
          rt.value = location.pathname + "?th=resultado";
        }
        Object.keys(fields).forEach(function (k) {
          if (k === "form_type") return;
          var el = form.querySelector('[name="' + k + '"]');
          if (el) el.value = fields[k];
        });
        if (form.requestSubmit) form.requestSubmit(); else form.submit();
      } catch (e) {}
    }
    function sendLead(data, topLevel) {
      if (!lead || !onShopify()) return;
      if (lead.marketing) {
        // Con consentimiento: se crea como cliente suscrito al marketing, con etiquetas de su resultado
        var f = { form_type: "customer", "contact[email]": lead.email, "contact[tags]": data.tags.join(", ") };
        if (lead.name) f["contact[first_name]"] = lead.name;
        shopifyForm(f, topLevel);
      } else {
        // Sin consentimiento de marketing: no se suscribe; la tienda recibe el contacto y su resultado por email
        shopifyForm({
          form_type: "contact", "contact[email]": lead.email, "contact[name]": lead.name || "",
          "contact[body]": "Test hormonal (sin consentimiento de marketing)\n" + data.summary
        }, topLevel);
      }
    }

    // Respuestas guardadas mientras se envía el formulario de Shopify
    var STATE_KEY = "th_test_state", savedUtm = "";
    function saveState() {
      try { sessionStorage.setItem(STATE_KEY, JSON.stringify({ answers: answers, lead: lead, ts: Date.now(), utm: new URLSearchParams(location.search).get("utm_source") || "" })); } catch (e) {}
    }
    function loadState() {
      try {
        var st = JSON.parse(sessionStorage.getItem(STATE_KEY) || "null");
        sessionStorage.removeItem(STATE_KEY);
        return st && Date.now() - st.ts < 30 * 60 * 1000 ? st : null;
      } catch (e) { return null; }
    }
    function showLoading(waitOnly) {
      quiz.innerHTML = '<div class="progress"><span style="width:100%"></span></div>' +
        '<div class="loading fade-in"><div class="spinner"></div><h3>Analizando tus respuestas…</h3><p>Estamos preparando tu perfil hormonal.</p></div>';
      if (!waitOnly) setTimeout(showResult, 1800);
    }

    function showResult(prepareOnly) {
      var score = 0, max = 0, areaPts = {}, picked = [];
      visibleQuestions().forEach(function (item) {
        var opt = item.options[answers[item.id]];
        if (item.score === false) return;
        score += opt[1];
        max += Math.max.apply(null, item.options.map(function (o) { return o[1]; }));
        if (opt[2] && picked.every(function (p) { return p.key !== opt[2]; })) {
          var m = MSGS[opt[2]];
          picked.push({ key: opt[2], pts: opt[1], msg: m });
          areaPts[m.area] = (areaPts[m.area] || 0) + opt[1];
        }
      });
      var ratio = max ? score / max : 0;
      var level = ratio < 0.25 ? "low" : ratio < 0.55 ? "mid" : "high";
      var r = RESULTS[level];

      // Enfoque: la etapa manda (menopausia / embarazo); si no, el área con más señales
      var stageKey = QUESTIONS[0].options[answers.etapa][2];
      var angle;
      if (stageKey === "menopausia" || stageKey === "perimenopausia") angle = "menopausia";
      else if (stageKey === "embarazo") angle = "fertilidad";
      else {
        angle = Object.keys(areaPts).sort(function (a, b) { return areaPts[b] - areaPts[a]; })[0];
        if (!angle || areaPts[angle] < 2) angle = "equilibrio";
      }
      var A = ANGLES[angle];

      // Motivos personalizados: la etapa primero y después las señales más fuertes
      var stage = picked.filter(function (p) { return p.key === stageKey; });
      var rest = picked.filter(function (p) { return p.key !== stageKey; }).sort(function (a, b) { return b.pts - a.pts; });
      var reasons = stage.concat(rest).slice(0, 4);

      var reasonsHtml = reasons.map(function (p) {
        var s = p.msg.study && STUDIES[p.msg.study];
        return '<li><strong>' + p.msg.title + '</strong><p>' + p.msg.text + '</p>' +
          (s ? '<a class="study" href="' + s.url + '" target="_blank" rel="noopener">📚 ' + s.label + '</a>' : '') + '</li>';
      }).join("");

      var combos = pickCombos(picked);
      // Si apenas hay señales hormonales, el inositol no es lo principal: recomendamos otro producto
      var notForHer = angle === "equilibrio" || (level === "low" && (angle === "animo" || angle === "energia"));
      var mainKey = notForHer ? combos[0].key : "inositol";
      var M = notForHer ? COMBOS[combos[0].key][combos[0].reason] : null;
      var routineItems = notForHer
        ? [{ key: "inositol", reason: "mantener", reco: true }].concat(combos.filter(function (c) { return c.key !== mainKey; }).map(function (c) { c.reco = false; return c; }))
        : combos;
      if (notForHer && routineItems.length > 1) routineItems[1].reco = true;

      // Datos del contacto (etiquetas para Shopify y resumen para el email a la tienda)
      var answered = {}, c1 = notForHer ? (routineItems[1] || routineItems[0]) : combos[0];
      visibleQuestions().forEach(function (item) { answered[item.q] = item.options[answers[item.id]][0]; });
      var utm = new URLSearchParams(location.search).get("utm_source") || (savedUtm || "");
      var leadData = {
        tags: ["test-hormonal", TAG_PREFIX + "resultado-" + level, TAG_PREFIX + "perfil-" + angle, TAG_PREFIX + "principal-" + mainKey, TAG_PREFIX + "pack-" + c1.key]
          .concat(utm ? [TAG_PREFIX + "origen-" + utm.toLowerCase().replace(/[^a-z0-9-]/g, "")] : []),
        summary: "Resultado: " + r.tag + " (" + Math.round(ratio * 100) + "%)\nPerfil: " + A.title +
          "\nProducto principal: " + PRODUCTS[mainKey].name + "\nComplemento recomendado: " + PRODUCTS[c1.key].name +
          "\nSeñales: " + picked.map(function (p) { return p.msg.title; }).join("; ") +
          "\n\nRespuestas:\n" + Object.keys(answered).map(function (q) { return "- " + q + " " + answered[q]; }).join("\n")
      };
      if (prepareOnly) return leadData;
      var tiersHtml = TIERS.map(function (t, i) {
        return '<div class="tier" data-i="' + i + '"><strong>-' + t.pct + '%</strong><span>' + t.label + '</span></div>';
      }).join("");
      var itemsHtml = routineItems.map(function (c) {
        var C = COMBOS[c.key][c.reason], s = STUDIES[C.study];
        var body = '<p>' + C.text + '</p>' + (s ? '<a class="study" href="' + s.url + '" target="_blank" rel="noopener">📚 ' + s.label + '</a>' : '');
        return '<div class="r-item' + (c.reco ? ' reco-item' : '') + '" data-key="' + c.key + '">' +
          (c.reco ? '<span class="combo-tag">★ Recomendado para ti · ' + C.why + '</span>' : '') +
          '<div class="r-row">' + productCard(c.key) + '<button type="button" class="toggle" aria-pressed="false"><span class="t-add">+ Añadir</span><span class="t-on">✓ Añadido</span></button></div>' +
          optionsHtml(c.key) +
          (c.reco ? body : '<details><summary>' + C.why + ': ¿por qué?</summary>' + body + '</details>') +
          '</div>';
      }).join("");
      var routineHtml = '<div class="routine" id="routine">' +
        '<span class="combo-tag">🎁 Descuento exclusivo del test</span>' +
        '<h4 class="reasons-title">Crea tu rutina y ahorra hasta un 20%</h4>' +
        '<p class="reasons-sub">Tu ' + PRODUCTS[mainKey].name + ' ya tiene un 10%. Con 2 productos tienes un 15% y con 3 o más, un 20% en <strong>toda tu compra</strong>.</p>' +
        '<div class="tiers"><div class="tiers-bar"><span id="tiers-fill"></span></div>' + tiersHtml + '</div>' +
        '<div class="ship rewards" id="ship"></div>' +
        '<div class="r-item fixed on" data-key="' + mainKey + '"><div class="r-row">' + productCard(mainKey) + '<span class="incl">✓ Incluido</span></div>' +
        '<p class="dur-label">¿Cuánto tiempo quieres cuidarte?</p>' + optionsHtml(mainKey) + '</div>' +
        itemsHtml +
        '<div class="plan"><h5>Por qué cada cosa en tu rutina</h5>' +
        '<p class="plan-sub">Ningún complemento lo hace todo. Cada uno trabaja en un frente distinto y, combinados según tus señales, cubren más que uno solo. Así quedaría tu día:</p>' +
        '<ol class="plan-list" id="plan-list"></ol><p class="plan-foot">⏱️ Menos de 1 minuto al día · Todo en polvo, se disuelve en agua, zumo o café</p></div>' +
        proofHtml() +
        '<div class="summary">' +
        '<div class="sum-row"><span>Subtotal</span><span id="sum-sub"></span></div>' +
        '<div class="sum-row disc"><span id="sum-disc-label"></span><span id="sum-disc"></span></div>' +
        '<div class="sum-row gift" id="gift-row" style="display:none"><span>🎁 Vitamina C pura de regalo</span><span><s>15,95 €</s> 0,00 €</span></div>' +
        '<div class="sum-row total"><span>Total</span><span id="sum-total"></span></div>' +
        '<p class="nudge" id="nudge"></p>' +
        '<a class="btn btn-accent track-buy" id="buy-routine" data-what="rutina" href="#">Comprar mi rutina →</a>' +
        '<p class="form-note">El descuento se aplica automáticamente al pagar.</p>' +
        '</div></div>';

      quiz.innerHTML = '<div class="result fade-in">' +
        '<span class="result-tag ' + level + '">' + r.tag + '</span>' +
        '<h3>' + r.title + '</h3>' +
        '<div class="score-row"><span class="score-num" id="score-num">0%</span><span>de señales hormonales detectadas</span></div>' +
        '<p>' + r.text + '</p>' +
        '<div class="meter"><div class="meter-bar"><span class="meter-dot" id="dot"></span></div>' +
        '<div class="meter-labels"><span>En equilibrio</span><span>Señales leves</span><span>Señales claras</span></div></div>' +
        '<h4 class="reasons-title">' + (notForHer ? 'Lo que nos dicen tus respuestas' : 'Por qué el inositol encaja contigo') + '</h4>' +
        '<p class="reasons-sub">Según tus respuestas y lo que dicen los estudios:</p>' +
        '<ul class="reasons stagger">' + reasonsHtml + '</ul>' +
        '<p class="notice">' + STUDY_NOTICE + '</p>' +
        (notForHer ? '' : '<div id="body-slot"></div>') +
        (notForHer
          ? '<div class="reco"><span class="reco-tag">Tu recomendación personalizada</span><h4>Lo que más encaja contigo: ' + PRODUCTS[mainKey].name + '</h4>' +
            '<p>Tus respuestas muestran pocas señales hormonales, así que ahora mismo el inositol no es lo que más necesitas. ' + M.why + ', lo que mejor encaja contigo es el ' + PRODUCTS[mainKey].name + '.</p>' +
            '<p>' + M.text + '</p>' + (STUDIES[M.study] ? '<p class="dose"><a href="' + STUDIES[M.study].url + '" target="_blank" rel="noopener" style="color:#c9f5e8">📚 ' + STUDIES[M.study].label + '</a></p>' : '') +
            productCard(mainKey)
          : '<div class="reco"><span class="reco-tag">Tu recomendación personalizada</span><h4>' + A.title + '</h4><p>' + A.text + '</p>' +
            '<p class="body-note">🧬 <strong>Una molécula que tu cuerpo ya fabrica.</strong> El Myo-Inositol no es algo ajeno: tus riñones lo producen cada día y tus células lo usan como mensajero.</p>' +
            productCard("inositol") +
            '<p class="dose">Myo-Inositol 100% puro en polvo. Se toma 2 g al día (una cuchara dosificadora) y un tarro da para más de 3 meses, el tiempo en el que los estudios valoran los efectos.</p>') +
        '<p class="price-line"><s>' + PRODUCTS[mainKey].price + '</s> <strong>' + fmt(priceOf(mainKey) * .9) + '</strong> <span class="badge">-10% por hacer el test</span></p>' +
        '<a class="btn btn-accent track-buy" data-what="' + mainKey + '" href="' + mainLink(mainKey, level, angle) + '">' + (notForHer ? 'Quiero mi ' + PRODUCTS[mainKey].name : A.cta) + ' →</a>' +
        '<a class="reco-more" href="#routine">o crea tu rutina y ahorra hasta un 20% ↓</a></div>' +
        routineHtml +
        '<p class="legal-note">Resultado orientativo. No sustituye la consulta con un profesional sanitario. Si estás embarazada, das el pecho o tomas medicación, consulta antes con tu médico. Los complementos alimenticios no son medicamentos y no están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad, ni deben utilizarse como sustitutos de una dieta equilibrada y un modo de vida saludable.</p>' +
        '<div class="restart"><button type="button" class="btn btn-ghost" id="restart">Repetir el test</button></div>' +
        '</div>';

      setTimeout(function () {
        var dot = document.getElementById("dot");
        if (dot) dot.style.left = Math.max(4, Math.min(96, ratio * 100)) + "%";
      }, 60);
      countUp(document.getElementById("score-num"), Math.round(ratio * 100));
      if (!notForHer) showBodySection(document.getElementById("body-slot"));
      setupRoutine(level, angle, mainKey, notForHer ? null : combos[0].key);
      quiz.querySelectorAll(".stagger > *, .routine, .reco").forEach(function (el, i) {
        el.style.animationDelay = (250 + i * 120) + "ms";
        if (!el.parentNode.classList.contains("stagger")) { el.classList.add("pop-in"); }
      });
      confetti();

      if (lead && !lead.sent) { lead.sent = true; sendLead(leadData, false); }
      track("CompleteRegistration", { content_name: "test_hormonal", status: level, content_category: angle });
      quiz.querySelectorAll(".track-buy").forEach(function (a) {
        a.addEventListener("click", function () {
          track("Lead", { content_name: a.dataset.what, status: level, content_category: angle });
        });
      });
      document.getElementById("restart").addEventListener("click", function () {
        answers = {}; current = 0; lead = null; renderQuestion();
      });
      quiz.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Botones "Hacer el test" llevan al test
    document.querySelectorAll("[data-start]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        quiz.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    // Ocultar el botón fijo del móvil cuando el test está a la vista
    var sticky = document.getElementById("sticky-cta");
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        // Se oculta cuando el test está a la vista o cuando ya ha empezado
        sticky.classList.toggle("hidden", entries[0].isIntersecting || current > 0 || !!lead);
      }, { threshold: 0 }).observe(document.getElementById("test"));
    }

    // Efecto onda al pulsar
    function ripple(el, e) {
      var r = el.getBoundingClientRect(), d = Math.max(r.width, r.height), sp = document.createElement("span");
      sp.className = "ripple";
      sp.style.width = sp.style.height = d + "px";
      sp.style.left = ((e && e.clientX ? e.clientX - r.left : r.width / 2) - d / 2) + "px";
      sp.style.top = ((e && e.clientY ? e.clientY - r.top : r.height / 2) - d / 2) + "px";
      el.appendChild(sp);
      setTimeout(function () { sp.remove(); }, 650);
    }
    document.querySelectorAll(".btn").forEach(function (b) { b.addEventListener("click", function (e) { ripple(b, e); }); });

    var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

    function countUp(el, to) {
      if (!el) return;
      if (reduce) { el.textContent = to + "%"; return; }
      var start = null;
      function step(t) {
        if (!start) start = t;
        var k = Math.min(1, (t - start) / 1200), v = Math.round(to * (1 - Math.pow(1 - k, 3)));
        el.textContent = v + "%";
        if (k < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    function confettiSmall() {
      if (reduce) return;
      var colors = ["#2f80c8", "#14a38b", "#ffd54a"];
      for (var i = 0; i < 26; i++) {
        var c = document.createElement("span");
        c.className = "confetti";
        c.style.left = (35 + Math.random() * 30) + "vw";
        c.style.background = colors[i % colors.length];
        c.style.animationDuration = (1.4 + Math.random()) + "s";
        document.body.appendChild(c);
        (function (n) { setTimeout(function () { n.remove(); }, 2600); })(c);
      }
    }
    function confetti() {
      if (reduce) return;
      var colors = ["#2f80c8", "#14a38b", "#4fbf8f", "#8fd3f4", "#0e3a4f"];
      for (var i = 0; i < 70; i++) {
        var c = document.createElement("span");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "vw";
        c.style.background = colors[i % colors.length];
        c.style.animationDuration = (1.8 + Math.random() * 1.8) + "s";
        c.style.animationDelay = (Math.random() * .5) + "s";
        c.style.transform = "rotate(" + Math.random() * 360 + "deg)";
        document.body.appendChild(c);
        (function (n) { setTimeout(function () { n.remove(); }, 4200); })(c);
      }
    }

    // Palabra que cambia en el titular
    var words = document.querySelectorAll(".rotator .word"), w = 0;
    if (!reduce && words.length) setInterval(function () {
      var cur = words[w];
      cur.classList.remove("is-on"); cur.classList.add("is-out");
      setTimeout(function () { cur.classList.remove("is-out"); }, 500);
      w = (w + 1) % words.length;
      words[w].classList.add("is-on");
    }, 2200);

    // Señales del hero que se pueden marcar
    var signs = document.querySelectorAll(".sign"), signsMsg = document.getElementById("signs-msg");
    signs.forEach(function (sgn) {
      sgn.addEventListener("click", function () {
        sgn.classList.toggle("on");
        var n = document.querySelectorAll(".sign.on").length;
        document.getElementById("signs-bar").style.width = (n / signs.length * 100) + "%";
        signsMsg.classList.toggle("hot", n >= 2);
        signsMsg.textContent = n === 0 ? "Si te has identificado con dos o más, este test es para ti."
          : n === 1 ? "1 señal marcada. ¿Te pasa alguna más?"
          : n + " señales marcadas: tu cuerpo te está pidiendo atención. Descubre qué significan.";
        document.getElementById("signs-cta").classList.toggle("show", n >= 2);
        if (n === 1) track("SignsTapped");
      });
    });

    // Aparecer al hacer scroll
    var revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !reduce) {
      var ro = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add("in"); ro.unobserve(en.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      revealEls.forEach(function (el, i) {
        el.style.transitionDelay = ((i % 3) * 90) + "ms";
        ro.observe(el);
      });
    } else revealEls.forEach(function (el) { el.classList.add("in"); });

    // Ligero efecto 3D en la tarjeta del hero (ordenador)
    var card = document.querySelector(".hero-card");
    if (card && !reduce && matchMedia("(hover: hover)").matches) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = "perspective(900px) rotateY(" + (x * 6) + "deg) rotateX(" + (-y * 6) + "deg)";
      });
      card.addEventListener("mouseleave", function () { card.style.transform = ""; });
    }

    document.getElementById("ba-section").innerHTML =
      '<img src="' + BEFORE_AFTER_IMG + '" alt="Antes y después del acné hormonal tomando Myo-Inositol" loading="lazy">' +
      '<div><blockquote class="proof-quote">“' + BEFORE_AFTER_QUOTE + '”<div class="stars">★★★★★</div></blockquote>' +
      '<p class="proof-note">Experiencia personal y real. Cada cuerpo es diferente y los resultados pueden variar de una persona a otra. No es un resultado garantizado.</p>' +
      '<a href="#test" class="btn btn-accent" data-start>Hacer mi test gratis →</a></div>';
    document.querySelector("#ba-section [data-start]").addEventListener("click", function (e) { e.preventDefault(); quiz.scrollIntoView({ behavior: "smooth", block: "start" }); });

    // El inositol en tu cuerpo: puntos interactivos
    var ORGANS = [
      { e: "🧠", t: "En tu cerebro", d: "Participa en las señales de neurotransmisores como la serotonina, muy relacionada con el ánimo, la calma y el descanso." },
      { e: "🧬", t: "En todas tus células", d: "Forma parte de la membrana de cada una de tus células y ayuda a que se comuniquen entre ellas y con tus hormonas." },
      { e: "🫘", t: "En tus riñones", d: "Aquí lo fabrica tu propio cuerpo a partir de la glucosa. También lo obtienes de alimentos como la naranja, las legumbres y los frutos secos." },
      { e: "🌸", t: "En tus ovarios", d: "Ayuda a que los ovarios respondan a la hormona FSH, clave para que el óvulo madure y haya ovulación. Por eso se estudia tanto en el SOP." },
      { e: "⚡", t: "En tus músculos e hígado", d: "Actúa como mensajero de la insulina: ayuda a que la glucosa entre en las células y se convierta en energía, en lugar de picos y bajones." }
    ];
    var hsEls = document.querySelectorAll("#cuerpo .hs"), organCard = document.getElementById("organ-card"), organDots = document.getElementById("organ-dots");
    var organI = 0, organAuto = null;
    ORGANS.forEach(function (o, i) {
      var b = document.createElement("button"); b.type = "button"; b.setAttribute("aria-label", o.t);
      b.addEventListener("click", function () { pickOrgan(i, true); });
      organDots.appendChild(b);
    });
    function pickOrgan(i, byUser) {
      organI = i;
      var o = ORGANS[i];
      organCard.innerHTML = '<span class="o-emoji">' + o.e + '</span><h3>' + o.t + '</h3><p>' + o.d + '</p>';
      organCard.classList.remove("swap"); void organCard.offsetWidth; organCard.classList.add("swap");
      hsEls.forEach(function (h, j) { h.classList.toggle("on", j === i); });
      organDots.querySelectorAll("button").forEach(function (b, j) { b.classList.toggle("on", j === i); });
      if (byUser) { clearInterval(organAuto); organAuto = null; track("BodyExplore", { content_name: o.t }); }
    }
    hsEls.forEach(function (h) { h.addEventListener("click", function () { pickOrgan(Number(h.dataset.i), true); }); });
    pickOrgan(0);
    var bodySection = document.getElementById("cuerpo");
    bodySection.parentNode.removeChild(bodySection);
    function showBodySection(slot) {
      if (!slot) return;
      bodySection.hidden = false;
      bodySection.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
      slot.appendChild(bodySection);
      pickOrgan(0);
      clearInterval(organAuto); organAuto = null;
      if (!reduce) organAuto = setInterval(function () { pickOrgan((organI + 1) % ORGANS.length); }, 3800);
    }

    document.getElementById("year").textContent = new Date().getFullYear();
    var restored = loadState();
    if (restored && restored.answers && restored.lead) {
      answers = restored.answers; lead = restored.lead; lead.sent = true; savedUtm = restored.utm || "";
      current = 1;
      showResult();
      setTimeout(function () { quiz.scrollIntoView({ block: "start" }); }, 50);
    } else {
      renderQuestion();
    }
  