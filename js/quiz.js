(function () {
  'use strict';

  /* ── Quiz data ──────────────────────────────────────────── */
  var questions = [
    {
      question: 'Priya is a Hindu woman, born and domiciled in Goa. Her father, also a Goa domicile, passes away without a will. Which of the following is correct?',
      options: [
        'As Priya is a Hindu, the Hindu Succession Act will apply to her family\'s inheritance.',
        'The Portuguese Civil Code applies to all persons domiciled in Goa, regardless of religion.',
        'Hindu law applies because the father dies intestate; a will would have allowed him to choose the applicable law.'
      ],
      correct: 1,
      dyk: 'The Portuguese Civil Code, 1867 applies uniformly to all persons domiciled in Goa — Hindus, Muslims, Catholics, and others alike. Unlike the rest of India where inheritance is governed by religion-based personal laws, in Goa religion is irrelevant; your domicile is what matters. This is what makes Goa\'s system structurally different. <em>(Source: Portuguese Civil Code, 1867; Goa, Daman and Diu (Administration) Act, 1962)</em>'
    },
    {
      question: 'Ramesh, a Goa domicile, has three children: a son and two daughters. He wishes to leave his entire estate to his son alone, feeling the son has contributed most to the family. He writes a will to this effect. Is the will valid?',
      options: [
        'Yes — a testator may freely dispose of his entire estate.',
        'No — daughters\' forced share (legitima) cannot be overridden by will.'
      ],
      correct: 1,
      dyk: 'The Portuguese Civil Code limits testamentary freedom through forced heirship (<em>legitima</em>). A testator may only freely dispose of half their estate (quota disponível). The remaining half is legally reserved for direct descendants — children, whether sons or daughters, in equal shares. Ramesh\'s will, to the extent it deprives his daughters of their forced share, is unenforceable against them. <em>(Source: Article 1784, Portuguese Civil Code; Section 83, Goa Succession, Special Notaries and Inventory Proceeding Act, 2012)</em>'
    },
    {
      question: 'The Portuguese Civil Code, which governs inheritance and family law in Goa today, was a collaborative effort drafted by a committee of jurists over several decades. True or False?',
      options: [
        'True.',
        'False.'
      ],
      correct: 1,
      dyk: 'Viscount Antonio Luis de Seabra (1798–1895), a High Court judge, single-handedly wrote the code by hand from 1850 to 1858. The original manuscript is still preserved. <em>(Source: Elgar Noronha, \'Portuguese Civil Code: The silent law that unites Goa, Daman and Diu\', Frontline)</em>'
    },
    {
      question: 'Anjali and Dev marry in Goa without signing any pre-nuptial agreement. They later acquire a house together, and Anjali also inherits land from her parents. Years later, they separate. Which best describes the legal position of their property?',
      options: [
        'Only the house they acquired together is shared — Anjali\'s inherited land remains hers alone.',
        'All property, including Anjali\'s inherited land and assets brought into the marriage, is jointly owned by both spouses.',
        'Dev has no claim over Anjali\'s inherited property, but can claim the house if he paid for it.'
      ],
      correct: 1,
      dyk: 'The default matrimonial property regime under the Portuguese Civil Code is \'communion of assets\' (<em>comunhão de bens</em>). In the absence of a pre-nuptial contract, all property — whether inherited, brought into the marriage, or acquired after — is jointly owned by both spouses from the moment of marriage. This is entirely unlike the rest of India, where assets typically remain in the name of whoever holds title. <em>(Source: Article 1108, Portuguese Civil Code, 1867)</em>'
    },
    {
      question: 'Since Goa\'s communion of assets regime gives both spouses equal ownership over all marital property, women in Goa have equal power to manage and control that property compared to their husbands. True or False?',
      options: [
        'True.',
        'False.'
      ],
      correct: 1,
      dyk: 'Equal ownership is not the same as equal control. While communion of assets creates joint co-ownership, the Portuguese Civil Code gives the husband the exclusive right to administer all property of the couple — including the wife\'s own assets. As Albertina Almeida writes, the law \'makes the control button available to the husband.\' Equal ownership on paper can coexist with unequal power in practice. <em>(Source: Albertina Almeida, \'Goa\'s Civil Code Shows That Uniformity Does Not Always Mean Equality\', The Wire; Article 1117, Portuguese Civil Code, 1867)</em>'
    },
    {
      question: 'Suresh is domiciled in Goa. He owns a flat in Pune, land in Goa, and a house in Singapore. He dies without a will. His relatives argue that the Portuguese Civil Code does not govern the Pune flat or the Singapore house since they are outside Goa. Are they correct?',
      options: [
        'Yes — property location determines the applicable law.',
        'No — the Portuguese Civil Code applies based on domicile, not property location.'
      ],
      correct: 1,
      dyk: 'The Portuguese Civil Code applies based on the domicile of the person, not the location of the property. The Supreme Court affirmed that a person domiciled in Goa is governed by the Portuguese Civil Code in succession matters, even for property situated outside Goa. <em>(Source: Jose Paulo Coutinho v. Maria Luiza Valentina Pereira, (2019) 20 SCC 85)</em>'
    },
    {
      question: 'The French Civil Code applicable in Puducherry governs which of the following persons?',
      options: [
        'All inhabitants of Puducherry, regardless of their personal law.',
        'All persons domiciled in Puducherry at the time of any legal dispute.',
        'Renoncants who chose to renounce their personal laws and be governed by the French Civil Code.'
      ],
      correct: 2,
      dyk: 'The French Civil Code in Puducherry applies to renoncants and French nationals. A renoncant is a native Indian who made a formal choice to renounce their personal laws to be governed by the French Civil Code — a choice created by a French regulation of 21 September 1881. As a result, renoncants came under the French Civil Code in matters of marriage, succession, and family affairs. <em>(Source: MFA No. 6563 of 2018, Karnataka High Court; M. Kadirvelu v. G. Santhanalakshmi, Madras HC (2016))</em>'
    },
    {
      question: 'John and Mary are Christians born and raised in Puducherry. Their grandparents were renoncants. They move to Bengaluru, where they have lived for years. Their marriage breaks down and they approach a Karnataka family court. John argues that since they reside in Karnataka, Indian personal law should govern. Is he correct?',
      options: [
        'No — since they were born and grew up in Puducherry, the French Civil Code applies.',
        'Yes — the Indian Christian Marriage Act applies since they are Christians living in Karnataka.',
        'No — as descendants of renoncants, they remain governed by the French Civil Code regardless of where they reside.'
      ],
      correct: 2,
      dyk: 'In a near-identical case, the Karnataka HC held that the French Civil Code applies to renoncants and their descendants irrespective of present residence — calling it \'a linguistic paradox where the descendants of the renouncants inherited the consequence of renunciation by their forefathers.\' The divorce was ultimately granted under Article 245-1 of the French Civil Code. <em>(Source: MFA No. 6563 of 2018, Karnataka HC, Leo John v. Eugenia Preethi)</em>'
    },
    {
      question: 'Rishi and Khushi are married and domiciled in Goa under the communion of assets regime. Their joint estate is worth ₹60,00,000. Rishi dies leaving a will directing ₹10,00,000 from his share to his elder child Abhiram, with the remainder distributed under law. They have two children. Is this will valid? What is Arjun\'s minimum guaranteed share and Abhiram\'s total?',
      options: [
        'YES — Arjun: ₹15,00,000 and Abhiram: ₹15,00,000',
        'YES — Arjun: ₹7,50,000 and Abhiram: ₹17,50,000',
        'NO — Arjun: ₹30,00,000 and Abhiram: ₹30,00,000',
        'NO — Arjun: ₹15,00,000 and Abhiram: ₹15,00,000'
      ],
      correct: 1,
      dyk: 'Rishi\'s share from the joint pool is 50% of ₹60L = ₹30L. He may freely dispose half by will (₹15L), so the ₹10L bequest to Abhiram is valid. The legitima reserves the other ₹15L equally for both children: ₹7,50,000 each. Abhiram gets ₹10L (will) + ₹7,50,000 (reserved share) = ₹17,50,000. Arjun is not deprived of his forced share, so the will is valid. <em>(Source: Portuguese Civil Code, 1867 — communion of assets and forced heirship provisions)</em>'
    },
    {
      question: 'Jay is a renoncant domiciled in Puducherry, governed by the French Civil Code. He has two children, Anjali and Ravi. He dies leaving an estate worth ₹30,00,000 and a will leaving everything to a charitable trust. The children challenge the will. What is each child\'s minimum legally guaranteed share?',
      options: [
        'Nothing — the will is valid.',
        '₹15,00,000 each — total estate divided equally.',
        '₹7,50,000 each — half of total estate divided equally.',
        '₹10,00,000 each — two-thirds of total estate divided equally.'
      ],
      correct: 3,
      dyk: 'Under Articles 912–913 of the French Civil Code, the <em>réserve héréditaire</em> is the portion that must legally pass to children. With 2 children, two-thirds of the estate (₹20L) is reserved and shared equally (₹10L each). The remaining one-third is the only portion the testator may freely dispose of by will. This is similar to the Portuguese <em>legitima</em> — both systems protect children from disinheritance — but the French reserved fraction varies by number of heirs, while the Portuguese fixes it at half. <em>(Source: Articles 912–913, French Civil Code, as applicable to renoncants in Puducherry)</em>'
    }
  ];

  /* ── State ──────────────────────────────────────────────── */
  var state = {
    currentQ: 0,
    score: 0,
    answered: false
  };

  /* ── DOM refs ───────────────────────────────────────────── */
  var progressBar    = document.getElementById('quiz-progress-bar');
  var progressLabel  = document.getElementById('quiz-progress-label');
  var questionScreen = document.getElementById('question-screen');
  var resultsScreen  = document.getElementById('results-screen');
  var questionEl     = document.getElementById('quiz-question');
  var optionsList    = document.getElementById('quiz-options');
  var dykCard        = document.getElementById('dyk-card');
  var dykText        = document.getElementById('dyk-text');
  var nextBtn        = document.getElementById('next-btn');
  var resultsScore   = document.getElementById('results-score');
  var resultsLabel   = document.getElementById('results-label');
  var retakeBtn      = document.getElementById('retake-btn');

  /* ── Helpers ────────────────────────────────────────────── */
  var LETTERS = ['A', 'B', 'C', 'D'];

  function getPerformanceLabel(score) {
    if (score === 10) return 'Exceptional — you could argue this in the Supreme Court.';
    if (score >= 8)  return 'Excellent legal reasoning.';
    if (score >= 6)  return 'Solid foundation — a few more hearings and you\'re there.';
    if (score >= 4)  return 'Developing. Revisit the Did You Know facts.';
    return 'The bench is unimpressed. Try again.';
  }

  /* ── Render ─────────────────────────────────────────────── */
  function renderQuestion() {
    var q = questions[state.currentQ];
    var total = questions.length;
    var pct = ((state.currentQ + 1) / total) * 100;

    progressBar.style.width = pct + '%';
    progressLabel.textContent = 'Question ' + (state.currentQ + 1) + ' of ' + total;

    questionEl.textContent = q.question;

    /* Clear old options */
    optionsList.innerHTML = '';
    q.options.forEach(function (opt, i) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.setAttribute('data-index', i);
      btn.innerHTML =
        '<span class="option-letter">' + LETTERS[i] + '</span>' +
        '<span class="option-text">' + opt + '</span>';
      btn.addEventListener('click', function () { selectAnswer(i); });
      li.appendChild(btn);
      optionsList.appendChild(li);
    });

    /* Reset DYK */
    dykCard.classList.remove('dyk-visible', 'dyk-animated');
    dykCard.style.display = 'none';

    /* Reset next btn */
    nextBtn.classList.remove('visible');
    nextBtn.textContent = state.currentQ === total - 1 ? 'See Results' : 'Next →';
  }

  function selectAnswer(index) {
    if (state.answered) return;
    state.answered = true;

    var q = questions[state.currentQ];
    var buttons = optionsList.querySelectorAll('.quiz-option-btn');

    /* Disable all */
    buttons.forEach(function (btn) { btn.disabled = true; });

    if (index === q.correct) {
      state.score++;
      buttons[index].classList.add('correct');
    } else {
      buttons[index].classList.add('wrong');
      buttons[q.correct].classList.add('correct');
    }

    /* Show DYK */
    dykText.innerHTML = q.dyk;
    dykCard.style.display = 'block';
    /* Force reflow for transition */
    void dykCard.offsetHeight;
    dykCard.classList.add('dyk-visible');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        dykCard.classList.add('dyk-animated');
      });
    });

    /* Show next btn */
    nextBtn.classList.add('visible');
  }

  function nextQuestion() {
    state.currentQ++;
    state.answered = false;

    if (state.currentQ >= questions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    questionScreen.style.display = 'none';
    resultsScreen.classList.add('visible');
    resultsScore.innerHTML = state.score + '<span class="results-denom">/10</span>';
    resultsLabel.textContent = getPerformanceLabel(state.score);
  }

  function retake() {
    state.currentQ = 0;
    state.score = 0;
    state.answered = false;
    resultsScreen.classList.remove('visible');
    questionScreen.style.display = '';
    renderQuestion();
  }

  /* ── Event listeners ────────────────────────────────────── */
  if (nextBtn) {
    nextBtn.addEventListener('click', nextQuestion);
  }

  if (retakeBtn) {
    retakeBtn.addEventListener('click', retake);
  }

  /* ── Init ───────────────────────────────────────────────── */
  renderQuestion();

}());
