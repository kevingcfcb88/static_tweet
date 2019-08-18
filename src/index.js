import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Tweet(){
    return(
        <div className="tweet">
            <Avatar/>
            <div className="content"> 
                <NameWithHandle/><Time/>
                <Message/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

function Avatar(){
    return (
        <img
            src="https://www.gravatar.com/avatar/nothing"
            className="avatar"
            alt="avatar"
        />
    );
}

function Message(){
    return (
        <div className="message">
            New tweet, this is just a test.
        </div>
    );
}

function NameWithHandle(){
    return(
        <span className="name-with-handle">
            <span className="name">Kevin Garay</span>
            <span className="handle">@kevin.garay</span>
        </span>
    );
}

const Time = () => (
    <span className="time">3h ago</span>
);

const ReplyButton = () => (
    <span className="fa fa-reply reply-button"></span>
);

const RetweetButton = () => (
    <span className="fa fa-retweet retweet-button"></span>
);

const LikeButton = () => (
    <span className="fa fa-heart like-button"></span>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"></i>
);

ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
);