import React, { Component } from 'react'
import TextMessage from './TextMessage';
import OptionMessage from './OptionMessage';
import EmojiMessage from './EmojiMessage';
// import chatIconUrl from './../../assets/chat-icon.svg';
import kinvoIconUrl from './../../assets/kinvo.svg';


class Message extends Component {

  _renderMessageOfType(type) {
    switch (type) {
      case 'text':
        return <TextMessage {...this.props.message} />
      case 'option':
        return <OptionMessage {...this.props.message} />
      case 'emoji':
        return <EmojiMessage {...this.props.message} />
    }
  }

  render() {
    let contentClassList = [
      "sc-message--content",
      (this.props.message.author === "me" ? "sent" : "received")
    ];
    return (
      <div className="sc-message">
        <div className={contentClassList.join(" ")}>
          <div className="sc-message--avatar" style={{
            backgroundImage: `url(${kinvoIconUrl})`
          }}></div>
          {this._renderMessageOfType(this.props.message.type)}
        </div>
      </div>)
  }
}

export default Message