import React from 'react';

class DemoChaningForm extends React.Component {
    state = {
        fontSize: '',
        textColor: '',
        bgColor: '',
        activeButton: null
    };

    testElementRef = React.createRef();
    switchInteraction = (type) => {
        // Xử lý khi nút được chọn
        this.setState({ activeButton: type });
        // Hiển thị ô tương tác
        this.createBox(type);
    };

    createBox = (type) => {
        return (
            <div>
                {type === 'fontSize' && (
                    <input
                        type="text"
                        onChange={(event) => {
                            this.setState({ fontSize: event.target.value + 'px' });
                            this.changeColor(type);
                        }}
                    />
                )}
                {type === 'color' && (
                    <input
                        type="color"
                        onChange={(event) => {
                            this.setState({
                                [type === 'color' ? 'textColor' : 'bgColor']: event.target.value
                            });
                            this.changeColor(type);
                        }}
                    />
                )}
                {type === 'bgColor' && (
                    <input
                        type="color"
                        onChange={(event) => {
                            this.setState({
                                [type === 'color' ? 'textColor' : 'bgColor']: event.target.value
                            });
                            this.changeColor(type);
                        }}
                    />
                )}
            </div>
        );
    };

    changeColor = (type) => {
        const tagDiv = this.testElementRef.current;
        const { textColor, bgColor } = this.state;
        const newColor = type === 'color' ? textColor : bgColor;

        if (type === 'color') {
            tagDiv.style.color = newColor;
        } else {
            tagDiv.style.backgroundColor = newColor;
        }
    };

    render() {
        return (
            <div>
                <p>React Demo</p>
                <input
                    type="button"
                    value="switch Color Text"
                    onClick={() => this.switchInteraction('color')}
                />
                <input
                    type="button"
                    value="switch Color background"
                    onClick={() => this.switchInteraction('bgColor')}
                />
                <input
                    type="button"
                    value="switch Font Size"
                    onClick={() => this.switchInteraction('fontSize')}
                />

                <div
                    ref={this.testElementRef}
                    style={{
                        fontSize: this.state.fontSize,
                        color: this.state.textColor,
                        backgroundColor: this.state.bgColor
                    }}
                >
                    Xin chào các bạn đã đến với chúng tôi
                </div>

                <div id="tableManager">{this.state.activeButton && this.createBox(this.state.activeButton)}</div>
            </div>
        );
    }
}

export default DemoChaningForm;