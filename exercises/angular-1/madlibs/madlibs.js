angular.module("codehouse").component("madlibs", {
  templateUrl: "madlibs/madlibs.html",
  controller: function() {
    this.word = "";
    this.wordTwo = "";
    this.changeWord = function() {
      this.wordTwo = "New Wordswordswords";
    }
  }
})
