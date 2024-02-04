<script>
      var emptyMessage = document.getElementById("empty-list");

      function addNote() {
        var inp = document.getElementById("inp").value;

        // Create the note div
        var notebox = document.createElement("div");
        notebox.innerHTML =
          inp +
          '<span class="close-button" onclick="removeNote(this)">✖</span>';
        notebox.className = "note";

        // Append the note to the list div
        var list = document.getElementById("list");
        list.appendChild(notebox);

        // Hide the "empty list" message if notes exist
        emptyMessage.style.display = "none";

        // Clear the input field
        document.getElementById("inp").value = "";
      }

      function removeNote(element) {
        var list = document.getElementById("list");
        list.removeChild(element.parentNode);

        // Show the "empty list" message if there are no more notes
        emptyMessage.style.display =
          list.children.length > 0 ? "none" : "block";
      }
    </script>
