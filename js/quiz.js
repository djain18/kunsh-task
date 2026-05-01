/* FILE: project/js/quiz.js */

document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: "Which code governs the personal law of Goans, regardless of their religion?",
      options: [
        "The Uniform Civil Code of India, 1956",
        "The Portuguese Civil Code, 1867",
        "The French Civil Code, 1804",
        "The Goa Hindu Marriage Act, 1980"
      ],
      correct: 1,
      fact: "The Portuguese Civil Code was enacted in 1867 and extended to Goa in 1869. Even after Goa's liberation in 1961, the Indian Parliament enacted the Goa, Daman and Diu Administration Act, 1962, allowing the pre-liberation laws to continue."
    },
    {
      question: "Under the Goan inheritance system, what is 'legítima'?",
      options: [
        "A tax paid to the state upon inheritance",
        "The portion of an estate that can be freely willed to anyone",
        "The mandatory share of an estate reserved for biological descendants",
        "A certificate proving legal heirship"
      ],
      correct: 2,
      fact: "The 'legítima' (forced heirship) ensures that half of the testator's property must be transferred to biological heirs. A parent cannot entirely disinherit their children under this regime."
    },
    {
      question: "What is the default property regime for marriages contracted in Goa without a prenuptial agreement?",
      options: [
        "Communion of Assets (Comunhão de Bens)",
        "Total Separation of Assets",
        "Partial Communion of Assets",
        "Husband's Exclusive Ownership"
      ],
      correct: 0,
      fact: "Under the 'Communion of Assets', both spouses hold equal half-shares in all properties owned before the marriage or acquired during it. Neither spouse can dispose of this joint property without the other's consent."
    },
    {
      question: "In Puducherry, who are the 'Renonçants'?",
      options: [
        "Citizens who renounced their Indian citizenship",
        "Local inhabitants who renounced their personal laws to be governed by the French Civil Code",
        "French nationals who refused to leave after 1954",
        "People who renounced property rights to become monks"
      ],
      correct: 1,
      fact: "A decree in 1881 allowed natives of French India to renounce their customary personal laws and opt for the French Civil Code. These citizens and their descendants are known as Renonçants."
    },
    {
      question: "Which of these laws applies to the Renonçants of Puducherry regarding succession?",
      options: [
        "The Hindu Succession Act, 1956",
        "The Indian Succession Act, 1925",
        "The French Civil Code (Code Napoléon)",
        "The Portuguese Civil Code"
      ],
      correct: 2,
      fact: "Even today, disputes regarding marriage, succession, and property for Renonçants are adjudicated by Indian courts interpreting the French Civil Code in French."
    },
    {
      question: "Can a Goan completely disinherit their biological child under normal circumstances?",
      options: [
        "Yes, by executing a registered will",
        "Yes, but only if the child gives consent",
        "No, due to the rule of 'legítima'",
        "No, unless they seek permission from the High Court"
      ],
      correct: 2,
      fact: "Because of 'legítima', half of the estate is strictly protected for descendants. You can only freely dispose of the remaining half (the 'quota disponível')."
    },
    {
      question: "What unique right does the Portuguese Civil Code (as applicable in Goa) grant to women regarding marital property?",
      options: [
        "The right to exclusively administer the husband's business",
        "An automatic 50% ownership stake in all matrimonial assets",
        "The right to claim property only upon divorce",
        "The right to inherit only if there are no male heirs"
      ],
      correct: 1,
      fact: "While the communion of assets grants women a 50% stake, critics point out that Article 1117 of the Code historically gave the husband the exclusive right to *administer* all marital property."
    },
    {
      question: "What legal instrument confirmed the continuation of French laws for certain citizens in Puducherry after its de facto transfer to India?",
      options: [
        "The Treaty of Cession, 1956",
        "The Constitution of India (Original Draft)",
        "The Puducherry Personal Law Act",
        "The State Reorganisation Act"
      ],
      correct: 0,
      fact: "The Treaty of Cession signed between India and France specifically protected the legal rights of those who were governed by the French legal system prior to the transfer."
    },
    {
      question: "Is bigamy strictly prohibited for everyone in Goa under the Portuguese Civil Code?",
      options: [
        "Yes, without exception",
        "No, it is permitted for 'Gentile Hindus' under specific circumstances",
        "No, it is permitted for all religious communities",
        "Yes, but the penalty is only a minor fine"
      ],
      correct: 1,
      fact: "Under the Codes of Usages and Customs of Gentile Hindus of Goa (1880), a Hindu man can take a second wife if his first wife does not bear a child by age 25 or a male child by age 30, complicating the claim that Goa has a perfectly uniform civil code."
    },
    {
      question: "Under the French Civil Code applied in Puducherry, how are children treated in inheritance compared to Indian personal laws?",
      options: [
        "Daughters get no share",
        "Eldest son takes everything (primogeniture)",
        "All legitimate children inherit equally, regardless of sex",
        "Male children get double the share of female children"
      ],
      correct: 2,
      fact: "The French Civil Code, rooted in the principles of the French Revolution, mandated strict equality among all legitimate children for inheritance, an egalitarian principle that preceded similar reforms in Indian law by over a century."
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
  const quizScreen = document.getElementById('quiz-screen');
  const resultsScreen = document.getElementById('quiz-results-screen');
  const scoreEl = document.getElementById('results-score');
  const titleEl = document.getElementById('results-title');
  const retakeBtn = document.getElementById('quiz-retake-btn');

  function loadQuestion() {
    answered = false;
    factCard.style.display = 'none';
    nextBtn.parentElement.style.display = 'none';
    
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

    // Show Did You Know card
    factText.textContent = quizData[currentQ].fact;
    factCard.style.display = 'block';
    nextBtn.parentElement.style.display = 'flex';
    
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
    } else {
      showResults();
    }
  });

  retakeBtn.addEventListener('click', () => {
    currentQ = 0;
    score = 0;
    resultsScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    document.querySelector('.quiz-header').style.display = 'flex';
    loadQuestion();
  });

  // Init
  loadQuestion();
});
