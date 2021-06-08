import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function RadioTemp(props) {
    return (
        <FormControlLabel 
        value={props.value}
        control={<Radio color={props.color}/>} 
        label={props.label} />
    )
}

export default RadioTemp;