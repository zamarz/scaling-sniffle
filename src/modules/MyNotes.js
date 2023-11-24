import $ from "jquery";

class MyNotes {
  constructor() {
    this.events();
  }

  events() {
    $(".delete-note").on("click", this.deleteNote);
  }

  //Methods to go here
  deleteNote() {
    alert("You clicked delete!");
  }
}

export default MyNotes;
