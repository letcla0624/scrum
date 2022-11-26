"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var openBtn = document.querySelector(".openBtn");
var confirmBtn = document.querySelector(".confirmBtn");
var judgeBtn = document.querySelector(".judgeBtn");
var doneBtn = document.querySelector(".doneBtn");
var doneBtn2 = document.querySelector(".doneBtn2");
var doneBtn3 = document.querySelector(".doneBtn3");
var doneBtn4 = document.querySelector(".doneBtn4");
var startBtn1 = document.querySelector(".startBtn1");
var startBtn2 = document.querySelector(".startBtn2");
var startBtn3 = document.querySelector(".startBtn3");
var startBtn4 = document.querySelector(".startBtn4");
var continueBtn1 = document.querySelector(".continueBtn1");
var continueBtn2 = document.querySelector(".continueBtn2");
var continueBtn3 = document.querySelector(".continueBtn3");
var continueBtn4 = document.querySelector(".continueBtn4");
var continueBtn5 = document.querySelector(".continueBtn5");
var continueBtn6 = document.querySelector(".continueBtn6");
var continueBtn7 = document.querySelector(".continueBtn7");
var continueBtn8 = document.querySelector(".continueBtn8");
var continueBtn9 = document.querySelector(".continueBtn9");
var section1 = document.querySelector(".section1");
var section2 = document.querySelector(".section2");
var section3 = document.querySelector(".section3");
var section4 = document.querySelector(".section4");
var section5 = document.querySelector(".section5");
var section6 = document.querySelector(".section6");
var section7 = document.querySelector(".section7");
var section8 = document.querySelector(".section8");
var section9 = document.querySelector(".section9");
var section10 = document.querySelector(".section10");
var section11 = document.querySelector(".section11");
var section12 = document.querySelector(".section12");
var section13 = document.querySelector(".section13");
var section14 = document.querySelector(".section14");
var section15 = document.querySelector(".section15");
var section16 = document.querySelector(".section16");
var section17 = document.querySelector(".section17");
var section18 = document.querySelector(".section18");
var section19 = document.querySelector(".section19");
var section20 = document.querySelector(".section20");
var humanShadow = document.querySelectorAll(".humanShadow");
var nameInput = document.querySelector(".nameInput");
var myName = "";
openBtn.addEventListener("click", function () {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
  var typed = new Typed("#typed", {
    strings: ["\u54C8\u56C9\uFF0C\u606D\u559C\u4F60\u6210\u70BA\u516D\u89D2\u5B78\u9662\u7684\u6B63\u5F0F\u54E1\u5DE5\u5566\uFF01<br>\n       \u5728\u6B63\u5F0F\u52A0\u5165\u5C08\u6848\u958B\u767C\u4E4B\u524D\uFF0C\u9700\u8981\u8ACB\u4F60\u5148\u4E86\u89E3 Scrum \u7684\u6D41\u7A0B\u8207\u7CBE\u795E\uFF01<br>\n       \u6210\u529F\u901A\u904E Scrum \u65B0\u624B\u6751\u7684\u8A66\u7149\u5427\uFF01"],
    typeSpeed: 50,
    backSpeed: 0,
    showCursor: false,
    onComplete: function onComplete() {
      startBtn1.removeAttribute("disabled");
    }
  });
});
startBtn1.addEventListener("click", function () {
  section2.classList.add("hidden");
  section3.classList.remove("hidden");
});
humanShadow.forEach(function (item) {
  item.addEventListener("click", function (e) {
    var arr = _toConsumableArray(e.target.parentNode.children);

    arr.forEach(function (item) {
      return item.classList.remove("active");
    });
    e.target.classList.add("active");
    e.target.parentNode.classList.add("choice");
  });
});
confirmBtn.addEventListener("click", function () {
  if (nameInput.value === "" || !humanShadow[0].parentNode.classList.contains("choice")) {
    var noNameBlock = document.querySelector(".noNameBlock");
    var okBtn = document.querySelector(".okBtn");
    var typed2 = {};
    noNameBlock.classList.remove("hidden");

    if (!noNameBlock.classList.contains("hidden")) {
      typed2 = new Typed("#typed2", {
        strings: ["\u563F\uFF01\u65B0\u540C\u4E8B\uFF01<br>\n         \u4E0D\u6253\u7B97\u9078\u64C7\u89D2\u8272\u6216\u5831\u4E0A\u540D\u55CE\uFF1F"],
        typeSpeed: 50,
        backSpeed: 0,
        showCursor: false,
        onComplete: function onComplete() {
          okBtn.removeAttribute("disabled");
        }
      });
    }

    okBtn.addEventListener("click", function () {
      noNameBlock.classList.add("hidden");
      typed2.destroy();
    });
  } else {
    myName = nameInput.value;
    section3.classList.add("hidden");
    section4.classList.remove("hidden");

    if (section3.classList.contains("hidden")) {
      var typed3 = new Typed("#typed3", {
        strings: ["\u54C8\u56C9~".concat(myName, "\u3002<br>\n          \u6211\u662F\u958B\u767C A \u7D44\u7684 PO\uFF0C\u5C0F\u654F\u3002"), "PO \u4E5F\u5C31\u662F<span style=\"color: #ffac89\">\u7522\u54C1\u8CA0\u8CAC\u4EBA(Product Owner)\u3002</span><br>\n          \u7522\u54C1\u8CA0\u8CAC\u4EBA\u6703\u8CA0\u8CAC\u8A55\u4F30\u7522\u54C1\u5F85\u8FA6\u6E05\u55AE\u7684\u50F9\u503C\u8207\u91CD\u8981\u6027\uFF0C\u4F9D\u5E8F\u6392\u5217\u8981\u57F7\u884C\u7684\u512A\u5148\u9806\u5E8F\uFF0C\u5C0D\u9F4A\u7522\u54C1\u76EE\u6A19\u3002\u6700\u5F8C\u6392\u51FA\u7522\u54C1\u5F85\u8FA6\u6E05\u55AE(Product Backlog)\u5537\uFF01", "\u525B\u597D\u6211\u6700\u8FD1\u624B\u908A\u6709\u4E00\u500B\u300E\u4EBA\u624D\u62DB\u52DF\u7CFB\u7D71\u300F\u7684\u6848\u5B50\uFF0C\u6211\u624D\u525B\u5217\u51FA\u4E86\u300E\u7522\u54C1\u9700\u6C42\u6E05\u55AE\u300F\u3002\u65E2\u7136\u4F60\u90FD\u4F86\u4E86\uFF0C<span style=\"color: #ffac89\">\u4F86\u8A66\u8A66\u770B\u8ABF\u6574\u7522\u54C1\u512A\u5148\u5EA6\uFF0C\u6392\u51FA\u7522\u54C1\u5F85\u8FA6\u6E05\u55AE\u5427\uFF01</span>"],
        typeSpeed: 50,
        backSpeed: 0,
        backDelay: 1000,
        smartBackspace: true,
        showCursor: false,
        onComplete: function onComplete() {
          startBtn2.removeAttribute("disabled");
        }
      });
    }
  }
});
startBtn2.addEventListener("click", function () {
  section4.classList.add("hidden");
  section5.classList.remove("hidden");
});
var candidateDOM = document.querySelector(".candidate");
var productBacklogDOM = document.querySelector(".productBacklog");

var isArrEqual = function isArrEqual(arr1, arr2) {
  return arr1.join("") === arr2.join("") ? true : false;
};

var answerAry = ["1", "2", "3", "4"];
var candidate = Sortable.create(candidateDOM, {
  group: "productBacklog",
  animation: 500
});
var productBacklog = Sortable.create(productBacklogDOM, {
  group: "productBacklog",
  onChange: function onChange() {
    var nextBtn = document.querySelector(".nextBtn");
    var okBtn2 = document.querySelector(".okBtn2");
    var answerBlock = document.querySelector(".answerBlock");
    var wrongBlock = document.querySelector(".wrongBlock");
    var correctBlock = document.querySelector(".correctBlock");
    var order = productBacklog.toArray();
    var answer = isArrEqual(order, answerAry);
    doneBtn.addEventListener("click", function () {
      if (answer === true) {
        answerBlock.classList.remove("hidden");
        correctBlock.classList.remove("hidden");
        wrongBlock.classList.add("hidden");
        var typed5 = new Typed("#typed5", {
          strings: ["\u505A\u5F97\u597D\u554A\uFF01".concat(myName, "\uFF01")],
          typeSpeed: 50,
          backSpeed: 0,
          showCursor: false,
          onComplete: function onComplete() {
            nextBtn.removeAttribute("disabled");
          }
        });
        nextBtn.addEventListener("click", function () {
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
        var typed4 = new Typed("#typed4", {
          strings: ["\u563F\uFF01".concat(myName, "\uFF01<br>\n           \u60F3\u8DD1\u53BB\u54EA\u5462\uFF1F\u4F60\u7684\u8A66\u7149\u9084\u6C92\u6709\u5B8C\u6210\u5462\uFF01")],
          typeSpeed: 50,
          backSpeed: 0,
          showCursor: false,
          onComplete: function onComplete() {
            okBtn2.removeAttribute("disabled");
          }
        });
        okBtn2.addEventListener("click", function () {
          answerBlock.classList.add("hidden");
          typed4.destroy();
        });
      }
    });
  }
});

function section6Start() {
  if (section5.classList.contains("hidden")) {
    var typed6 = new Typed("#typed6", {
      strings: ["\u7522\u54C1\u5F85\u8FA6\u6E05\u55AE\u597D\u4E86\u4E4B\u5F8C\uFF0C<br>\n         \u6211\u5011\u4F86\u53EC\u96C6 Scrum Master \u548C\u958B\u767C\u5718\u968A\u5171\u540C\u53EC\u958B<span style=\"color: #ffac89\">\u77ED\u885D\u898F\u5283\u6703\u8B70 (Sprint Planning)</span>\u3002", "\u77ED\u885D\u5373\u662F\u4E00\u500B\u8FED\u4EE3\uFF0C\u5177\u6709\u56FA\u5B9A\u6642\u9593\u9650\u5236\uFF0C\u6211\u5011\u6703\u5728\u9019\u500B\u6703\u8B70\u4E2D\uFF0C\u6C7A\u5B9A\u8981\u5B8C\u6210\u54EA\u4E9B\u5DE5\u4F5C\u4E8B\u9805\u4F86\u9054\u5230\u5546\u696D\u9700\u6C42\u3002", "\u5217\u51FA<span style=\"color: #ffac89\">\u77ED\u885D\u5F85\u8FA6\u6E05\u55AE (Sprint Backlog)</span>\uFF0C\u4E26\u7531\u958B\u767C\u5718\u968A\u5728\u63A5\u4E0B\u4F86\u7684\u7522\u54C1\u958B\u767C\u9031\u671F\u88E1\u57F7\u884C\u3002</span>"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn1.removeAttribute("disabled");
      }
    });
  }
}

function section7Start() {
  section6.classList.add("hidden");
  section7.classList.remove("hidden");

  if (section6.classList.contains("hidden")) {
    var typed7 = new Typed("#typed7", {
      strings: ["\u55E8\u55E8\uFF01".concat(myName, "\uFF0C\u4F60\u662F\u65B0\u4F86\u7684\u524D\u7AEF\u5427\uFF01<br>\n        \u6211\u662F\u9019\u6B21\u7684 Scrum Master \u5C0F\u6377\uFF0C<br>\n        \u6211\u7684\u5DE5\u4F5C\u4E3B\u8981\u662F\u4FC3\u6210\u958B\u767C\u5718\u968A\u6210\u54E1\u5354\u4F5C\u3001\u5F15\u5C0E\u5718\u968A\u9032\u884C\u81EA\u7701\u6703\u8B70\uFF0C\u63D0\u5347\u5718\u968A\u6210\u54E1\u5C0D Scrum \u77AD\u89E3\u3002")],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn2.removeAttribute("disabled");
      }
    });
  }
}

function section8Start() {
  section7.classList.add("hidden");
  section8.classList.remove("hidden");

  if (section7.classList.contains("hidden")) {
    var typed8 = new Typed("#typed8", {
      strings: ["\u9019\u5169\u4F4D\u662F\u5C0F\u65AF\u548C\u5C0F\u51F1\uFF0C\u662F\u6211\u5011\u958B\u767C\u5718\u70BA\u7684\u6210\u54E1\u5537\uFF5E", "\u76EE\u524D\u6211\u5011\u5718\u968A\u4E00\u6B21 Sprint \u9031\u671F\u662F\u5169\u9031\u7684\u6642\u9593\uFF0C\u4F9D\u7167\u6211\u7684\u89C0\u5BDF\uFF0C<br>\n        \u76EE\u524D\u5718\u968A\u53EF\u4EE5\u8CA0\u64D4\u7684\u9EDE\u6578 (Sprint Point) \u5927\u7D04\u662F 20 \u9EDE\u5DE6\u53F3\u3002"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn3.removeAttribute("disabled");
      }
    });
  }
}

function section9Start() {
  section8.classList.add("hidden");
  section9.classList.remove("hidden");

  if (section8.classList.contains("hidden")) {
    var typed9 = new Typed("#typed9", {
      strings: ["".concat(myName, "\uFF0C\u4F60\u61C9\u8A72\u4E0D\u77E5\u9053\u9EDE\u6578\u662F\u4EC0\u9EBC\u610F\u601D\u5427 \u54C8\u54C8\uFF01<br>\n         \u6211\u4F86\u8DDF\u4F60\u4ECB\u7D39\u4E00\u4E0B\u5427\uFF5E<br>\n         Sprint Point \u76EE\u7684\u662F\u70BA\u4E86\u8861\u91CF\u901F\u5EA6\uFF0C\u662F\u7528\u5927\u6982\u82B1\u8CBB\u7684\u6642\u9593\u9810\u4F30\u51FA\u7684\u76F8\u5C0D\u9EDE\u6578\u3002")],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn4.removeAttribute("disabled");
      }
    });
  }
}

function section10Start() {
  section9.classList.add("hidden");
  section10.classList.remove("hidden");

  if (section9.classList.contains("hidden")) {
    var typed10 = new Typed("#typed10", {
      strings: ["\u6C92\u932F\uFF0C\u5982\u540C\u5C0F\u65AF\u8AAA\u7684\uFF0C\u6211\u9019\u908A\u5DF2\u7D93\u628A\u525B\u525B\u8A0E\u8AD6\u597D\u7684\u9EDE\u6578\u6A19\u4E0A\u53BB\u56C9\uFF5E\u4F60\u4F86\u7DF4\u7FD2\u628A\u4EFB\u52D9\u6392\u5230\u77ED\u885D\u5F85\u8FA6\u6E05\u55AE\u5427\uFF01", "By the way\uFF0C\u6211\u5011\u5E73\u5E38\u7BA1\u7406\u4EFB\u52D9\u662F\u4F7F\u7528<img src=\"./assets/images/jira.svg\" alt=\"jira\" class=\"px-3\" style=\"display: inline;\">\u9019\u5957\u8EDF\u9AD4\uFF0C\u4F60\u6709\u6642\u9593\u8A18\u5F97\u5148\u53BB\u8A3B\u518A\u548C\u719F\u6089\u5537\uFF5E"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        startBtn3.removeAttribute("disabled");
      }
    });
  }
}

continueBtn1.addEventListener("click", section7Start);
continueBtn2.addEventListener("click", section8Start);
continueBtn3.addEventListener("click", section9Start);
continueBtn4.addEventListener("click", section10Start);
startBtn3.addEventListener("click", function () {
  section10.classList.add("hidden");
  section11.classList.remove("hidden");
});
var backlogDOM = document.querySelector(".backlog-section .droppable-container");
var sprintDOM = document.querySelector(".sprint-section .droppable-container");
var backlogArr = [{
  content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）",
  score: 5
}, {
  content: "應徵者的線上履歷編輯器",
  score: 13
}, {
  content: "會員系統（登入、註冊、權限管理）",
  score: 8
}, {
  content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）",
  score: 8
}];
var totalScore = 0;
var totalScoreDOM = document.querySelector(".total-score");
totalScoreDOM.textContent = totalScore; // 以map方式創造DOM node, 並塞入backlog的container

backlogArr.map(function (item) {
  var draggableCard = document.createElement("div");
  draggableCard.setAttribute("data-score", item.score);
  draggableCard.classList.add("draggable", "flex", "justify-between");
  var dragTxt = document.createElement("p");
  draggableCard.appendChild(dragTxt);
  dragTxt.setAttribute("draggable", "true");
  dragTxt.textContent = item.content;
  var timeAvatar = document.createElement("span");
  timeAvatar.classList.add("time-avatar");
  timeAvatar.textContent = item.score;
  draggableCard.appendChild(timeAvatar);
  backlogDOM.appendChild(draggableCard);
});
var sprintSortableObj = Sortable.create(sprintDOM, {
  group: "dnd",
  animation: 10,
  dataIdAttr: "data-score",
  onEnd: function onEnd() {
    // 更新totalScore
    totalScore = sprintSortableObj.toArray().map(function (item) {
      return parseInt(item, 10);
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
    totalScoreDOM.textContent = totalScore;
    var warningTextDOM = document.querySelector(".warning-text");
    warningTextDOM.classList.add("hidden");

    if (totalScore > 20) {
      warningTextDOM.classList.remove("hidden");
    }
  }
});
var backlogSortableObj = Sortable.create(backlogDOM, {
  group: "dnd",
  animation: 10,
  dataIdAttr: "data-score",
  onEnd: function onEnd() {
    totalScore = sprintSortableObj.toArray().map(function (item) {
      return parseInt(item, 10);
    }).reduce(function (a, b) {
      return a + b;
    }, 0);
    totalScoreDOM.textContent = totalScore;
    var warningTextDOM = document.querySelector(".warning-text");
    var answerBlock2 = document.querySelector(".answerBlock2");
    var wrongBlock2 = document.querySelector(".wrongBlock2");
    var correctBlock2 = document.querySelector(".correctBlock2");
    var okBtn3 = document.querySelector(".okBtn3");
    var nextBtn3 = document.querySelector(".nextBtn3");
    doneBtn2.addEventListener("click", function () {
      if (totalScore < 20) {
        answerBlock2.classList.remove("hidden");
        wrongBlock2.classList.add("hidden");
        correctBlock2.classList.remove("hidden");
        var typed12 = new Typed("#typed12", {
          strings: ["\u4F60\u505A\u5230\u4E86\uFF01\u975E\u5E38\u6709\u6F5B\u529B\u5594\uFF01"],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete: function onComplete() {
            nextBtn3.removeAttribute("disabled");
          }
        });
        nextBtn3.addEventListener("click", function () {
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
      var typed11 = new Typed("#typed11", {
        strings: ["\u8ACB\u518D\u8A66\u8A66\u770B\uFF0C\u6211\u76F8\u4FE1\u4F60\u53EF\u4EE5\u7684\uFF01"],
        typeSpeed: 50,
        backSpeed: 0,
        smartBackspace: true,
        showCursor: false,
        onComplete: function onComplete() {
          okBtn3.removeAttribute("disabled");
        }
      });
      okBtn3.addEventListener("click", function () {
        answerBlock2.classList.add("hidden");
        wrongBlock2.classList.add("hidden");
        typed11.destroy();
      });
    }
  }
});

function section12Start() {
  section11.classList.add("hidden");
  section12.classList.remove("hidden");

  if (section11.classList.contains("hidden")) {
    var typed13 = new Typed("#typed13", {
      strings: ["\u7B49\u7B49\u7B49\u7B49\u7B49\uFF0C\u4F60\u90FD\u9084\u4E0D\u77E5\u9053\u4EC0\u9EBC\u662F <span style=\"color: #ffac89\">Sprint</span> \u5427\uFF01 \u8B93\u6211\u5148\u70BA\u4F60\u4ECB\u7D39\u4E00\u4E0B\uFF5E \u4ED4\u7D30\u807D\u597D\u5537\uFF0C\u7B49\u7B49\u6703\u8003\u8003\u4F60\uFF01", "<span style=\"color: #ffac89\">Sprint \u662F\u4E00\u500B\u77ED\u885D</span>\uFF0C\u958B\u767C\u5718\u968A\u6703\u5728\u9019\u671F\u9593\u57F7\u884C\u958B\u767C\u3002\u5728\u9019\u6BB5\u671F\u9593\u5167\uFF0C\u958B\u767C\u5718\u968A\u8209\u8FA6<span style=\"color: #ffac89\">\u6BCF\u65E5\u7AD9\u7ACB\u6703\u8B70 Daily Scrum</span>\uFF0C\u8FFD\u8E64\u6210\u54E1\u9593\u7684\u5DE5\u4F5C\u72C0\u6CC1\u3002", "\u9664\u4E86\u6BCF\u65E5\u7AD9\u7ACB\u6703\u8B70\uFF0C\u5728 Sprint \u7D50\u675F\u5F8C\u4E5F\u6703\u6709\uFF1A<br>\n        <span style=\"color: #ffac89\">Sprint \u77ED\u885D\u6AA2\u8996\u6703\u8B70 SprintReview</span>\u3001<br>\n        <span style=\"color: #ffac89\">Sprint \u77ED\u885D\u81EA\u7701\u6703\u8B70 Sprint Retrospective</span>\u3002"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn5.removeAttribute("disabled");
      }
    });
  }
}

function section13Start() {
  section12.classList.add("hidden");
  section13.classList.remove("hidden");

  if (section12.classList.contains("hidden")) {
    var typed14 = new Typed("#typed14", {
      strings: ["<span style=\"color: #ffac89\">\u6BCF\u65E5\u7AD9\u7ACB\u6703\u8B70 Daily Scrum</span><br><br>\n        \u6BCF\u5929\u90FD\u8981\u9032\u884C\u7684\u6703\u8B70\uFF0C\u4EE5 15 \u5206\u9418\u70BA\u9650\u5236<br>\n        <ul style=\"list-style: disc; margin-left: 1.7rem;\">\n          <li>\u6628\u5929\u70BA\u5718\u968A\u7684\u77ED\u885D\u76EE\u6A19\uFF08Sprint Goal\uFF09\u505A\u4E86\u90A3\u4E9B\u9032\u5EA6</li>\n          <li>\u4ECA\u5929\u6211\u6703\u5982\u4F55\u6E96\u5099\u4F86\u5E6B\u52A9\u5718\u968A\u9054\u5230\u77ED\u885D\u76EE\u6A19</li>\n          <li>\u904E\u7A0B\u4E2D\u6709\u9047\u5230\u4EC0\u9EBC\u554F\u984C\u3001\u96E3\u984C</li>\n        </ul><br>\n        \u900F\u904E\u5718\u968A\u5206\u4EAB\uFF0C\u8FFD\u8E64\u5927\u5BB6\u7684\u5DE5\u4F5C\u72C0\u6CC1\u3002"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn6.removeAttribute("disabled");
      }
    });
  }
}

function section14Start() {
  section13.classList.add("hidden");
  section14.classList.remove("hidden");

  if (section13.classList.contains("hidden")) {
    var typed15 = new Typed("#typed15", {
      strings: ["<span style=\"color: #ffac89\">\u77ED\u885D\u6AA2\u8996\u6703\u8B70 Sprint Review</span><br><br>\n        \u7528\u4F86\u6AA2\u8996\u8A72\u6B21\u77ED\u885D\u589E\u91CF\u7684\u6210\u679C\uFF0C\u4EE5\u8490\u96C6\u76F8\u95DC\u7684\u56DE\u994B\u6578\u64DA\u6216\u610F\u898B\u3002"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn7.removeAttribute("disabled");
      }
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
    var typed16 = new Typed("#typed16", {
      strings: ["<span style=\"color: #ffac89\">\u77ED\u885D\u81EA\u7701\u6703\u8B70 Sprint Retrospective</span><br><br>\n        \u5718\u968A\u5728\u81EA\u7701\u6703\u8B70\u88E1\uFF0C\u6703\u5171\u540C\u56DE\u9867\u8A72\u77ED\u885D\u6B77\u7A0B\u767C\u751F\u7684\u4E8B\u60C5\uFF1A<br>\n        <ul style=\"list-style: disc; margin-left: 1.7rem;\">\n          <li>\u597D\u7684\u5730\u65B9</li>\n          <li>\u53EF\u4EE5\u6539\u9032\u7684\u5730\u65B9</li>\n          <li>\u5982\u4F55\u7DAD\u6301\u6211\u5011\u5DF2\u6709\u7684\u6210\u529F\u7D93\u9A57</li>\n        </ul><br>\n        \u512A\u5316\u5DE5\u4F5C\u6D41\u7A0B\u3001\u8B93\u5718\u968A\u6709\u8B8A\u5F97\u66F4\u597D\u7684\u6A5F\u6703\u3002<br>\n        \u63A8\u85A6\u5DE5\u5177\uFF1AConfluence"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        startBtn4.removeAttribute("disabled");
      }
    });
  }
}

startBtn4.addEventListener("click", function () {
  section15.classList.add("hidden");
  section16.classList.remove("hidden");
});
var nextBtn4 = document.querySelector(".nextBtn4");
var okBtn4 = document.querySelector(".okBtn4");
var answerBlock3 = document.querySelector(".answerBlock3");
var wrongBlock3 = document.querySelector(".wrongBlock3");
var correctBlock3 = document.querySelector(".correctBlock3");
var dropBlock = document.querySelectorAll(".dropBlock");
var correctAnswer = 0;
dropBlock.forEach(function (item) {
  item.addEventListener("drop", function (e) {
    if (e.target.dataset.id === e.target.children[0].getAttribute("id")) {
      correctAnswer += 1;
    }

    doneBtn3.addEventListener("click", function () {
      if (correctAnswer >= 3) {
        answerBlock3.classList.remove("hidden");
        correctBlock3.classList.remove("hidden");
        wrongBlock3.classList.add("hidden");
        var typed18 = new Typed("#typed18", {
          strings: ["\u9019\u9EBC\u5FEB\u5C31\u5C0D Scrum \u77AD\u82E5\u6307\u638C\u4E86\uFF0C\u6211\u5C0D\u4F60\u522E\u76EE\u76F8\u770B\u4E86\u54E6\uFF01"],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete: function onComplete() {
            nextBtn4.removeAttribute("disabled");
          }
        });
        nextBtn4.addEventListener("click", function () {
          answerBlock3.classList.add("hidden");
          typed18.destroy();
          section17Start();
        });
      } else {
        answerBlock3.classList.remove("hidden");
        correctBlock3.classList.add("hidden");
        wrongBlock3.classList.remove("hidden");
        var typed17 = new Typed("#typed17", {
          strings: ["\u52A0\u628A\u52C1\u554A\u65B0\u4EBA\uFF01"],
          typeSpeed: 50,
          backSpeed: 0,
          smartBackspace: true,
          showCursor: false,
          onComplete: function onComplete() {
            okBtn4.removeAttribute("disabled");
          }
        });
        okBtn4.addEventListener("click", function () {
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
    var typed19 = new Typed("#typed19", {
      strings: ["\u54C7\u8CFD\u65B0\u4F86\u7684\uFF0C\u4F60\u771F\u7684\u5F88\u5E78\u904B\uFF0C<br>\n        \u4ECA\u5929\u525B\u597D\u662F\u958B\u767C B \u7D44\u7684 <span style=\"color: #ffac89\">Retro</span>\uFF0C\u4F60\u4E5F\u4F86\u898B\u8B58\u4E00\u4E0B\uFF0C\u770B\u770B Retro \u90FD\u8A72\u505A\u4E9B\u4EC0\u9EBC\u5427\uFF5E\uFF5E", "\u6211\u5011\u6703\u5728\u6703\u8B70\u88E1\u8ACB\u5718\u968A\u6210\u54E1\u63D0\u51FA\u54EA\u4E9B\u662F\u505A\u5F97\u597D\u7684\u5730\u65B9\u3001\u54EA\u4E9B\u53EF\u4EE5\u7E7C\u7E8C\u6539\u5584\u7684\u5730\u65B9\uFF1F\u4E26\u8A18\u9304\u5728<img src=\"./assets/images/confluence.svg\" alt=\"confluence\" class=\"px-3\" style=\"display: inline;\">\u4E2D\u3002Retro \u91CD\u9EDE\u5728\u65BC<span style=\"color: #ffac89\">\u300C\u6B63\u9762\u8868\u8FF0\u300D</span>\uFF0C\u4F60\u4E5F\u601D\u8003\u770B\u770B\uFF0C\u54EA\u4E00\u4E9B\u662F\u9069\u5408 Retro \u7684\u56DE\u994B\u5427\uFF5E\uFF5E"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn8.removeAttribute("disabled");
      }
    });
  }
}

continueBtn8.addEventListener("click", section18Start);

function section18Start() {
  section17.classList.add("hidden");
  section18.classList.remove("hidden");
}

doneBtn4.addEventListener("click", function () {
  var nextBtn5 = document.querySelector(".nextBtn5");
  var okBtn5 = document.querySelector(".okBtn5");
  var answerBlock4 = document.querySelector(".answerBlock4");
  var wrongBlock4 = document.querySelector(".wrongBlock4");
  var correctBlock4 = document.querySelector(".correctBlock4");
  var radio2 = document.querySelector("#radio2");
  var radio3 = document.querySelector("#radio3");

  if (radio2.checked && radio3.checked) {
    answerBlock4.classList.remove("hidden");
    correctBlock4.classList.remove("hidden");
    wrongBlock4.classList.add("hidden");
    var typed21 = new Typed("#typed21", {
      strings: ["\u4F60\u4E5F\u662F\u8A9E\u8A00\u7684\u85DD\u8853\u5BB6\u4E86\uFF5E\uFF5E"],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        nextBtn5.removeAttribute("disabled");
      }
    });
    nextBtn5.addEventListener("click", function () {
      answerBlock4.classList.add("hidden");
      typed21.destroy();
      section19Start();
    });
  } else {
    answerBlock4.classList.remove("hidden");
    correctBlock4.classList.add("hidden");
    wrongBlock4.classList.remove("hidden");
    var typed20 = new Typed("#typed20", {
      strings: ["......\u597D\u54E6\uFF0C\u8ACB\u518D\u8A66\u4E00\u6B21\u5427\uFF5E"],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        okBtn5.removeAttribute("disabled");
      }
    });
    okBtn5.addEventListener("click", function () {
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
    var typed22 = new Typed("#typed22", {
      strings: ["\u606D\u559C\u4F60\u901A\u904E Scrum \u65B0\u624B\u6751\uFF01 \u6B63\u5F0F\u52A0\u5165\u516D\u89D2\u5B78\u9662\u958B\u767C A \u7D44\u7684\u5927\u5BB6\u5EAD\uFF01\u9019\u662F\u4F60\u7684\u7D50\u696D\u8B49\u66F8\uFF1A"],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: false,
      onComplete: function onComplete() {
        continueBtn9.removeAttribute("disabled");
      }
    });
  }
}

continueBtn9.addEventListener("click", section20Start);

function section20Start() {
  section19.classList.add("hidden");
  section20.classList.remove("hidden");
  var nameTxt = document.querySelector(".nameTxt");
  var todayDate = document.querySelector(".todayDate");
  var photoHead = document.querySelector(".photoHead");
  var shadow1 = document.querySelector(".shadow1");
  var shadow2 = document.querySelector(".shadow2");

  if (shadow1.classList.contains("active")) {
    photoHead.setAttribute("src", "./assets/images/head1.svg");
  } else if (shadow2.classList.contains("active")) {
    photoHead.setAttribute("src", "./assets/images/head2.svg");
  } else {
    photoHead.setAttribute("src", "./assets/images/head1.svg");
  }

  nameTxt.textContent = "".concat(myName, " \u541B");
  var Today = new Date();
  todayDate.textContent = "".concat(Today.getFullYear(), " \u5E74 ").concat(Today.getMonth() + 1, " \u6708 ").concat(Today.getDate(), " \u65E5");
}
//# sourceMappingURL=all.js.map
