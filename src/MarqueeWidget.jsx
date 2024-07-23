import { Component, createElement } from "react";

export default class MarqueeWidget extends Component {
    render() {
        return (
            <div>
                <marquee direction="up"> { text }This text will scroll from bottom to top</marquee>
            </div>
        );
    }
}




// import { Component, createElement } from "react";

// import { BadgeSample } from "./components/BadgeSample";
// import "./ui/MarqueeWidget.css";

// export class MarqueeWidget extends Component {
//     constructor(props) {
//         super(props);

//         this.onClickHandler = this.onClick.bind(this);
//     }

//     render() {
//         return (
//             <BadgeSample
//                 type={this.props.marqueewidgetType}
//                 bootstrapStyle={this.props.bootstrapStyle}
//                 className={this.props.class}
//                 clickable={!!this.props.onClickAction}
//                 defaultValue={this.props.marqueewidgetValue ? this.props.marqueewidgetValue : ""}
//                 onClickAction={this.onClickHandler}
//                 style={this.props.style}
//                 value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""}
//             />
//         );
//     }

//     onClick() {
//         if (this.props.onClickAction && this.props.onClickAction.canExecute) {
//             this.props.onClickAction.execute();
//         }
//     }
// }
