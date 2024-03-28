import React, { useState } from 'react';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    IconButton,
    Tooltip,
} from '@mui/material';
import './TicketRaiseForm.css';
import { Link } from 'react-router-dom';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LinkIcon from '@mui/icons-material/Link';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import CodeIcon from '@mui/icons-material/Code';
import ClearIcon from '@mui/icons-material/Clear';
import DOMPurify from 'dompurify';

export const TicketRaiseForm = () => {
    const [description, setDescription] = useState('');

    

    const handleBold = () => {
        setDescription(prevDesc => prevDesc.toUpperCase());
    };

    const handleItalic = () => {
        setDescription(prevDesc => prevDesc + "<em></em>");
    };

    const handleUnderline = () => {
        setDescription(prevDesc => prevDesc + "<u></u>");
    };

    const handleOrderedList = () => {
        setDescription(prevDesc => prevDesc + "<ol>\n<li></li>\n</ol>");
    };

    const handleUnorderedList = () => {
        setDescription(prevDesc => prevDesc + "<ul>\n<li></li>\n</ul>");
    };

    const handleInsertLink = () => {
        setDescription(prevDesc => prevDesc + "<a href=''></a>");
    };

    const handleInsertImage = () => {
        setDescription(prevDesc => prevDesc + "<img src='' alt=''/>");
    };

    const handleInsertTable = () => {
        setDescription(prevDesc => prevDesc + "<table>\n<tr>\n<td></td>\n</tr>\n</table>");
    };

    const handleInsertCode = () => {
        setDescription(prevDesc => prevDesc + "<code></code>");
    };

    const handleClearForm = () => {
        setDescription('');
    };
    DOMPurify.sanitize(description)


    return (
        <form className="form">
            <Typography variant="h5" gutterBottom>
                Ticket Form
            </Typography>
            <label>Contact</label>
            <TextField
                className="textField"
                size="small"
                required
                fullWidth
                // label="Contact"
                // variant="outlined"
            />
            <br></br>
            <br></br>

            <label>Subject</label>

            <TextField
                className="textField"
                size="small"
                required

                fullWidth
                // label="Subject"
                // variant="outlined"
            />
            <br></br>
            <br></br>

            <label>Type</label>

            <FormControl
                // variant="outlined"
                size="small"
                required
                fullWidth
                className="textField"
            >
                {/* <InputLabel>Type</InputLabel> */}
                <Select label="Type">
                    <MenuItem value="Question">Question</MenuItem>
                    <MenuItem value="Incident">Incident</MenuItem>
                    <MenuItem value="Problem">Problem</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            <br></br>

            <label>Status</label>

            <FormControl
                // variant="outlined"
                size="small"
                required
                fullWidth
                className="textField"
            >
                {/* <InputLabel>Status</InputLabel> */}
                <Select label="Status">
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Resolved">Resolved</MenuItem>
                    <MenuItem value="Closed">Closed</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            <br></br>

            <label>Priority</label>

            <FormControl
                // variant="outlined"
                size="small"
                required
                fullWidth
                className="textField"
            >
                {/* <InputLabel>Priority</InputLabel> */}
                <Select label="Priority">
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Urgent">Urgent</MenuItem>
                </Select>
            </FormControl>
            <br></br>
            <br></br>

            <label>Description</label>

            <TextField
                className="textField"
                size="small"
                
                required
                fullWidth
                // label="Description"
                multiline
                rows={4}
                // variant="outlined"
                value={DOMPurify.sanitize(description)}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div className="buttonGroup">
                <IconButton onClick={handleBold} title="Bold">
                    <FormatBoldIcon />
                </IconButton>
                <IconButton onClick={handleItalic} title="Italic">
                    <FormatItalicIcon />
                </IconButton>
                <IconButton onClick={handleUnderline} title="Underline">
                    <FormatUnderlinedIcon />
                </IconButton>
                <IconButton onClick={handleOrderedList} title="Ordered List">
                    <FormatListNumberedIcon />
                </IconButton>
                <IconButton onClick={handleUnorderedList} title="Unordered List">
                    <FormatListBulletedIcon />
                </IconButton>
                <IconButton onClick={handleInsertLink} title="Insert Link">
                    <LinkIcon />
                </IconButton>
                <IconButton onClick={handleInsertImage} title="Insert Image">
                    <InsertPhotoIcon />
                </IconButton>
                <IconButton onClick={handleInsertTable} title="Insert Table">
                    <BorderAllIcon />
                </IconButton>
                <IconButton onClick={handleInsertCode} title="Insert Code">
                    <CodeIcon />
                </IconButton>
                <IconButton onClick={handleClearForm} title="Clear Form">
                    <ClearIcon />
                </IconButton>
                {/* <IconButton onClick={handleAlignLeft} title="Align Left">
                    <FormatAlignLeftIcon />
                </IconButton> */}
            </div>
            <div className="buttonGroup">
                <Link to="/">
                    <Button variant="outlined" color="secondary">
                        Cancel
                    </Button>
                </Link>

                <Button variant="contained" color="primary" style={{ marginLeft: "8px" }}>
                    Create
                </Button>
            </div>
        </form>
    );
};
