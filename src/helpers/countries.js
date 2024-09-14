const productCategory = [{"id":4,"alpha2":"af","alpha3":"afg","name":"أفغانستان"},
    {"id":248,"alpha2":"ax","alpha3":"ala","name":"جزر أولاند"},
    {"id":8,"alpha2":"al","alpha3":"alb","name":"ألبانيا"},
    {"id":12,"alpha2":"dz","alpha3":"dza","name":"الجزائر"},
    {"id":16,"alpha2":"as","alpha3":"asm","name":"ساموا الأمريكية"},
    {"id":20,"alpha2":"ad","alpha3":"and","name":"أندورا"},
    {"id":24,"alpha2":"ao","alpha3":"ago","name":"أنغولا"},
    {"id":660,"alpha2":"ai","alpha3":"aia","name":"أنغويلا"},
    {"id":10,"alpha2":"aq","alpha3":"ata","name":"القارة القطبية الجنوبية"},
    {"id":28,"alpha2":"ag","alpha3":"atg","name":"أنتيغوا وباربودا"},
    {"id":32,"alpha2":"ar","alpha3":"arg","name":"الأرجنتين"},
    {"id":51,"alpha2":"am","alpha3":"arm","name":"أرمينيا"},
    {"id":533,"alpha2":"aw","alpha3":"abw","name":"أروبا"},
    {"id":36,"alpha2":"au","alpha3":"aus","name":"أستراليا"},
    {"id":40,"alpha2":"at","alpha3":"aut","name":"النمسا"},
    {"id":31,"alpha2":"az","alpha3":"aze","name":"أذربيجان"},
    {"id":44,"alpha2":"bs","alpha3":"bhs","name":"باهاماس"},
    {"id":48,"alpha2":"bh","alpha3":"bhr","name":"البحرين"},
    {"id":50,"alpha2":"bd","alpha3":"bgd","name":"بنغلاديش"},
    {"id":52,"alpha2":"bb","alpha3":"brb","name":"باربادوس"},
    {"id":112,"alpha2":"by","alpha3":"blr","name":"بيلاروس"},
    {"id":56,"alpha2":"be","alpha3":"bel","name":"بلجيكا"},
    {"id":84,"alpha2":"bz","alpha3":"blz","name":"بليز"},
    {"id":204,"alpha2":"bj","alpha3":"ben","name":"بنين"},
    {"id":60,"alpha2":"bm","alpha3":"bmu","name":"برمودا"},
    {"id":64,"alpha2":"bt","alpha3":"btn","name":"بوتان"},
    {"id":68,"alpha2":"bo","alpha3":"bol","name":"بوليفيا"},
    {"id":535,"alpha2":"bq","alpha3":"bes","name":"الجزر الكاريبية الهولندية"},
    {"id":70,"alpha2":"ba","alpha3":"bih","name":"البوسنة والهرسك"},
    {"id":72,"alpha2":"bw","alpha3":"bwa","name":"بوتسوانا"},
    {"id":74,"alpha2":"bv","alpha3":"bvt","name":"جزيرة بوفيه"},
    {"id":76,"alpha2":"br","alpha3":"bra","name":"البرازيل"},
    {"id":86,"alpha2":"io","alpha3":"iot","name":"إقليم المحيط الهندي البريطاني"},
    {"id":96,"alpha2":"bn","alpha3":"brn","name":"بروناي"},
    {"id":100,"alpha2":"bg","alpha3":"bgr","name":"بلغاريا"},
    {"id":854,"alpha2":"bf","alpha3":"bfa","name":"بوركينا فاسو"},
    {"id":108,"alpha2":"bi","alpha3":"bdi","name":"بوروندي"},
    {"id":116,"alpha2":"kh","alpha3":"khm","name":"كمبوديا"},
    {"id":120,"alpha2":"cm","alpha3":"cmr","name":"الكاميرون"},
    {"id":124,"alpha2":"ca","alpha3":"can","name":"كندا"},
    {"id":132,"alpha2":"cv","alpha3":"cpv","name":"الرأس الأخضر"},
    {"id":136,"alpha2":"ky","alpha3":"cym","name":"جزر كايمان"},
    {"id":140,"alpha2":"cf","alpha3":"caf","name":"جمهورية إفريقيا الوسطى"},
    {"id":148,"alpha2":"td","alpha3":"tcd","name":"تشاد"},
    {"id":152,"alpha2":"cl","alpha3":"chl","name":"تشيلي"},
    {"id":156,"alpha2":"cn","alpha3":"chn","name":"الصين"},
    {"id":162,"alpha2":"cx","alpha3":"cxr","name":"جزيرة كريسماس"},
    {"id":166,"alpha2":"cc","alpha3":"cck","name":"جزر كوكوس"},
    {"id":170,"alpha2":"co","alpha3":"col","name":"كولومبيا"},
    {"id":174,"alpha2":"km","alpha3":"com","name":"جزر القمر"},
    {"id":178,"alpha2":"cg","alpha3":"cog","name":"جمهورية الكونغو"},
    {"id":180,"alpha2":"cd","alpha3":"cod","name":"جمهورية الكونغو الديمقراطية"},
    {"id":184,"alpha2":"ck","alpha3":"cok","name":"جزر كوك"},
    {"id":188,"alpha2":"cr","alpha3":"cri","name":"كوستاريكا"},
    {"id":384,"alpha2":"ci","alpha3":"civ","name":"ساحل العاج"},
    {"id":191,"alpha2":"hr","alpha3":"hrv","name":"كرواتيا"},
    {"id":192,"alpha2":"cu","alpha3":"cub","name":"كوبا"},
    {"id":531,"alpha2":"cw","alpha3":"cuw","name":"كوراساو"},
    {"id":196,"alpha2":"cy","alpha3":"cyp","name":"قبرص"},
    {"id":203,"alpha2":"cz","alpha3":"cze","name":"جمهورية التشيك"},
    {"id":208,"alpha2":"dk","alpha3":"dnk","name":"الدنمارك"},
    {"id":262,"alpha2":"dj","alpha3":"dji","name":"جيبوتي"},
    {"id":212,"alpha2":"dm","alpha3":"dma","name":"دومينيكا"},
    {"id":214,"alpha2":"do","alpha3":"dom","name":"جمهورية الدومينيكان"},
    {"id":218,"alpha2":"ec","alpha3":"ecu","name":"الإكوادور"},
    {"id":818,"alpha2":"eg","alpha3":"egy","name":"مصر"},
    {"id":222,"alpha2":"sv","alpha3":"slv","name":"السلفادور"},
    {"id":226,"alpha2":"gq","alpha3":"gnq","name":"غينيا الاستوائية"},
    {"id":232,"alpha2":"er","alpha3":"eri","name":"إرتريا"},
    {"id":233,"alpha2":"ee","alpha3":"est","name":"إستونيا"},
    {"id":231,"alpha2":"et","alpha3":"eth","name":"إثيوبيا"},
    {"id":238,"alpha2":"fk","alpha3":"flk","name":"جزر فوكلاند"},
    {"id":234,"alpha2":"fo","alpha3":"fro","name":"جزر فارو"},
    {"id":242,"alpha2":"fj","alpha3":"fji","name":"فيجي"},
    {"id":246,"alpha2":"fi","alpha3":"fin","name":"فنلندا"},
    {"id":250,"alpha2":"fr","alpha3":"fra","name":"فرنسا"},
    {"id":254,"alpha2":"gf","alpha3":"guf","name":"غويانا الفرنسية"},
    {"id":258,"alpha2":"pf","alpha3":"pyf","name":"بولينزيا الفرنسية"},
    {"id":260,"alpha2":"tf","alpha3":"atf","name":"أراض فرنسية جنوبية وأنتارتيكية"},
    {"id":266,"alpha2":"ga","alpha3":"gab","name":"الغابون"},
    {"id":270,"alpha2":"gm","alpha3":"gmb","name":"غامبيا"},
    {"id":268,"alpha2":"ge","alpha3":"geo","name":"جورجيا"},
    {"id":276,"alpha2":"de","alpha3":"deu","name":"ألمانيا"},
    {"id":288,"alpha2":"gh","alpha3":"gha","name":"غانا"},
    {"id":292,"alpha2":"gi","alpha3":"gib","name":"جبل طارق"},
    {"id":300,"alpha2":"gr","alpha3":"grc","name":"اليونان"},
    {"id":304,"alpha2":"gl","alpha3":"grl","name":"جرينلاند"},
    {"id":308,"alpha2":"gd","alpha3":"grd","name":"غرينادا"},
    {"id":312,"alpha2":"gp","alpha3":"glp","name":"غوادلوب"},
    {"id":316,"alpha2":"gu","alpha3":"gum","name":"غوام"},
    {"id":320,"alpha2":"gt","alpha3":"gtm","name":"غواتيمالا"},
    {"id":831,"alpha2":"gg","alpha3":"ggy","name":"غيرنزي"},
    {"id":324,"alpha2":"gn","alpha3":"gin","name":"غينيا"},
    {"id":624,"alpha2":"gw","alpha3":"gnb","name":"غينيا بيساو"},
    {"id":328,"alpha2":"gy","alpha3":"guy","name":"غيانا"},
    {"id":332,"alpha2":"ht","alpha3":"hti","name":"هايتي"},
    {"id":334,"alpha2":"hm","alpha3":"hmd","name":"جزيرة هيرد وجزر ماكدونالد"},
    {"id":336,"alpha2":"va","alpha3":"vat","name":"الفاتيكان"},
    {"id":340,"alpha2":"hn","alpha3":"hnd","name":"هندوراس"},
    {"id":344,"alpha2":"hk","alpha3":"hkg","name":"هونغ كونغ"},
    {"id":348,"alpha2":"hu","alpha3":"hun","name":"المجر"},
    {"id":352,"alpha2":"is","alpha3":"isl","name":"آيسلندا"},
    {"id":356,"alpha2":"in","alpha3":"ind","name":"الهند"},
    {"id":360,"alpha2":"id","alpha3":"idn","name":"إندونيسيا"},
    {"id":364,"alpha2":"ir","alpha3":"irn","name":"إيران"},
    {"id":368,"alpha2":"iq","alpha3":"irq","name":"العراق"},
    {"id":372,"alpha2":"ie","alpha3":"irl","name":"أيرلندا"},
    {"id":833,"alpha2":"im","alpha3":"imn","name":"جزيرة مان"},
    {"id":376,"alpha2":"il","alpha3":"isr","name":"إسرائيل"},
    {"id":380,"alpha2":"it","alpha3":"ita","name":"إيطاليا"},
    {"id":388,"alpha2":"jm","alpha3":"jam","name":"جامايكا"},
    {"id":392,"alpha2":"jp","alpha3":"jpn","name":"اليابان"},
    {"id":832,"alpha2":"je","alpha3":"jey","name":"جيرزي"},
    {"id":400,"alpha2":"jo","alpha3":"jor","name":"الأردن"},
    {"id":398,"alpha2":"kz","alpha3":"kaz","name":"كازاخستان"},
    {"id":404,"alpha2":"ke","alpha3":"ken","name":"كينيا"},
    {"id":296,"alpha2":"ki","alpha3":"kir","name":"كيريباتي"},
    {"id":408,"alpha2":"kp","alpha3":"prk","name":"كوريا الشمالية"},
    {"id":410,"alpha2":"kr","alpha3":"kor","name":"كوريا الجنوبية"},
    {"id":414,"alpha2":"kw","alpha3":"kwt","name":"الكويت"},
    {"id":417,"alpha2":"kg","alpha3":"kgz","name":"قيرغيزستان"},
    {"id":418,"alpha2":"la","alpha3":"lao","name":"لاوس"},
    {"id":428,"alpha2":"lv","alpha3":"lva","name":"لاتفيا"},
    {"id":422,"alpha2":"lb","alpha3":"lbn","name":"لبنان"},
    {"id":426,"alpha2":"ls","alpha3":"lso","name":"ليسوتو"},
    {"id":430,"alpha2":"lr","alpha3":"lbr","name":"ليبيريا"},
    {"id":434,"alpha2":"ly","alpha3":"lby","name":"ليبيا"},
    {"id":438,"alpha2":"li","alpha3":"lie","name":"ليختنشتاين"},
    {"id":440,"alpha2":"lt","alpha3":"ltu","name":"ليتوانيا"},
    {"id":442,"alpha2":"lu","alpha3":"lux","name":"لوكسمبورغ"},
    {"id":446,"alpha2":"mo","alpha3":"mac","name":"ماكاو"},
    {"id":807,"alpha2":"mk","alpha3":"mkd","name":"مقدونيا"},
    {"id":450,"alpha2":"mg","alpha3":"mdg","name":"مدغشقر"},
    {"id":454,"alpha2":"mw","alpha3":"mwi","name":"مالاوي"},
    {"id":458,"alpha2":"my","alpha3":"mys","name":"ماليزيا"},
    {"id":462,"alpha2":"mv","alpha3":"mdv","name":"جزر المالديف"},
    {"id":466,"alpha2":"ml","alpha3":"mli","name":"مالي"},
    {"id":470,"alpha2":"mt","alpha3":"mlt","name":"مالطا"},
    {"id":584,"alpha2":"mh","alpha3":"mhl","name":"جزر مارشال"},
    {"id":474,"alpha2":"mq","alpha3":"mtq","name":"مارتينيك"},
    {"id":478,"alpha2":"mr","alpha3":"mrt","name":"موريتانيا"},
    {"id":480,"alpha2":"mu","alpha3":"mus","name":"موريشيوس"},
    {"id":175,"alpha2":"yt","alpha3":"myt","name":"مايوت"},
    {"id":484,"alpha2":"mx","alpha3":"mex","name":"المكسيك"},
    {"id":583,"alpha2":"fm","alpha3":"fsm","name":"ولايات ميكرونيسيا المتحدة"},
    {"id":504,"alpha2":"ma","alpha3":"mar","name":"المغرب"},
    {"id":498,"alpha2":"md","alpha3":"mda","name":"مولدوفا"},
    {"id":492,"alpha2":"mc","alpha3":"mco","name":"موناكو"},
    {"id":496,"alpha2":"mn","alpha3":"mng","name":"منغوليا"},
    {"id":499,"alpha2":"me","alpha3":"mne","name":"الجبل الأسود"},
    {"id":500,"alpha2":"ms","alpha3":"msr","name":"مونتسرات"},
    {"id":508,"alpha2":"mz","alpha3":"moz","name":"موزمبيق"},
    {"id":104,"alpha2":"mm","alpha3":"mmr","name":"ميانمار"},
    {"id":516,"alpha2":"na","alpha3":"nam","name":"ناميبيا"},
    {"id":520,"alpha2":"nr","alpha3":"nru","name":"ناورو"},
    {"id":524,"alpha2":"np","alpha3":"npl","name":"نيبال"},
    {"id":528,"alpha2":"nl","alpha3":"nld","name":"هولندا"},
    {"id":540,"alpha2":"nc","alpha3":"ncl","name":"كاليدونيا الجديدة"},
    {"id":554,"alpha2":"nz","alpha3":"nzl","name":"نيوزيلندا"},
    {"id":558,"alpha2":"ni","alpha3":"nic","name":"نيكاراغوا"},
    {"id":562,"alpha2":"ne","alpha3":"ner","name":"النيجر"},
    {"id":566,"alpha2":"ng","alpha3":"nga","name":"نيجيريا"},
    {"id":570,"alpha2":"nu","alpha3":"niu","name":"نييوي"},
    {"id":574,"alpha2":"nf","alpha3":"nfk","name":"جزيرة نورفولك"},
    {"id":580,"alpha2":"mp","alpha3":"mnp","name":"جزر ماريانا الشمالية"},
    {"id":578,"alpha2":"no","alpha3":"nor","name":"النرويج"},
    {"id":512,"alpha2":"om","alpha3":"omn","name":"عُمان"},
    {"id":586,"alpha2":"pk","alpha3":"pak","name":"باكستان"},
    {"id":585,"alpha2":"pw","alpha3":"plw","name":"بالاو"},
    {"id":275,"alpha2":"ps","alpha3":"pse","name":"فلسطين"},
    {"id":591,"alpha2":"pa","alpha3":"pan","name":"بنما"},
    {"id":598,"alpha2":"pg","alpha3":"png","name":"بابوا غينيا الجديدة"},
    {"id":600,"alpha2":"py","alpha3":"pry","name":"باراغواي"},
    {"id":604,"alpha2":"pe","alpha3":"per","name":"بيرو"},
    {"id":608,"alpha2":"ph","alpha3":"phl","name":"الفلبين"},
    {"id":612,"alpha2":"pn","alpha3":"pcn","name":"جزر بيتكيرن"},
    {"id":616,"alpha2":"pl","alpha3":"pol","name":"بولندا"},
    {"id":620,"alpha2":"pt","alpha3":"prt","name":"البرتغال"},
    {"id":630,"alpha2":"pr","alpha3":"pri","name":"بورتوريكو"},
    {"id":634,"alpha2":"qa","alpha3":"qat","name":"قطر"},
    {"id":638,"alpha2":"re","alpha3":"reu","name":"لا ريونيون"},
    {"id":642,"alpha2":"ro","alpha3":"rou","name":"رومانيا"},
    {"id":643,"alpha2":"ru","alpha3":"rus","name":"روسيا"},
    {"id":646,"alpha2":"rw","alpha3":"rwa","name":"رواندا"},
    {"id":652,"alpha2":"bl","alpha3":"blm","name":"سان بارتيلمي"},
    {"id":654,"alpha2":"sh","alpha3":"shn","name":"سانت هيلانة وأسينشين وتريستان دا كونا"},
    {"id":659,"alpha2":"kn","alpha3":"kna","name":"سانت كيتس ونيفيس"},
    {"id":662,"alpha2":"lc","alpha3":"lca","name":"سانت لوسيا"},
    {"id":663,"alpha2":"mf","alpha3":"maf","name":"تجمع سان مارتين"},
    {"id":666,"alpha2":"pm","alpha3":"spm","name":"سان بيير وميكلون"},
    {"id":670,"alpha2":"vc","alpha3":"vct","name":"سانت فينسنت والغرينادين"},
    {"id":882,"alpha2":"ws","alpha3":"wsm","name":"ساموا"},
    {"id":674,"alpha2":"sm","alpha3":"smr","name":"سان مارينو"},
    {"id":678,"alpha2":"st","alpha3":"stp","name":"ساو تومي وبرينسيب"},
    {"id":682,"alpha2":"sa","alpha3":"sau","name":"السعودية"},
    {"id":686,"alpha2":"sn","alpha3":"sen","name":"السنغال"},
    {"id":688,"alpha2":"rs","alpha3":"srb","name":"صربيا"},
    {"id":690,"alpha2":"sc","alpha3":"syc","name":"سيشل"},
    {"id":694,"alpha2":"sl","alpha3":"sle","name":"سيراليون"},
    {"id":702,"alpha2":"sg","alpha3":"sgp","name":"سنغافورة"},
    {"id":534,"alpha2":"sx","alpha3":"sxm","name":"سينت مارتن"},
    {"id":703,"alpha2":"sk","alpha3":"svk","name":"سلوفاكيا"},
    {"id":705,"alpha2":"si","alpha3":"svn","name":"سلوفينيا"},
    {"id":90,"alpha2":"sb","alpha3":"slb","name":"جزر سليمان"},
    {"id":706,"alpha2":"so","alpha3":"som","name":"الصومال"},
    {"id":710,"alpha2":"za","alpha3":"zaf","name":"جنوب إفريقيا"},
    {"id":239,"alpha2":"gs","alpha3":"sgs","name":"جورجيا الجنوبية وجزر ساندويتش الجنوبية"},
    {"id":728,"alpha2":"ss","alpha3":"ssd","name":"جنوب السودان"},
    {"id":724,"alpha2":"es","alpha3":"esp","name":"إسبانيا"},
    {"id":144,"alpha2":"lk","alpha3":"lka","name":"سريلانكا"},
    {"id":729,"alpha2":"sd","alpha3":"sdn","name":"السودان"},
    {"id":740,"alpha2":"sr","alpha3":"sur","name":"سورينام"},
    {"id":744,"alpha2":"sj","alpha3":"sjm","name":"سفالبارد ويان ماين"},
    {"id":748,"alpha2":"sz","alpha3":"swz","name":"إسواتيني"},
    {"id":752,"alpha2":"se","alpha3":"swe","name":"السويد"},
    {"id":756,"alpha2":"ch","alpha3":"che","name":"سويسرا"},
    {"id":760,"alpha2":"sy","alpha3":"syr","name":"سوريا"},
    {"id":158,"alpha2":"tw","alpha3":"twn","name":"تايوان"},
    {"id":762,"alpha2":"tj","alpha3":"tjk","name":"طاجيكستان"},
    {"id":834,"alpha2":"tz","alpha3":"tza","name":"تنزانيا"},
    {"id":764,"alpha2":"th","alpha3":"tha","name":"تايلاند"},
    {"id":626,"alpha2":"tl","alpha3":"tls","name":"تيمور الشرقية"},
    {"id":768,"alpha2":"tg","alpha3":"tgo","name":"توغو"},
    {"id":772,"alpha2":"tk","alpha3":"tkl","name":"توكيلاو"},
    {"id":776,"alpha2":"to","alpha3":"ton","name":"تونغا"},
    {"id":780,"alpha2":"tt","alpha3":"tto","name":"ترينيداد وتوباغو"},
    {"id":788,"alpha2":"tn","alpha3":"tun","name":"تونس"},
    {"id":792,"alpha2":"tr","alpha3":"tur","name":"تركيا"},
    {"id":795,"alpha2":"tm","alpha3":"tkm","name":"تركمانستان"},
    {"id":796,"alpha2":"tc","alpha3":"tca","name":"جزر توركس وكايكوس"},
    {"id":798,"alpha2":"tv","alpha3":"tuv","name":"توفالو"},
    {"id":800,"alpha2":"ug","alpha3":"uga","name":"أوغندا"},
    {"id":804,"alpha2":"ua","alpha3":"ukr","name":"أوكرانيا"},
    {"id":784,"alpha2":"ae","alpha3":"are","name":"الإمارات العربية المتحدة"},
    {"id":826,"alpha2":"gb","alpha3":"gbr","name":"المملكة المتحدة"},
    {"id":840,"alpha2":"us","alpha3":"usa","name":"الولايات المتحدة"},
    {"id":581,"alpha2":"um","alpha3":"umi","name":"جزر الولايات المتحدة الصغيرة النائية"},
    {"id":858,"alpha2":"uy","alpha3":"ury","name":"الأوروغواي"},
    {"id":860,"alpha2":"uz","alpha3":"uzb","name":"أوزبكستان"},
    {"id":548,"alpha2":"vu","alpha3":"vut","name":"فانواتو"},
    {"id":862,"alpha2":"ve","alpha3":"ven","name":"فنزويلا"},
    {"id":704,"alpha2":"vn","alpha3":"vnm","name":"فيتنام"},
    {"id":92,"alpha2":"vg","alpha3":"vgb","name":"جزر العذراء البريطانية"},
    {"id":850,"alpha2":"vi","alpha3":"vir","name":"جزر العذراء الأمريكية"},
    {"id":876,"alpha2":"wf","alpha3":"wlf","name":"واليس وفوتونا"},
    {"id":732,"alpha2":"eh","alpha3":"esh","name":"الصحراء الغربية"},
    {"id":887,"alpha2":"ye","alpha3":"yem","name":"اليمن"},
    {"id":894,"alpha2":"zm","alpha3":"zmb","name":"زامبيا"},
    {"id":716,"alpha2":"zw","alpha3":"zwe","name":"زيمبابوي"}]
export default productCategory;