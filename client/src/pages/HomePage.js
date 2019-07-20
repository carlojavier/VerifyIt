import React from "react";
import TextField from "@material-ui/core/TextField";
import MediaCard from "./ArticlePage";

const HomePage = ({ MediaCard }) => (
  <>
    <div className="text-container">
      <h1>Welcome to Verify It</h1>
      <p>
        That other text? Sadly, it’s no longer a 10. You know, it really doesn’t
        matter what you write as long as you’ve got a young, and beautiful,
        piece of text. My text is long and beautiful, as, it has been well
        documented, are various other parts of my website.
      </p>

      <div className="URL-form">
        <form>
          <TextField
            id="filled-full-width"
            style={{ margin: 8 }}
            placeholder="Enter URL..."
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </div>
    </div>
    <div>{MediaCard}</div>
  </>
);

export default HomePage;
