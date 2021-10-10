function openNewTab(){
  var text = document.getElementsByTagName("th")
  for (var i = 0; i < text.length; i++) {
    text[i].onclick = function() {
      let link1 = `https://www.google.com/search?q=${this.innerText}&safe=active&ssui=on`
      window.open(link1)
      console.log(link1)
      
    }
  }

}

(this["webpackJsonpspeech-to-text-demo"] = this["webpackJsonpspeech-to-text-demo"] || []).push([[0], {
    49: function(e, a, t) {
        e.exports = t(57)
    },
    57: function(e, a, t) {
        "use strict";
        t.r(a);
        var n = t(0)
          , i = t.n(n)
          , s = t(8)
          , r = t.n(s)
          , l = t(12)
          , o = t(32)
          , c = t(20)
          , m = t(40)
          , u = t(41)
          , E = t(43)
          , p = t(4)
          , g = t(58)
          , h = t(90)
          , d = t(91)
          , S = t(92)
          , f = t(93)
          , v = t(104)
          , N = t(102)
          , k = t(105)
          , I = t(94)
          , y = t(95)
          , T = t(96)
          , b = t(97)
          , x = t(98)
          , A = t(99)
          , L = t(100)
          , P = t(101)
          , C = t(103)
          , B = t(42)
          , H = t.n(B)
          , R = [["Afrikaans (Suid-Afrika)", "af-ZA"], ["\u12a0\u121b\u122d\u129b (\u12a2\u1275\u12ee\u1335\u12eb)", "am-ET"], ["\u0540\u0561\u0575 (\u0540\u0561\u0575\u0561\u057d\u057f\u0561\u0576)", "hy-AM"], ["Az\u0259rbaycan (Az\u0259rbaycan)", "az-AZ"], ["Bahasa Indonesia (Indonesia)", "id-ID"], ["Bahasa Melayu (Malaysia)", "ms-MY"], ["\u09ac\u09be\u0982\u09b2\u09be (\u09ac\u09be\u0982\u09b2\u09be\u09a6\u09c7\u09b6)", "bn-BD"], ["\u09ac\u09be\u0982\u09b2\u09be (\u09ad\u09be\u09b0\u09a4)", "bn-IN"], ["Catal\xe0 (Espanya)", "ca-ES"], ["\u010ce\u0161tina (\u010cesk\xe1 republika)", "cs-CZ"], ["Dansk (Danmark)", "da-DK"], ["Deutsch (Deutschland)", "de-DE"], ["English (Australia)", "en-AU"], ["English (Canada)", "en-CA"], ["English (Ghana)", "en-GH"], ["English (Great Britain)", "en-GB"], ["English (India)", "en-IN"], ["English (Ireland)", "en-IE"], ["English (Kenya)", "en-KE"], ["English (New Zealand)", "en-NZ"], ["English (Nigeria)", "en-NG"], ["English (Philippines)", "en-PH"], ["English (South Africa)", "en-ZA"], ["English (Tanzania)", "en-TZ"], ["English (United States)", "en-US"], ["Espa\xf1ol (Argentina)", "es-AR"], ["Espa\xf1ol (Bolivia)", "es-BO"], ["Espa\xf1ol (Chile)", "es-CL"], ["Espa\xf1ol (Colombia)", "es-CO"], ["Espa\xf1ol (Costa Rica)", "es-CR"], ["Espa\xf1ol (Ecuador)", "es-EC"], ["Espa\xf1ol (El Salvador)", "es-SV"], ["Espa\xf1ol (Espa\xf1a)", "es-ES"], ["Espa\xf1ol (Estados Unidos)", "es-US"], ["Espa\xf1ol (Guatemala)", "es-GT"], ["Espa\xf1ol (Honduras)", "es-HN"], ["Espa\xf1ol (M\xe9xico)", "es-MX"], ["Espa\xf1ol (Nicaragua)", "es-NI"], ["Espa\xf1ol (Panam\xe1)", "es-PA"], ["Espa\xf1ol (Paraguay)", "es-PY"], ["Espa\xf1ol (Per\xfa)", "es-PE"], ["Espa\xf1ol (Puerto Rico)", "es-PR"], ["Espa\xf1ol (Rep\xfablica Dominicana)", "es-DO"], ["Espa\xf1ol (Uruguay)", "es-UY"], ["Espa\xf1ol (Venezuela)", "es-VE"], ["Euskara (Espainia)", "eu-ES"], ["Filipino (Pilipinas)", "fil-PH"], ["Fran\xe7ais (Canada)", "fr-CA"], ["Fran\xe7ais (France)", "fr-FR"], ["Galego (Espa\xf1a)", "gl-ES"], ["\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10e5\u10d0\u10e0\u10d7\u10d5\u10d4\u10da\u10dd)", "ka-GE"], ["\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aad\u0abe\u0ab0\u0aa4)", "gu-IN"], ["Hrvatski (Hrvatska)", "hr-HR"], ["IsiZulu (Ningizimu Afrika)", "zu-ZA"], ["\xcdslenska (\xcdsland)", "is-IS"], ["Italiano (Italia)", "it-IT"], ["Jawa (Indonesia)", "jv-ID"], ["\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cad\u0cbe\u0cb0\u0ca4)", "kn-IN"], ["\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a (\u1780\u1798\u17d2\u1796\u17bb\u1787\u17b6)", "km-KH"], ["\u0ea5\u0eb2\u0ea7 (\u0ea5\u0eb2\u0ea7)", "lo-LA"], ["Latvie\u0161u (latvie\u0161u)", "lv-LV"], ["Lietuvi\u0173 (Lietuva)", "lt-LT"], ["Magyar (Magyarorsz\xe1g)", "hu-HU"], ["\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d07\u0d28\u0d4d\u0d24\u0d4d\u0d2f)", "ml-IN"], ["\u092e\u0930\u093e\u0920\u0940 (\u092d\u093e\u0930\u0924)", "mr-IN"], ["Nederlands (Nederland)", "nl-NL"], ["\u0928\u0947\u092a\u093e\u0932\u0940 (\u0928\u0947\u092a\u093e\u0932)", "ne-NP"], ["Norsk bokm\xe5l (Norge)", "nb-NO"], ["Polski (Polska)", "pl-PL"], ["Portugu\xeas (Brasil)", "pt-BR"], ["Portugu\xeas (Portugal)", "pt-PT"], ["Rom\xe2n\u0103 (Rom\xe2nia)", "ro-RO"], ["\u0dc3\u0dd2\u0d82\u0dc4\u0dbd (\u0dc1\u0dca\u0dbb\u0dd3 \u0dbd\u0d82\u0d9a\u0dcf\u0dc0)", "si-LK"], ["Sloven\u010dina (Slovensko)", "sk-SK"], ["Sloven\u0161\u010dina (Slovenija)", "sl-SI"], ["Urang (Indonesia)", "su-ID"], ["Swahili (Tanzania)", "sw-TZ"], ["Swahili (Kenya)", "sw-KE"], ["Suomi (Suomi)", "fi-FI"], ["Svenska (Sverige)", "sv-SE"], ["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0ba8\u0bcd\u0ba4\u0bbf\u0baf\u0bbe)", "ta-IN"], ["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b9a\u0bbf\u0b99\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0bc2\u0bb0\u0bcd)", "ta-SG"], ["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8)", "ta-LK"], ["\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0bae\u0bb2\u0bc7\u0b9a\u0bbf\u0baf\u0bbe)", "ta-MY"], ["\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2d\u0c3e\u0c30\u0c24\u0c26\u0c47\u0c36\u0c02)", "te-IN"], ["Ti\u1ebfng Vi\u1ec7t (Vi\u1ec7t Nam)", "vi-VN"], ["T\xfcrk\xe7e (T\xfcrkiye)", "tr-TR"], ["\u0627\u0631\u062f\u0648 (\u067e\u0627\u06a9\u0633\u062a\u0627\u0646)", "ur-PK"], ["\u0627\u0631\u062f\u0648 (\u0628\u06be\u0627\u0631\u062a)", "ur-IN"], ["\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac (\u0395\u03bb\u03bb\u03ac\u03b4\u03b1)", "el-GR"], ["\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 (\u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f)", "bg-BG"], ["\u0420\u0443\u0441\u0441\u043a\u0438\u0439 (\u0420\u043e\u0441\u0441\u0438\u044f)", "ru-RU"], ["\u0421\u0440\u043f\u0441\u043a\u0438 (\u0421\u0440\u0431\u0438\u0458\u0430)", "sr-RS"], ["\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430 (\u0423\u043a\u0440\u0430\u0457\u043d\u0430)", "uk-UA"], ["\u05e2\u05d1\u05e8\u05d9\u05ea (\u05d9\u05e9\u05e8\u05d0\u05dc)", "he-IL"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0625\u0633\u0631\u0627\u0626\u064a\u0644)", "ar-IL"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0623\u0631\u062f\u0646)", "ar-JO"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a)", "ar-AE"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0628\u062d\u0631\u064a\u0646)", "ar-BH"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u062c\u0632\u0627\u0626\u0631)", "ar-DZ"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629)", "ar-SA"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0639\u0631\u0627\u0642)", "ar-IQ"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0643\u0648\u064a\u062a)", "ar-KW"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0627\u0644\u0645\u063a\u0631\u0628)", "ar-MA"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u062a\u0648\u0646\u0633)", "ar-TN"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0639\u064f\u0645\u0627\u0646)", "ar-OM"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0641\u0644\u0633\u0637\u064a\u0646)", "ar-PS"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0642\u0637\u0631)", "ar-QA"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0644\u0628\u0646\u0627\u0646)", "ar-LB"], ["\u0627\u0644\u0639\u0631\u0628\u064a\u0629 (\u0645\u0635\u0631)", "ar-EG"], ["\u0641\u0627\u0631\u0633\u06cc (\u0627\u06cc\u0631\u0627\u0646)", "fa-IR"], ["\u0939\u093f\u0928\u094d\u0926\u0940 (\u092d\u093e\u0930\u0924)", "hi-IN"], ["\u0e44\u0e17\u0e22 (\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22)", "th-TH"], ["\ud55c\uad6d\uc5b4 (\ub300\ud55c\ubbfc\uad6d)", "ko-KR"], ["\u570b\u8a9e (\u53f0\u7063)", "cmn-Hant-TW"], ["\u5ee3\u6771\u8a71 (\u9999\u6e2f)", "yue-Hant-HK"], ["\u65e5\u672c\u8a9e\uff08\u65e5\u672c\uff09", "ja-JP"], ["\u666e\u901a\u8a71 (\u9999\u6e2f)", "cmn-Hans-HK"], ["\u666e\u901a\u8bdd (\u4e2d\u56fd\u5927\u9646)", "cmn-Hans-CN"]]
          , w = function(e) {
            function a() {
                var e, t;
                Object(o.a)(this, a);
                for (var n = arguments.length, i = new Array(n), s = 0; s < n; s++)
                    i[s] = arguments[s];
                return (t = Object(m.a)(this, (e = Object(u.a)(a)).call.apply(e, [this].concat(i)))).state = {
                    error: "",
                    interimText: "",
                    finalisedText: [],
                    listening: !1,
                    language: "en-IN"
                },
                t.onAnythingSaid = function(e) {
                    t.setState({
                        interimText: e
                    })
                }
                ,
                t.onEndEvent = function() {
                    Object(C.b)("sm", t.props.width) ? t.state.listening && t.startListening() : t.setState({
                        listening: !1
                    })
                }
                ,
                t.onFinalised = function(e) {
                    t.setState({
                        finalisedText: [e].concat(Object(l.a)(t.state.finalisedText)),
                        interimText: ""
                    })
                    openNewTab()
                }
                ,
                t.startListening = function() {
                    try {
                        t.listener = new H.a(t.onFinalised,t.onEndEvent,t.onAnythingSaid,t.state.language),
                        t.listener.startListening(),
                        t.setState({
                            listening: !0
                        })
                    } catch (e) {
                        console.log(e)
                    }
                }
                ,
                t.stopListening = function() {
                    t.listener.stopListening(),
                    t.setState({
                        listening: !1
                    })
                }
                ,
                t
            }
            return Object(E.a)(a, e),
            Object(c.a)(a, [{
                key: "render",
                value: function() {
                    var e, a, t = this, n = this.state, s = n.error, r = n.interimText, l = n.finalisedText, o = n.listening, c = n.language, m = this.props.classes;
                    s ? e = i.a.createElement(g.a, {
                        className: m.paper
                    }, i.a.createElement(h.a, {
                        variant: "h3",
                        gutterBottom: !0
                    }, s)) : (a = o ? i.a.createElement(d.a, {
                        color: "primary",
                        onClick: function() {
                            return t.stopListening()
                        }
                    }, "Stop Listening") : i.a.createElement(d.a, {
                        color: "primary",
                        onClick: function() {
                            return t.startListening()
                        },
                        variant: "contained"
                    }, "Start Listening"),
                    e = i.a.createElement(S.a, {
                        container: !0,
                        spacing: 16
                    }, i.a.createElement(S.a, {
                        item: !0,
                        xs: 12,
                        md: 7
                    }, i.a.createElement(g.a, {
                        className: this.props.classes.paper
                    }, i.a.createElement(S.a, {
                        container: !0,
                        spacing: 16
                    }, i.a.createElement(S.a, {
                        item: !0,
                        xs: 12,
                        lg: 6
                    }, i.a.createElement(h.a, {
                        variant: "overline",
                        gutterBottom: !0
                    }, "Status: ", o ? "listening..." : "finished listening"), a), i.a.createElement(S.a, {
                        item: !0,
                        xs: 12,
                        lg: 6
                    }, i.a.createElement(f.a, {
                        className: m.formControl
                    }, i.a.createElement(v.a, null, "Language"), i.a.createElement(N.a, {
                        value: c,
                        onChange: function(e) {
                            return t.setState({
                                language: e.target.value
                            })
                        },
                        disabled: o
                    }, R.map((function(e) {
                        return i.a.createElement(k.a, {
                            key: e[1],
                            value: e[1]
                        }, e[0])
                    }
                    ))), i.a.createElement(I.a, null, "What language are you going to speak in?")))))), i.a.createElement(S.a, {
                        item: !0,
                        xs: 12,
                        md: 50
                    }, i.a.createElement(g.a, {
                        className: this.props.classes.paper
                    }, i.a.createElement(h.a, {
                        variant: "overline",
                        gutterBottom: 0
                    }, "Current utterances"), i.a.createElement(h.a, {
                        variant: "body1",
                        gutterBottom: !0
                    }, r))), i.a.createElement(S.a, {
                        item: !0,
                        xs: 12
                    }, i.a.createElement(g.a, {
                        className: m.paper
                    }, i.a.createElement(y.a, {
                        className: m.table
                    }, i.a.createElement(T.a, null, i.a.createElement(b.a, null, i.a.createElement(x.a, null, "Finalised Text (click on text to search)"))), i.a.createElement(A.a, null, l.map((function(e, a) {
                        return i.a.createElement(b.a, {
                            key: a
                        }, i.a.createElement(x.a, {
                            component: "th",
                            scope: "row"
                        }, e))
                    }
                    ))))))));
                    return i.a.createElement(S.a, {
                        container: !0
                    }, i.a.createElement(L.a, {
                        position: "static"
                    }, i.a.createElement(P.a, null, i.a.createElement(h.a, {
                        variant: "h6",
                        className: m.grow,
                        color: "inherit"
                    }, "Speech To Text Web Searcher"), i.a.createElement(d.a, {
                        color: "inherit",
                        href: ""
                    }, ""))), i.a.createElement(S.a, {
                        container: !0,
                        justify: "center",
                        className: m.root
                    }, i.a.createElement(S.a, {
                        item: !0,
                        xs: 12,
                        sm: 8
                    }, i.a.createElement(S.a, {
                        container: !0
                    }), e)))
                }
            }]),
            a
        }(n.Component)
          , O = Object(C.a)()(Object(p.a)((function(e) {
            return {
                root: {
                    paddingTop: 65,
                    paddingLeft: 11,
                    paddingRight: 11
                },
                flex: {
                    flex: 1
                },
                grow: {
                    flexGrow: 1
                },
                paper: e.mixins.gutters({
                    paddingTop: 22,
                    paddingBottom: 22
                })
            }
        }
        ))(w));
        r.a.render(i.a.createElement(O, null), document.getElementById("app"))
    }
}, [[49, 1, 2]]]);
