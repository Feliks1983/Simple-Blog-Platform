// ErrorBoundary.js
import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    }

    return this.props.children;
  }
}

function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found{ErrorBoundary}</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default NotFound;
