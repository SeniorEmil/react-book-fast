import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';


export default class ContinuousSlider extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            value: 30,
        }
    }


    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    };

    render() {

        const root = {
            width: 200,
        }

        return (
            <div className="class" style={root}>
                <Typography id="continuous-slider" gutterBottom>
                    Volume
      </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider value={this.state.value} onChange={this.handleChange} aria-labelledby="continuous-slider" />
                    </Grid>
                    <Grid item>
                        <VolumeUp onClick={() => {
                            this.setState({
                                value: this.state.value + 1
                            })
                        }} />
                    </Grid>
                </Grid>
                <Typography id="continuous-slider" gutterBottom>
                    {this.state.value}
                </Typography>
            </div>
        )
    }
}