package main

import (
	"log"
	"net/http"

	"ts-go/components/index"
	useraddress "ts-go/components/user-address"
	userprofile "ts-go/components/user-profile"

	"github.com/gorilla/mux"
)

func main() {
	// Create router
	r := mux.NewRouter()

	// Static files
	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("./static/"))))

	// Routes
	r.HandleFunc("/", index.Handler).Methods("GET")
	r.HandleFunc("/user-profile", userprofile.Handler).Methods("GET")
	r.HandleFunc("/user-address", useraddress.Handler).Methods("GET")

	log.Println("Server starting on :8081")
	log.Fatal(http.ListenAndServe(":8081", r))
}
