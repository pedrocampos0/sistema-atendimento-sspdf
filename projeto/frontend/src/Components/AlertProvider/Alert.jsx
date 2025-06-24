import React, { useState, useCallback } from 'react';
import { Box, Alert as MuiAlert, IconButton, Slide, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AlertContext from "../Context/AlertContext";

const alertTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warning: 'warning',
};

const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const handleClose = (id) => {
        setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    };

    const addAlert = useCallback((message, options = {}) => {
        const id = Date.now() + Math.random();

        const {
            type = 'info',
            duration = 3000,
            position = 'top-center'
        } = options;

        const newAlert = {
            id,
            message,
            type: alertTypes[type] || 'info',
            position,
        };

        setAlerts((prevAlerts) => [...prevAlerts, newAlert]);

        if (duration) {
            setTimeout(() => {
                handleClose(id);
            }, duration);
        }
    }, []);

    const getPositionStyles = (position) => {
        switch (position) {
            case 'top-right':
                return { top: 24, right: 24 };
            case 'top-left':
                return { top: 24, left: 24 };
            case 'bottom-right':
                return { bottom: 24, right: 24 };
            case 'bottom-left':
                return { bottom: 24, left: 24 };
            case 'bottom-center':
                return { bottom: 24, left: '50%', transform: 'translateX(-50%)' };
            case 'top-center':
            default:
                return { top: 24, left: '50%', transform: 'translateX(-50%)' };
        }
    };

    const positions = [...new Set(alerts.map(a => a.position))];

    return (
        <AlertContext.Provider value={addAlert}>
            {children}

            {positions.map(position => (
                <Box
                    key={position}
                    sx={{
                        position: 'fixed',
                        ...getPositionStyles(position),
                        zIndex: 9999,
                        width: { xs: 'calc(100% - 32px)', sm: 'auto' },
                        minWidth: 300
                    }}
                >
                    <Stack spacing={1}>
                        {alerts
                            .filter(alert => alert.position === position)
                            .map((alert) => (
                                <Slide direction="down" in={true} mountOnEnter unmountOnExit key={alert.id}>
                                    <MuiAlert
                                        severity={alert.type}
                                        variant="filled"
                                        sx={{ boxShadow: 6, alignItems: 'center' }}
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => handleClose(alert.id)}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                    >
                                        {alert.message}
                                    </MuiAlert>
                                </Slide>
                            ))}
                    </Stack>
                </Box>
            ))}
        </AlertContext.Provider>
    );
};

export default AlertProvider;