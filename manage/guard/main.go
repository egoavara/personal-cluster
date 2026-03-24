package main

import (
	"os"

	"github.com/egoavara/personal-cluster/manage/guard/cmd"
)

func main() {
	if err := cmd.Execute(); err != nil {
		os.Exit(1)
	}
}
