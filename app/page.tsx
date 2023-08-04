import React from 'react';
import AppLayout from './components/base/AppLayout';
import LoginForm from './components/blocks/LoginForm';

export default function Home() {
    return (
        <AppLayout>
            <LoginForm />
        </AppLayout>
    );
}
