 function searchCard() {
      let input = document.getElementById("searchInput").value.toLowerCase();
      let container = document.getElementById("cardContainer");
      let cards = Array.from(container.getElementsByClassName("card"));

      let matched = [];
      let unmatched = [];

      cards.forEach(card => {
        let address = card.querySelector(".address").innerText.toLowerCase();
        let details = card.querySelector(".details").innerText.toLowerCase();

        // Check if search matches address or pin code
        if ((address.includes(input) || details.includes(input)) && input !== "") {
          matched.push(card);
        } else {
          unmatched.push(card);
        }
      });

      // Clear and re-append cards
      container.innerHTML = "";
      matched.forEach(card => container.appendChild(card));
      unmatched.forEach(card => container.appendChild(card));
    }