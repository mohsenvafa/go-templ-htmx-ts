package userprofile

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	user := User{
		ID:     1,
		Name:   "John Doe",
		Email:  "john.doe@example.com",
		Phone:  "+1 (555) 123-4567",
		Bio:    "Software developer with 5+ years of experience in Go and web development.",
		Avatar: "https://via.placeholder.com/150x150/4F46E5/FFFFFF?text=JD",
	}

	component := UserProfile(user)
	component.Render(r.Context(), w)
}
