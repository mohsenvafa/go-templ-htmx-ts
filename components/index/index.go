package index

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	component := IndexPage()
	component.Render(r.Context(), w)
}
