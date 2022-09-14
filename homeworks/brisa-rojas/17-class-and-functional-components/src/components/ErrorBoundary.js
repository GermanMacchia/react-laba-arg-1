import React from 'react';
import errorImg from '../error.jpg';
import AvatarTile from './AvatarTile';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.warn('Error was catched: ', error, errorInfo);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <AvatarTile avatarURL={errorImg} isLoading={false} onClick={this.props.onClick} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
