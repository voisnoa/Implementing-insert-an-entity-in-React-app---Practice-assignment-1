import "./AddBook.css";

const AddBook = () => { 

  return (
    <div>
      <h2>Add a New Book</h2>
      <form>
        <label>Title:</label>
        <input type="text" name="title" required />

        <label>Author:</label>
        <input type="text" name="author" required />

        <label>Description:</label>
        <textarea name="description" required></textarea>

        <label>Cover Image URL:</label>
        <input type="url" name="cover" required />

        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default AddBook;