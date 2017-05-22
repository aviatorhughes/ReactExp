// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import * as ReactDOM from 'react-dom';
if (module.hot) {
    module.hot.accept();
}
export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            imageChoices: ['/images/cat.jpg', '/images/cow.jpg', '/images/dog.jpg', '/images/horse.jpg'],
            currentImage: '/images/cat.jpg',
            answerChoices: ['Cat', 'Cow', 'Dog', 'Horse']
        };
    }
    render() {
        return <div>
            <div>
                <h1> Hello, {this.props.foo}!</h1>
            </div>
            <div>
                <div className="col-sm-5 border">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">Image</div>
                        <div className="panel-body">
                            <img src={this.state.currentImage} className="img-responsive"/>
                        </div>
                    </div>
                </div>

                
                <div className="col-sm-2">
                    <button className="btn" onClick={() => { this.refreshImage(); }}><i className="glyphicon glyphicon-refresh"/> </button>
                </div>

                <div className="col-sm-5 border-1">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">Answers</div>
                        <div className="panel-body">
                            <ul className="list-unstyled">
                                {this.state.answerChoices.map((valueText, index) => {
            return <li>
                                        <button className="btn btn-lg btn-block btn-primary" onClick={() => { this.validateAnswer(valueText); }}>
                                            {valueText}
                                        </button>
                                        &nbsp;
                                        </li>;
        })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
    refreshImage() {
        { }
        var newIndex;
        var currentIndex = this.state.imageChoices.indexOf(this.state.currentImage);
        if (currentIndex == 3) {
            newIndex = 0;
        }
        else {
            newIndex = currentIndex + 1;
        }
        var newImage = this.state.imageChoices[newIndex];
        this.setState({
            currentImage: newImage,
            imageChoices: this.state.imageChoices,
            answerChoices: this.state.answerChoices
        });
    }
    validateAnswer(selectedAnswer) {
        console.log(selectedAnswer);
    }
}
ReactDOM.render(<Home foo='shiva'/>, document.getElementById('app'));
//# sourceMappingURL=home.jsx.map