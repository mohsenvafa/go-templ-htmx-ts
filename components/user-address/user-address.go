package useraddress

import (
	"net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	addresses := []Address{
		{
			ID:        1,
			Street:    "123 Main Street",
			City:      "San Francisco",
			State:     "CA",
			ZipCode:   "94105",
			Country:   "United States",
			IsDefault: true,
		},
		{
			ID:        2,
			Street:    "456 Oak Avenue",
			City:      "New York",
			State:     "NY",
			ZipCode:   "10001",
			Country:   "United States",
			IsDefault: false,
		},
	}

	component := UserAddress(addresses)
	component.Render(r.Context(), w)
}
