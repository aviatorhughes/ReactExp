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
            answerChoices: ['Cat', 'Cow', 'Dog', 'Horse'],
            passed: false,
            showResult: false
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

            
            <DisplayResult isCorrect={this.state.passed} isVisible={this.state.showResult}/>
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
            answerChoices: this.state.answerChoices,
            passed: this.state.passed,
            showResult: false
        });
    }
    validateAnswer(selectedAnswer) {
        var isCorrect = (this.state.currentImage.indexOf(selectedAnswer.toLowerCase()) != -1);
        this.setState({
            currentImage: this.state.currentImage,
            imageChoices: this.state.imageChoices,
            answerChoices: this.state.answerChoices,
            passed: isCorrect,
            showResult: true
        });
    }
}
export class DisplayResult extends React.Component {
    render() {
        return <div className="clear-fix row">
            {(this.props.isVisible) ? ((this.props.isCorrect) ?
            <div className="text-success">
                        <h1> <i className="glyphicon glyphicon-ok"/> Yay! </h1>
                    </div>
            : <div className="text-danger">
                        <h1> <i className="glyphicon glyphicon-remove"/> Oops.. Try again.. </h1>
                        </div>) : <div> </div>}
        </div>;
    }
}
ReactDOM.render(<Home foo='shiva'/>, document.getElementById('app'));
//# sourceMappingURL=home.jsx.map