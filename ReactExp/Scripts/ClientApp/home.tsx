// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from 'react-dom';
declare var module: any;

if (module.hot) {
    module.hot.accept();
}

interface ComponentProps {
    foo: string;
}

interface ComponentState {
    imageChoices: string[];
    currentImage: string;
    answerChoices: string[];
    passed: boolean;
}

export class Home extends React.Component<ComponentProps, ComponentState>{
    constructor() {
        super();
        this.state = {
            imageChoices: ['/images/cat.jpg', '/images/cow.jpg', '/images/dog.jpg', '/images/horse.jpg'],
            currentImage: '/images/cat.jpg',
            answerChoices: ['Cat', 'Cow', 'Dog', 'Horse'],
            passed: false
        };
    }

    public render() {
        return <div>
            <div>
                <h1> Hello, {this.props.foo}!</h1>
            </div>
            <div>
                <div className="col-sm-5 border">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">Image</div>
                        <div className="panel-body">
                            <img src={this.state.currentImage} className="img-responsive" />
                        </div>
                    </div>
                </div>

                {/* refresh button */}
                <div className="col-sm-2">
                    <button className="btn" onClick={() => { this.refreshImage() }}><i className="glyphicon glyphicon-refresh" /> </button>
                </div>

                <div className="col-sm-5 border-1">
                    <div className="panel panel-default">
                        <div className="panel-heading text-center">Answers</div>
                        <div className="panel-body">
                            <ul className="list-unstyled">
                                {this.state.answerChoices.map((valueText, index) => {
                                    return <li >
                                        <button className="btn btn-lg btn-block btn-primary" onClick={() => { this.validateAnswer(valueText) }}>
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

            {/* Result */}
            <DisplayResult isCorrect={this.state.passed} />
        </div>;
    }

    private refreshImage(): void {

        {/* change the image on left side */ }
        var newIndex: number;
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
            passed: this.state.passed
        });
    }

    private validateAnswer(selectedAnswer: string): void {
        var isCorrect = (this.state.currentImage.indexOf(selectedAnswer.toLowerCase()) != -1);
        this.setState({
            currentImage: this.state.currentImage,
            imageChoices: this.state.imageChoices,
            answerChoices: this.state.answerChoices,
            passed: isCorrect
        });
    }
}

interface DisplayResultProps {
    isCorrect: boolean;
}

export class DisplayResult extends React.Component<DisplayResultProps, any>{
    public render() {
        return <div className="clear-fix row">
            {
                (this.props.isCorrect) ?
                    <div className="text-success jumbotron">
                        <h1> <i className="glyphicon glyphicon-ok" /> Yay! </h1>
                    </div>
                    : <div className="text-danger">
                        <h1> <i className="glyphicon glyphicon-ok" /> Oops.. Try again.. </h1>
                    </div>
            }
        </div>
    }
}

ReactDOM.render(
    <Home foo='shiva' />, document.getElementById('app')
);

