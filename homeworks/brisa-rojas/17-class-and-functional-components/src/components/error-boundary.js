import React from 'react';
import errorImg from '../error.jpg';
import AvatarTile from './avatar-tile';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }


  render() {
    if (this.state.hasError) {
      return (
        <AvatarTile avatarURL={errorImg} isLoading={false} onClick={this.props.onClick} />
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;