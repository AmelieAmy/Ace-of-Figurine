import React, {useState} from 'react';

import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#FAF3EE',
        defaultExpanded: 'true',
        expanded: 'true',
    },
    heading: {
        flexShrink: 0,
    },
}));

const AsideFilters = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(true);

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // const [state, setState] = React.useState({
    //   checkedA: true,
    // });
  
    // const handleCheckBoxChange = (event) => {
    //   setState({ ...state, [event.target.name]: event.target.checked });
    // };
    
    return (
        <AsideFiltersStyle className="aFilters">
            <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <h3 className={classes.heading}>Catégorie</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Pâtes à modeler"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Argiles"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Tours"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Outils de modelage"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Peintures"
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon />} checkedIcon={<RadioButtonCheckedIcon />} name="checkedH" />}
                            label="Tutos"
                        />
                        <a href="/">+ Voir plus</a>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <h3 className={classes.heading}>Marque</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                        diam eros in elit. Pellentesque convallis laoreet laoreet.
                        </p>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <h3 className={classes.heading}>Gamme de prix</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p>
                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                        vitae egestas augue. Duis vel est augue.
                        </p>
                    </AccordionDetails>
                    </Accordion>
            </div>
        </AsideFiltersStyle>
    )
}

export default AsideFilters;


const AsideFiltersStyle = styled.div`

    .MuiAccordionDetails-root
    {
        flex-direction: column;
    }

    a
    {
        text-align: left;
        text-decoration: underline;
        margin: 10px 0px 0px 30px;
        font-weight: bold;
    }

`;