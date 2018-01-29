$(function(){
  const $inputText = $(".inputText")
  const $submitBtn = $(".submitBtn")
  const $result = $(".result")
  function countWord(text) {
    var textArray = text.toLowerCase().split(" ")
    var wordCounts = {}
    textArray.forEach(function(word){
      if (wordCounts[word]) {
        wordCounts[word] += 1
      } else {
        wordCounts[word] = 1
      }
    })
    let wordCountSorted = Object.keys(wordCounts).sort(function(a,b){
      return wordCounts[b]- wordCounts[a]
    })
    let topTenWord = []
    var $resultList = $("<ol>")
    for (var i = 0; i < 10; i++) {
      var $newListItem = $("<li>")
      $newListItem.text(`${wordCountSorted[i]} : ${wordCounts[wordCountSorted[i]]} `)

      // $newListItem.val() = `${wordCountSorted[i]} : ${wordCounts[wordCountSorted[i]]} `
      $resultList.append($newListItem)
    }
    $result.append($resultList)


  }

  $submitBtn.on("click", function(){
    countWord($inputText.val())
    $inputText.val("")
  })


})
