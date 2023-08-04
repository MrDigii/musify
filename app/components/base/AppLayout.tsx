import { FC } from 'react';

const AppLayout: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return <div>{children}</div>;
};

export default AppLayout;
