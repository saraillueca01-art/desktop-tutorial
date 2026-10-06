(function(){
var root=document.getElementById('th-app');if(!root){root=document.createElement('div');root.id='th-app';document.body.appendChild(root);}
document.head.insertAdjacentHTML('beforeend',"<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;1,9..144,400&family=Inter:wght@300;400;500;600&display=swap\" rel=\"stylesheet\"><style>#th-app {\n      --ink: #0e3a4f;\n      --ink-soft: #2b7a9a;\n      --text: #1f3340;\n      --muted: #5f7480;\n      --bg: #ffffff;\n      --bg-alt: #f2f9fb;\n      --white: #ffffff;\n      --line: #dceaf0;\n      --accent: #14a38b;\n      --accent-soft: #dcf4ee;\n      --blue: #2f80c8;\n      --blue-soft: #e3f0fb;\n      --sage: #4fbf8f;\n      --grad: linear-gradient(120deg, #2f80c8 0%, #14a38b 100%);\n      --radius: 24px;\n      --max: 1080px;\n    }\n#th-app, #th-app * { box-sizing: border-box; margin: 0; padding: 0; }\n#th-app { scroll-behavior: smooth; }\n#th-app {\n      font-family: \"Inter\", system-ui, sans-serif; color: var(--text); background: var(--bg);\n      line-height: 1.65; overflow-x: hidden; -webkit-font-smoothing: antialiased;\n    }\n#th-app a { color: inherit; }\n#th-app h1, #th-app h2, #th-app h3 { font-family: \"Fraunces\", Georgia, serif; font-weight: 400; color: var(--ink); line-height: 1.15; letter-spacing: -.01em; }\n#th-app h1 em, #th-app h2 em { font-style: italic; color: var(--accent); }\n#th-app p { color: var(--muted); }\n#th-app .container { width: 100%; max-width: var(--max); margin: 0 auto; padding: 0 20px; }\n#th-app section { padding: 88px 0; }\n#th-app .eyebrow {\n      display: inline-block; font-size: .72rem; font-weight: 600; letter-spacing: .18em; text-transform: uppercase;\n      color: var(--ink-soft); margin-bottom: 1rem;\n    }\n#th-app .center { text-align: center; }\n#th-app .btn {\n      display: inline-flex; align-items: center; justify-content: center; gap: 10px;\n      padding: 17px 34px; border-radius: 999px; border: 0;\n      background: var(--ink); color: var(--white); text-decoration: none;\n      font: 600 1rem \"Inter\", sans-serif; letter-spacing: .01em; cursor: pointer;\n      box-shadow: 0 10px 30px rgba(14, 58, 79, .22); transition: transform .15s, background .2s;\n    }\n#th-app .btn:hover { background: #164e66; transform: translateY(-1px); }\n#th-app .btn-accent { background: var(--accent); box-shadow: 0 10px 30px rgba(20, 163, 139, .35); }\n#th-app .btn-accent:hover { background: #0f8a75; }\n#th-app .btn-ghost { background: none; box-shadow: none; color: var(--ink-soft); padding: 10px 14px; font-weight: 500; }\n#th-app .btn-ghost:hover { background: none; color: var(--ink); transform: none; }\n#th-app .topbar { background: var(--grad); color: #d9eef5; text-align: center; font-size: .82rem; padding: 9px 16px; }\n#th-app .topbar strong { color: var(--white); }\n#th-app .hero { padding: 64px 0 80px; background: var(--white); position: relative; overflow: hidden; isolation: isolate; }\n#th-app .hero-grid { display: grid; grid-template-columns: 1.15fr .85fr; gap: 56px; align-items: center; }\n#th-app .hero h1 { font-size: clamp(2.3rem, 5.4vw, 3.9rem); margin-bottom: 1.3rem; }\n#th-app .hero .lead { font-size: 1.12rem; max-width: 520px; margin-bottom: 2rem; color: var(--text); }\n#th-app .hero-meta { display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 1.6rem; font-size: .88rem; color: var(--muted); }\n#th-app .hero-meta span::before { content: \"\u2713\"; color: var(--sage); font-weight: 700; margin-right: 7px; }\n#th-app .hero-card {\n      background: var(--white); border-radius: var(--radius); padding: 30px; border: 1px solid var(--line);\n      box-shadow: 0 30px 60px rgba(14, 58, 79, .08);\n    }\n#th-app .hero-card h3 { font-size: 1.25rem; margin-bottom: 1rem; }\n#th-app .signs { list-style: none; display: grid; gap: 10px; }\n#th-app .signs li { display: flex; gap: 12px; align-items: center; padding: 12px 14px; background: var(--bg); border-radius: 14px; font-size: .95rem; color: var(--text); }\n#th-app .signs li b { flex: none; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--accent-soft); color: var(--ink); font-weight: 600; font-size: .85rem; }\n#th-app .hero-card p { margin-top: 1rem; font-size: .9rem; }\n#th-app .steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }\n#th-app .step { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 28px; }\n#th-app .step .num { font-family: \"Fraunces\", serif; font-size: 2.2rem; line-height: 1; margin-bottom: .8rem; background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; display: inline-block; }\n#th-app .step h3 { font-size: 1.15rem; margin-bottom: .4rem; }\n#th-app h2 { font-size: clamp(1.8rem, 3.6vw, 2.5rem); margin-bottom: .8rem; }\n#th-app .section-intro { max-width: 600px; margin: 0 auto; }\n#th-app #test { background: var(--white); position: relative; overflow: hidden; overflow: clip; }\n#th-app .quiz {\n      max-width: 680px; margin: 40px auto 0; background: var(--white); border-radius: var(--radius);\n      border: 1px solid var(--line); padding: 36px; box-shadow: 0 30px 60px rgba(14, 58, 79, .07);\n      scroll-margin-top: 16px;\n    }\n#th-app .progress { height: 6px; background: var(--bg-alt); border-radius: 99px; overflow: hidden; margin-bottom: 10px; }\n#th-app .progress span { display: block; height: 100%; width: 0; background: linear-gradient(90deg, var(--accent), var(--ink-soft)); transition: width .35s ease; }\n#th-app .progress-label { font-size: .8rem; color: var(--muted); margin-bottom: 1.6rem; }\n#th-app .question h3 { font-size: clamp(1.3rem, 3vw, 1.6rem); margin-bottom: .4rem; }\n#th-app .question .hint { font-size: .9rem; margin-bottom: 1.4rem; }\n#th-app .options { display: grid; gap: 10px; }\n#th-app .option {\n      display: flex; align-items: center; gap: 14px; width: 100%; text-align: left;\n      padding: 16px 18px; border-radius: 16px; border: 1.5px solid var(--line); background: var(--white);\n      font: 500 1rem \"Inter\", sans-serif; color: var(--text); cursor: pointer; transition: border-color .15s, background .15s;\n    }\n#th-app .option::before { content: \"\"; flex: none; width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid var(--line); transition: all .15s; }\n#th-app .option:hover { border-color: var(--accent); background: #f6fcfa; }\n#th-app .option.selected { border-color: var(--accent); background: var(--accent-soft); }\n#th-app .option.selected::before { border-color: var(--accent); background: var(--accent); box-shadow: inset 0 0 0 4px var(--accent-soft); }\n#th-app .quiz-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 1.4rem; min-height: 44px; }\n#th-app .fade-in { animation: fade .35s ease; }\n@keyframes fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }\n#th-app .loading { text-align: center; padding: 30px 0; }\n#th-app .spinner { width: 46px; height: 46px; border-radius: 50%; border: 4px solid var(--accent-soft); border-top-color: var(--accent); margin: 0 auto 1.2rem; animation: spin .9s linear infinite; }\n@keyframes spin { to { transform: rotate(360deg); } }\n#th-app .result-tag { display: inline-block; padding: 6px 14px; border-radius: 99px; font-size: .78rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; margin-bottom: 1rem; }\n#th-app .result-tag.low { background: #dff3ea; color: #137a63; }\n#th-app .result-tag.mid { background: #e3f0fb; color: #1f5f99; }\n#th-app .result-tag.high { background: var(--accent-soft); color: #0e3a4f; }\n#th-app .result h3 { font-size: clamp(1.5rem, 3.4vw, 1.9rem); margin-bottom: .8rem; }\n#th-app .result > p { color: var(--text); margin-bottom: 1.2rem; }\n#th-app .meter { margin: 1.4rem 0; }\n#th-app .meter-bar { height: 10px; border-radius: 99px; background: linear-gradient(90deg, var(--sage), #2f80c8, var(--accent)); position: relative; }\n#th-app .meter-dot { position: absolute; top: 50%; width: 22px; height: 22px; border-radius: 50%; background: var(--white); border: 4px solid var(--ink); transform: translate(-50%, -50%); transition: left .8s ease; left: 0; }\n#th-app .meter-labels { display: flex; justify-content: space-between; font-size: .75rem; color: var(--muted); margin-top: 8px; }\n#th-app .prod { display: flex; align-items: center; gap: 12px; background: var(--white); border-radius: 14px; padding: 8px 12px 8px 8px; margin: 0 0 1rem; color: var(--text); }\n#th-app .prod img { width: 56px; height: 56px; object-fit: cover; border-radius: 10px; flex: none; background: var(--bg-alt); }\n#th-app .pimg { flex: none; display: grid; place-items: center; width: 56px; height: 56px; border-radius: 10px; background: var(--bg-alt); overflow: hidden; }\n#th-app .pimg img { width: 100%; height: 100%; }\n#th-app .pimg.noimg { background: linear-gradient(135deg, #dceefa, #d6f3ea); }\n#th-app .pimg.noimg::before { content: attr(data-icon); font-size: 1.7rem; }\n#th-app .r-row .pimg { width: 48px; height: 48px; }\n#th-app .prod strong { display: block; font-size: .92rem; color: var(--ink); line-height: 1.3; }\n#th-app .prod span { font-size: .8rem; color: var(--muted); }\n#th-app .prod em { display: block; font-style: normal; font-weight: 600; font-size: .85rem; color: var(--ink); white-space: nowrap; }\n#th-app .combo-tag { display: inline-block; font-size: .72rem; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--accent); margin-bottom: .4rem; }\n#th-app .btn-line { background: var(--white); color: var(--ink); border: 1.5px solid var(--ink); box-shadow: none; }\n#th-app .btn-line:hover { background: var(--ink); color: var(--white); }\n#th-app .legal-note { font-size: .75rem; color: var(--muted); margin-top: 1rem; }\n#th-app .reasons-title { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.3rem; color: var(--ink); margin-top: 1.6rem; }\n#th-app .reasons-sub { font-size: .9rem; margin-bottom: .8rem; }\n#th-app .reasons { list-style: none; display: grid; gap: 10px; margin-bottom: 1.6rem; }\n#th-app .reasons li { padding: 16px; background: var(--bg); border-radius: 14px; border-left: 3px solid var(--accent); }\n#th-app .reasons li strong { display: block; color: var(--ink); margin-bottom: .3rem; }\n#th-app .reasons li p { font-size: .93rem; color: var(--text); }\n#th-app .reasons .study { display: inline-block; margin-top: .5rem; font-size: .78rem; color: var(--ink-soft); text-decoration: underline; text-underline-offset: 2px; }\n#th-app .reco-tag { display: inline-block; font-size: .7rem; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; color: #8fe0cb; margin-bottom: .5rem; }\n#th-app .reco .dose { font-size: .85rem; color: #b9d6e0; border-top: 1px solid rgba(255,255,255,.15); padding-top: .9rem; }\n#th-app .reco { background: linear-gradient(145deg, #0e3a4f 0%, #145b6e 60%, #13806f 100%); color: #d9eef5; border-radius: 20px; padding: 26px; }\n#th-app .reco h4 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.35rem; color: var(--white); margin-bottom: .5rem; }\n#th-app .reco p { color: #cfe6ee; margin-bottom: 1.3rem; font-size: .95rem; }\n#th-app .reco .btn { width: 100%; }\n#th-app .restart { margin-top: 1rem; text-align: center; }\n#th-app .quotes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }\n#th-app .quote { background: var(--white); border: 1px solid var(--line); border-radius: var(--radius); padding: 26px; }\n#th-app .quote .stars { color: #e0a85a; letter-spacing: 2px; margin-bottom: .6rem; }\n#th-app .quote p { color: var(--text); font-size: .96rem; margin-bottom: 1rem; }\n#th-app .quote span { font-size: .85rem; color: var(--muted); }\n#th-app .faq { max-width: 720px; margin: 40px auto 0; }\n#th-app details { border-bottom: 1px solid var(--line); padding: 18px 0; }\n#th-app summary { cursor: pointer; list-style: none; font-weight: 600; color: var(--ink); display: flex; justify-content: space-between; gap: 16px; }\n#th-app summary::-webkit-details-marker { display: none; }\n#th-app summary::after { content: \"+\"; font-size: 1.3rem; line-height: 1; color: var(--accent); }\n#th-app details[open] summary::after { content: \"\u2013\"; }\n#th-app details p { margin-top: .7rem; }\n#th-app .final { background: var(--white); text-align: center; }\n#th-app .final-box { background: var(--grad); border-radius: 32px; padding: 64px 24px; position: relative; overflow: hidden; }\n#th-app .final h2 { color: var(--white); }\n#th-app .final h2 em { color: #c9f5e8; }\n#th-app .final p { color: #cfe6ee; margin-bottom: 2rem; }\n#th-app .final .btn { background: var(--white); color: var(--ink); }\n#th-app .final p { color: #e6f4f8; }\n#th-app footer { padding: 32px 0 110px; font-size: .78rem; text-align: center; }\n#th-app footer p { max-width: 720px; margin: 0 auto .6rem; }\n#th-app .sticky-cta {\n      position: fixed; left: 12px; right: 12px; bottom: 12px; z-index: 40; display: none;\n      transition: transform .3s, opacity .3s;\n    }\n#th-app .sticky-cta .btn { width: 100%; }\n#th-app .sticky-cta.hidden { transform: translateY(140%); opacity: 0; pointer-events: none; }\n@media (max-width: 860px) {\n#th-app section { padding: 64px 0; }\n#th-app .hero { padding: 40px 0 56px; }\n#th-app .hero-grid, #th-app .steps, #th-app .quotes { grid-template-columns: 1fr; }\n#th-app .hero-grid { gap: 36px; }\n#th-app .hero .btn { width: 100%; }\n#th-app .quiz { padding: 24px 18px; }\n#th-app .sticky-cta { display: block; }\n#th-app .routine { padding: 16px 12px; }\n#th-app .tier strong { font-size: 1.2rem; }\n}\n#th-app .body-section { position: relative; overflow: hidden; }\n#th-app .result .body-section { padding: 8px 0 24px; margin-bottom: 8px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }\n#th-app .result .body-section .container { padding: 0; }\n#th-app .result .body-section h2 { font-size: clamp(1.4rem, 3.4vw, 1.8rem); margin-top: .6rem; }\n#th-app .result .body-grid { grid-template-columns: 1fr; gap: 12px; margin-top: 18px; }\n#th-app .result .body-figure svg { max-width: 230px; }\n#th-app .body-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 40px; align-items: center; margin-top: 36px; }\n#th-app .body-figure svg { width: 100%; max-width: 300px; display: block; margin: 0 auto; overflow: visible; }\n#th-app .silhouette > * { fill: url(#bodyGrad); stroke: #b9dbe8; stroke-width: 1.5; }\n#th-app .flow path { fill: none; stroke: var(--accent); stroke-width: 2.5; stroke-linecap: round; stroke-dasharray: 4 10; opacity: .55; animation: flow 1.6s linear infinite; }\n@keyframes flow { to { stroke-dashoffset: -28; } }\n#th-app .hs { cursor: pointer; }\n#th-app .hs .ring { fill: rgba(20, 163, 139, .18); transform-box: fill-box; transform-origin: center; animation: ringPulse 2.2s ease-out infinite; }\n#th-app .hs .dot { fill: var(--white); stroke: var(--accent); stroke-width: 2; transition: all .3s; }\n#th-app .hs text { font-size: 9px; text-anchor: middle; pointer-events: none; }\n#th-app .hs.on .dot { fill: var(--accent); stroke: var(--white); transform: scale(1.5); transform-box: fill-box; transform-origin: center; }\n#th-app .hs.on .ring { fill: rgba(47, 128, 200, .25); animation-duration: 1.2s; }\n#th-app .hs:nth-of-type(2) .ring { animation-delay: .4s; }\n#th-app .hs:nth-of-type(3) .ring { animation-delay: .8s; }\n#th-app .hs:nth-of-type(4) .ring { animation-delay: 1.2s; }\n#th-app .hs:nth-of-type(5) .ring { animation-delay: 1.6s; }\n@keyframes ringPulse { 0% { transform: scale(.6); opacity: .9; } 100% { transform: scale(1.9); opacity: 0; } }\n#th-app .organ-card { background: var(--white); border: 1.5px solid var(--line); border-radius: 22px; padding: 22px; box-shadow: 0 20px 40px rgba(14, 58, 79, .07); min-height: 170px; }\n#th-app .organ-card .o-emoji { font-size: 2.2rem; display: inline-block; animation: bob 2.4s ease-in-out infinite; }\n#th-app .organ-card h3 { font-size: 1.35rem; margin: .3rem 0 .4rem; }\n#th-app .organ-card p { color: var(--text); font-size: .98rem; }\n#th-app .organ-card.swap { animation: cardIn .45s ease; }\n@keyframes cardIn { from { opacity: 0; transform: translateY(10px) scale(.98); } to { opacity: 1; transform: none; } }\n#th-app .organ-dots { display: flex; gap: 8px; justify-content: center; margin: 12px 0 22px; }\n#th-app .organ-dots button { width: 10px; height: 10px; border-radius: 99px; border: 0; background: var(--line); cursor: pointer; padding: 0; transition: all .3s; }\n#th-app .organ-dots button.on { width: 26px; background: var(--grad); }\n#th-app .cell-anim { background: linear-gradient(180deg, #f2f9fb, #ffffff); border: 1.5px solid var(--line); border-radius: 22px; padding: 18px 18px 8px; }\n#th-app .cell-anim h3 { font-size: 1.15rem; margin-bottom: .4rem; text-align: left; }\n#th-app .cell-anim svg { width: 100%; display: block; overflow: visible; }\n#th-app .cell { fill: rgba(20, 163, 139, .06); stroke: var(--accent); stroke-width: 2.5; stroke-dasharray: 6 5; }\n#th-app .cell-glow { fill: #c9f5e8; opacity: 0; animation: cGlow 6s ease-in-out infinite; }\n#th-app .receptor { fill: var(--blue); }\n#th-app .key { font-size: 26px; animation: cKey 6s ease-in-out infinite; }\n#th-app .key.mg { font-family: \"Fraunces\", Georgia, serif; font-weight: 700; font-size: 24px; fill: var(--accent); }\n#th-app .msg { fill: var(--accent); opacity: 0; }\n#th-app .m1 { animation: cMsg1 6s ease-in-out infinite; }\n#th-app .m2 { animation: cMsg2 6s ease-in-out infinite; }\n#th-app .m3 { animation: cMsg3 6s ease-in-out infinite; }\n#th-app .glu { fill: var(--blue); opacity: .85; }\n#th-app .g1 { animation: cGlu1 6s ease-in-out infinite; }\n#th-app .g2 { animation: cGlu2 6s ease-in-out infinite; }\n#th-app .g3 { animation: cGlu3 6s ease-in-out infinite; }\n#th-app .bolt { font-size: 26px; opacity: 0; transform-box: fill-box; transform-origin: center; animation: cBolt 6s ease-in-out infinite; }\n@keyframes cKey { 0% { transform: translateX(0); opacity: 0; } 8% { opacity: 1; } 28%, 85% { transform: translateX(140px); opacity: 1; } 95%, 100% { transform: translateX(140px); opacity: 0; } }\n@keyframes cMsg1 { 0%, 30% { opacity: 0; transform: translate(0, 0); } 36% { opacity: 1; } 58%, 85% { opacity: 1; transform: translate(26px, -18px); } 95%, 100% { opacity: 0; transform: translate(26px, -18px); } }\n@keyframes cMsg2 { 0%, 34% { opacity: 0; transform: translate(0, 0); } 40% { opacity: 1; } 62%, 85% { opacity: 1; transform: translate(34px, 4px); } 95%, 100% { opacity: 0; transform: translate(34px, 4px); } }\n@keyframes cMsg3 { 0%, 38% { opacity: 0; transform: translate(0, 0); } 44% { opacity: 1; } 66%, 85% { opacity: 1; transform: translate(22px, 22px); } 95%, 100% { opacity: 0; transform: translate(22px, 22px); } }\n@keyframes cGlu1 { 0%, 62% { transform: translate(0, 0); opacity: .85; } 80% { transform: translate(80px, 26px); opacity: 1; } 90%, 100% { transform: translate(80px, 26px); opacity: 0; } }\n@keyframes cGlu2 { 0%, 64% { transform: translate(0, 0); opacity: .85; } 82% { transform: translate(78px, -22px); opacity: 1; } 92%, 100% { transform: translate(78px, -22px); opacity: 0; } }\n@keyframes cGlu3 { 0%, 66% { transform: translate(0, 0); opacity: .85; } 84% { transform: translate(102px, 0); opacity: 1; } 94%, 100% { transform: translate(102px, 0); opacity: 0; } }\n@keyframes cGlow { 0%, 72% { opacity: 0; } 82%, 90% { opacity: .9; } 100% { opacity: 0; } }\n@keyframes cBolt { 0%, 74% { opacity: 0; transform: scale(.4); } 82%, 92% { opacity: 1; transform: scale(1.25); } 100% { opacity: 0; transform: scale(1); } }\n#th-app .cell-steps { list-style: none; display: grid; gap: 6px; margin: 4px 0 10px; text-align: left; }\n#th-app .cell-steps li { display: flex; gap: 10px; align-items: center; font-size: .9rem; color: var(--muted); padding: 6px 8px; border-radius: 10px; }\n#th-app .cell-steps b { flex: none; width: 24px; height: 24px; border-radius: 50%; display: grid; place-items: center; background: var(--line); color: var(--ink); font-size: .78rem; }\n#th-app .cell-steps .s1 { animation: st1 6s infinite; }\n#th-app .cell-steps .s2 { animation: st2 6s infinite; }\n#th-app .cell-steps .s3 { animation: st3 6s infinite; }\n@keyframes st1 { 0%, 30% { background: var(--accent-soft); color: var(--ink); } 33%, 100% { background: transparent; color: var(--muted); } }\n@keyframes st2 { 0%, 32% { background: transparent; color: var(--muted); } 35%, 62% { background: var(--accent-soft); color: var(--ink); } 65%, 100% { background: transparent; color: var(--muted); } }\n@keyframes st3 { 0%, 64% { background: transparent; color: var(--muted); } 67%, 96% { background: var(--accent-soft); color: var(--ink); } 100% { background: transparent; color: var(--muted); } }\n#th-app .why-take { margin-top: 16px; text-align: left; color: var(--text); font-size: .95rem; background: var(--blue-soft); border-radius: 16px; padding: 14px 16px; }\n#th-app .why-take a { display: inline-block; margin-top: 4px; font-size: .8rem; color: var(--ink-soft); }\n@media (max-width: 860px) {\n#th-app .body-grid { grid-template-columns: 1fr; gap: 10px; }\n#th-app .body-figure svg { max-width: 220px; }\n}\n#th-app .body-chip { display: inline-flex; align-items: center; gap: 8px; margin: -.4rem 0 1.2rem; padding: 8px 14px; border-radius: 99px; background: var(--accent-soft); color: var(--ink); text-decoration: none; font-size: .86rem; border: 1px solid #a9e3d4; animation: chipGlow 2.8s ease-in-out infinite; }\n#th-app .body-chip b { color: var(--accent); white-space: nowrap; }\n@keyframes chipGlow { 0%, 100% { box-shadow: 0 0 0 0 rgba(20, 163, 139, .25); } 50% { box-shadow: 0 0 0 8px rgba(20, 163, 139, 0); } }\n#th-app .body-facts { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 1rem; }\n#th-app .body-facts span { padding: 8px 14px; border-radius: 99px; background: var(--white); border: 1.5px solid var(--line); font-size: .86rem; color: var(--ink); box-shadow: 0 6px 16px rgba(14, 58, 79, .05); }\n#th-app .body-note { background: rgba(255, 255, 255, .1); border-radius: 12px; padding: 10px 12px; font-size: .9rem !important; color: #e6f4f8 !important; }\n#th-app .body-note strong { color: var(--white); }\n#th-app .notice { font-size: .78rem; color: var(--muted); background: #f6f8fa; border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px; margin: 0 0 1.4rem; text-align: left; }\n#th-app .why-take + .notice { margin-top: 10px; }\n#th-app .plan { margin: 14px 0 4px; padding: 16px; border-radius: 18px; border: 1.5px solid var(--line); background: var(--white); }\n#th-app .plan h5 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.15rem; color: var(--ink); }\n#th-app .plan-sub { font-size: .88rem !important; color: var(--text) !important; margin: .3rem 0 .8rem !important; }\n#th-app .plan-list { list-style: none; display: grid; gap: 10px; position: relative; }\n#th-app .plan-list li { display: flex; gap: 12px; align-items: flex-start; animation: optIn .4s ease; }\n#th-app .pl-ico { flex: none; width: 38px; height: 38px; border-radius: 50%; display: grid; place-items: center; background: var(--accent-soft); font-size: 1.1rem; }\n#th-app .pl-when { display: block; font-size: .72rem; font-weight: 600; letter-spacing: .03em; color: var(--accent); text-transform: uppercase; }\n#th-app .plan-list strong { display: block; color: var(--ink); font-size: .95rem; }\n#th-app .plan-list p { font-size: .85rem !important; color: var(--text) !important; margin: .1rem 0 0 !important; }\n#th-app .plan-foot { font-size: .8rem !important; color: var(--ink-soft) !important; margin-top: .8rem !important; }\n#th-app .today { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 12px; margin: 0 0 14px; padding: 12px 14px; border-radius: 16px; color: #fff; background: linear-gradient(120deg, #0e3a4f, #2f80c8 55%, #19a383); background-size: 200% 200%; animation: todayBg 6s ease infinite; box-shadow: 0 10px 24px rgba(14, 58, 79, .18); }\n#th-app .today .t-txt { flex: 1 1 150px; min-width: 0; }\n#th-app .today strong { white-space: nowrap; }\n#th-app .today-chip { display: inline-block; white-space: nowrap; margin: 2px 0 14px; padding: 4px 10px; border-radius: 99px; background: rgba(255, 255, 255, .2); color: #fff; font-size: .8rem; font-weight: 600; font-variant-numeric: tabular-nums; animation: chipGlow 2.4s ease-in-out infinite; }\n#th-app .today .t-ico { flex: none; font-size: 1.5rem; animation: todayPulse 1.2s ease-in-out infinite; }\n#th-app .today strong { display: block; font-size: .95rem; letter-spacing: .02em; color: #fff; }\n#th-app .today small { display: block; font-size: .78rem; opacity: .9; color: #fff; }\n#th-app .today .t-clock { flex: none; margin-left: auto; display: flex; gap: 4px; font-variant-numeric: tabular-nums; }\n#th-app .today .t-clock span { min-width: 34px; text-align: center; padding: 6px 4px; border-radius: 8px; background: rgba(255, 255, 255, .18); font-weight: 700; font-size: 1rem; color: #fff; }\n#th-app .today .t-clock span small { font-size: .6rem; font-weight: 500; opacity: .85; }\n@keyframes todayBg { 0%, 100% { background-position: 0 50%; } 50% { background-position: 100% 50%; } }\n@keyframes todayPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.18) rotate(-8deg); } }\n#th-app .rewards { position: sticky; top: 8px; z-index: 5; background: rgba(255, 255, 255, .96); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); border: 1.5px solid #a9e3d4; border-radius: 16px; padding: 12px 14px 4px; margin: 0 0 14px; box-shadow: 0 10px 24px rgba(14, 58, 79, .08); }\n#th-app .ship p { font-size: .86rem !important; color: var(--ink) !important; margin-bottom: 10px !important; }\n#th-app .rw-bar { position: relative; height: 8px; border-radius: 99px; background: var(--line); margin: 6px 14px 30px 0; }\n#th-app .rw-bar span { display: block; height: 100%; border-radius: 99px; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .rw-bar .mk { position: absolute; top: 50%; transform: translate(-50%, -50%); width: 28px; height: 28px; border-radius: 50%; background: var(--white); border: 2px solid var(--line); display: grid; place-items: center; font-style: normal; font-size: .8rem; transition: all .3s; }\n#th-app .rw-bar .mk b { position: absolute; top: 30px; font-size: .66rem; color: var(--muted); white-space: nowrap; }\n#th-app .rw-bar .mk.done { border-color: var(--accent); background: var(--accent-soft); transform: translate(-50%, -50%) scale(1.15); }\n#th-app .sum-row.gift { color: var(--accent); font-weight: 600; animation: pop .45s cubic-bezier(.2, 1.4, .4, 1); }\n#th-app .sum-row.gift s { color: var(--muted); font-weight: 400; margin-right: 4px; }\n#th-app .ship { margin: .6rem 0 .2rem; font-size: .85rem; color: var(--ink); }\n#th-app .ship-bar { height: 6px; border-radius: 99px; background: var(--line); overflow: hidden; margin-top: 6px; }\n#th-app .ship-bar span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .blob { position: absolute; border-radius: 50%; filter: blur(60px); opacity: .55; z-index: -1; pointer-events: none; animation: float 14s ease-in-out infinite alternate; }\n#th-app .b1 { width: 420px; height: 420px; background: #bfe0f7; top: -120px; right: -80px; }\n#th-app .b2 { width: 320px; height: 320px; background: #c4eedf; bottom: -120px; left: -100px; animation-duration: 18s; }\n#th-app .b3 { width: 220px; height: 220px; background: #d6f0f6; top: 40%; left: 45%; animation-duration: 11s; }\n#th-app .b4 { width: 380px; height: 380px; background: #d2ecf9; top: 10%; left: -160px; animation-duration: 16s; }\n#th-app .b5 { width: 340px; height: 340px; background: #cdf1e4; bottom: 0; right: -140px; animation-duration: 20s; }\n#th-app #test > .container { position: relative; z-index: 1; }\n@keyframes float {\n      0% { transform: translate(0, 0) scale(1); }\n      50% { transform: translate(40px, 30px) scale(1.08); }\n      100% { transform: translate(-30px, 50px) scale(.95); }\n    }\n#th-app .rotator { display: inline-grid; vertical-align: bottom; }\n#th-app .rotator .word { grid-area: 1 / 1; opacity: 0; transform: translateY(.5em); transition: opacity .5s, transform .5s; white-space: nowrap;\n      background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; padding-right: .08em; }\n#th-app .rotator .word.is-on { opacity: 1; transform: none; }\n#th-app .rotator .word.is-out { opacity: 0; transform: translateY(-.5em); }\n#th-app h2 em { background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }\n#th-app .reveal { opacity: 0; transform: translateY(28px); transition: opacity .7s ease, transform .7s cubic-bezier(.2, .7, .2, 1); }\n#th-app .reveal.in { opacity: 1; transform: none; }\n#th-app .btn { position: relative; overflow: hidden; }\n#th-app .btn-accent { background: var(--grad); }\n#th-app .btn-accent:hover { background: var(--grad); filter: brightness(1.08); }\n#th-app .pulse { animation: pulse 2.4s ease-in-out infinite; }\n@keyframes pulse {\n      0%, 100% { box-shadow: 0 10px 30px rgba(20, 163, 139, .30), 0 0 0 0 rgba(20, 163, 139, .35); }\n      50% { box-shadow: 0 10px 30px rgba(20, 163, 139, .30), 0 0 0 12px rgba(20, 163, 139, 0); }\n    }\n#th-app .ripple { position: absolute; border-radius: 50%; transform: scale(0); background: rgba(255, 255, 255, .45); animation: ripple .6s ease-out; pointer-events: none; }\n#th-app .option .ripple { background: rgba(20, 163, 139, .25); }\n@keyframes ripple { to { transform: scale(4); opacity: 0; } }\n#th-app .hero-card { transition: transform .4s ease, box-shadow .4s ease; }\n#th-app .signs-hint { margin: -.6rem 0 .8rem; font-size: .85rem; }\n#th-app .signs li { padding: 0; background: none; }\n#th-app .sign { width: 100%; display: flex; gap: 12px; align-items: center; padding: 12px 14px; border-radius: 14px; border: 1.5px solid transparent;\n      background: var(--bg-alt); font: 400 .95rem \"Inter\", sans-serif; color: var(--text); text-align: left; cursor: pointer; transition: all .25s; }\n#th-app .sign b { flex: none; width: 26px; height: 26px; border-radius: 50%; display: grid; place-items: center; border: 1.5px solid var(--line); background: var(--white); color: transparent; font-size: .8rem; transition: all .25s; }\n#th-app .sign:hover { transform: translateX(4px); border-color: var(--line); }\n#th-app .sign.on { background: var(--accent-soft); border-color: var(--accent); }\n#th-app .sign.on b { background: var(--accent); border-color: var(--accent); color: var(--white); transform: scale(1.1); }\n#th-app .signs-meter { height: 6px; background: var(--bg-alt); border-radius: 99px; overflow: hidden; margin-top: 1rem; }\n#th-app .signs-meter span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app #signs-msg { transition: color .3s; }\n#th-app #signs-msg.hot { color: var(--ink); font-weight: 600; }\n#th-app .signs-cta { width: 100%; margin-top: 1rem; display: none; }\n#th-app .signs-cta.show { display: inline-flex; animation: pop .45s cubic-bezier(.2, 1.4, .4, 1); }\n@keyframes pop { from { opacity: 0; transform: scale(.85); } to { opacity: 1; transform: none; } }\n#th-app .step, #th-app .quote { transition: transform .35s ease, box-shadow .35s ease, border-color .35s; }\n#th-app .step:hover, #th-app .quote:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(14, 58, 79, .08); border-color: #b9dbe8; }\n#th-app .step .ico { float: right; font-size: 1.6rem; transition: transform .4s; }\n#th-app .step:hover .ico { transform: rotate(-12deg) scale(1.2); }\n#th-app .progress span { background: var(--grad); position: relative; }\n#th-app .progress span::after { content: \"\"; position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,.6), transparent); animation: shimmer 1.6s infinite; }\n@keyframes shimmer { from { transform: translateX(-100%); } to { transform: translateX(100%); } }\n#th-app .option { position: relative; overflow: hidden; opacity: 0; animation: optIn .45s ease forwards; transition: border-color .15s, background .15s, transform .15s; }\n#th-app .option:hover { transform: translateX(4px); background: var(--bg-alt); }\n#th-app .option:active { transform: scale(.98); }\n#th-app .option.selected::before { box-shadow: inset 0 0 0 4px var(--accent-soft); }\n@keyframes optIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }\n#th-app .question.fade-in { animation: slideIn .4s ease; }\n@keyframes slideIn { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: none; } }\n#th-app .q-emoji { font-size: 2rem; display: inline-block; margin-bottom: .4rem; animation: bob 2.4s ease-in-out infinite; }\n@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }\n#th-app .stagger > *, #th-app .pop-in { opacity: 0; animation: optIn .55s ease forwards; }\n#th-app .score-num { font-family: \"Fraunces\", serif; font-size: 2.6rem; line-height: 1; background: var(--grad); -webkit-background-clip: text; background-clip: text; color: transparent; }\n#th-app .score-row { display: flex; align-items: baseline; gap: 10px; margin: .4rem 0 .2rem; }\n#th-app .score-row span:last-child { font-size: .85rem; color: var(--muted); }\n#th-app .confetti { position: fixed; top: -12px; width: 9px; height: 14px; border-radius: 2px; z-index: 100; pointer-events: none; animation: fall linear forwards; }\n@keyframes fall { to { transform: translateY(105vh) rotate(720deg); opacity: .8; } }\n#th-app .faq-section { background: var(--white); }\n#th-app details { transition: background .2s; }\n#th-app details[open] { background: linear-gradient(90deg, var(--bg-alt), transparent); border-radius: 12px; padding-left: 12px; }\n#th-app summary::after { transition: transform .3s; }\n#th-app details[open] summary::after { transform: rotate(180deg); }\n#th-app .price-line { margin: -.4rem 0 1rem; color: #cfe6ee; }\n#th-app .price-line s { opacity: .7; }\n#th-app .price-line strong { font-size: 1.3rem; color: var(--white); margin: 0 6px; }\n#th-app .badge { display: inline-block; font-size: .72rem; font-weight: 600; padding: 4px 10px; border-radius: 99px; background: rgba(255,255,255,.16); color: #c9f5e8; }\n#th-app .reco-more { display: block; text-align: center; margin-top: .9rem; font-size: .88rem; color: #c9f5e8; text-decoration: underline; text-underline-offset: 3px; }\n#th-app .routine { margin-top: 1.8rem; padding: 22px; border-radius: 22px; border: 1.5px solid var(--line); background: linear-gradient(180deg, #f3fafc, #ffffff 30%); scroll-margin-top: 16px; }\n#th-app .routine .reasons-title { margin-top: .2rem; }\n#th-app .tiers { position: relative; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin: 1rem 0 1.2rem; padding-top: 14px; }\n#th-app .tiers-bar { position: absolute; top: 0; left: 16%; right: 16%; height: 6px; border-radius: 99px; background: var(--line); overflow: hidden; }\n#th-app .tiers-bar span { display: block; height: 100%; width: 0; background: var(--grad); transition: width .5s cubic-bezier(.2, .7, .2, 1); }\n#th-app .tier { text-align: center; padding: 10px 4px; border-radius: 14px; border: 1.5px solid var(--line); background: var(--white); transition: all .3s; }\n#th-app .tier strong { display: block; font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.4rem; color: var(--muted); line-height: 1.1; transition: color .3s; }\n#th-app .tier span { font-size: .72rem; color: var(--muted); }\n#th-app .tier.done strong { color: var(--ink-soft); }\n#th-app .tier.active { border-color: var(--accent); background: var(--accent-soft); transform: translateY(-3px); box-shadow: 0 10px 22px rgba(20, 163, 139, .18); }\n#th-app .tier.active strong { color: var(--accent); }\n#th-app .r-item { border: 1.5px solid var(--line); border-radius: 16px; padding: 12px; margin-bottom: 10px; background: var(--white); transition: border-color .25s, background .25s, transform .25s; }\n#th-app .r-item.on, #th-app .r-item.fixed { border-color: var(--accent); background: #f2fbf8; }\n#th-app .r-item.reco-item:not(.on) { border-style: dashed; border-color: #9fd9c9; }\n#th-app .r-row { display: flex; align-items: center; gap: 10px; }\n#th-app .r-row .prod { flex: 1; min-width: 0; margin: 0; background: transparent; padding: 0; }\n#th-app .r-row .prod img { width: 48px; height: 48px; }\n#th-app .r-item p { font-size: .9rem; color: var(--text); margin-top: .6rem; }\n#th-app .r-item .study { display: inline-block; margin-top: .4rem; font-size: .76rem; color: var(--ink-soft); text-decoration: underline; text-underline-offset: 2px; }\n#th-app .r-item details { border: 0; padding: 6px 0 0; }\n#th-app .r-item details[open] { background: none; padding-left: 0; }\n#th-app .r-item summary { font-size: .82rem; font-weight: 500; color: var(--ink-soft); }\n#th-app .r-item summary::after { font-size: 1rem; }\n#th-app .incl { flex: none; font-size: .8rem; font-weight: 600; color: var(--accent); padding: 8px 12px; }\n#th-app .toggle { flex: none; position: relative; overflow: hidden; padding: 9px 12px; white-space: nowrap; border-radius: 99px; border: 1.5px solid var(--accent); background: var(--white); color: var(--accent); font: 600 .85rem \"Inter\", sans-serif; cursor: pointer; transition: all .25s; }\n#th-app .toggle .t-on { display: none; }\n#th-app .toggle[aria-pressed=\"true\"] { background: var(--grad); border-color: transparent; color: var(--white); }\n#th-app .toggle[aria-pressed=\"true\"] .t-on { display: inline; }\n#th-app .toggle[aria-pressed=\"true\"] .t-add { display: none; }\n#th-app .toggle:active { transform: scale(.95); }\n#th-app .summary { margin-top: 1rem; padding-top: 1rem; border-top: 1px dashed var(--line); }\n#th-app .sum-row { display: flex; justify-content: space-between; font-size: .92rem; color: var(--text); padding: 3px 0; }\n#th-app .sum-row.disc { color: var(--accent); font-weight: 600; }\n#th-app .sum-row.total { font-size: 1.15rem; font-weight: 700; color: var(--ink); padding-top: 8px; }\n#th-app .bump { display: inline-block; animation: bump .45s cubic-bezier(.2, 1.6, .4, 1); }\n@keyframes bump { 0% { transform: scale(1); } 40% { transform: scale(1.18); color: var(--accent); } 100% { transform: scale(1); } }\n#th-app .nudge { font-size: .88rem; color: var(--ink); background: var(--blue-soft); border-radius: 12px; padding: 10px 12px; margin: .8rem 0; }\n#th-app .summary .btn { width: 100%; }\n#th-app .dur-label { font-size: .85rem; font-weight: 600; color: var(--ink); margin: .8rem 0 .5rem; }\n#th-app .dur { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\n#th-app .dur-opt { position: relative; padding: 12px 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 14px; border: 1.5px solid var(--line); background: var(--white); cursor: pointer; overflow: hidden; font-family: \"Inter\", sans-serif; transition: all .25s; }\n#th-app .dur-opt strong { display: block; font-size: 1rem; color: var(--ink); }\n#th-app .dur-opt span { font-size: .74rem; color: var(--muted); }\n#th-app .dur-opt.on { border-color: var(--accent); background: var(--accent-soft); box-shadow: 0 8px 18px rgba(20, 163, 139, .15); }\n#th-app .dur-badge { display: block; align-self: stretch; margin: -12px -8px 8px; font-style: normal; font-size: .62rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; color: var(--white); background: var(--grad); padding: 4px 6px; text-align: center; }\n#th-app .dur-opt:not(:has(.dur-badge)) { padding-top: 30px; }\n#th-app .dur-price { display: block; font-weight: 700; color: var(--ink) !important; font-size: .82rem !important; margin-top: 2px; }\n#th-app .r-item:not(.on) .dur-opt { opacity: .75; }\n#th-app .rev-title { margin-top: 1.2rem; }\n#th-app .reviews { display: grid; gap: 8px; }\n#th-app .review { background: var(--white); border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; }\n#th-app .review .stars { color: #f2b632; letter-spacing: 2px; font-size: .9rem; }\n#th-app .review p { font-size: .9rem !important; color: var(--text) !important; margin: .3rem 0 !important; }\n#th-app .review span { font-size: .74rem; color: var(--muted); }\n#th-app .dur-note { font-size: .8rem !important; color: var(--ink-soft) !important; margin-top: .5rem !important; }\n#th-app .proof { margin: 14px 0 4px; padding: 16px; border-radius: 18px; background: linear-gradient(180deg, #f2f9fb, #ffffff); border: 1.5px solid var(--line); }\n#th-app .proof h5 { font-family: \"Fraunces\", serif; font-weight: 400; font-size: 1.15rem; color: var(--ink); margin-bottom: .7rem; }\n#th-app .proof img, #th-app .ba img { width: 100%; border-radius: 14px; display: block; }\n#th-app .proof-quote { margin: .8rem 0 0; padding: 14px 16px; border-radius: 14px; background: var(--grad); color: var(--white); font-size: .93rem; line-height: 1.55; }\n#th-app .proof-quote .stars { color: #ffd54a; letter-spacing: 3px; font-size: 1.05rem; margin-top: .4rem; }\n#th-app .proof-note { font-size: .72rem !important; color: var(--muted) !important; margin-top: .5rem !important; }\n#th-app .reels { display: grid; gap: 10px; margin-top: 12px; }\n#th-app .reels .instagram-media { min-width: 0 !important; width: 100% !important; margin: 0 !important; }\n#th-app .ba { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: center; max-width: 900px; margin: 40px auto 0; text-align: left; }\n#th-app .ba .btn { margin-top: 1rem; }\n#th-app #reviews-section { max-width: 900px; margin: 32px auto 0; text-align: left; }\n#th-app #reviews-section .reviews { grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; }\n#th-app #reviews-section .review { padding: 18px; box-shadow: 0 12px 28px rgba(14, 58, 79, .06); }\n#th-app #reviews-section .review p { font-size: .98rem !important; }\n#th-app #reviews-section .proof-note { text-align: center; }\n#th-app #reviews-section > .btn { display: block; width: fit-content; margin: 1.2rem auto 0; }\n@media (max-width: 860px) {\n#th-app .ba { grid-template-columns: 1fr; gap: 16px; }\n#th-app .ba .btn { width: 100%; }\n}\n#th-app #th-diag { position: fixed; left: 8px; right: 8px; bottom: 8px; z-index: 2147483600; background: #111; color: #7CFC9A; font: 12px/1.45 monospace; padding: 10px 12px; border-radius: 10px; max-height: 40vh; overflow: auto; }\n#th-app .email-step h3 { font-size: clamp(1.4rem, 3.2vw, 1.8rem); margin-bottom: .4rem; }\n#th-app .email-step .hint { margin-bottom: 1.2rem; }\n#th-app #lead-form { display: grid; gap: 14px; }\n#th-app .field span { display: block; font-size: .85rem; font-weight: 600; color: var(--ink); margin-bottom: 6px; }\n#th-app .field input { width: 100%; padding: 15px 16px; border-radius: 14px; border: 1.5px solid var(--line); font: 400 1rem \"Inter\", sans-serif; color: var(--text); background: var(--white); transition: border-color .2s, box-shadow .2s; }\n#th-app .field input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }\n#th-app .check { display: flex; gap: 10px; align-items: flex-start; font-size: .88rem; color: var(--text); cursor: pointer; }\n#th-app .check input { flex: none; width: 20px; height: 20px; margin-top: 1px; accent-color: var(--accent); }\n#th-app .check a { color: var(--ink-soft); text-decoration: underline; }\n#th-app .field input.invalid { border-color: #c0392b; box-shadow: 0 0 0 4px #fbe3e0; }\n#th-app .check.invalid { color: #c0392b; background: #fdf1ef; border-radius: 10px; padding: 8px; margin: -8px; }\n#th-app .shake { animation: shake .4s; }\n@keyframes shake { 20%, 60% { transform: translateX(-6px); } 40%, 80% { transform: translateX(6px); } }\n#th-app .form-error { color: #c0392b; font-weight: 600; font-size: .88rem; min-height: 1em; margin: -4px 0 -6px; }\n#th-app .form-note { font-size: .8rem; text-align: center; }\n#th-app #lead-form .btn { width: 100%; margin-top: 4px; }\n@media (prefers-reduced-motion: reduce) {\n#th-app, #th-app *, #th-app *::before, #th-app *::after { animation: none !important; transition: none !important; }\n#th-app .reveal, #th-app .option, #th-app .stagger > * { opacity: 1; transform: none; }\n}\n#th-app { position: fixed; inset: 0; z-index: 2147483000; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; scroll-behavior: smooth; }\n#th-app h1, #th-app h2, #th-app h3, #th-app h4, #th-app h5 { text-transform: none; font-weight: 400; }\n#th-app button, #th-app input, #th-app textarea { font-family: inherit; text-transform: none; letter-spacing: normal; min-height: 0; line-height: normal; }\n#th-app a { text-decoration-thickness: auto; }\n#th-app ul, #th-app ol { margin: 0; padding: 0; }\n#th-app [hidden] { display: none !important; }\nhtml { font-size: 16px !important; }\n#th-app header, #th-app section, #th-app footer, #th-app main, #th-app aside, #th-app nav, #th-app form, #th-app div { height: auto; min-height: 0; max-height: none; float: none; line-height: inherit; }\n#th-app header, #th-app footer { background: none; color: inherit; position: static; box-shadow: none; border: 0; }\n#th-app p, #th-app li, #th-app label, #th-app summary, #th-app span, #th-app a { font-size: 1rem; letter-spacing: normal; text-transform: none; line-height: inherit; }\n#th-app span, #th-app a, #th-app strong, #th-app em, #th-app b { font-size: inherit; }\n#th-app button { padding: 0; background: none; border: 0; box-shadow: none; border-radius: 0; color: inherit; width: auto; height: auto; }\n#th-app img, #th-app svg { max-width: 100%; height: auto; }\n#th-app input[type=\"checkbox\"] { -webkit-appearance: auto; appearance: auto; position: static; opacity: 1; }\n</style>");
root.innerHTML="<div class=\"topbar\">\ud83c\udf81 <strong>Test 100% gratuito</strong> \u00b7 Env\u00edo gratis desde 35 \u20ac \u00b7 <strong>Vitamina C de regalo</strong> desde 60 \u20ac</div>\n\n  <!-- ---------- Hero ---------- -->\n  <header class=\"hero\">\n    <div class=\"blob b1\"></div><div class=\"blob b2\"></div><div class=\"blob b3\"></div>\n    <div class=\"container hero-grid\">\n      <div>\n        <span class=\"eyebrow\">Test de energ\u00eda gratuito \u00b7 2 minutos</span>\n        <h1>\u00bfPor qu\u00e9 est\u00e1s <span class=\"rotator\"><em class=\"word is-on\">tan cansada</em><em class=\"word\">sin energ\u00eda</em><em class=\"word\">tan estresada</em><em class=\"word\">con calambres</em><em class=\"word\">agotada</em></span> todo el d\u00eda?</h1>\n        <p class=\"lead\">Cansancio que no se va al dormir, estr\u00e9s, calambres, cabeza saturada\u2026 Tu cuerpo te est\u00e1 hablando. Responde un m\u00e1ximo de 10 preguntas y descubre qu\u00e9 te est\u00e1 pidiendo.</p>\n        <a href=\"#test\" class=\"btn btn-accent pulse\" data-start>Hacer el test gratis \u2192</a>\n        <div class=\"hero-meta\">\n          <span>Gratis</span><span>2 minutos</span><span>Recomendaci\u00f3n personalizada</span>\n        </div>\n      </div>\n      <aside class=\"hero-card reveal\">\n        <h3>\u00bfTe suena alguna de estas se\u00f1ales?</h3>\n        <p class=\"signs-hint\">Toca las que te pasen \ud83d\udc47</p>\n        <ul class=\"signs\">\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Te levantas cansada aunque duermas</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Baj\u00f3n de energ\u00eda a media tarde</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Calambres o tirones musculares</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Estr\u00e9s o nervios casi a diario</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Sin caf\u00e9 no eres persona</button></li>\n          <li><button type=\"button\" class=\"sign\"><b>\u2713</b>Te cuesta concentrarte</button></li>\n        </ul>\n        <div class=\"signs-meter\"><span id=\"signs-bar\"></span></div>\n        <p id=\"signs-msg\">Si te has identificado con dos o m\u00e1s, este test es para ti.</p>\n        <a href=\"#test\" class=\"btn btn-accent signs-cta\" id=\"signs-cta\" data-start>Descubrir qu\u00e9 significan \u2192</a>\n      </aside>\n    </div>\n  </header>\n\n  <!-- ---------- C\u00f3mo funciona ---------- -->\n  <section>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">C\u00f3mo funciona</span>\n      <h2>Tres pasos, <em>cero complicaciones</em></h2>\n      <div class=\"steps\">\n        <div class=\"step reveal\"><div class=\"num\">01</div><div class=\"ico\">\ud83d\udcdd</div><h3>Responde</h3><p>10 preguntas r\u00e1pidas sobre tu energ\u00eda, tu descanso, tu estr\u00e9s y tu actividad.</p></div>\n        <div class=\"step reveal\"><div class=\"num\">02</div><div class=\"ico\">\ud83d\udd0d</div><h3>Descubre</h3><p>Recibe al instante tu perfil de energ\u00eda y lo que m\u00e1s te conviene cuidar.</p></div>\n        <div class=\"step reveal\"><div class=\"num\">03</div><div class=\"ico\">\ud83c\udf3f</div><h3>Act\u00faa</h3><p>Te recomendamos el complemento y la combinaci\u00f3n que mejor encajan contigo, con sus funciones reconocidas por la UE.</p></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- El magnesio en tu cuerpo ---------- -->\n  <section id=\"cuerpo\" class=\"body-section\">\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Lo que quiz\u00e1 no sab\u00edas</span>\n      <h2>El magnesio <em>trabaja en todo tu cuerpo</em></h2>\n      <p class=\"section-intro\">Es un mineral esencial: <strong>tu cuerpo no lo fabrica</strong>, as\u00ed que tienes que obtenerlo cada d\u00eda de lo que comes. Toca cada punto para descubrir d\u00f3nde trabaja.</p>\n      <div class=\"body-facts\">\n        <span>\ud83e\uddea Tu cuerpo no lo fabrica</span><span>\ud83e\udd6c Est\u00e1 en verduras de hoja, frutos secos y legumbres</span><span>\ud83c\uddea\ud83c\uddfa 10 funciones reconocidas por la UE</span>\n      </div>\n    </div>\n    <div class=\"container body-grid\">\n      <div class=\"body-figure reveal\">\n        <svg viewBox=\"0 0 200 400\" role=\"img\" aria-label=\"Silueta del cuerpo con los lugares donde trabaja el magnesio\">\n          <defs>\n            <linearGradient id=\"bodyGrad\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n              <stop offset=\"0\" stop-color=\"#d6ebf8\"/><stop offset=\"1\" stop-color=\"#d3f1e6\"/>\n            </linearGradient>\n          </defs>\n          <g class=\"silhouette\">\n            <circle cx=\"100\" cy=\"50\" r=\"30\"/>\n            <rect x=\"90\" y=\"76\" width=\"20\" height=\"18\" rx=\"6\"/>\n            <path d=\"M64 96 Q100 86 136 96 Q154 104 152 130 L150 178 Q146 206 140 222 Q156 252 148 290 L134 392 H112 L102 300 H98 L88 392 H66 L52 290 Q44 252 60 222 Q54 206 50 178 L48 130 Q46 104 64 96 Z\"/>\n            <path d=\"M48 112 Q30 150 30 200 Q30 228 38 250 L46 248 Q42 222 44 200 Q46 160 58 128 Z\"/>\n            <path d=\"M152 112 Q170 150 170 200 Q170 228 162 250 L154 248 Q158 222 156 200 Q154 160 142 128 Z\"/>\n          </g>\n          <g class=\"flow\">\n            <path d=\"M100 60 C 115 110, 85 150, 100 190 S 115 230, 100 250 S 70 300, 78 330\"/>\n          </g>\n          <g class=\"hs\" data-i=\"0\" transform=\"translate(100 46)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\udde0</text></g>\n          <g class=\"hs\" data-i=\"1\" transform=\"translate(126 132)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\uddec</text></g>\n          <g class=\"hs\" data-i=\"2\" transform=\"translate(100 190)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\u26a1</text></g>\n          <g class=\"hs\" data-i=\"3\" transform=\"translate(100 248)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83e\uddb4</text></g>\n          <g class=\"hs\" data-i=\"4\" transform=\"translate(76 322)\"><circle class=\"ring\" r=\"14\"/><circle class=\"dot\" r=\"7\"/><text y=\"4\">\ud83d\udcaa</text></g>\n        </svg>\n      </div>\n      <div class=\"body-info reveal\">\n        <div class=\"organ-card\" id=\"organ-card\" aria-live=\"polite\"></div>\n        <div class=\"organ-dots\" id=\"organ-dots\"></div>\n        <div class=\"cell-anim\">\n          <h3>As\u00ed llega a tus c\u00e9lulas</h3>\n          <svg viewBox=\"0 0 320 130\" aria-hidden=\"true\">\n            <circle class=\"cell-glow\" cx=\"236\" cy=\"62\" r=\"48\"/>\n            <circle class=\"cell\" cx=\"236\" cy=\"62\" r=\"48\"/>\n            <rect class=\"receptor\" x=\"182\" y=\"52\" width=\"10\" height=\"20\" rx=\"3\"/>\n            <text class=\"key mg\" x=\"10\" y=\"72\">Mg</text>\n            <circle class=\"msg m1\" cx=\"196\" cy=\"62\" r=\"4.5\"/><circle class=\"msg m2\" cx=\"196\" cy=\"62\" r=\"4.5\"/><circle class=\"msg m3\" cx=\"196\" cy=\"62\" r=\"4.5\"/>\n            <circle class=\"glu g1\" cx=\"150\" cy=\"30\" r=\"5\"/><circle class=\"glu g2\" cx=\"150\" cy=\"96\" r=\"5\"/><circle class=\"glu g3\" cx=\"130\" cy=\"62\" r=\"5\"/>\n            <text class=\"bolt\" x=\"226\" y=\"72\">\u26a1</text>\n          </svg>\n          <ol class=\"cell-steps\">\n            <li class=\"s1\"><b>1</b>Tomas magnesio con la comida o con tu complemento</li>\n            <li class=\"s2\"><b>2</b>Llega a tus c\u00e9lulas, donde participa en la obtenci\u00f3n de energ\u00eda</li>\n            <li class=\"s3\"><b>3</b>Contribuye a disminuir el cansancio y la fatiga</li>\n          </ol>\n        </div>\n        <p class=\"why-take\"><strong>Entonces, \u00bfpor qu\u00e9 tomarlo?</strong> Porque tu cuerpo no lo fabrica. Si comes con prisas, entrenas y sudas mucho o tu dieta tiene pocas verduras de hoja, frutos secos y legumbres, un complemento te ayuda a asegurar tu aporte de cada d\u00eda.\n          <a href=\"https://doi.org/10.2903/j.efsa.2010.1807\" target=\"_blank\" rel=\"noopener\">\ud83d\udcda Ver la opini\u00f3n cient\u00edfica de la EFSA</a></p>\n        <p class=\"notice\">Las funciones que mostramos son declaraciones de propiedades saludables autorizadas por la Uni\u00f3n Europea para el magnesio (Reglamento UE 432/2012), tras la evaluaci\u00f3n de la EFSA.</p>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- Test ---------- -->\n  <section id=\"test\">\n    <div class=\"blob b4\"></div><div class=\"blob b5\"></div>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Tu test</span>\n      <h2>Empieza ahora, <em>es gratis</em></h2>\n      <p class=\"section-intro\">Elige la respuesta que m\u00e1s se parezca a c\u00f3mo te has sentido en las \u00faltimas semanas.</p>\n    </div>\n    <div class=\"container\">\n      <div class=\"quiz reveal\" id=\"quiz\" aria-live=\"polite\"></div>\n    </div>\n  </section>\n\n  <!-- ---------- Opiniones ---------- -->\n  <section>\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Opiniones reales</span>\n      <h2>Lo que dicen <em>nuestras clientas</em></h2>\n      <div class=\"reveal\" id=\"reviews-section\"></div>\n    </div>\n  </section>\n\n  <!-- ---------- FAQ ---------- -->\n  <section class=\"faq-section\">\n    <div class=\"container center\">\n      <span class=\"eyebrow\">Preguntas frecuentes</span>\n      <h2>Lo que <em>te estar\u00e1s preguntando</em></h2>\n    </div>\n    <div class=\"container\">\n      <div class=\"faq\">\n        <details class=\"reveal\"><summary>\u00bfEl test es realmente gratis?</summary><p>S\u00ed. No te pedimos tarjeta ni que te registres. Solo tu email al final, para ense\u00f1arte tu resultado y tu recomendaci\u00f3n.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto tarda en llegar mi pedido?</summary><p>Preparamos tu pedido en 24\u201348 horas h\u00e1biles y lo enviamos con Correos o Packlink. La entrega suele tardar entre 2 y 7 d\u00edas h\u00e1biles seg\u00fan tu zona. Los pedidos de fin de semana o festivos salen el siguiente d\u00eda h\u00e1bil, y recibir\u00e1s un enlace para seguir tu paquete.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto cuesta el env\u00edo?</summary><p>El env\u00edo a Espa\u00f1a cuesta 3,50 \u20ac y es <strong>gratis a partir de 35 \u20ac</strong>.</p></details>\n        <details class=\"reveal\"><summary>\u00bfPara qu\u00e9 sirve el magnesio?</summary><p>Seg\u00fan las declaraciones autorizadas por la UE, el magnesio contribuye a disminuir el cansancio y la fatiga, al funcionamiento normal del sistema nervioso y de los m\u00fasculos, a la funci\u00f3n psicol\u00f3gica normal, al metabolismo energ\u00e9tico normal, al equilibrio electrol\u00edtico, a la s\u00edntesis proteica normal y al mantenimiento de los huesos y los dientes en condiciones normales. Tambi\u00e9n desempe\u00f1a un papel en el proceso de divisi\u00f3n celular.</p></details>\n        <details class=\"reveal\"><summary>\u00bfQu\u00e9 es el bisglicinato de magnesio?</summary><p>Es magnesio unido a glicina, un amino\u00e1cido (lo que se llama forma quelada). Usamos la materia prima Albion\u00ae, reconocida internacionalmente por su calidad. Tiene un sabor muy suave y se disuelve f\u00e1cilmente.</p></details>\n        <details class=\"reveal\"><summary>\u00bfC\u00f3mo se toma?</summary><p>1 cucharilla rasa (3 g) al d\u00eda, disuelta en un vaso de agua o en tu bebida favorita, preferentemente con la comida.</p></details>\n        <details class=\"reveal\"><summary>\u00bfCu\u00e1nto me dura?</summary><p>El tarro de cristal de 100 g dura 1 mes. El formato reutilizable de 300 g dura 3 meses y te sale a 11,65 \u20ac al mes en lugar de 19,95 \u20ac.</p></details>\n        <details class=\"reveal\"><summary>\u00bfLo puedo combinar con otros complementos?</summary><p>S\u00ed. Combina muy bien con la vitamina C y, si haces deporte, con la creatina. Si tomas medicaci\u00f3n, cons\u00faltalo antes con tu m\u00e9dico o farmac\u00e9utico.</p></details>\n        <details class=\"reveal\"><summary>\u00bfPuedo tomarlo si estoy embarazada o dando el pecho?</summary><p>En el embarazo, la lactancia o si tienes alguna enfermedad, consulta siempre con tu m\u00e9dico antes de tomar cualquier complemento.</p></details>\n        <details class=\"reveal\"><summary>\u00bfTen\u00e9is alg\u00fan regalo?</summary><p>S\u00ed: en compras de m\u00e1s de 60 \u20ac te regalamos una Vitamina C pura (tarro de 100 g, valor 15,95 \u20ac). Se a\u00f1ade sola al carrito desde tu rutina personalizada.</p></details>\n        <details class=\"reveal\"><summary>\u00bfC\u00f3mo funcionan los descuentos del test?</summary><p>Se aplican solos al pagar: un 10% en el magnesio, un 15% en toda tu compra con 2 productos y un 20% con 3 o m\u00e1s. Los descuentos no se pueden sumar entre s\u00ed.</p></details>\n        <details class=\"reveal\"><summary>\u00bfY si quiero devolverlo?</summary><p>Tienes 30 d\u00edas desde que lo recibes para solicitar una devoluci\u00f3n, con el producto sin abrir y en su embalaje original. Escr\u00edbenos y te ayudamos.</p></details>\n        <details class=\"reveal\"><summary>\u00bfQu\u00e9 hac\u00e9is con mis datos?</summary><p>Guardamos tu email y tu resultado. Solo te escribiremos si nos das permiso, no compartimos tus datos con nadie y puedes darte de baja cuando quieras.</p></details>\n        <details class=\"reveal\"><summary>\u00bfSustituye a una anal\u00edtica o a ir al m\u00e9dico?</summary><p>No. Es una herramienta orientativa para que conozcas mejor las se\u00f1ales de tu cuerpo. El cansancio puede tener muchas causas: si es intenso o dura semanas, consulta con tu m\u00e9dico.</p></details>\n      </div>\n    </div>\n  </section>\n\n  <!-- ---------- CTA final ---------- -->\n  <section class=\"final\">\n    <div class=\"container\"><div class=\"final-box reveal\">\n      <h2>Tu cuerpo te est\u00e1 hablando. <em>Esc\u00fachalo.</em></h2>\n      <p>Descubre en 2 minutos qu\u00e9 hay detr\u00e1s de tu cansancio.</p>\n      <a href=\"#test\" class=\"btn pulse\" data-start>Hacer el test gratis \u2192</a>\n    </div></div>\n  </section>\n\n  <footer>\n    <div class=\"container\">\n      <p>Este test es orientativo y no constituye un diagn\u00f3stico m\u00e9dico. No sustituye la consulta con un profesional sanitario.</p>\n      <p>Los complementos alimenticios no son medicamentos y no est\u00e1n destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad. No deben utilizarse como sustitutos de una dieta equilibrada y un modo de vida saludable. No superar la dosis diaria recomendada. Mantener fuera del alcance de los ni\u00f1os. En embarazo, lactancia, si tomas medicaci\u00f3n o tienes alguna enfermedad, consulta con tu m\u00e9dico.</p>\n      <p>Las funciones del magnesio, la vitamina C y la creatina que se mencionan son declaraciones de propiedades saludables autorizadas por la Uni\u00f3n Europea (Reglamento UE 432/2012). Las opiniones mostradas son reales y personales; los resultados pueden variar de una persona a otra.</p>\n      <p>\u00a9 <span id=\"year\"></span> Benissalud \u00b7 Complementos alimenticios envasados en Espa\u00f1a.</p>\n    </div>\n  </footer>\n\n  <!-- Formularios nativos de Shopify (igual que el bolet\u00edn del tema): crean el cliente con sus etiquetas -->\n  <iframe name=\"sh-sink\" id=\"sh-sink\" title=\"env\u00edo\" hidden tabindex=\"-1\" style=\"display:none\"></iframe>\n  <form id=\"sh-customer\" method=\"post\" action=\"/contact#contact_form\" accept-charset=\"UTF-8\" target=\"sh-sink\" hidden>\n    <input type=\"hidden\" name=\"form_type\" value=\"customer\"><input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n    <input type=\"hidden\" name=\"contact[email]\"><input type=\"hidden\" name=\"contact[first_name]\"><input type=\"hidden\" name=\"contact[tags]\">\n  </form>\n  <form id=\"sh-contact\" method=\"post\" action=\"/contact#contact_form\" accept-charset=\"UTF-8\" target=\"sh-sink\" hidden>\n    <input type=\"hidden\" name=\"form_type\" value=\"contact\"><input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n    <input type=\"hidden\" name=\"contact[email]\"><input type=\"hidden\" name=\"contact[name]\"><textarea name=\"contact[body]\" hidden></textarea>\n  </form>\n\n  <div class=\"sticky-cta\" id=\"sticky-cta\"><a href=\"#test\" class=\"btn btn-accent\" data-start>Hacer el test gratis \u2192</a></div>";
document.documentElement.style.overflow='hidden';document.body.style.overflow='hidden';
})();

    /* ====================================================================
       CONFIGURACIÓN
       ==================================================================== */
    var SHOP = "https://www.benissalud.com";
    // Los contactos se guardan en Shopify → Clientes, con estas etiquetas para Shopify Email
    var TAG_PREFIX = "te-";
    // Hoja de Google donde se guardan los correos (URL de la "aplicación web" de Apps Script)
    var SHEET_URL = window.TE_SHEET_URL || window.TH_SHEET_URL || "";
    var PRIVACY_URL = SHOP + "/policies/privacy-policy";
    // Pega aquí los enlaces de tus reels de Instagram, p. ej. "https://www.instagram.com/reel/XXXXXXXX/"
    var INSTAGRAM_REELS = [];

    // Formatos y duraciones de cada producto (según la ficha de la tienda).
    // q = unidades que van al carrito y que cuentan para el descuento por cantidad
    var OPTIONS = {
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
        { t: "3 meses", s: "3 botes", v: "56749441057093", q: 3, p: 44.85, badge: "Suma 3 al descuento", note: "Con 3 botes tienes para unos 3 meses y sumas 3 productos a tu descuento." }
      ]
    };
    // Opiniones reales de clientas (Judge.me y TikTok Shop), guardadas en las fichas de producto
    var REVIEWS = [
      { p: "Bisglicinato de Magnesio", src: "Compradora verificada", t: "Me encanta. Sobre todo porque no tiene sabor y se toma muy fácil […] Lo probé y repito y repito." },
      { p: "Bisglicinato de Magnesio", src: "Opinión en TikTok Shop", t: "Buenísimo producto y atención. Me quedo con él sin lugar a dudas." },
      { p: "Vitamina C pura", src: "Opinión en TikTok Shop", t: "Ya he comprado varias veces […] Seguiré comprando, el envío rapidísimo y son muy detallistas." },
      { p: "Creatina Creapure", src: "Opinión en TikTok Shop", t: "Me encanta esta creatina y es Creapure. Para el gym es lo mejor." }
    ];
    var STUDY_NOTICE = "ℹ️ <strong>Sobre esta información:</strong> las funciones del magnesio, la vitamina C y la creatina que te mostramos son declaraciones de propiedades saludables autorizadas por la Unión Europea (Reglamento UE 432/2012), tras la evaluación de la EFSA. El test es orientativo: no es un diagnóstico y no sustituye el consejo de un profesional sanitario.";
    // Para qué sirve cada producto y cuándo se toma (fichas de la tienda y declaraciones autorizadas por la UE)
    var ROUTINE = {
      magnesio: { order: 1, when: "Con la comida", icon: "🍽️", how: "3 g (1 cucharilla) en agua",
        why: "Contribuye a disminuir el cansancio y la fatiga y al funcionamiento normal del sistema nervioso y de los músculos (declaraciones autorizadas UE). Es la base de tu rutina." },
      vitc: { order: 2, when: "Por la mañana", icon: "🍊", how: "1 cucharadita rasa",
        why: "Contribuye a disminuir el cansancio y la fatiga, al funcionamiento normal del sistema inmunitario y a la formación normal de colágeno (declaraciones autorizadas UE)." },
      creatina: { order: 3, when: "Antes o después de entrenar", icon: "🏋️‍♀️", how: "3 g con la cuchara incluida",
        why: "Con 3 g al día aumenta el rendimiento físico en series sucesivas de ejercicios breves de alta intensidad (declaración autorizada UE)." },
      colageno: { order: 4, when: "Cuando quieras", icon: "☕", how: "5 g en tu café, batido o agua",
        why: "Péptidos de colágeno marino Peptan®. Tómalo junto a la vitamina C, que contribuye a la formación normal de colágeno (declaración autorizada UE)." }
    };
    var FREE_SHIPPING = 35; // envío gratis en España a partir de 35 €
    var GIFT_MIN = 60;      // a partir de 60 € (sin contar la vitamina C) regalamos una Vitamina C
    var GIFT_VARIANT = "56590721024325"; // Vitamina C pura, tarro 100 g
    // Descuentos creados en Shopify: solo magnesio / 2 productos / 3 o más
    var TIERS = [
      { min: 1, pct: 10, code: "TESTENERGIA10", label: "Solo magnesio" },
      { min: 2, pct: 15, code: "TESTENERGIA15", label: "2 productos" },
      { min: 3, pct: 20, code: "TESTENERGIA20", label: "3 o más" }
    ];
    // variant = ID de la variante de Shopify que se añade al carrito en el pack
    var PRODUCTS = {
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
       Fuentes oficiales: solo declaraciones de propiedades saludables
       autorizadas por la UE (Reglamento 432/2012) y las opiniones de la EFSA
       -------------------------------------------------------------------- */
    var STUDIES = {
      ue: { label: "Declaraciones de propiedades saludables autorizadas por la UE (Reglamento UE 432/2012)", url: "https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32012R0432" },
      efsa_mg: { label: "Opinión científica de la EFSA sobre el magnesio y la disminución del cansancio y la fatiga (EFSA Journal, 2010)", url: "https://doi.org/10.2903/j.efsa.2010.1807" },
      efsa_vitc: { label: "Opinión científica de la EFSA sobre la vitamina C y la disminución del cansancio y la fatiga (EFSA Journal, 2010)", url: "https://doi.org/10.2903/j.efsa.2010.1815" },
      efsa_creatina: { label: "Opinión científica de la EFSA sobre la creatina y el rendimiento en ejercicios breves e intensos (EFSA Journal, 2011)", url: "https://doi.org/10.2903/j.efsa.2011.2303" }
    };

    /* --------------------------------------------------------------------
       Qué te decimos según cada respuesta (solo funciones autorizadas)
       -------------------------------------------------------------------- */
    var MSGS = {
      edad45: { area: "huesos", title: "Tienes entre 45 y 55 años", study: "ue",
        text: "En esta etapa cuidar los huesos cobra protagonismo. El magnesio contribuye al mantenimiento de los huesos y los dientes en condiciones normales (declaración autorizada por la UE)." },
      edad55: { area: "huesos", title: "Tienes más de 55 años", study: "ue",
        text: "A partir de esta edad cuidar los huesos y los músculos es prioritario. El magnesio contribuye al mantenimiento de los huesos en condiciones normales y al funcionamiento normal de los músculos (declaraciones autorizadas por la UE)." },
      energia_leve: { area: "energia", title: "Tienes un bajón a media tarde", study: "efsa_mg",
        text: "Es una de las señales más comunes de un día exigente. El magnesio contribuye al metabolismo energético normal, es decir, a los procesos con los que tus células obtienen energía de lo que comes (declaración autorizada por la UE)." },
      cansancio: { area: "energia", title: "Estás cansada aunque duermas", study: "efsa_mg",
        text: "Cuando el cansancio no se va con el descanso, tu cuerpo te está pidiendo atención. El magnesio contribuye a disminuir el cansancio y la fatiga: es una de las funciones reconocidas por la UE tras la evaluación de la EFSA. Si dura semanas, consulta también con tu médico." },
      agotada: { area: "energia", title: "Llegas agotada al final del día", study: "efsa_mg",
        text: "El magnesio contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE). Si el agotamiento es intenso o dura semanas, consulta con tu médico para descartar otras causas." },
      cafe_leve: { area: "energia", title: "Usas el café como apoyo", study: "ue",
        text: "El café da un empujón puntual, pero no aporta lo que tus células necesitan para obtener energía. El magnesio es un mineral que contribuye al metabolismo energético normal (declaración autorizada por la UE)." },
      cafe: { area: "energia", title: "Necesitas estimulantes para funcionar", study: "efsa_mg",
        text: "Si sin café no arrancas, conviene revisar de dónde sacas tu energía: descanso, alimentación y minerales como el magnesio, que contribuye a disminuir el cansancio y la fatiga (declaración autorizada por la UE)." },
      estres_leve: { area: "mente", title: "Tienes picos de estrés", study: "ue",
        text: "En los días de más tensión tu sistema nervioso trabaja a tope. El magnesio contribuye al funcionamiento normal del sistema nervioso (declaración autorizada por la UE)." },
      estres: { area: "mente", title: "Vives con estrés casi a diario", study: "ue",
        text: "El estrés mantenido pasa factura a tu energía y a tu ánimo. El magnesio contribuye al funcionamiento normal del sistema nervioso y a la función psicológica normal (declaraciones autorizadas por la UE). Si te sientes desbordada a menudo, busca también apoyo profesional." },
      mente_leve: { area: "mente", title: "Algún día te cuesta concentrarte", study: "ue",
        text: "La concentración también depende de que tu sistema nervioso tenga lo que necesita. El magnesio contribuye a la función psicológica normal (declaración autorizada por la UE)." },
      mente: { area: "mente", title: "Te cuesta concentrarte a menudo", study: "ue",
        text: "El magnesio contribuye a la función psicológica normal y a disminuir el cansancio y la fatiga (declaraciones autorizadas por la UE). Dormir bien y comer variado también son clave." },
      animo: { area: "mente", title: "Estás irritable o con altibajos", study: "ue",
        text: "El magnesio contribuye a la función psicológica normal y al funcionamiento normal del sistema nervioso (declaraciones autorizadas por la UE). Si los altibajos son frecuentes, coméntalo con un profesional." },
      musculo_leve: { area: "musculo", title: "Notas tus músculos después del deporte", study: "ue",
        text: "Cuando entrenas, tus músculos trabajan a fondo y pierdes minerales con el sudor. El magnesio contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico (declaraciones autorizadas por la UE)." },
      calambres: { area: "musculo", title: "Tienes calambres o tirones a menudo", study: "ue",
        text: "El magnesio contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico (declaraciones autorizadas por la UE). Si los calambres son muy frecuentes o intensos, consulta con tu médico." },
      tension: { area: "musculo", title: "Vives con tensión muscular", study: "ue",
        text: "El estrés y la tensión muscular suelen ir de la mano. El magnesio contribuye al funcionamiento normal de los músculos y del sistema nervioso (declaraciones autorizadas por la UE)." },
      sueno_leve: { area: "mente", title: "Te cuesta desconectar por la noche", study: "ue",
        text: "Cuando el día ha sido intenso, cuesta bajar revoluciones. El magnesio contribuye al funcionamiento normal del sistema nervioso (declaración autorizada por la UE). Una rutina de noche sin pantallas también te ayudará." },
      sueno: { area: "energia", title: "No descansas bien", study: "efsa_mg",
        text: "Dormir mal hace que el cansancio se acumule de un día para otro. El magnesio contribuye a disminuir el cansancio y la fatiga (declaración autorizada por la UE). Si duermes mal a menudo, coméntalo con tu médico." },
      dieta_leve: { area: "energia", title: "Tu alimentación es mejorable algunos días", study: null,
        text: "El magnesio está sobre todo en las verduras de hoja verde, los frutos secos, las legumbres y los cereales integrales. Los días que faltan en tu plato, un complemento te ayuda a cubrir tu aporte." },
      dieta: { area: "energia", title: "Comes con prisas o poca cantidad", study: null,
        text: "Los alimentos más ricos en magnesio (verduras de hoja, frutos secos, legumbres e integrales) son justo los que faltan cuando comemos con prisas o hacemos dieta. Un complemento te ayuda a asegurar tu aporte diario." },
      defensas_leve: { area: "defensas", title: "Quieres cuidar tus defensas", study: "ue",
        text: "La vitamina C contribuye al funcionamiento normal del sistema inmunitario (declaración autorizada por la UE). Por eso te la recomendamos junto a tu magnesio." },
      defensas: { area: "defensas", title: "Te resfrías a menudo", study: "efsa_vitc",
        text: "La vitamina C contribuye al funcionamiento normal del sistema inmunitario y a disminuir el cansancio y la fatiga (declaraciones autorizadas por la UE). Si enfermas muy a menudo, consulta con tu médico." }
    };

    // Cada opción: [texto, puntos, mensaje]
    var QUESTIONS = [
      { id: "edad", emoji: "🌸", q: "¿Qué edad tienes?", hint: "Así adaptamos el test a ti.",
        options: [["Menos de 30", 0, null], ["Entre 30 y 44", 0, null], ["Entre 45 y 55", 1, "edad45"], ["Más de 55", 1, "edad55"]] },
      { id: "energia", emoji: "⚡", q: "¿Cómo es tu energía durante el día?", hint: "",
        options: [["Me levanto con energía y me dura", 0, null], ["Bajón a media tarde", 1, "energia_leve"], ["Cansada casi siempre, aunque duerma", 3, "cansancio"], ["Agotada, me cuesta llegar al final del día", 3, "agotada"]] },
      { id: "cafe", emoji: "☕", q: "¿Cuánto café o bebidas energéticas necesitas para funcionar?", hint: "",
        options: [["Ninguno, o uno por gusto", 0, null], ["Uno o dos al día", 1, "cafe_leve"], ["Tres o más: sin café no arranco", 2, "cafe"], ["Bebidas energéticas o mucho azúcar para aguantar", 3, "cafe"]] },
      { id: "estres", emoji: "🌀", q: "¿Cómo llevas el estrés del día a día?", hint: "",
        options: [["Tranquila, lo llevo bien", 0, null], ["Algún pico de estrés de vez en cuando", 1, "estres_leve"], ["Estresada o nerviosa casi a diario", 3, "estres"], ["Desbordada, no desconecto nunca", 3, "estres"]] },
      { id: "mente", emoji: "💭", q: "¿Cómo está tu cabeza: concentración y ánimo?", hint: "",
        options: [["Despejada y con buen ánimo", 0, null], ["Algún día me cuesta concentrarme", 1, "mente_leve"], ["Me cuesta concentrarme a menudo", 2, "mente"], ["Irritable o con altibajos de ánimo", 2, "animo"]] },
      { id: "musculos", emoji: "💪", q: "¿Tienes calambres, tirones o tensión muscular?", hint: "En las piernas, la espalda, el cuello…",
        options: [["Casi nunca", 0, null], ["Alguna vez, sobre todo después del deporte", 1, "musculo_leve"], ["A menudo tengo calambres o tirones", 3, "calambres"], ["Siempre estoy con tensión o contracturada", 2, "tension"]] },
      { id: "sueno", emoji: "🌙", q: "¿Cómo duermes?", hint: "",
        options: [["Duermo bien y me levanto descansada", 0, null], ["Me cuesta desconectar y dormirme", 1, "sueno_leve"], ["Me despierto por la noche", 2, "sueno"], ["Duermo mal casi todas las noches", 3, "sueno"]] },
      { id: "dieta", emoji: "🥗", q: "¿Cómo es tu alimentación?", hint: "Piensa en verduras de hoja, frutos secos, legumbres e integrales.",
        options: [["Variada: verdura, frutos secos y legumbres a diario", 0, null], ["Bastante bien, aunque no todos los días", 1, "dieta_leve"], ["Como con prisas o mucho procesado", 2, "dieta"], ["Hago dieta o como poca cantidad", 2, "dieta"]] },
      { id: "defensas", emoji: "🤧", q: "¿Cuántas veces te has resfriado este último año?", hint: "",
        options: [["Ninguna o una", 0, null], ["Dos o tres", 1, "defensas_leve"], ["Cuatro o más", 2, "defensas"], ["Pocas, pero estoy rodeada de virus (niños, trabajo, transporte…)", 1, "defensas_leve"]] },
      { id: "ejercicio", emoji: "🏃‍♀️", q: "¿Haces ejercicio?", hint: "Última pregunta: nos ayuda a elegir qué combinar con tu magnesio.", score: false,
        options: [["Casi nada", 0, null], ["Camino o hago algo suave", 0, null], ["Fuerza o deporte 2–3 días por semana", 0, null], ["Entreno casi a diario", 0, null]] }
    ];

    /* --------------------------------------------------------------------
       VENTA CRUZADA — qué complemento combinar con el magnesio.
       Cada respuesta suma puntos a un complemento y el motivo con más
       puntos es el que se explica.
       -------------------------------------------------------------------- */
    var COMBO_RULES = {
      energia_leve:  [["vitc", 1, "cansancio"]],
      cansancio:     [["vitc", 2, "cansancio"]],
      agotada:       [["vitc", 2, "cansancio"]],
      cafe:          [["vitc", 1, "cansancio"]],
      dieta:         [["vitc", 1, "cansancio"]],
      defensas_leve: [["vitc", 3, "defensas"]],
      defensas:      [["vitc", 5, "defensas"]],
      edad45:        [["vitc", 1, "colageno"], ["colageno", 1, "base"]],
      edad55:        [["vitc", 1, "colageno"], ["colageno", 1, "base"]],
      musculo_leve:  [["creatina", 1, "ejercicio"]]
    };
    // Según la respuesta de ejercicio (índice de la opción)
    var EXERCISE_RULES = [[], [], [["creatina", 3, "ejercicio"], ["vitc", 1, "deporte"]], [["creatina", 4, "ejercicio"], ["vitc", 1, "deporte"]]];

    var COMBOS = {
      vitc: {
        cansancio: { why: "Para tu energía", study: "efsa_vitc",
          text: "La vitamina C también contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE). Magnesio y vitamina C: dos frentes distintos para tu energía." },
        defensas: { why: "Para tus defensas", study: "ue",
          text: "La vitamina C contribuye al funcionamiento normal del sistema inmunitario (declaración autorizada por la UE). El magnesio cuida tu energía y la vitamina C, tus defensas." },
        colageno: { why: "Para tus huesos y tu piel", study: "ue",
          text: "La vitamina C contribuye a la formación normal de colágeno para el funcionamiento normal de los huesos, los cartílagos y la piel (declaración autorizada por la UE). Junto al magnesio, que contribuye al mantenimiento de los huesos, cuidas tu estructura desde dentro." },
        deporte: { why: "Para tus entrenos", study: "ue",
          text: "La vitamina C contribuye a mantener el funcionamiento normal del sistema inmunitario durante y después del ejercicio físico intenso (declaración autorizada por la UE)." }
      },
      creatina: {
        ejercicio: { why: "Para tus entrenos", study: "efsa_creatina",
          text: "Con 3 g al día, la creatina aumenta el rendimiento físico en series sucesivas de ejercicios breves de alta intensidad (declaración autorizada por la UE). El magnesio cuida tus músculos y la creatina, tu rendimiento: la pareja ideal si entrenas." },
        base: { why: "Si haces deporte", study: "efsa_creatina",
          text: "Con 3 g al día, la creatina aumenta el rendimiento físico en series sucesivas de ejercicios breves de alta intensidad (declaración autorizada por la UE)." }
      },
      colageno: {
        base: { why: "Un extra para tu rutina", study: null,
          text: "Péptidos de colágeno marino Peptan®, en polvo y sin sabor, para tomar en tu café o batido. Si lo añades, combínalo con la vitamina C: contribuye a la formación normal de colágeno (declaración autorizada por la UE)." }
      }
    };
    var COMBO_DEFAULT = { key: "vitc", reason: "cansancio" };
    var DEFAULT_REASON = { vitc: "cansancio", creatina: "base", colageno: "base" };

    // Enfoque del magnesio según lo que más le preocupa
    var ANGLES = {
      energia: { title: "Magnesio para tu energía", cta: "Quiero recuperar mi energía",
        text: "Tus respuestas apuntan sobre todo a tu energía. El magnesio contribuye a disminuir el cansancio y la fatiga y al metabolismo energético normal (declaraciones autorizadas por la UE)." },
      mente: { title: "Magnesio para tu calma y tu cabeza", cta: "Quiero cuidar mi sistema nervioso",
        text: "Tus respuestas apuntan sobre todo al estrés y a tu cabeza. El magnesio contribuye al funcionamiento normal del sistema nervioso y a la función psicológica normal (declaraciones autorizadas por la UE)." },
      musculo: { title: "Magnesio para tus músculos", cta: "Quiero cuidar mis músculos",
        text: "Tus respuestas apuntan sobre todo a tus músculos. El magnesio contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico (declaraciones autorizadas por la UE), algo clave si entrenas o sudas mucho." },
      huesos: { title: "Magnesio para esta etapa", cta: "Quiero cuidarme en esta etapa",
        text: "En tu etapa, cuidar los huesos y la energía es prioritario. El magnesio contribuye al mantenimiento de los huesos en condiciones normales y a disminuir el cansancio y la fatiga (declaraciones autorizadas por la UE)." },
      equilibrio: { title: "Magnesio para mantener tu energía", cta: "Quiero mantener mi energía",
        text: "Tu energía está bastante bien. Mantenerla es más fácil que recuperarla: el magnesio es un mineral esencial que tu cuerpo no fabrica y contribuye a disminuir el cansancio y la fatiga (declaración autorizada por la UE)." }
    };

    var RESULTS = {
      low: { tag: "Buena energía", title: "Tu energía parece estar en buen nivel",
        text: "¡Buenas noticias! Tus respuestas muestran pocas señales de cansancio. Aun así, hay detalles que puedes cuidar para mantenerte así." },
      mid: { tag: "Señales leves", title: "Tu cuerpo te está dando algunas señales",
        text: "Tus respuestas muestran algunas señales de cansancio y estrés. Es muy común con el ritmo de vida actual y suele responder bien a pequeños cambios en tu rutina." },
      high: { tag: "Señales claras", title: "Tu cuerpo te está pidiendo un respiro",
        text: "Tus respuestas muestran varias señales claras de cansancio, estrés o tensión. No estás sola: le pasa a muchísima gente y hay formas de empezar a sentirte mejor. Si dura semanas, consulta con tu médico." }
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
    function mainCode() { return TIERS[0].code; }
    function mainLink(key, level, angle) {
      return withParams(SHOP + "/discount/" + mainCode(key) + "?redirect=" + encodeURIComponent("/products/" + PRODUCTS[key].handle), level, angle);
    }
    // Carrito con variantes y cantidades: [{ v: variante, q: cantidad }]
    function linesLink(lines, code, level, angle) {
      var qty = {};
      lines.forEach(function (l) { qty[l.v] = (qty[l.v] || 0) + l.q; });
      var url = new URL(withParams(SHOP + "/cart/" + Object.keys(qty).map(function (v) { return v + ":" + qty[v]; }).join(","), level, angle));
      url.searchParams.set("discount", code);
      return url.toString();
    }

    function reviewsHtml() {
      return '<div class="reviews">' + REVIEWS.map(function (r) {
        return '<div class="review"><div class="stars">★★★★★</div><p>“' + r.t + '”</p><span>' + r.p + ' · ' + r.src + '</span></div>';
      }).join("") + '</div>' +
        '<p class="proof-note">Opiniones reales de clientas sobre su experiencia personal con nuestros productos. Los resultados pueden variar de una persona a otra.</p>';
    }
    function proofHtml() {
      var reels = INSTAGRAM_REELS.map(function (u) {
        return '<blockquote class="instagram-media" data-instgrm-permalink="' + u + '" data-instgrm-version="14"></blockquote>';
      }).join("");
      return '<div class="proof">' +
        '<span class="combo-tag">★★★★★ Opiniones reales</span>' +
        (reels ? '<div class="reels">' + reels + '</div>' : '') +
        '<h5 class="rev-title">Lo que dicen nuestras clientas</h5>' + reviewsHtml() +
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

    // Oferta "solo hoy": vale hasta las 23:59 del día en que hace el test (se recuerda en su navegador)
    function todayDeadline() {
      var end = new Date(); end.setHours(23, 59, 59, 999);
      try {
        var saved = +localStorage.getItem("te_oferta_fin");
        if (saved) return saved;
        localStorage.setItem("te_oferta_fin", String(end.getTime()));
      } catch (e) {}
      return end.getTime();
    }
    function todayHtml() {
      if (todayDeadline() <= Date.now()) return "";
      return '<div class="today" id="today"><span class="t-ico">⏰</span><div class="t-txt"><strong>OFERTA SOLO HOY</strong><small>Tu descuento termina a las 23:59</small></div>' +
        '<div class="t-clock"><span id="t-h">00<small><br>h</small></span><span id="t-m">00<small><br>min</small></span><span id="t-s">00<small><br>s</small></span></div></div>';
    }
    function startTodayClock() {
      var end = todayDeadline();
      function pad(n) { return (n < 10 ? "0" : "") + n; }
      function tick() {
        var box = document.getElementById("today");
        if (!box) return;
        var left = Math.max(0, end - Date.now()), sec = Math.floor(left / 1000);
        if (!left) { box.remove(); var ch = document.getElementById("today-chip"); if (ch) ch.remove(); return; }
        var tc = document.getElementById("tc-left");
        if (tc) tc.textContent = pad(Math.floor(sec / 3600)) + ":" + pad(Math.floor(sec / 60) % 60) + ":" + pad(sec % 60);
        document.getElementById("t-h").firstChild.nodeValue = pad(Math.floor(sec / 3600));
        document.getElementById("t-m").firstChild.nodeValue = pad(Math.floor(sec / 60) % 60);
        document.getElementById("t-s").firstChild.nodeValue = pad(sec % 60);
        setTimeout(tick, 1000);
      }
      tick();
    }
    function setupRoutine(level, angle, mainKey, preselect) {
      startTodayClock();
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
    var PRODUCT_ICON = { magnesio: "🌙", vitc: "🍊", creatina: "💪", colageno: "✨" };
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
        '<label class="check"><input type="checkbox" name="marketing"><span>Quiero recibir mi resultado, consejos de bienestar y ofertas de Benissalud por email</span></label>' +
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
        track("Lead", { content_name: "test_energia_email" });
        var data = showResult(true);
        sendSheet(data);
        sendLead(data, false);
        lead.sent = true;
        showLoading();
      }
      document.getElementById("lead-submit").addEventListener("click", submitLead);
      box.addEventListener("keydown", function (e) { if (e.key === "Enter" && e.target.tagName === "INPUT") { e.preventDefault(); submitLead(); } });
      field("privacy").addEventListener("change", function () { privacyRow.classList.remove("invalid"); if (field("privacy").checked && /privacidad/.test(err.textContent)) err.textContent = ""; });
      track("ViewEmailStep");
    }

    // Envía el contacto a Shopify (formularios nativos de la tienda, mismo dominio)
    // Rellena el formulario nativo de Shopify y lo envía en segundo plano (sin salir de la página)
    // Diagnóstico: abre la página con ?debug=1 para ver qué pasa con el envío
    var DIAG = /[?&]debug=1/.test(location.search) || (function () { try { return sessionStorage.getItem("th_debug") === "1"; } catch (e) { return false; } })();
    if (DIAG) { try { sessionStorage.setItem("th_debug", "1"); } catch (e) {} }
    function diagLog(msg) {
      try {
        var log = JSON.parse(sessionStorage.getItem("th_diag") || "[]");
        log.push(new Date().toLocaleTimeString() + " · " + msg);
        sessionStorage.setItem("th_diag", JSON.stringify(log.slice(-12)));
      } catch (e) {}
      renderDiag();
    }
    function renderDiag() {
      if (!DIAG) return;
      var box = document.getElementById("th-diag");
      if (!box) { box = document.createElement("div"); box.id = "th-diag"; (document.getElementById("th-app") || document.body).appendChild(box); }
      var log = []; try { log = JSON.parse(sessionStorage.getItem("th_diag") || "[]"); } catch (e) {}
      box.innerHTML = "<strong>Diagnóstico</strong><br>Shopify detectado: " + (onShopify() ? "SÍ (" + window.Shopify.shop + ")" : "NO") +
        "<br>Dirección: " + location.pathname + location.search + location.hash +
        "<br>" + log.map(function (l) { return "• " + l; }).join("<br>");
    }
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
        diagLog("envío " + fields.form_type + (topLevel ? " (página)" : " (fondo)") + " → " + form.action);
        if (form.requestSubmit) form.requestSubmit(); else form.submit();
      } catch (e) {}
    }
    // Guarda el contacto en la hoja de Google (no depende del antispam de Shopify)
    function sendSheet(data) {
      if (!lead || !SHEET_URL) { diagLog("hoja de Google: " + (SHEET_URL ? "sin datos" : "falta SHEET_URL")); return; }
      var f = { email: lead.email, nombre: lead.name || "", marketing: lead.marketing ? "si" : "no", etiquetas: data.tags.join(", ") };
      Object.keys(data.sheet).forEach(function (k) { f[k] = data.sheet[k]; });
      var body = new URLSearchParams(f);
      try {
        fetch(SHEET_URL, { method: "POST", mode: "no-cors", body: body, keepalive: true })
          .then(function () { diagLog("hoja de Google: enviado ✅"); }, function (e) { diagLog("hoja de Google: error " + e); });
      } catch (e) {
        try { navigator.sendBeacon(SHEET_URL, body); } catch (e2) {}
      }
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
          "contact[body]": "Test de energía (sin consentimiento de marketing)\n" + data.summary
        }, topLevel);
      }
    }

    // Respuestas guardadas mientras se envía el formulario de Shopify
    var STATE_KEY = "te_test_state", savedUtm = "";
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
        '<div class="loading fade-in"><div class="spinner"></div><h3>Analizando tus respuestas…</h3><p>Estamos preparando tu perfil de energía.</p></div>';
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

      // Enfoque: el área con más señales (las defensas las cubre la vitamina C)
      var angle = Object.keys(areaPts).filter(function (k) { return k !== "defensas" && k !== "huesos"; })
        .sort(function (a, b) { return areaPts[b] - areaPts[a]; })[0];
      if (!angle || areaPts[angle] < 2) angle = areaPts.huesos ? "huesos" : "equilibrio";
      var A = ANGLES[angle];

      // Motivos personalizados: las señales más fuertes primero
      var reasons = picked.slice().sort(function (a, b) { return b.pts - a.pts; }).slice(0, 4);

      var reasonsHtml = reasons.map(function (p) {
        var s = p.msg.study && STUDIES[p.msg.study];
        return '<li><strong>' + p.msg.title + '</strong><p>' + p.msg.text + '</p>' +
          (s ? '<a class="study" href="' + s.url + '" target="_blank" rel="noopener">📚 ' + s.label + '</a>' : '') + '</li>';
      }).join("");

      var combos = pickCombos(picked);
      var mainKey = "magnesio", routineItems = combos;

      // Datos del contacto (etiquetas para Shopify y resumen para el email a la tienda)
      var answered = {}, c1 = combos[0];
      visibleQuestions().forEach(function (item) { answered[item.q] = item.options[answers[item.id]][0]; });
      var utm = new URLSearchParams(location.search).get("utm_source") || (savedUtm || "");
      var leadData = {
        tags: ["test-energia", TAG_PREFIX + "resultado-" + level, TAG_PREFIX + "perfil-" + angle, TAG_PREFIX + "principal-" + mainKey, TAG_PREFIX + "pack-" + c1.key]
          .concat(utm ? [TAG_PREFIX + "origen-" + utm.toLowerCase().replace(/[^a-z0-9-]/g, "")] : []),
        sheet: {
          resultado: r.tag + " (" + Math.round(ratio * 100) + "%)", perfil: A.title,
          principal: PRODUCTS[mainKey].name, complemento: PRODUCTS[c1.key].name, origen: utm || "",
          respuestas: Object.keys(answered).map(function (q) { return q + " " + answered[q]; }).join(" | ")
        },
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
      var routineHtml = '<div class="routine" id="routine">' + todayHtml() +
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
        '<div class="score-row"><span class="score-num" id="score-num">0%</span><span>de señales de cansancio detectadas</span></div>' +
        '<p>' + r.text + '</p>' +
        '<div class="meter"><div class="meter-bar"><span class="meter-dot" id="dot"></span></div>' +
        '<div class="meter-labels"><span>Con energía</span><span>Señales leves</span><span>Señales claras</span></div></div>' +
        '<h4 class="reasons-title">Por qué el magnesio encaja contigo</h4>' +
        '<p class="reasons-sub">Según tus respuestas:</p>' +
        (reasonsHtml ? '<ul class="reasons stagger">' + reasonsHtml + '</ul>' : '') +
        '<p class="notice">' + STUDY_NOTICE + '</p>' +
        '<div class="reco"><span class="reco-tag">Tu recomendación personalizada</span><h4>' + A.title + '</h4><p>' + A.text + '</p>' +
        '<p class="body-note">🧪 <strong>Un mineral esencial.</strong> Tu cuerpo no puede fabricar magnesio: lo tienes que obtener cada día de lo que comes.</p>' +
        productCard(mainKey) +
        '<p class="dose">Bisglicinato de magnesio Albion® en polvo. 1 cucharilla rasa (3 g) al día con la comida. El tarro de 100 g dura 1 mes y el formato de 300 g, 3 meses.</p>' +
        '<p class="price-line"><s>' + PRODUCTS[mainKey].price + '</s> <strong>' + fmt(priceOf(mainKey) * .9) + '</strong> <span class="badge">-10% por hacer el test</span></p>' +
        (todayDeadline() > Date.now() ? '<div><span class="today-chip" id="today-chip">⏰ Solo hoy · quedan <b id="tc-left">--:--:--</b></span></div>' : '') +
        '<a class="btn btn-accent track-buy" data-what="' + mainKey + '" href="' + mainLink(mainKey, level, angle) + '">' + A.cta + ' →</a>' +
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
      setupRoutine(level, angle, mainKey, combos[0].key);
      quiz.querySelectorAll(".stagger > *, .routine, .reco").forEach(function (el, i) {
        el.style.animationDelay = (250 + i * 120) + "ms";
        if (!el.parentNode.classList.contains("stagger")) { el.classList.add("pop-in"); }
      });
      confetti();

      if (lead && !lead.sent) { lead.sent = true; sendLead(leadData, false); }
      track("CompleteRegistration", { content_name: "test_energia", status: level, content_category: angle });
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

    document.getElementById("reviews-section").innerHTML = reviewsHtml() +
      '<a href="#test" class="btn btn-accent" data-start>Hacer mi test gratis →</a>';
    document.querySelector("#reviews-section [data-start]").addEventListener("click", function (e) { e.preventDefault(); quiz.scrollIntoView({ behavior: "smooth", block: "start" }); });

    // El magnesio en tu cuerpo: puntos interactivos
    var ORGANS = [
      { e: "🧠", t: "En tu sistema nervioso", d: "Contribuye al funcionamiento normal del sistema nervioso y a la función psicológica normal: tu calma, tu concentración y tu ánimo." },
      { e: "🧬", t: "En todas tus células", d: "Contribuye a la síntesis proteica normal y desempeña un papel en el proceso de división celular, con el que tu cuerpo se renueva." },
      { e: "⚡", t: "En tu energía", d: "Contribuye al metabolismo energético normal y a disminuir el cansancio y la fatiga: ayuda a tus células a obtener energía de lo que comes." },
      { e: "🦴", t: "En tus huesos y dientes", d: "Contribuye al mantenimiento de los huesos y los dientes en condiciones normales. Más de la mitad del magnesio de tu cuerpo está en tus huesos." },
      { e: "💪", t: "En tus músculos", d: "Contribuye al funcionamiento normal de los músculos y al equilibrio electrolítico, clave cuando entrenas y pierdes minerales con el sudor." }
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
    if (!reduce) organAuto = setInterval(function () { pickOrgan((organI + 1) % ORGANS.length); }, 3800);

    document.getElementById("year").textContent = new Date().getFullYear();
    if (DIAG) {
      var q = location.search + location.hash;
      if (/customer_posted=true|contact_posted=true/.test(q)) diagLog("Shopify confirma el envío ✅ (" + q.replace(/^\?/, "") + ")");
      else if (/form_type|errors|challenge/.test(q)) diagLog("Shopify devolvió: " + q);
      renderDiag();
    }
    var restored = loadState();
    if (restored && restored.answers && restored.lead) {
      answers = restored.answers; lead = restored.lead; lead.sent = true; savedUtm = restored.utm || "";
      current = 1;
      showResult();
      setTimeout(function () { quiz.scrollIntoView({ block: "start" }); }, 50);
    } else {
      renderQuestion();
    }
  