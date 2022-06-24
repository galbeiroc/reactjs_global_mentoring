import { Component } from 'react';
import { Alert } from '@mui/material';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return <Alert severity="error">Something went wrong!</Alert>
    }

    return this.props.children;
  }
}
