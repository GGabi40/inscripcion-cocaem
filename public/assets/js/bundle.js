(()=>{"use strict";var n,r,e,A,t,i,o,a,s,p,c,l,d,m,g={122:(n,r,e)=>{e.d(r,{Z:()=>d});var A=e(537),t=e.n(A),i=e(645),o=e.n(i),a=e(667),s=e.n(a),p=new URL(e(632),e.b),c=o()(t());c.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&family=Montserrat:wght@400;600&display=swap);"]);var l=s()(p);c.push([n.id,"/*\r\nfont-family: 'Bebas Neue', cursive;\r\nfont-family: 'Inter', sans-serif;\r\nfont-family: 'Montserrat', sans-serif;\r\n */\r\n\r\n:root {\r\n    --gap: 15px;\r\n    --sombra-input: rgba(120, 0, 137, 0.51);\r\n    --background-input: #D9D9D9;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n\r\n    scroll-behavior: smooth;\r\n    background: url("+l+") center no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nbody {\r\n    font-family: 'Inter', 'Open Sans', sans-serif;\r\n    min-height: 100%;\r\n}\r\n\r\nh1 {\r\n    font-size: 3rem;\r\n    color: white;\r\n    font-family: 'Bebas Neue', 'Open Sans', sans-serif;\r\n    font-weight: 500;\r\n    text-align: center;\r\n\r\n    margin: 20px;\r\n    margin-top: 5px;\r\n}\r\n\r\np {\r\n    font-size: 1.6rem;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nlabel, legend {\r\n    font-size: 1.4rem;\r\n    display: block;\r\n\r\n    margin-bottom: 12px;\r\n}\r\n\r\ninput {\r\n    width: 80%;\r\n    height: 20px;\r\n    padding: 4px;\r\n    margin-top: 3px;\r\n    background: var(--background-input);\r\n    \r\n    border-radius: 8px;\r\n    border: 1px solid #000000;\r\n}\r\n\r\ninput:focus {\r\n    box-shadow: 3px 4px 6px var(--sombra-input);\r\n    background-color: white;\r\n    padding-left: 10px;\r\n}\r\n\r\n#member--input, #sociedad, #beca--input {\r\n    width: 60px;\r\n}\r\n\r\n#member--input:focus, #sociedad:focus, #beca--input:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n#attention {\r\n    font-size: 1.2rem;\r\n    border-radius: 8px;\r\n    padding: 6px;\r\n\r\n    background-color: rgba(255, 255, 0, 0.342);\r\n    display: none;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n}\r\n\r\nfieldset {\r\n    border: none;\r\n    margin-top: 8px;\r\n}\r\n\r\nselect {\r\n    height: 25px;\r\n    padding: 4px;\r\n    margin-top: 3px;\r\n    background: var(--background-input);\r\n    \r\n    border-radius: 8px;\r\n    border: 1px solid #000000;\r\n}\r\n\r\noption {\r\n    background-color: white;\r\n}\r\n\r\n#member {\r\n    width: 92%;\r\n}\r\n\r\n/* Formulario */\r\n.formulario-inscripcion {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.formulario {\r\n    background-color: white;\r\n\r\n    border-radius: 18px;\r\n    max-width: 30%;\r\n    min-width: 280px;\r\n    margin: 10px auto;\r\n    padding: 20px;\r\n}\r\n\r\n.req {\r\n    color: red;\r\n}\r\n\r\n#width-complete {\r\n    grid-column: 3 / 1;\r\n}\r\n\r\n#input--mail {\r\n    width: 92%;\r\n}\r\n\r\n#faces-member {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n\r\n.member-sociedad {\r\n    width: 80%;\r\n    display: block;\r\n    align-items: center;\r\n    margin-bottom: 12px;\r\n}\r\n\r\nbutton[type=submit] {\r\n    width: 60%;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n    height: 24px;\r\n    border-radius: 8px;\r\n    background-color: transparent;\r\n\r\n    font-weight: 600;\r\n\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n#submit:hover {\r\n    cursor: pointer;\r\n    background-color: var(--background-input);\r\n    box-shadow: 1px 1px 6px gray;\r\n    border: 1px solid black;\r\n}\r\n\r\n/* Footer */\r\n#footer {\r\n    position: relative;\r\n\r\n    margin-top: auto;\r\n    width: 100%;\r\n\r\n    background: linear-gradient(90deg, \r\n    #47407B 15.2%, \r\n    #5B4C7D 31.78%, \r\n    #744D77 59.54%, \r\n    #774D7A 80.2%);\r\n\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.footer-cocaem {\r\n    box-sizing: border-box;\r\n    height: 120px;\r\n    margin-top: auto;\r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.contain-logos {\r\n    display: flex;\r\n    padding-top: 8px;\r\n    justify-content: space-around;\r\n}\r\n\r\n.contain-logos img {\r\n    max-height: 80px;\r\n    max-width: 80px;\r\n}\r\n\r\n.white-bg-logo {\r\n    display: flex;\r\n    background-color: white;\r\n    max-height: 80px;\r\n    max-width: 80px;\r\n    border-radius: 100%;\r\n    box-shadow: 1px 1px 6px black;\r\n}\r\n\r\n.other-logos {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.contain-social-media {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.contain-social-media img {\r\n    max-height: 30px;\r\n    width: auto;\r\n    filter: invert(100%);\r\n\r\n    margin-right: 10px;\r\n}\r\n\r\n.ig, .map, .mail {\r\n    display: flex;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.ig a, .map a, .mail a {\r\n    display: flex;\r\n    align-items: center;\r\n    color: white;\r\n\r\n    transition: 0.2s;\r\n}\r\n\r\n.ig a:hover, .map a:hover, .mail a:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.mail img {\r\n    width: 30px;\r\n}\r\n\r\n.ig a:visited {\r\n    color: white;\r\n}\r\n\r\n.ggabi {\r\n    position: absolute;\r\n    background-color: black;\r\n    color: white;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    text-align: center;\r\n}\r\n\r\n#ggabi-footer {\r\n    font-size: 1.3rem;\r\n    margin: 5px;\r\n}\r\n\r\n.ggabi a {\r\n    text-decoration: underline;\r\n}\r\n\r\n.ggabi a:visited {\r\n    color: white;\r\n}\r\n\r\n.ggabi span {\r\n    color: red;\r\n}\r\n\r\n/* MEDIA QUERY */\r\n\r\n@media (max-width: 825px) {\r\n    h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    .contain-logos {\r\n        padding-top: 18px;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 60px;\r\n        max-width: 60px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 60px;\r\n        max-width: 60px;\r\n    }\r\n\r\n    .contain-social-media {\r\n        margin-top: 6px;\r\n    }\r\n}\r\n\r\n@media (max-width: 753px) {\r\n    h1 {\r\n        font-size: 2.4rem;\r\n    }\r\n\r\n    .contain-all-logo {\r\n        display: none;\r\n    }\r\n\r\n    .contain-logos-mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        gap: 4px;\r\n    }\r\n\r\n    .contain-logos-mobile img {\r\n        height: auto;\r\n        width: 70px;\r\n    }\r\n\r\n    .logo-mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 4px;\r\n    }\r\n\r\n    .title-mobile {\r\n        text-align: center;\r\n        margin: 0 3%;\r\n    }\r\n\r\n}\r\n\r\n/* Mobile */\r\n@media (max-width: 480px) {\r\n    h1 {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 3.5rem;\r\n    }\r\n    \r\n    h3 {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    h4 {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    p {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        font-size: 0.8rem;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n}\r\n\r\n@media (max-width: 383px) {\r\n    h1 {\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .footer-cocaem {\r\n        height: 100px;\r\n    }\r\n\r\n    .contain-social-media img {\r\n        max-height: 25px;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        display: none;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n\r\n    #ggabi-footer {\r\n        font-size: 1.1rem;\r\n        margin: 2px;\r\n    }\r\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&family=Montserrat:wght@400;600&display=swap');\r\n\r\n/*\r\nfont-family: 'Bebas Neue', cursive;\r\nfont-family: 'Inter', sans-serif;\r\nfont-family: 'Montserrat', sans-serif;\r\n */\r\n\r\n:root {\r\n    --gap: 15px;\r\n    --sombra-input: rgba(120, 0, 137, 0.51);\r\n    --background-input: #D9D9D9;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n\r\n    scroll-behavior: smooth;\r\n    background: url(../img/rosario-city/monumento.svg) center no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\nbody {\r\n    font-family: 'Inter', 'Open Sans', sans-serif;\r\n    min-height: 100%;\r\n}\r\n\r\nh1 {\r\n    font-size: 3rem;\r\n    color: white;\r\n    font-family: 'Bebas Neue', 'Open Sans', sans-serif;\r\n    font-weight: 500;\r\n    text-align: center;\r\n\r\n    margin: 20px;\r\n    margin-top: 5px;\r\n}\r\n\r\np {\r\n    font-size: 1.6rem;\r\n    margin-bottom: 10px;\r\n    margin-top: 10px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nlabel, legend {\r\n    font-size: 1.4rem;\r\n    display: block;\r\n\r\n    margin-bottom: 12px;\r\n}\r\n\r\ninput {\r\n    width: 80%;\r\n    height: 20px;\r\n    padding: 4px;\r\n    margin-top: 3px;\r\n    background: var(--background-input);\r\n    \r\n    border-radius: 8px;\r\n    border: 1px solid #000000;\r\n}\r\n\r\ninput:focus {\r\n    box-shadow: 3px 4px 6px var(--sombra-input);\r\n    background-color: white;\r\n    padding-left: 10px;\r\n}\r\n\r\n#member--input, #sociedad, #beca--input {\r\n    width: 60px;\r\n}\r\n\r\n#member--input:focus, #sociedad:focus, #beca--input:focus {\r\n    box-shadow: none;\r\n}\r\n\r\n#attention {\r\n    font-size: 1.2rem;\r\n    border-radius: 8px;\r\n    padding: 6px;\r\n\r\n    background-color: rgba(255, 255, 0, 0.342);\r\n    display: none;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n}\r\n\r\nfieldset {\r\n    border: none;\r\n    margin-top: 8px;\r\n}\r\n\r\nselect {\r\n    height: 25px;\r\n    padding: 4px;\r\n    margin-top: 3px;\r\n    background: var(--background-input);\r\n    \r\n    border-radius: 8px;\r\n    border: 1px solid #000000;\r\n}\r\n\r\noption {\r\n    background-color: white;\r\n}\r\n\r\n#member {\r\n    width: 92%;\r\n}\r\n\r\n/* Formulario */\r\n.formulario-inscripcion {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.formulario {\r\n    background-color: white;\r\n\r\n    border-radius: 18px;\r\n    max-width: 30%;\r\n    min-width: 280px;\r\n    margin: 10px auto;\r\n    padding: 20px;\r\n}\r\n\r\n.req {\r\n    color: red;\r\n}\r\n\r\n#width-complete {\r\n    grid-column: 3 / 1;\r\n}\r\n\r\n#input--mail {\r\n    width: 92%;\r\n}\r\n\r\n#faces-member {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    flex-direction: column;\r\n}\r\n\r\n.member-sociedad {\r\n    width: 80%;\r\n    display: block;\r\n    align-items: center;\r\n    margin-bottom: 12px;\r\n}\r\n\r\nbutton[type=submit] {\r\n    width: 60%;\r\n    display: block;\r\n    margin: 0 auto;\r\n\r\n    height: 24px;\r\n    border-radius: 8px;\r\n    background-color: transparent;\r\n\r\n    font-weight: 600;\r\n\r\n    transition: 0.2s ease-in-out;\r\n}\r\n\r\n#submit:hover {\r\n    cursor: pointer;\r\n    background-color: var(--background-input);\r\n    box-shadow: 1px 1px 6px gray;\r\n    border: 1px solid black;\r\n}\r\n\r\n/* Footer */\r\n#footer {\r\n    position: relative;\r\n\r\n    margin-top: auto;\r\n    width: 100%;\r\n\r\n    background: linear-gradient(90deg, \r\n    #47407B 15.2%, \r\n    #5B4C7D 31.78%, \r\n    #744D77 59.54%, \r\n    #774D7A 80.2%);\r\n\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n\r\n.footer-cocaem {\r\n    box-sizing: border-box;\r\n    height: 120px;\r\n    margin-top: auto;\r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.contain-logos {\r\n    display: flex;\r\n    padding-top: 8px;\r\n    justify-content: space-around;\r\n}\r\n\r\n.contain-logos img {\r\n    max-height: 80px;\r\n    max-width: 80px;\r\n}\r\n\r\n.white-bg-logo {\r\n    display: flex;\r\n    background-color: white;\r\n    max-height: 80px;\r\n    max-width: 80px;\r\n    border-radius: 100%;\r\n    box-shadow: 1px 1px 6px black;\r\n}\r\n\r\n.other-logos {\r\n    display: flex;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.contain-social-media {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.contain-social-media img {\r\n    max-height: 30px;\r\n    width: auto;\r\n    filter: invert(100%);\r\n\r\n    margin-right: 10px;\r\n}\r\n\r\n.ig, .map, .mail {\r\n    display: flex;\r\n    font-size: 1.3rem;\r\n}\r\n\r\n.ig a, .map a, .mail a {\r\n    display: flex;\r\n    align-items: center;\r\n    color: white;\r\n\r\n    transition: 0.2s;\r\n}\r\n\r\n.ig a:hover, .map a:hover, .mail a:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.mail img {\r\n    width: 30px;\r\n}\r\n\r\n.ig a:visited {\r\n    color: white;\r\n}\r\n\r\n.ggabi {\r\n    position: absolute;\r\n    background-color: black;\r\n    color: white;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    text-align: center;\r\n}\r\n\r\n#ggabi-footer {\r\n    font-size: 1.3rem;\r\n    margin: 5px;\r\n}\r\n\r\n.ggabi a {\r\n    text-decoration: underline;\r\n}\r\n\r\n.ggabi a:visited {\r\n    color: white;\r\n}\r\n\r\n.ggabi span {\r\n    color: red;\r\n}\r\n\r\n/* MEDIA QUERY */\r\n\r\n@media (max-width: 825px) {\r\n    h1 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        font-size: 1.1rem;\r\n    }\r\n\r\n    .contain-logos {\r\n        padding-top: 18px;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 60px;\r\n        max-width: 60px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 60px;\r\n        max-width: 60px;\r\n    }\r\n\r\n    .contain-social-media {\r\n        margin-top: 6px;\r\n    }\r\n}\r\n\r\n@media (max-width: 753px) {\r\n    h1 {\r\n        font-size: 2.4rem;\r\n    }\r\n\r\n    .contain-all-logo {\r\n        display: none;\r\n    }\r\n\r\n    .contain-logos-mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        flex-direction: column;\r\n        gap: 4px;\r\n    }\r\n\r\n    .contain-logos-mobile img {\r\n        height: auto;\r\n        width: 70px;\r\n    }\r\n\r\n    .logo-mobile {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 4px;\r\n    }\r\n\r\n    .title-mobile {\r\n        text-align: center;\r\n        margin: 0 3%;\r\n    }\r\n\r\n}\r\n\r\n/* Mobile */\r\n@media (max-width: 480px) {\r\n    h1 {\r\n        font-size: 1.8rem;\r\n    }\r\n    \r\n    h2 {\r\n        font-size: 3.5rem;\r\n    }\r\n    \r\n    h3 {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    h4 {\r\n        font-size: 2rem;\r\n    }\r\n    \r\n    p {\r\n        font-size: 1.5rem;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        font-size: 0.8rem;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n}\r\n\r\n@media (max-width: 383px) {\r\n    h1 {\r\n        font-size: 1.6rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 3rem;\r\n    }\r\n\r\n    .footer-cocaem {\r\n        height: 100px;\r\n    }\r\n\r\n    .contain-social-media img {\r\n        max-height: 25px;\r\n    }\r\n\r\n    .ig span, .map span, .mail span {\r\n        display: none;\r\n    }\r\n    \r\n    .contain-logos img {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n    \r\n    .white-bg-logo {\r\n        max-height: 50px;\r\n        max-width: 50px;\r\n    }\r\n\r\n    #ggabi-footer {\r\n        font-size: 1.1rem;\r\n        margin: 2px;\r\n    }\r\n}"],sourceRoot:""}]);const d=c},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",A=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),A&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),A&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,A,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(A)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var p=0;p<n.length;p++){var c=[].concat(n[p]);A&&o[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),e&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=e):c[2]=e),t&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=t):c[4]="".concat(t)),r.push(c))}},r}},667:n=>{n.exports=function(n,r){return r||(r={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),r.hash&&(n+=r.hash),/["'() \t\n]|(%20)/.test(n)||r.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),i="/*# ".concat(t," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},379:n=>{var r=[];function e(n){for(var e=-1,A=0;A<r.length;A++)if(r[A].identifier===n){e=A;break}return e}function A(n,A){for(var i={},o=[],a=0;a<n.length;a++){var s=n[a],p=A.base?s[0]+A.base:s[0],c=i[p]||0,l="".concat(p," ").concat(c);i[p]=c+1;var d=e(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)r[d].references++,r[d].updater(m);else{var g=t(m,A);A.byIndex=a,r.splice(a,0,{identifier:l,updater:g,references:1})}o.push(l)}return o}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var i=A(n=n||[],t=t||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var a=e(i[o]);r[a].references--}for(var s=A(n,t),p=0;p<i.length;p++){var c=e(i[p]);0===r[c].references&&(r[c].updater(),r.splice(c,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var A=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var A="";e.supports&&(A+="@supports (".concat(e.supports,") {")),e.media&&(A+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(A+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),A+=e.css,t&&(A+="}"),e.media&&(A+="}"),e.supports&&(A+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(A,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},632:(n,r,e)=>{n.exports=e.p+"5ffb9304d49cc1839d97.svg"}},u={};function B(n){var r=u[n];if(void 0!==r)return r.exports;var e=u[n]={id:n,exports:{}};return g[n](e,e.exports,B),e.exports}B.m=g,B.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return B.d(r,{a:r}),r},B.d=(n,r)=>{for(var e in r)B.o(r,e)&&!B.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},B.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),B.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;B.g.importScripts&&(n=B.g.location+"");var r=B.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var e=r.getElementsByTagName("script");if(e.length)for(var A=e.length-1;A>-1&&!n;)n=e[A--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),B.p=n})(),B.b=document.baseURI||self.location.href,B.nc=void 0,n=B(379),r=B.n(n),e=B(795),A=B.n(e),t=B(569),i=B.n(t),o=B(565),a=B.n(o),s=B(216),p=B.n(s),c=B(589),l=B.n(c),d=B(122),(m={}).styleTagTransform=l(),m.setAttributes=a(),m.insert=i().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=p(),r()(d.Z,m),d.Z&&d.Z.locals&&d.Z.locals,document.addEventListener("DOMContentLoaded",(function(){var n=document.querySelector(".formulario-inscripcion"),r=document.getElementById("submit"),e=document.getElementById("attention"),A=document.querySelector('input[name="presenta-trabajo"]'),t=document.querySelector('input[name="memberFaces"]'),i=document.querySelector(".input--sociedad");i.style.display="none";var o=document.querySelector(".member-sociedad");n.addEventListener("change",(function(){A.checked?(e.style.display="block",r.title="Debe leer Bases Y Condicones.",r.disabled=!0):(e.style.display="none",r.title="",r.disabled=!1),t.checked?i.style.display="block":(i.style.display="none",o.value="")})),n.addEventListener("submit",(function(n){n.preventDefault();var r={name:document.querySelector("#name").value,surname:document.querySelector("#surname").value,dni:document.querySelector("#dni").value,tel:document.querySelector("#tel-number").value,email:document.querySelector("#input--mail").value,miembro:t.value,sociedad:o.value};alert("Hola, ".concat(r.name))}))}))})();
//# sourceMappingURL=bundle.js.map