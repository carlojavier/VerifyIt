import React, {useState, useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function CreateNewAnnotation(prop,{ params }) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    category: "cate",
    content: "hai"
  });

  const [page, setPage] = React.useState(1);

  const [state, setState] = React.useState({
    annotation : {},
    page: 1
  })
  // useEffect(() => {
    
  // },[])

  function submitAnnotationHandler(){
    getSelectedText()
  }
  
  function getSelectedText() {
  
    const sel = document.getSelection();
    // console.log("SEL:",prop.selected)

    setHighlight(sel);
  }
  
  function setHighlight(sel) {
    const annotation = {}
    annotation.anchorId = parseInt(sel.anchorNode.parentNode.id);
    annotation.focusId = parseInt(sel.focusNode.parentNode.id);
    annotation.category = values.category
    console.log("CATEGORY:------------------", values.category)
    annotation.user_id = 0
    annotation.content = values.content
    console.log("CONTETN:------------------", values.content)

    annotation.point = 0

    setState({annotation: annotation, page: 2})

    if (annotation.focusId < annotation.anchorId) {
      let tempId = annotation.focusId;
      annotation.focusId = annotation.anchorId;
      annotation.anchorId = tempId;
    }
  
    const range = annotation.focusId - annotation.anchorId;
  
    for (let i = 0; i <= range; i++) {
      document.getElementById(annotation.anchorId + i).classList.add("blue");
      // document.getElementById(annotation.anchorId + i).classList.add(params.id);
    }
    // sendReq(annotation)
    
    // prop.keepNewOpen(true)
  }

  function handleChange(event) {
    setValues({
      category: event.target.value,
      content: values.content
    });
    console.log("category: ",values.category, "|| content: ", values.content)
  }
  
  function handleAnnChange(event) {
    setValues({
      content: event.target.value,
      category: values.category
    });
  }

  function sendReq(annotation){
    console.log(annotation)
    Axios.post(`/api/articles/${prop.params.id}/annotations`, { annotation })
      .then(res => {
        // console.log("New annotation response: ",res);
        // console.log(res.data);
        completeAnnotation(annotation, res)
      })
  }

  function completeAnnotation(annotation, res) {
    const range = annotation.focusId - annotation.anchorId;
  
    for (let i = 0; i <= range; i++) {
      document.getElementById(annotation.anchorId + i).classList.add("pink");
      document.getElementById(annotation.anchorId + i).setAttribute('annotation_id', res.data.id);
    }

    setState({page: 0})
    // prop.keepNewOpen(false)
  }

  return (
    <>
      {state.page === 1 && <Paper className="annotation-container">
        <Typography variant="h5" component="h5">
          Hightlighted Text
        </Typography>
        <Typography variant="h6" component="h6">
          UserName
        </Typography>

        <form className={classes.root} autoComplete="off">
          <FormControl required className={classes.formControl}>
            <InputLabel htmlFor="criteria-required">Criteria</InputLabel>
            <Select
              value={values.category}
              onChange={handleChange}
              name="category"
              inputProps={{
                id: "age-required"
              }}
              className={classes.selectEmpty}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="The source is unreliable">
                The source is unreliable
              </MenuItem>
              <MenuItem value="The author is not credible">
                The author is not credible
              </MenuItem>
              <MenuItem value="The article is biased">
                The article is biased
              </MenuItem>
              <MenuItem value="There are no supporting sources">
                There are no supporting sources
              </MenuItem>
              <MenuItem value="There are no citations">
                There are no citations
              </MenuItem>
            </Select>
            <FormHelperText>Required</FormHelperText>
          </FormControl>
          {/* <TextField
            onChange={handleAnnChange}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Why do you think so?"
            multiline
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          /> */}
          <Button
            onClick={submitAnnotationHandler}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Next
          </Button>
        </form>
      </Paper>}
    
      {state.page === 2 && <Paper className="annotation-container">
        <Typography variant="h5" component="h5">
          Hightlighted Text
        </Typography>
        <Typography variant="h6" component="h6">
          UserName
        </Typography>

        <form className={classes.root} autoComplete="off">
          <TextField
            onChange={handleAnnChange}
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Why do you think so?"
            multiline
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button
            onClick={() => {sendReq(state.annotation)}}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </form>
      </Paper>}
    </>
  );
}
