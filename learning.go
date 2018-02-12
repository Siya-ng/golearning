package main

import (
	"strings"
	"fmt"
  "bufio"
  "os"
)

func WordCount(s string) map[string]int {
    a := strings.Split(s, " ")
	m := make(map[string]int)
	for _, v := range a {
	   _, ok := m[v]

	  if ok {
	  m[v] +=1
	  } else {
	   m[v] = 1
	  }
	 }

	 fmt.Println(m)
	 return m
}



func main() {
  reader := bufio.NewReader(os.Stdin)
  fmt.Print("Enter text: ")
  text, _ := reader.ReadString('\n')
  fmt.Println(text)

	WordCount(text)

}
