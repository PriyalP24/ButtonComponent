import * as React from "react";
import {withStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {CONSTANTS} from "../js/utils/constants";
import variables from "../scss/abstracts/variables.scss";
import PropTypes from 'prop-types';

const style = theme => ({
    commonBtnStyle: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: 'normal',
        borderRadius: variables.flowBuilderBorderRadius,
        textTransform: 'capitalize',
        fontFamily: process.env.THEME_FONT_FAMILY_BOOK,
        transition: 'all 0.3s'
    },
    longButton: {
        background: process.env.THEME_COLOR,
        color: "#2A7CFF",
        // color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR + ' !important',
        // border: 'none',
        border: '1px solid #2A7CFF',
        '&:hover': {
            background: process.env.THEME_HOVER_COLOR
        },
        '&:disabled': {
            background: process.env.THEME_DISABLED_BACKGROUND_COLOR,
            border: 'none',
            color: process.env.THEME_DISABLED_COLOR + ' !important'
        }
    },
    shortButton: {
        padding: '0px 15px',
        height: "36px",
        background: process.env.THEME_COLOR,
        color: '#2A7CFF',
        // color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        border: '1px solid #2A7CFF',
        '&:hover': {
            background: process.env.THEME_HOVER_COLOR
        },
        '&:disabled': {
            background: process.env.THEME_DISABLED_BACKGROUND_COLOR,
            border: 'none',
            color: process.env.THEME_DISABLED_COLOR
        }
    },
    alertButton: {
        padding: '0px 15px',
        height: "36px",
        background: '#ff0000',
        color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        border: 'none',
        '&:hover': {
            background: '#ec0000'
        },
        '&:disabled': {
            background: process.env.THEME_DISABLED_BACKGROUND_COLOR,
            border: 'none',
            color: process.env.THEME_DISABLED_COLOR
        }
    },
    outlinedButton: {
        padding: '0px 15px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: process.env.THEME_COLOR,
        border: '1px solid ' + process.env.THEME_COLOR,
        '&:hover': {
            color: process.env.THEME_COLOR,
            background: process.env.THEME_HOVER_LIGHT_COLOR
        },
        '&:disabled': {
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
            border: 'solid 1px #e8e9ef',
            color: process.env.THEME_DISABLED_COLOR
        },
        '&:active':{
            background: process.env.THEME_HOVER_COLOR,
            border: '1px solid'+ process.env.THEME_COLOR,
            color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        }
    },
    linkButton: {
        padding: '0',
        margin: '11px 0',
        minWidth: 'initial',
        minHeight: 'initial',
        background: 'transparent',
        color: process.env.THEME_COLOR,
        border: 'none',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            background: 'transparent'
        },
        '&:active': {
            textDecoration: 'underline',
            background: 'transparent'
        },
        '&:disabled': {
            textDecoration: 'none',
            background: 'transparent',
            color: process.env.THEME_DISABLED_COLOR
        }
    },
    deleteButton: {
        padding: '0px 11px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: '#ff0000',
        border: '1px solid #ff0000',
        '&:hover': {
            color: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
            background: '#ff0000',
            '& span img': {
                opacity: '1'
            }
        },
        '&:disabled': {
            background: process.env.THEME_DISABLED_BACKGROUND_COLOR,
            border: 'none',
            color: process.env.THEME_DISABLED_COLOR
        }
    },
    lineButton: {
        padding: '0px 50px',
        height: "36px",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: '#919ba0',
        border: 'dashed 1px #bdc4c8',
        '&:hover': {
            color: process.env.THEME_HOVER_COLOR,
            border: 'dashed 1px ' + process.env.THEME_HOVER_COLOR,
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        },
        '&:disabled': {
            border: 'dashed 1px #e8e9ef',
            color: process.env.THEME_DISABLED_COLOR,
            background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR
        }
    },
    iconButton: {
        padding: '0px 13px 0 7px',
        height: "auto",
        background: CONSTANTS.FLOW_BUILDER_NORMAL_BACKGROUND_COLOR,
        color: process.env.THEME_COLOR,
        border: '1px solid ' + process.env.THEME_COLOR,
        '&:hover': {
            color: process.env.THEME_COLOR,
            background: process.env.THEME_INPUT_BOX_SHADOW
        },
        '&:disabled': {
            background: process.env.THEME_COLOR,
            border: 'solid 1px #e8e9ef',
            color: process.env.THEME_DISABLED_COLOR
        }
    }
});

class ButtonComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    getButtonStyle(classes) {
        switch (this.props.type) {
            case "default":
                return classNames(classes.commonBtnStyle);
            case "long":
                return classNames(classes.longButton);
            case "short":
                return classNames(classes.shortButton);
            case "alert":
                return classNames(classes.alertButton);
            case "outlined":
                return classNames(classes.outlinedButton);
            case "link":
                return classNames(classes.linkButton);
            case "delete":
                return classNames(classes.deleteButton);
            case "line":
                return classNames(classes.lineButton);
            case "icon":
                return classNames(classes.iconButton);
            default:
                break;
        }
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Button
                    disabled={this.props.disabled}
                    className={this.getButtonStyle(classes) + ' ' + classNames(classes.commonBtnStyle)}
                    variant={this.props.variant}
                    onClick={this.props.handleClick}
                    onFocus={this.props.handleInputFocus} 
                    onBlur={this.props.handleInputBlur}
                    // buttonRef={ref => this.props.addRef(ref)}
                    fullWidth={this.props.fullWidth}
                    disableRipple={this.props.type === "link"}>
                        <span className={this.props.icon}
                    style={this.props.type === "icon" ? {display: 'block', height: '24px', width: '24px', paddingTop: '4px', fontSize: '16px'} : {display: 'none'}}/>
                        {this.props.type === "icon" ? <span style={{padding: "2px 0 0 8px"}}>{this.props.btnText}</span> : this.props.btnText}
                </Button>
            </div>
        );
    }
}

ButtonComponent.propTypes = {
    Type: PropTypes.oneOf(['long', 'Short', 'alert','Outlined','Link','Delete','Line','Icon']),
  };
ButtonComponent.defaultProps = {
    Type: 'Outlined',
}; 

export  default withStyles(style)(ButtonComponent);