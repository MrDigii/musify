import { FC } from 'react';

const AppLayout: FC<{ children?: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex justify-center items-center fixed top-0 left-0 w-full h-full overflow-auto bg-gradient-to-r from-cyan-500 to-blue-500">
            <main className="block p-5">{children}</main>
        </div>
    );
};

export default AppLayout;
