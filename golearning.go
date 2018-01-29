package main

import (
 "net/http"
 "html/template"
)


type indexPage struct {
  Title string
}
func indexHandler(w http.ResponseWriter, r *http.Request) {
  p := indexPage{Title: "Find the top ten most-used words"}
  t, _:= template.ParseFiles("index.html")
  t.Execute(w, p)
}

func main() {
  http.HandleFunc("/", indexHandler)
  http.ListenAndServe(":8000", nil)
}
