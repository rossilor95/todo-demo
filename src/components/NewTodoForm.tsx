import React from "react";
import { Button, Stack, TextField } from "@mui/material";

const NewTodoForm = () => (
    <Stack mt={10} mb={3} spacing={3}>
        <TextField id="assigned-textfield" label="Assigned" variant="outlined" />
        <TextField id="description-textfield" label="Description" variant="outlined" multiline rows={4} />
        <Stack flexDirection="row">
            <Button variant="contained">
                Add todo
            </Button>
        </Stack>
    </Stack>
)

export default NewTodoForm;