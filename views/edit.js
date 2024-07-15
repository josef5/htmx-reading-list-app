const createEditFormTemplate = (book) => /*html*/ `
  <form hx-put="/books/${book.id}" hx-target="closest li" hx-swap="outerHTML">
    <input 
      type="text" 
      name="title" 
      placeholder="Title" 
      value="${book.title}" 
      required
    >
    <input 
      type="text" 
      name="author" 
      placeholder="Author" 
      value="${book.author}" 
      required
    >
    <button type="submit">Confirm</button>
  </form>
`;

export default createEditFormTemplate;
