import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './button.component';
import { withKnobs, text, boolean,select,radios } from "@storybook/addon-knobs";


export default {
  title: 'Button',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
  // includedStories: [],
  component:Button  
};

const label='Type';
const options = {
  long:'long',
  short:'short',
  alert:'alert',
  outlined:'outlined',
  link:'link',
  delete:'delete',
  line:'line',
  icon:'icon'
}
const variant_options = {
  contained: 'contained',
  outlined: 'outlined'
}
const variant_default='contained';
const defaultValue='long';
const variant_default1='outlined';
const long_button_fullwidth_default=true;
const short_button_fullwidth_default=false;

export const Long = () => (<Button disabled={boolean("Disabled", false)} 
                                      variant={radios('Variant',variant_options,variant_default)} 
                                      fullWidth={boolean("fullWidth",long_button_fullwidth_default)} 
                                      disableRipple={boolean("disableRipple", false)} 
                                      type={select('Type',options,'long')}
                                      handleClick={action('onClick')} 
                                      handleInputFocus={action('onFocus')}  
                                      handleInputBlur={action('onBlur')} 
                                      btnText={text("label",'Long')}/>);


export const Short = () => (<Button  disabled={boolean('disable',false)} 
                                          type={select('Type',options,defaultValue)}
                                          fullwidth={boolean('fullwidth',short_button_fullwidth_default)}
                                          handleClick={action('Short button clicked')}
                                          handleInputFocus={action('onFocus')}
                                          handleInputBlur={action('onBlur')}
                                          btnText={text("label","Short")}
                                          disableRipple={boolean("disableRipple", true)} ></Button>
                                          );




const Alert_Default='alert';
export const Alert = () => (<Button 
                            disabled={boolean("Disabled", false)}
                            type={select('Type',options,Alert_Default)}
                            handleClick={action('Alert button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Alert")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={radios('Variant',variant_options,variant_default1)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>);

export const outlined = () => (<Button 
                            disabled={boolean("Disabled", false)}
                            type={select('Type',options,'Outlined')}
                            handleClick={action('outlined button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Outlined")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={radios('Variant',variant_options,variant_default1)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>);

export const Link = () => (<Button 
                            disabled={boolean("Disabled", false)}
                            type={select('Type',options,'Link')}
                            handleClick={action('Link button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Link")}
                            // varian={radios('Variant',variant_options,variant_default1)}
                            fullWidth={boolean("fullWidth", false)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>);

export const Delete = () => (<Button 
                            disabled={boolean("Disabled", false)}
                            type={select('Type',options,'Delete')}
                            handleClick={action('Delete button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","Delete")}
                            fullWidth={boolean("fullWidth", false)}
                            varian={radios('Variant',variant_options,variant_default1)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>);
                        
export const Line = () => (<Button 
                        disabled={boolean("Disabled", false)}
                        type={select('Type',options,'Line')}
                        handleClick={action('Line button clicked')}
                        handleInputFocus={action('onFocus')}
                        handleInputBlur={action('onBlur')}
                        btnText={text("label","Line")}
                        fullWidth={boolean("fullWidth", false)}
                        variant={radios('Variant',variant_options,variant_default1)}
                        disableRipple={boolean("disableRipple", true)}>
                    </Button> );  

export const Icon = () => (<Button 
                            disabled={boolean("Disabled", false)}
                            type={select('Type',options,'Icon')}
                            handleClick={action('Icon button clicked')}
                            handleInputFocus={action('onFocus')}
                            handleInputBlur={action('onBlur')}
                            btnText={text("label","😎text")}
                            fullWidth={boolean("fullWidth", false)}
                            variant={radios('Variant',variant_options,variant_default1)}
                            disableRipple={boolean("disableRipple", true)}>
                        </Button>);                      