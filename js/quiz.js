/* FILE: project/js/quiz.js */

document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: "Priya is a Hindu woman, born and domiciled in Goa. Her father, also a Goa domicile, passes away without a will. The dispute arises as to which law should govern how the estate is divided. Which of the following is correct?",
      options: [
        "As Priya is a Hindu, the Hindu Succession Act will apply to her family's inheritance",
        "The Portuguese Civil Code applies to all persons domiciled in Goa, regardless of religion",
        "Hindu law applies because the father dies intestate; a will would have allowed him to choose the applicable law"
      ],
      correct: 1,
      fact: "The Portuguese Civil Code, 1867 applies uniformly to all persons domiciled in Goa — Hindus, Muslims, Catholics, and others alike. Unlike the rest of India, where inheritance is governed by religion-based personal laws, in Goa religion is irrelevant. Your domicile in Goa is what matters. (Source: The Portuguese Civil Code, 1867, s. 4(1) Goa, Daman and Diu (Administration) Act, 1962)"
    },
    {
      question: "Ramesh, a Goa domicile, has three children: a son and two daughters. He wishes to leave his entire estate to his son alone, feeling the son has contributed most to the family. He writes a valid will to this effect. Is the will valid?",
      options: [
        "Yes",
        "No"
      ],
      correct: 1,
      fact: "The Portuguese Civil Code limits testamentary freedom through forced heirship (legítima). A testator may only freely dispose of half their estate — the 'available portion' (quota disponível). The remaining half is legally reserved for direct descendants in equal shares. Ramesh's will, to the extent it attempts to deprive his daughters of their forced share, is unenforceable against them. (Source: Article 1784, Portuguese Civil Code of 1867)"
    },
    {
      question: "The Portuguese Civil Code, which governs inheritance and family law in Goa today, was a collaborative effort drafted by a committee of jurists over several decades. True or False?",
      options: [
        "True",
        "False"
      ],
      correct: 1,
      fact: "Viscount Antonio Luis de Seabra (1798–1895), a High Court judge with complete mastery of civil law, single-handedly wrote the entire Code by hand from 1850 to 1858. The original manuscript is still preserved. (Source: Elgar Noronha, 'Portuguese Civil Code: The silent law that unites Goa, Daman and Diu', Frontline)"
    },
    {
      question: "Anjali and Dev marry in Goa without signing any pre-nuptial agreement. They later acquire a house together, and Anjali also inherits land from her parents. Years later, they separate. Which of the following best describes the legal position of their property?",
      options: [
        "Only the house they acquired together is shared — Anjali's inherited land remains hers alone",
        "All property, including Anjali's inherited land and any assets brought into the marriage, is jointly owned by both spouses",
        "Dev has no claim over Anjali's inherited property, but can claim the house if he paid for it"
      ],
      correct: 1,
      fact: "The default matrimonial property regime under the Portuguese Civil Code is 'communion of assets' (comunhão de bens). In the absence of a pre-nuptial contract, all property — whether inherited, brought into the marriage, or acquired after marriage — is jointly owned by both spouses from the moment of marriage. This is entirely unlike the rest of India, where assets typically remain with whoever holds title. (Source: Article 1108, Portuguese Civil Code of 1867)"
    },
    {
      question: "Since Goa's communion of assets regime gives both spouses equal ownership over all marital property, women in Goa have equal power to manage and control that property compared to their husbands. True or False?",
      options: [
        "True",
        "False"
      ],
      correct: 1,
      fact: "Equal ownership is not the same as equal control. While communion of assets creates joint co-ownership, the Portuguese Civil Code gives the husband the exclusive right to administer all property of the couple — including the wife's own individual assets. As Albertina Almeida writes, the law 'makes the control button available to the husband.' Equal ownership on paper can coexist with unequal power in practice. (Source: Article 1117, Portuguese Civil Code of 1867)"
    },
    {
      question: "Suresh is domiciled in Goa. He owns a flat in Pune, land in Goa, and a house in Singapore. He dies without a will. His relatives argue that the Pune flat and Singapore house will not be governed by the Portuguese Civil Code as they are located outside Goa. Are the relatives correct?",
      options: [
        "Yes",
        "No"
      ],
      correct: 1,
      fact: "The Portuguese Civil Code applies based on the domicile of the person, not the location of the property. The Supreme Court affirmed that a person domiciled in Goa is governed by the Portuguese Civil Code in succession matters, even for property situated outside Goa. (Source: Jose Paulo Coutinho v. Maria Luiza Valentina Pereira, (2019) 20 SCC 85)"
    },
    {
      question: "The French Civil Code applicable in Puducherry governs which of the following persons?",
      options: [
        "All inhabitants of Puducherry, regardless of their personal law",
        "All persons domiciled in Puducherry at the time of any legal dispute",
        "Renonçants who chose to renounce their personal laws and be governed by the French Civil Code"
      ],
      correct: 2,
      fact: "The French Civil Code in Puducherry applies to Renonçants — native Indians who made a choice to renounce their personal laws. This option was created by a French regulation on 21 September 1881 to absorb native Indians into the French legal order. Renonçants are governed by the French Civil Code in matters of marriage, succession, and family affairs. (Source: MFA No. 6563 of 2018, Karnataka High Court; M. Kadirvelu v. G. Santhanalakshmi, Madras HC (2016))"
    },
    {
      question: "John and Mary are Christians born and raised in Puducherry. Their grandparents were Renonçants. They married and then moved to Bengaluru, where they have lived for years. Their marriage breaks down and they approach a Karnataka family court. John argues that since they reside in Karnataka, Indian personal law should govern their case. Is he correct?",
      options: [
        "No, since they were born and grew up in Puducherry the French Civil Code would apply",
        "Yes, the Indian Christian Marriage Act applies since they are Christians living in Karnataka",
        "No, as descendants of Renonçants they remain governed by the French Civil Code regardless of where they reside"
      ],
      correct: 2,
      fact: "The Karnataka HC held that the French Civil Code applies to Renonçants and their descendants irrespective of where they presently reside. The court called it a 'linguistic paradox' where the descendants inherited the consequence of a renunciation made by their forefathers. The divorce was ultimately granted under Article 245-1 of the French Civil Code. (Source: MFA No. 6563 of 2018, Karnataka High Court — Leo John v. Eugenia Preethi)"
    },
    {
      question: "Rishi and Khushi are married and domiciled in Goa under communion of assets. Their joint estate is worth ₹60,00,000. Rishi dies, leaving a will directing ₹10,00,000 from his share to his elder child Abhiram, with the remainder distributed under law. They have two children. Is the will valid? What is the minimum amount Arjun (younger child) is entitled to receive, and what is the total Abhiram would receive?",
      options: [
        "Yes — Arjun: ₹15,00,000 and Abhiram: ₹15,00,000",
        "Yes — Arjun: ₹7,50,000 and Abhiram: ₹17,50,000",
        "No — Arjun: ₹30,00,000 and Abhiram: ₹30,00,000",
        "No — Arjun: ₹15,00,000 and Abhiram: ₹15,00,000"
      ],
      correct: 1,
      fact: "Rishi's estate is 50% of ₹60L = ₹30L. He can freely dispose half of that (₹15L) by will — the ₹10L to Abhiram is valid. The legítima reserves the other ₹15L equally for both children: ₹7.5L each as their forced share. Abhiram thus gets ₹10L (will) + ₹7.5L (legítima) = ₹17.5L. Arjun is not deprived of his forced share, so the will is valid. (Source: Portuguese Civil Code, 1867 — communion of assets and forced heirship provisions)"
    },
    {
      question: "Jay is a Renonçant domiciled in Puducherry, governed by the French Civil Code. He has two children, Anjali and Ravi. He passes away leaving an estate worth ₹30,00,000 and a will leaving his entire estate to a charitable trust. The children challenge the will. What is each child's minimum legally guaranteed share?",
      options: [
        "Nothing — the will is valid",
        "₹15,00,000 each (total estate divided equally)",
        "₹7,50,000 each (half of total estate divided equally)",
        "₹10,00,000 each (two-thirds of total estate divided equally)"
      ],
      correct: 3,
      fact: "Under Articles 912–913 of the French Civil Code, the réserve héréditaire cannot be willed away. The reserved fraction depends on the number of children: 1 child receives half; 2 children together receive two-thirds (one-third each); 3 or more receive three-quarters. With 2 children, ₹20,00,000 (2/3) is reserved and split equally: ₹10,00,000 each. This mirrors the Portuguese legítima — both protect children from disinheritance, but the French fraction scales with the number of heirs. (Source: Articles 912–913, French Civil Code, as applicable to Renonçants in Puducherry)"
    }
  ];

  let currentQ = 0;
  let score = 0;
  let answered = false;

  const questionEl = document.getElementById('quiz-question');
  const optionsEl = document.getElementById('quiz-options');
  const progressBar = document.getElementById('quiz-progress-bar');
  const progressText = document.getElementById('quiz-progress-text');
  const factCard = document.getElementById('quiz-fact-card');
  const factText = document.getElementById('quiz-fact-text');
  const nextBtn = document.getElementById('quiz-next-btn');
  const skipBtn = document.getElementById('quiz-skip-btn');
  const skipRow = document.getElementById('quiz-skip-row');
  const quizApp = document.getElementById('quiz-app');
  const quizScreen = document.getElementById('quiz-screen');
  const resultsScreen = document.getElementById('quiz-results-screen');
  const scoreEl = document.getElementById('results-score');
  const titleEl = document.getElementById('results-title');
  const retakeBtn = document.getElementById('quiz-retake-btn');

  function scrollToQuiz() {
    quizApp.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function loadQuestion() {
    answered = false;
    factCard.style.display = 'none';
    nextBtn.parentElement.style.display = 'none';
    skipRow.style.display = 'flex';

    const q = quizData[currentQ];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = '';

    q.options.forEach((opt, index) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt;
      btn.addEventListener('click', () => selectAnswer(index, btn));
      optionsEl.appendChild(btn);
    });

    // Update Progress
    const progressPercent = ((currentQ) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `Question ${currentQ + 1} of ${quizData.length}`;
    
    // Update button text for last question
    if (currentQ === quizData.length - 1) {
      nextBtn.textContent = "See Results";
    } else {
      nextBtn.textContent = "Next Question";
    }
  }

  function selectAnswer(selectedIndex, btnElement) {
    if (answered) return;
    answered = true;

    const correctIndex = quizData[currentQ].correct;
    const buttons = optionsEl.querySelectorAll('.quiz-option');

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
      btnElement.classList.add('correct');
      score++;
    } else {
      btnElement.classList.add('wrong');
      buttons[correctIndex].classList.add('correct');
    }

    // Show Did You Know card, hide skip
    factText.textContent = quizData[currentQ].fact;
    factCard.style.display = 'block';
    nextBtn.parentElement.style.display = 'flex';
    skipRow.style.display = 'none';
    
    // Update progress bar to fully cover current question
    const progressPercent = ((currentQ + 1) / quizData.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }

  function showResults() {
    quizScreen.style.display = 'none';
    factCard.style.display = 'none';
    nextBtn.parentElement.style.display = 'none';
    document.querySelector('.quiz-header').style.display = 'none';
    
    resultsScreen.style.display = 'block';
    scoreEl.textContent = `${score}/${quizData.length}`;
    
    let title = "";
    if (score === 10) title = "A True Legal Scholar";
    else if (score >= 7) title = "Exceptional Understanding";
    else if (score >= 4) title = "A Solid Foundation";
    else title = "Time to Review the Codes";
    
    titleEl.textContent = title;
  }

  nextBtn.addEventListener('click', () => {
    currentQ++;
    if (currentQ < quizData.length) {
      loadQuestion();
      scrollToQuiz();
    } else {
      showResults();
      scrollToQuiz();
    }
  });

  skipBtn.addEventListener('click', () => {
    if (answered) return;
    currentQ++;
    if (currentQ < quizData.length) {
      loadQuestion();
      scrollToQuiz();
    } else {
      showResults();
      scrollToQuiz();
    }
  });

  retakeBtn.addEventListener('click', () => {
    currentQ = 0;
    score = 0;
    resultsScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    document.querySelector('.quiz-header').style.display = 'flex';
    loadQuestion();
    scrollToQuiz();
  });

  // Init
  loadQuestion();
});
