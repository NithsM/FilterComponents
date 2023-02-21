import * as React from 'react';
import { styled, Typography, Button, Menu, MenuItem } from '@mui/material';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));



function FilterTags() {

    const [search, setSearch] = useState(null);
    const [state,setState] = useState('')

    const open = Boolean(search)
    const handleClick = (event) => {
        setSearch(event.currentTarget)
    }
    const handleClose = () => {
        setSearch(null);
    };

    const [chipData, setChipData] = useState([
        { key: 0, label: 'B.Tech' },
        { key: 1, label: 'M.Tech' },
        { key: 2, label: 'B.Com' },
        { key: 3, label: 'M.Sc' },
        { key: 4, label: 'EEE' },
        { key: 5, label: 'ECE' }, 


    ]);

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

    const handleUpdate = (chipToUpdate) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key  === chipToUpdate.key));
    };
   
    state = { checked: {} };

   const onSelectedChange = index => {
      this.setState(previousState => ({
        checked: {
          ...previousState.checked,
          [index]: !previousState.checked[index]
        }
      }));
    };
    

    return (



        <div>
            {/* <Typography sx={{  fontSize: '20px', display: { xs: "flex", md: 'none' } }}>
                Select Course
            </Typography>

            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {
                chipData.map((data) => {


                    return (
                        <div>
                        <ListItem key={data.key}>
                            <Chip
                               
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>

                        <ListItem key={data.key}>
                            <Chip
                               
                                label={data.label}
                                onUpdate={data.label === 'React' ? undefined :handleUpdate(data)}
                            />
                        </ListItem>

                        </div>

                    );
                })}
            </Paper>

            <Button
                id='resources-button1' onClick={handleClick}
                aria-control={open ? 'resources-menu1' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}>
                search Filter
                <ArrowDropDownIcon/>
                
            </Button>

            <Menu
                id='resources-menu1'
                anchorEl={search}
                open={open}
                MenuListProps={{
                    "aria-labelledby": 'resources-button1',
                }}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>M.Tech<Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>B.Tech <Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>M.Sc <Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>EEE<Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>Viscom<Checkbox/></MenuItem>

            </Menu>


 */}








            <Typography sx={{ marginTop: '100px', fontSize: '20px', display: { xs: "none", md: 'flex' } }}>
                Select Course
            </Typography>

            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {


                    return (
                        <div>
                        <ListItem key={data.key}>
                            <Chip
                               
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                            />
                        </ListItem>

                        
                        
                        </div>
                    );
                })}
            </Paper>

            <Button
                id='resources-button1' onClick={handleClick}
                aria-control={open ? 'resources-menu1' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}>
                search Filter
                <ArrowDropDownIcon/>
            </Button>

            <Menu
                id='resources-menu1'
                anchorEl={search}
                open={open}
                MenuListProps={{
                    "aria-labelledby": 'resources-button1',
                }}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>M.Tech<Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>B.Tech <Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>M.Sc <Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>Music<Checkbox/></MenuItem>
                <MenuItem onClick={handleClose}>Viscom<Checkbox/></MenuItem>

            </Menu>



        </div>
    );
}

export default FilterTags
           