import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './button.component';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
import icon from '../../src/images.png';

export default {
  title: 'Button',
  parameters: {
    component: Button,
    componentSubtitle: 'Documentation of the Button React component',
  },
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  
};



export const Long = () => <Button disabled={boolean("Disabled", false)} variant={text("variant","outlined")} fullWidth={boolean("fullWidth", false)} disableRipple={boolean("disableRipple", false)} type={text("Type", 'long')} handleClick={action('onClick')} handleInputFocus={action('onFocus')}  handleInputBlur={action('onBlur')} btnText={text("label",'Long')}/>;

export const Short = () => (
        <Button  disabled={boolean("Disabled", false)} type={text("Type", "short")}
                handleClick={action('Short button clicked')}
                handleInputFocus={action('onFocus')}
                handleInputBlur={action('onBlur')}
                btnText={text("label","Short")}
                variant={text("variant","outlined")}
                disableRipple={boolean("disableRipple", true)} />
                ); 

export const Alert = () => <Button 
                            disabled={boolean("Disabled", false)}
                            type={text("Type", "alert")}
                            handleClick={action('Alert button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Alert")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={text("variant","outlined")}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>

export const outlined = () => <Button 
                            disabled={boolean("Disabled", false)}
                            type={text("Type", "outlined")}
                            handleClick={action('outlined button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Outlined")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={text("variant","outlined")}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>

export const Link = () => <Button 
                            disabled={boolean("Disabled", false)}
                            type={text("Type", "link")}
                            handleClick={action('Link button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Link")}
                            variant={text("variant","outlined")}
                            fullWidth={boolean("fullWidth", false)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>

export const Delete = () => <Button 
                            disabled={boolean("Disabled", false)}
                            type={text("Type", "delete")}
                            handleClick={action('Delete button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Delete")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={text("variant","outlined")}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>
                        
export const Line = () => <Button 
                        disabled={boolean("Disabled", false)}
                        type={text("Type", "line")}
                        handleClick={action('Line button clicked')}
                        handleInputFocus={action('onFocus')}
                        handleInputBlur={action('onBlur')}
                        btnText={text("label","Line")}
                        fullWidth={boolean("fullWidth", false)}
                        variant={text("variant","outlined")}
                        disableRipple={boolean("disableRipple", true)}>
                    </Button>   

export const Icon = () => <Button 
                            disabled={boolean("Disabled", false)}
                            type={text("Type", "icon")}
                            handleClick={action('Icon button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label",(<ThreeSixtyIcon/> + " text"))}
                            fullWidth={boolean("fullWidth", false)}
                            variant={text("variant","outlined")}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>                      