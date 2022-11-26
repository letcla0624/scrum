const openBtn = document.querySelector(".openBtn");
const confirmBtn = document.querySelector(".confirmBtn");
const judgeBtn = document.querySelector(".judgeBtn");
const doneBtn = document.querySelector(".doneBtn");
const doneBtn2 = document.querySelector(".doneBtn2");
const doneBtn3 = document.querySelector(".doneBtn3");
const doneBtn4 = document.querySelector(".doneBtn4");

const startBtn1 = document.querySelector(".startBtn1");
const startBtn2 = document.querySelector(".startBtn2");
const startBtn3 = document.querySelector(".startBtn3");
const startBtn4 = document.querySelector(".startBtn4");

const continueBtn1 = document.querySelector(".continueBtn1");
const continueBtn2 = document.querySelector(".continueBtn2");
const continueBtn3 = document.querySelector(".continueBtn3");
const continueBtn4 = document.querySelector(".continueBtn4");
const continueBtn5 = document.querySelector(".continueBtn5");
const continueBtn6 = document.querySelector(".continueBtn6");
const continueBtn7 = document.querySelector(".continueBtn7");
const continueBtn8 = document.querySelector(".continueBtn8");
const continueBtn9 = document.querySelector(".continueBtn9");

const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");
const section5 = document.querySelector(".section5");
const section6 = document.querySelector(".section6");
const section7 = document.querySelector(".section7");
const section8 = document.querySelector(".section8");
const section9 = document.querySelector(".section9");
const section10 = document.querySelector(".section10");
const section11 = document.querySelector(".section11");
const section12 = document.querySelector(".section12");
const section13 = document.querySelector(".section13");
const section14 = document.querySelector(".section14");
const section15 = document.querySelector(".section15");
const section16 = document.querySelector(".section16");
const section17 = document.querySelector(".section17");
const section18 = document.querySelector(".section18");
const section19 = document.querySelector(".section19");
const section20 = document.querySelector(".section20");

const humanShadow = document.querySelectorAll(".humanShadow");
const nameInput = document.querySelector(".nameInput");
let myName = "";

openBtn.addEventListener("click", () => {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");

  let typed = new Typed("#typed", {
    strings: [
      `哈囉，恭喜你成為六角學院的正式員工啦！<br>
       在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！<br>
       成功通過 Scrum 新手村的試煉吧！`,
    ],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
    onComplete() {
      startBtn1.removeAttribute("disabled");
    },
  });
});

startBtn1.addEventListener("click", () => {
  section2.classList.add("hidden");
  section3.classList.remove("hidden");
});

humanShadow.forEach((item) => {
  item.addEventListener("click", (e) => {
    const arr = [...e.target.parentNode.children];
    arr.forEach((item) => item.classList.remove("active"));
    e.target.classList.add("active");
    e.target.parentNode.classList.add("choice");
  });
});

confirmBtn.addEventListener("click", () => {
  if (
    nameInput.value === "" ||
    !humanShadow[0].parentNode.classList.contains("choice")
  ) {
    const noNameBlock = document.querySelector(".noNameBlock");
    const okBtn = document.querySelector(".okBtn");
    let typed2 = {};

    noNameBlock.classList.remove("hidden");
    if (!noNameBlock.classList.contains("hidden")) {
      typed2 = new Typed("#typed2", {
        strings: [
          `嘿！新同事！<br>
         不打算選擇角色或報上名嗎？`,
        ],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: false,
        onComplete() {
          okBtn.removeAttribute("disabled");
        },
      });
    }
    okBtn.addEventListener("click", () => {
      noNameBlock.classList.add("hidden");
      typed2.destroy();
    });
  } else {
    myName = nameInput.value;
    section3.classList.add("hidden");
    section4.classList.remove("hidden");

    if (section3.classList.contains("hidden")) {
      let typed3 = new Typed("#typed3", {
        strings: [
          `哈囉~${myName}。<br>
          我是開發 A 組的 PO，小敏。`,
          `PO 也就是<span style="color: #ffac89">產品負責人(Product Owner)。</span><br>
          產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單(Product Backlog)唷！`,
          `剛好我最近手邊有一個『人才招募系統』的案子，我才剛列出了『產品需求清單』。既然你都來了，<span style="color: #ffac89">來試試看調整產品優先度，排出產品待辦清單吧！</span>`,
        ],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 1000,
        smartBackspace: true,
        showCursor: false,
        onComplete() {
          startBtn2.removeAttribute("disabled");
        },
      });
    }
  }
});

startBtn2.addEventListener("click", () => {
  section4.classList.add("hidden");
  section5.classList.remove("hidden");
});

const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");
const isArrEqual = (arr1, arr2) => {
  return arr1.join("") === arr2.join("") ? true : false;
};
const answerAry = ["4", "2", "1", "3"];

var candidate = Sortable.create(candidateDOM, {
  group: "productBacklog",
  animation: 500,
});

var productBacklog = Sortable.create(productBacklogDOM, {
  group: "productBacklog",
  onChange: () => {
    const nextBtn = document.querySelector(".nextBtn");
    const okBtn2 = document.querySelector(".okBtn2");
    const answerBlock = document.querySelector(".answerBlock");
    const wrongBlock = document.querySelector(".wrongBlock");
    const correctBlock = document.querySelector(".correctBlock");

    let order = productBacklog.toArray();
    const answer = isArrEqual(order, answerAry);

    doneBtn.addEventListener("click", () => {
      if (answer === true) {
        answerBlock.classList.remove("hidden");
        correctBlock.classList.remove("hidden");
        wrongBlock.classList.add("hidden");

        let typed5 = new Typed("#typed5", {
          strings: [`做得好啊！${myName}！`],
          typeSpeed: 50,
          backSpeed: 0,
          showCursor: false,
          onComplete() {
            nextBtn.removeAttribute("disabled");
          },
        });

        nextBtn.addEventListener("click", () => {
          answerBlock.classList.add("hidden");
          section5.classList.add("hidden");
          section6.classList.remove("hidden");
          typed5.destroy();
          section6Start();
        });
      } else {
        answerBlock.classList.remove("hidden");
        correctBlock.classList.add("hidden");
        wrongBlock.classList.remove("hidden");

        let typed4 = new Typed("#typed4", {
          strings: [
            `嘿！${myName}！<br>
           想跑去哪呢？你的試煉還沒有完成呢！`,
          ],
          typeSpeed: 50,
          backSpeed: 0,
          showCursor: false,
          onComplete() {
            okBtn2.removeAttribute("disabled");
          },
        });

        okBtn2.addEventListener("click", () => {
          answerBlock.classList.add("hidden");
          typed4.destroy();
        });
      }
    });
  },
});

function section6Start() {
  if (section5.classList.contains("hidden")) {
    let typed6 = new Typed("#typed6", {
      strings: [
        `產品待辦清單好了之後，<br>
         我們來召集 Scrum Master 和開發團隊共同召開<span style="color: #ffac89">短衝規劃會議 (Sprint Planning)</span>。`,
        `短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，決定要完成哪些工作事項來達到商業需求。`,
        `列出<span style="color: #ffac89">短衝待辦清單 (Sprint Backlog)</span>，並由開發團隊在接下來的產品開發週期裡執行。</span>`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete() {
        continueBtn1.removeAttribute("disabled");
      },
    });
  }
}

function section7Start() {
  section6.classList.add("hidden");
  section7.classList.remove("hidden");
  if (section6.classList.contains("hidden")) {
    let typed7 = new Typed("#typed7", {
      strings: [
        `嗨嗨！${myName}，你是新來的前端吧！<br>
        我是這次的 Scrum Master 小捷，<br>
        我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum 瞭解。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn2.removeAttribute("disabled");
      },
    });
  }
}

function section8Start() {
  section7.classList.add("hidden");
  section8.classList.remove("hidden");
  if (section7.classList.contains("hidden")) {
    let typed8 = new Typed("#typed8", {
      strings: [
        `這兩位是小斯和小凱，是我們開發團為的成員唷～`,
        `目前我們團隊一次 Sprint 週期是兩週的時間，依照我的觀察，<br>
        目前團隊可以負擔的點數 (Sprint Point) 大約是 20 點左右。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn3.removeAttribute("disabled");
      },
    });
  }
}

function section9Start() {
  section8.classList.add("hidden");
  section9.classList.remove("hidden");
  if (section8.classList.contains("hidden")) {
    let typed9 = new Typed("#typed9", {
      strings: [
        `${myName}，你應該不知道點數是什麼意思吧 哈哈！<br>
         我來跟你介紹一下吧～<br>
         Sprint Point 目的是為了衡量速度，是用大概花費的時間預估出的相對點數。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn4.removeAttribute("disabled");
      },
    });
  }
}

function section10Start() {
  section9.classList.add("hidden");
  section10.classList.remove("hidden");
  if (section9.classList.contains("hidden")) {
    let typed10 = new Typed("#typed10", {
      strings: [
        `沒錯，如同小斯說的，我這邊已經把剛剛討論好的點數標上去囉～你來練習把任務排到短衝待辦清單吧！`,
        `By the way，我們平常管理任務是使用<img src="./assets/images/jira.svg" alt="jira" class="px-3" style="display: inline;">這套軟體，你有時間記得先去註冊和熟悉唷～`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        startBtn3.removeAttribute("disabled");
      },
    });
  }
}

continueBtn1.addEventListener("click", section7Start);
continueBtn2.addEventListener("click", section8Start);
continueBtn3.addEventListener("click", section9Start);
continueBtn4.addEventListener("click", section10Start);

startBtn3.addEventListener("click", () => {
  section10.classList.add("hidden");
  section11.classList.remove("hidden");
});

const backlogDOM = document.querySelector(
  ".backlog-section .droppable-container"
);
const sprintDOM = document.querySelector(
  ".sprint-section .droppable-container"
);

const backlogArr = [
  { content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）", score: 5 },
  { content: "應徵者的線上履歷編輯器", score: 13 },
  { content: "會員系統（登入、註冊、權限管理）", score: 8 },
  { content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）", score: 8 },
];

let totalScore = 0;
let totalScoreDOM = document.querySelector(".total-score");
totalScoreDOM.textContent = totalScore;

// 以map方式創造DOM node, 並塞入backlog的container
backlogArr.map((item) => {
  let draggableCard = document.createElement("div");
  draggableCard.setAttribute("data-score", item.score);
  draggableCard.classList.add("draggable", "flex", "justify-between");
  let dragTxt = document.createElement("p");
  draggableCard.appendChild(dragTxt);
  dragTxt.setAttribute("draggable", "true");
  dragTxt.textContent = item.content;

  let timeAvatar = document.createElement("span");
  timeAvatar.classList.add("time-avatar");
  timeAvatar.textContent = item.score;

  draggableCard.appendChild(timeAvatar);

  backlogDOM.appendChild(draggableCard);
});

let sprintSortableObj = Sortable.create(sprintDOM, {
  group: "dnd",
  animation: 10,
  dataIdAttr: "data-score",
  onEnd: () => {
    // 更新totalScore
    totalScore = sprintSortableObj
      .toArray()
      .map((item) => parseInt(item, 10))
      .reduce((a, b) => a + b, 0);
    totalScoreDOM.textContent = totalScore;

    let warningTextDOM = document.querySelector(".warning-text");

    warningTextDOM.classList.add("hidden");
    if (totalScore > 20) {
      warningTextDOM.classList.remove("hidden");
    }
  },
});

let backlogSortableObj = Sortable.create(backlogDOM, {
  group: "dnd",
  animation: 10,
  dataIdAttr: "data-score",
  onEnd: () => {
    totalScore = sprintSortableObj
      .toArray()
      .map((item) => parseInt(item, 10))
      .reduce((a, b) => a + b, 0);
    totalScoreDOM.textContent = totalScore;

    let warningTextDOM = document.querySelector(".warning-text");

    const answerBlock2 = document.querySelector(".answerBlock2");
    const wrongBlock2 = document.querySelector(".wrongBlock2");
    const correctBlock2 = document.querySelector(".correctBlock2");
    const okBtn3 = document.querySelector(".okBtn3");
    const nextBtn3 = document.querySelector(".nextBtn3");

    doneBtn2.addEventListener("click", () => {
      if (totalScore < 20) {
        answerBlock2.classList.remove("hidden");
        wrongBlock2.classList.add("hidden");
        correctBlock2.classList.remove("hidden");

        let typed12 = new Typed("#typed12", {
          strings: [`你做到了！非常有潛力喔！`],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete() {
            nextBtn3.removeAttribute("disabled");
          },
        });

        nextBtn3.addEventListener("click", () => {
          answerBlock2.classList.add("hidden");
          correctBlock2.classList.add("hidden");
          typed12.destroy();
          section12Start();
        });
      }
    });

    warningTextDOM.classList.add("hidden");
    if (totalScore > 20) {
      warningTextDOM.classList.remove("hidden");
      answerBlock2.classList.remove("hidden");
      wrongBlock2.classList.remove("hidden");
      correctBlock2.classList.add("hidden");

      let typed11 = new Typed("#typed11", {
        strings: [`請再試試看，我相信你可以的！`],
        typeSpeed: 50,
        backSpeed: 0,
        smartBackspace: true,
        showCursor: false,
        onComplete() {
          okBtn3.removeAttribute("disabled");
        },
      });

      okBtn3.addEventListener("click", () => {
        answerBlock2.classList.add("hidden");
        wrongBlock2.classList.add("hidden");
        typed11.destroy();
      });
    }
  },
});

function section12Start() {
  section11.classList.add("hidden");
  section12.classList.remove("hidden");
  if (section11.classList.contains("hidden")) {
    let typed13 = new Typed("#typed13", {
      strings: [
        `等等等等等，你都還不知道什麼是 <span style="color: #ffac89">Sprint</span> 吧！ 讓我先為你介紹一下～ 仔細聽好唷，等等會考考你！`,
        `<span style="color: #ffac89">Sprint 是一個短衝</span>，開發團隊會在這期間執行開發。在這段期間內，開發團隊舉辦<span style="color: #ffac89">每日站立會議 Daily Scrum</span>，追蹤成員間的工作狀況。`,
        `除了每日站立會議，在 Sprint 結束後也會有：<br>
        <span style="color: #ffac89">Sprint 短衝檢視會議 SprintReview</span>、<br>
        <span style="color: #ffac89">Sprint 短衝自省會議 Sprint Retrospective</span>。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete() {
        continueBtn5.removeAttribute("disabled");
      },
    });
  }
}

function section13Start() {
  section12.classList.add("hidden");
  section13.classList.remove("hidden");
  if (section12.classList.contains("hidden")) {
    let typed14 = new Typed("#typed14", {
      strings: [
        `<span style="color: #ffac89">每日站立會議 Daily Scrum</span><br><br>
        每天都要進行的會議，以 15 分鐘為限制<br>
        <ul style="list-style: disc; margin-left: 1.7rem;">
          <li>昨天為團隊的短衝目標（Sprint Goal）做了那些進度</li>
          <li>今天我會如何準備來幫助團隊達到短衝目標</li>
          <li>過程中有遇到什麼問題、難題</li>
        </ul><br>
        透過團隊分享，追蹤大家的工作狀況。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn6.removeAttribute("disabled");
      },
    });
  }
}

function section14Start() {
  section13.classList.add("hidden");
  section14.classList.remove("hidden");
  if (section13.classList.contains("hidden")) {
    let typed15 = new Typed("#typed15", {
      strings: [
        `<span style="color: #ffac89">短衝檢視會議 Sprint Review</span><br><br>
        用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn7.removeAttribute("disabled");
      },
    });
  }
}

continueBtn5.addEventListener("click", section13Start);
continueBtn6.addEventListener("click", section14Start);
continueBtn7.addEventListener("click", section15Start);

function section15Start() {
  section14.classList.add("hidden");
  section15.classList.remove("hidden");
  if (section14.classList.contains("hidden")) {
    let typed16 = new Typed("#typed16", {
      strings: [
        `<span style="color: #ffac89">短衝自省會議 Sprint Retrospective</span><br><br>
        團隊在自省會議裡，會共同回顧該短衝歷程發生的事情：<br>
        <ul style="list-style: disc; margin-left: 1.7rem;">
          <li>好的地方</li>
          <li>可以改進的地方</li>
          <li>如何維持我們已有的成功經驗</li>
        </ul><br>
        優化工作流程、讓團隊有變得更好的機會。<br>
        推薦工具：Confluence`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        startBtn4.removeAttribute("disabled");
      },
    });
  }
}

startBtn4.addEventListener("click", () => {
  section15.classList.add("hidden");
  section16.classList.remove("hidden");
});

const nextBtn4 = document.querySelector(".nextBtn4");
const okBtn4 = document.querySelector(".okBtn4");
const answerBlock3 = document.querySelector(".answerBlock3");
const wrongBlock3 = document.querySelector(".wrongBlock3");
const correctBlock3 = document.querySelector(".correctBlock3");
const dropBlock = document.querySelectorAll(".dropBlock");
let correctAnswer = 0;
dropBlock.forEach((item) => {
  item.addEventListener("drop", (e) => {
    if (e.target.dataset.id === e.target.children[0].getAttribute("id")) {
      correctAnswer += 1;
    }

    doneBtn3.addEventListener("click", () => {
      if (correctAnswer >= 3) {
        answerBlock3.classList.remove("hidden");
        correctBlock3.classList.remove("hidden");
        wrongBlock3.classList.add("hidden");

        let typed18 = new Typed("#typed18", {
          strings: [`這麼快就對 Scrum 瞭若指掌了，我對你刮目相看了哦！`],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete() {
            nextBtn4.removeAttribute("disabled");
          },
        });

        nextBtn4.addEventListener("click", () => {
          answerBlock3.classList.add("hidden");
          typed18.destroy();
          section17Start();
        });
      } else {
        answerBlock3.classList.remove("hidden");
        correctBlock3.classList.add("hidden");
        wrongBlock3.classList.remove("hidden");

        let typed17 = new Typed("#typed17", {
          strings: [`加把勁啊新人！`],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete() {
            okBtn4.removeAttribute("disabled");
          },
        });

        okBtn4.addEventListener("click", () => {
          answerBlock3.classList.add("hidden");
          wrongBlock3.classList.add("hidden");
          typed17.destroy();
        });
      }
    });
  });
});

function section17Start() {
  section16.classList.add("hidden");
  section17.classList.remove("hidden");
  if (section16.classList.contains("hidden")) {
    let typed19 = new Typed("#typed19", {
      strings: [
        `哇賽新來的，你真的很幸運，<br>
        今天剛好是開發 B 組的 <span style="color: #ffac89">Retro</span>，你也來見識一下，看看 Retro 都該做些什麼吧～～`,
        `我們會在會議裡請團隊成員提出哪些是做得好的地方、哪些可以繼續改善的地方？並記錄在<img src="./assets/images/confluence.svg" alt="confluence" class="px-3" style="display: inline;">中。Retro 重點在於<span style="color: #ffac89">「正面表述」</span>，你也思考看看，哪一些是適合 Retro 的回饋吧～～`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn8.removeAttribute("disabled");
      },
    });
  }
}

continueBtn8.addEventListener("click", section18Start);

function section18Start() {
  section17.classList.add("hidden");
  section18.classList.remove("hidden");
}

doneBtn4.addEventListener("click", () => {
  const nextBtn5 = document.querySelector(".nextBtn5");
  const okBtn5 = document.querySelector(".okBtn5");
  const answerBlock4 = document.querySelector(".answerBlock4");
  const wrongBlock4 = document.querySelector(".wrongBlock4");
  const correctBlock4 = document.querySelector(".correctBlock4");
  const radio2 = document.querySelector("#radio2");
  const radio3 = document.querySelector("#radio3");

  if (radio2.checked && radio3.checked) {
    answerBlock4.classList.remove("hidden");
    correctBlock4.classList.remove("hidden");
    wrongBlock4.classList.add("hidden");

    let typed21 = new Typed("#typed21", {
      strings: [`你也是語言的藝術家了～～`],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        nextBtn5.removeAttribute("disabled");
      },
    });

    nextBtn5.addEventListener("click", () => {
      answerBlock4.classList.add("hidden");
      typed21.destroy();
      section19Start();
    });
  } else {
    answerBlock4.classList.remove("hidden");
    correctBlock4.classList.add("hidden");
    wrongBlock4.classList.remove("hidden");

    let typed20 = new Typed("#typed20", {
      strings: [`......好哦，請再試一次吧～`],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        okBtn5.removeAttribute("disabled");
      },
    });

    okBtn5.addEventListener("click", () => {
      answerBlock4.classList.add("hidden");
      wrongBlock4.classList.add("hidden");
      typed20.destroy();
    });
  }
});

function section19Start() {
  section18.classList.add("hidden");
  section19.classList.remove("hidden");
  if (section18.classList.contains("hidden")) {
    let typed22 = new Typed("#typed22", {
      strings: [
        `恭喜你通過 Scrum 新手村！ 正式加入六角學院開發 A 組的大家庭！這是你的結業證書：`,
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete() {
        continueBtn9.removeAttribute("disabled");
      },
    });
  }
}

continueBtn9.addEventListener("click", section20Start);

function section20Start() {
  section19.classList.add("hidden");
  section20.classList.remove("hidden");
  const nameTxt = document.querySelector(".nameTxt");
  const todayDate = document.querySelector(".todayDate");
  const photoHead = document.querySelector(".photoHead");
  const shadow1 = document.querySelector(".shadow1");
  const shadow2 = document.querySelector(".shadow2");

  if (shadow1.classList.contains("active")) {
    photoHead.setAttribute("src", "./assets/images/head1.svg");
  } else if (shadow2.classList.contains("active")) {
    photoHead.setAttribute("src", "./assets/images/head2.svg");
  } else {
    photoHead.setAttribute("src", "./assets/images/head1.svg");
  }

  nameTxt.textContent = `${myName} 君`;

  const Today = new Date();
  todayDate.textContent = `${Today.getFullYear()} 年 ${
    Today.getMonth() + 1
  } 月 ${Today.getDate()} 日`;
}
