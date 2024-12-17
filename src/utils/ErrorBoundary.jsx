import React, { Component } from 'react';
import { Typography, Button, Box } from '@mui/material';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error.message };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    handleRetry = () => {
        // Reset error boundary
        this.setState({ hasError: false, errorMessage: '' });
    };

    render() {
        const { hasError, errorMessage } = this.state;

        if (hasError) {
            // Fallback UI when an error occurs
            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        textAlign: 'center',
                        padding: '20px',
                    }}
                >
                    <Typography variant="h4" color="error" gutterBottom>
                        Something went wrong!
                    </Typography>
                    {errorMessage && (
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            Error: {errorMessage}
                        </Typography>
                    )}
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                        Please try again or contact support if the issue persists.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleRetry}
                        sx={{ marginTop: '20px', textTransform: 'none' }}
                    >
                        Retry
                    </Button>
                </Box>
            );
        }

        // Render children if no error
        return this.props.children;
    }
}

export default ErrorBoundary;
